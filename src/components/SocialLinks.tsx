import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

type SocialItem = {
  href: string;
  label: string;
  icon: 'github' | 'twitter' | 'linkedin';
};

const icons = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
} as const;

type Props = {
  links: readonly SocialItem[];
  size?: number;
  variant?: 'hero' | 'footer';
  className?: string;
};

export function SocialLinks({ links, size = 28, variant = 'hero', className = '' }: Props) {
  const isFooter = variant === 'footer';

  return (
    <div className={`flex flex-wrap justify-center gap-2.5 ${className}`}>
      {links.map(({ href, label, icon }) => {
        const Icon = icons[icon];
        return (
          <a
            key={href}
            href={href}
            className={
              isFooter
                ? 'flex h-11 w-11 items-center justify-center rounded-xl border border-cream/25 bg-cream/15 text-cream shadow-[0_4px_16px_rgba(0,0,0,0.2),0_1px_2px_rgba(0,0,0,0.12)] backdrop-blur-md transition duration-300 hover:border-cream/40 hover:bg-cream/25 hover:shadow-[0_8px_24px_rgba(0,0,0,0.28)] hover:-translate-y-0.5'
                : 'flex h-11 w-11 items-center justify-center rounded-xl border border-white/40 bg-white/35 text-ink shadow-btn backdrop-blur-md transition duration-300 hover:border-white/55 hover:bg-white/50 hover:shadow-btn-hover hover:-translate-y-0.5'
            }
            aria-label={label}
          >
            <Icon size={size} strokeWidth={1.75} />
          </a>
        );
      })}
    </div>
  );
}

export function EmailIconLink({ size = 28 }: { size?: number }) {
  return (
    <a
      href="mailto:stevan.bogosavljevic@gmail.com"
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/40 bg-white/35 text-ink shadow-btn backdrop-blur-md transition duration-300 hover:border-white/55 hover:bg-white/50 hover:shadow-btn-hover hover:-translate-y-0.5"
      aria-label="Email"
    >
      <Mail size={size} strokeWidth={1.75} />
    </a>
  );
}
