import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue text-white hover:bg-navy shadow-lg shadow-blue/20 hover:shadow-navy/20",
  secondary:
    "bg-lime text-navy hover:bg-leaf hover:text-white shadow-lg shadow-lime/20",
  outline:
    "bg-white/10 text-white border border-white/70 hover:bg-white hover:text-navy backdrop-blur-sm",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const isAnchor = href.startsWith("#");
  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:");

  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${variantStyles[variant]} ${className}`;

  if (isAnchor || isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
