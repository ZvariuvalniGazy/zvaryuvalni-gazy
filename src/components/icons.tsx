type IconProps = { className?: string };

const base = { viewBox: "0 0 24 24", "aria-hidden": true } as const;

export const LogoIcon = ({ className }: IconProps) => (
  <svg {...base} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="10" y="14" width="16" height="23" rx="6" />
    <path d="M15 14v-3h6v3M18 11V8M10 23h16" />
    <path d="M31 4c0 3-4 4-4 8a4 4 0 0 0 8 0c0-2.500-1.500-3.500-2.500-5-.5 1-1 1.500-1.500 1.500z" />
  </svg>
);

export const GasIcon = ({ className }: IconProps) => (
  <svg {...base} fill="currentColor" className={className}>
    <path d="M10 2h4v2h-1v2.2c2.3.5 4 2.5 4 4.8v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9c0-2.3 1.7-4.3 4-4.8V4h-1V2z" />
  </svg>
);

export const TorchIcon = ({ className }: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 19l9-9M13 4l7 7M15 3l-3 3 6 6 3-3M4 20l2-2" />
  </svg>
);

export const WrenchIcon = ({ className }: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5L3 17.6 6.4 21l6.3-6.3a4 4 0 0 0 5-5.4L15 12l-3-3 2.7-2.7z" />
  </svg>
);

export const PhoneIcon = ({ className }: IconProps) => (
  <svg {...base} fill="currentColor" className={className}>
    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
  </svg>
);

export const TelegramIcon = ({ className }: IconProps) => (
  <svg {...base} fill="currentColor" className={className}>
    <path d="M21.5 3.5L2.8 10.7c-.8.3-.8 1.2 0 1.4l4.6 1.5 1.8 5.6c.2.6.9.8 1.4.4l2.6-2.2 4.8 3.5c.6.4 1.3.1 1.5-.6l3.200-15.300c.2-.8-.5-1.400-1.200-1.100zM9.500 14l8.500-5.300-6.600 6.300-.3 3.100L9.500 14z" />
  </svg>
);

export const PinIcon = ({ className }: IconProps) => (
  <svg {...base} fill="currentColor" className={className}>
    <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.500 7 12 7 12zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
  </svg>
);

export const ShieldIcon = ({ className }: IconProps) => (
  <svg {...base} fill="currentColor" className={className}>
    <path d="M12 2l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5l8-3z" />
    <path d="M8 12l3 3 5-6" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CheckCircleIcon = ({ className }: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CrossCircleIcon = ({ className }: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 9l6 6M15 9l-6 6" strokeLinecap="round" />
  </svg>
);

export const ArrowIcon = ({ className }: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const UserIcon = ({ className }: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.400 3.600-7 8-7s8 2.600 8 7" />
  </svg>
);

export const ClockIcon = ({ className }: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const MailIcon = ({ className }: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);
