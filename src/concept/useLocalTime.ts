import { useEffect, useState } from 'react';

function read(timeZone: string) {
  const now = new Date();
  const time = new Intl.DateTimeFormat('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
  }).format(now);
  const zone =
    new Intl.DateTimeFormat('en-GB', { timeZone, timeZoneName: 'short' })
      .formatToParts(now)
      .find((part) => part.type === 'timeZoneName')?.value ?? '';
  return { time, zone };
}

/** Wall-clock time in `timeZone`, refreshed every 15 seconds. */
export function useLocalTime(timeZone: string) {
  const [value, setValue] = useState(() => read(timeZone));

  useEffect(() => {
    const id = window.setInterval(() => setValue(read(timeZone)), 15_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return value;
}
