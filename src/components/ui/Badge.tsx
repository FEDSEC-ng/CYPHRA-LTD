"use client";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "purple" | "pink" | "dark";
  className?: string;
}

export default function Badge({
  children,
  variant = "purple",
  className = "",
}: BadgeProps) {
  const variants = {
    purple: "bg-fedsec-purple/10 text-fedsec-purple",
    pink: "bg-fedsec-pink/10 text-fedsec-pink",
    dark: "bg-fedsec-gray-800 text-fedsec-gray-300",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider font-[family-name:var(--font-accent)] ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
