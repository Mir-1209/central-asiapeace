import Button from "./Button";
import Reveal from "./Reveal";
import { site } from "@/lib/content";

/** Closing call-to-action shown at the bottom of most pages. */
export default function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-band__inner">
        <Reveal>
          <p className="eyebrow eyebrow--ink">
            <span className="eyebrow__dot" aria-hidden="true" />
            Applications due {site.applicationDeadline}
          </p>
          <h2 id="cta-title" className="cta-band__title">
            Be the generation <br />
            that <em>builds</em> peace.
          </h2>
        </Reveal>
        <Reveal delay={120} className="cta-band__actions">
          <Button href={site.applicationUrl} external variant="ink">
            Start your application
          </Button>
          <Button href="/apply" variant="ghost">
            Check eligibility
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
