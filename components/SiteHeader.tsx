"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/content";
import { ArrowUpRight } from "./Icons";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the menu whenever the route changes.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="site-header__bar">
        <Link href="/" className="brand" aria-label={`${site.fullName} — home`}>
          <span className="brand__mark">
            <Image src="/brand/emblem-white.png" alt="" width={80} height={80} priority />
          </span>
          <span className="brand__text">
            <strong>Central Asia</strong>
            <span>Peace Scholars</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Main">
          <ul>
            {nav.slice(1, 4).map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" aria-current={isActive("/contact") ? "page" : undefined}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <a className="site-header__cta" href={site.applicationUrl} target="_blank" rel="noopener noreferrer">
          Apply now <ArrowUpRight />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="menu-toggle__lines" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          <ol>
            {nav.map((item, i) => (
              <li key={item.href} style={{ "--i": i } as React.CSSProperties}>
                <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                  <span className="mobile-menu__num">0{i + 1}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <a className="btn btn--sun" href={site.applicationUrl} target="_blank" rel="noopener noreferrer">
          <span className="btn__label">Apply now</span>
          <span className="btn__icon">
            <ArrowUpRight />
          </span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </header>
  );
}
