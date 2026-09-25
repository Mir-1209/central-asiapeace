import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "./Icons";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "sun" | "ink" | "ghost" | "light";
  external?: boolean;
  className?: string;
};

/** Pill button. External links open in a new tab with safe rel attributes. */
export default function Button({ href, children, variant = "sun", external, className = "" }: Props) {
  const cls = `btn btn--${variant} ${className}`.trim();
  const inner = (
    <>
      <span className="btn__label">{children}</span>
      <span className="btn__icon">{external ? <ArrowUpRight /> : <ArrowRight />}</span>
    </>
  );

  if (external || href.startsWith("mailto:")) {
    return (
      <a
        className={cls}
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {inner}
    </Link>
  );
}
