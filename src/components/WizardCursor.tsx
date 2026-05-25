import { useEffect, useRef } from 'react';

const HOVER_TARGET_SELECTOR = '.wizard-hover, .glass-card, .btn-primary, .btn-secondary, .pill';

const TRACE_POINTS = [
  { height: 38, width: 120 },
  { height: 36, width: 112 },
  { height: 34, width: 104 },
  { height: 32, width: 96 },
  { height: 30, width: 88 },
  { height: 28, width: 80 },
  { height: 26, width: 72 },
  { height: 24, width: 65 },
  { height: 22, width: 58 },
  { height: 20, width: 52 },
  { height: 19, width: 46 },
  { height: 18, width: 40 },
  { height: 16, width: 35 },
  { height: 15, width: 30 },
  { height: 14, width: 26 },
  { height: 13, width: 22 },
] as const;

type Point = {
  x: number;
  y: number;
};

type TracePoint = Point & {
  angle: number;
  createdAt: number;
};

export function WizardCursor() {
  const trailRef = useRef<HTMLDivElement>(null);
  const motesRef = useRef<Array<HTMLSpanElement | null>>([]);
  const tracesRef = useRef<TracePoint[]>(TRACE_POINTS.map(() => ({ x: 0, y: 0, angle: 0, createdAt: -Infinity })));
  const traceIndexRef = useRef(0);
  const lastTraceRef = useRef<TracePoint>({ x: 0, y: 0, angle: 0, createdAt: -Infinity });
  const hoverTargetRef = useRef<HTMLElement | null>(null);
  const isActiveRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(pointer: fine)');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!supportsFinePointer.matches || prefersReducedMotion.matches) {
      return undefined;
    }

    const trail = trailRef.current;

    if (!trail) {
      return undefined;
    }

    const clearHoverTarget = () => {
      hoverTargetRef.current?.classList.remove('is-wizard-lit');
      hoverTargetRef.current = null;
    };

    const updateHoverTarget = (eventTarget: EventTarget | null, point: Point) => {
      const nextTarget =
        eventTarget instanceof Element
          ? eventTarget.closest<HTMLElement>(HOVER_TARGET_SELECTOR)
          : null;

      if (nextTarget !== hoverTargetRef.current) {
        hoverTargetRef.current?.classList.remove('is-wizard-lit');
        hoverTargetRef.current = nextTarget;
        nextTarget?.classList.add('is-wizard-lit');
      }

      if (!nextTarget) {
        return;
      }

      const rect = nextTarget.getBoundingClientRect();
      nextTarget.style.setProperty('--wizard-x', `${point.x - rect.left}px`);
      nextTarget.style.setProperty('--wizard-y', `${point.y - rect.top}px`);
    };

    const showCursor = (point: Point) => {
      if (isActiveRef.current) {
        return;
      }

      isActiveRef.current = true;
      tracesRef.current = TRACE_POINTS.map(() => ({ ...point, angle: 0, createdAt: -Infinity }));
      traceIndexRef.current = 0;
      lastTraceRef.current = { ...point, angle: 0, createdAt: -Infinity };
      trail.classList.add('is-visible');
    };

    const hideCursor = () => {
      isActiveRef.current = false;
      trail.classList.remove('is-visible');
      clearHoverTarget();
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== 'mouse') {
        return;
      }

      const point = { x: event.clientX, y: event.clientY };
      showCursor(point);

      const now = performance.now();
      const lastTrace = lastTraceRef.current;
      const dx = point.x - lastTrace.x;
      const dy = point.y - lastTrace.y;
      const distanceFromLastTrace = Math.hypot(dx, dy);

      if (now - lastTrace.createdAt > 24 || distanceFromLastTrace > 8) {
        const angle = distanceFromLastTrace > 0 ? Math.atan2(dy, dx) : lastTrace.angle;
        tracesRef.current[traceIndexRef.current] = { ...point, angle, createdAt: now };
        traceIndexRef.current = (traceIndexRef.current + 1) % TRACE_POINTS.length;
        lastTraceRef.current = { ...point, angle, createdAt: now };
      }

      updateHoverTarget(event.target, point);
    };

    const render = () => {
      const now = performance.now();
      const traceLifetime = 1450;

      motesRef.current.forEach((mote, index) => {
        if (!mote) {
          return;
        }

        const traceConfig = TRACE_POINTS[index];
        const trace = tracesRef.current[index];
        const age = now - trace.createdAt;
        const progress = Math.max(0, 1 - age / traceLifetime);
        const dissolve = 1 - progress;
        const scale = 0.72 + dissolve * 1.55;
        const floatX = Math.cos(trace.angle + Math.PI / 2) * dissolve * 8;
        const floatY = -dissolve * 16;

        mote.style.transform = `translate3d(${trace.x - traceConfig.width / 2}px, ${
          trace.y - traceConfig.height / 2
        }px, 0) translate(${floatX}px, ${floatY}px) rotate(${trace.angle * 0.18}rad) scale(${scale})`;
        mote.style.opacity = `${progress * 0.62}`;
      });

      rafRef.current = window.requestAnimationFrame(render);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', hideCursor);
    window.addEventListener('blur', hideCursor);
    rafRef.current = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', hideCursor);
      window.removeEventListener('blur', hideCursor);
      clearHoverTarget();

      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div ref={trailRef} className="wizard-trail" aria-hidden="true">
      {TRACE_POINTS.map((trace, index) => (
        <span
          // Static list, index is the stable identity for each fading trace point.
          key={index}
          ref={(node) => {
            motesRef.current[index] = node;
          }}
          className="wizard-trail-mote"
          style={{
            height: trace.height,
            width: trace.width,
          }}
        />
      ))}
    </div>
  );
}
