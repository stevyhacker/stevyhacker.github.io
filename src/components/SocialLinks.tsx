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
  className?: string;
};

export function SocialLinks({ links, size = 18, className = '' }: Props) {
  return (
    <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {links.map(({ href, label, icon }) => {
        const Icon = icons[icon];
        return (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 items-center gap-2 rounded-lg border border-paper-hairline bg-paper px-3 font-mono text-[0.74rem] font-medium tracking-tight text-ink-muted transition-all duration-200 hover:border-ink/30 hover:text-ink"
            aria-label={label}
          >
            <Icon size={size} strokeWidth={1.75} />
            <span className="hidden sm:inline">{label}</span>
          </a>
        );
      })}
    </div>
  );
}

export function EmailIconLink({ size = 18 }: { size?: number }) {
  return (
    <a
      href="mailto:stevan.bogosavljevic@gmail.com"
      className="flex h-9 items-center gap-2 rounded-lg border border-paper-hairline bg-paper px-3 font-mono text-[0.74rem] font-medium tracking-tight text-ink-muted transition-all duration-200 hover:border-ink/30 hover:text-ink"
      aria-label="Email"
    >
      <Mail size={size} strokeWidth={1.75} />
      <span className="hidden sm:inline">Email</span>
    </a>
  );
}
