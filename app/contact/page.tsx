import type { Metadata } from "next";
import Button from "@/components/Button";
import CopyEmail from "@/components/CopyEmail";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { peaceWords, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with the Central Asia Peace Scholars team at ${site.email}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const [user, domain] = site.email.split("@");
  return (
    <>
      <section className="contact" aria-labelledby="contact-title">
        <div className="container">
          <Reveal>
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Contact us
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 id="contact-title" className="display">
              Let&apos;s <span className="outline">talk.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="page-hero__lead">
              Questions about the program, the application, or partnering with us? We&apos;d love to hear from you. You
              can reach us by email:
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a className="contact__email" href={`mailto:${site.email}`}>
              <span>{user}</span>
              <wbr />
              <span className="contact__at">@{domain}</span>
            </a>
          </Reveal>
          <Reveal delay={300} className="btn-row">
            <Button href={`mailto:${site.email}`}>Send us an email</Button>
            <CopyEmail email={site.email} />
          </Reveal>
        </div>
      </section>
      <Marquee items={peaceWords} variant="sun" reverse />
    </>
  );
}
