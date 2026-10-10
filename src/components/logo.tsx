export function LogoGlyph({
  className = "h-7 w-7",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 18.5H11.5V5.5H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="5" cy="5.5" r="2.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="5" cy="18.5" r="2.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="19" cy="5.5" r="2.1" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoGlyph className="h-6 w-6" />
      <span className="text-xl font-extrabold tracking-tight leading-none">
        AzzFlow
      </span>
    </span>
  );
}
