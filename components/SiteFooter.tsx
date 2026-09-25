import Image from "next/image";
import Link from "next/link";
import { nav, peaceWords, site } from "@/lib/content";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Image
              src="/brand/logo-banner-blue.png"
              alt={site.fullName}
              width={1860}
              height={396}
              className="site-footer__logo"
              sizes="(max-width: 700px) 90vw, 420px"
            />
            <p>{site.description}</p>
          </div>

          <nav className="site-footer__nav" aria-label="Footer">
            <p className="site-footer__heading">Explore</p>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__contact">
            <p className="site-footer__heading">Say hello</p>
            <a href={`mailto:${site.email}`} className="site-footer__email">
              {site.email}
            </a>
            <a className="site-footer__apply" href={site.applicationUrl} target="_blank" rel="noopener noreferrer">
              Application form ↗<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <p className="site-footer__giant" aria-hidden="true">
          {peaceWords.map((p) => p.word).join(" · ")}
        </p>

        <div className="site-footer__bottom">
          <p>
            © {year} {site.fullName}
          </p>
          <p>Kazakhstan · Kyrgyzstan · Tajikistan</p>
        </div>
      </div>
    </footer>
  );
}
