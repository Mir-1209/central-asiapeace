import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Check } from "@/components/Icons";
import { apply, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Apply",
  description: `Apply to the Central Asia Peace Scholars Program. Open to young people aged 16–24 from Kazakhstan, Kyrgyzstan, and Tajikistan. Applications are due ${site.applicationDeadline}.`,
  alternates: { canonical: "/apply" },
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow={`Applications due ${site.applicationDeadline}`}
        title="Your seat at"
        outline="the table."
        lead="Applying takes three simple steps. Check that you're eligible, fill in the online application, and submit it before the deadline."
      >
        <div className="btn-row">
          <Button href={site.applicationUrl} external>
            Open the application
          </Button>
        </div>
      </PageHero>

      <section className="section" aria-labelledby="steps-title">
        <div className="container">
          <h2 id="steps-title" className="sr-only">
            How to apply
          </h2>
          <ol className="steps">
            <Reveal as="li" className="step step--wide">
              <span className="step__num">Step 01</span>
              <h3 className="step__title">Check your eligibility</h3>
              <p className="step__lead">Participants should be:</p>
              <ul className="checklist">
                {apply.eligibility.map((e) => (
                  <li key={e}>
                    <span className="checklist__icon">
                      <Check />
                    </span>
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal as="li" delay={100} className="step step--blue">
              <span className="step__num">Step 02</span>
              <h3 className="step__title">Complete the application</h3>
              <p>The application is an online form. It opens in a new tab.</p>
              <Button href={site.applicationUrl} external variant="sun">
                Apply now
              </Button>
            </Reveal>

            <Reveal as="li" delay={200} className="step step--sun">
              <span className="step__num">Step 03</span>
              <h3 className="step__title">Submit before the deadline</h3>
              <p className="step__deadline">
                <span>Applications are due</span>
                <strong>{site.applicationDeadline}</strong>
              </p>
            </Reveal>
          </ol>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="questions-title">
        <div className="container">
          <Reveal className="questions">
            <h2 id="questions-title" className="h-md">
              Questions about the application?
            </h2>
            <p>
              Reach out to us by email at{" "}
              <a className="text-link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
