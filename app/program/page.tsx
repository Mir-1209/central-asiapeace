import type { Metadata } from "next";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Check } from "@/components/Icons";
import { program, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Program Overview",
  description:
    "Everything about the 2026 Central Asia Peace Scholars Program: dates, format, curriculum, and what participants gain.",
  alternates: { canonical: "/program" },
};

export default function ProgramPage() {
  return (
    <>
      <PageHero eyebrow="Program overview · 2026" title="Four months." outline="A lifetime of impact." lead={program.summary} tone="ink" />

      <section className="section section--tight" aria-labelledby="glance-title">
        <div className="container">
          <h2 id="glance-title" className="sr-only">
            At a glance
          </h2>
          <dl className="glance">
            {program.glance.map((g, i) => (
              <Reveal key={g.label} delay={i * 70} className="glance__item">
                <dt>{g.label}</dt>
                <dd>{g.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="journey-title">
        <div className="container journey">
          <div className="journey__aside">
            <div className="section-label">
              <span className="section-label__num">01</span>
              <span>The journey</span>
            </div>
            <h2 id="journey-title" className="h-lg">
              From understanding conflict to <em className="marker">leading</em> peace.
            </h2>
            <p className="muted">Lectures, guest speaker presentations, and collaborative projects — every week.</p>
          </div>
          <ol className="journey__list">
            {program.phases.map((p, i) => (
              <Reveal as="li" key={p.title} className="phase" delay={60}>
                <div className="phase__head">
                  <span className="phase__month">{p.month}</span>
                  <span className="phase__dot" aria-hidden="true" />
                </div>
                <h3 className="phase__title">{p.title}</h3>
                <p className="phase__text">{p.text}</p>
                <ul className="tags" aria-label={`Topics in ${p.title}`}>
                  {p.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <span className="phase__bg-num" aria-hidden="true">
                  {i + 1}
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section outcomes" aria-labelledby="outcomes-title">
        <div className="container split">
          <div className="split__aside">
            <div className="section-label section-label--light">
              <span className="section-label__num">02</span>
              <span>What you leave with</span>
            </div>
            <Reveal>
              <h2 id="outcomes-title" className="h-lg">
                Knowledge. Skills. <span className="outline outline--light">Community.</span>
              </h2>
            </Reveal>
          </div>
          <ul className="checklist checklist--light">
            {program.outcomes.map((o, i) => (
              <Reveal as="li" key={o} delay={i * 80}>
                <span className="checklist__icon">
                  <Check />
                </span>
                {o}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="schedule-title">
        <div className="container">
          <Reveal className="schedule">
            <div>
              <p className="eyebrow eyebrow--blue">
                <span className="eyebrow__dot" aria-hidden="true" />
                {site.programDates}
              </p>
              <h2 id="schedule-title" className="h-lg">
                {program.schedule.title}
              </h2>
              <p className="schedule__note">{program.schedule.note}</p>
            </div>
            <div className="schedule__badge" aria-hidden="true">
              <span>TBA</span>
            </div>
          </Reveal>
          <div className="btn-row btn-row--center">
            <Button href="/apply" variant="ink">
              How to apply
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
