import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import EmblemBadge from "@/components/EmblemBadge";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import ScrollText from "@/components/ScrollText";
import { countries, home, peaceWords, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid-lines" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              2026 Cohort · {site.programDates}
            </p>
            <h1 id="hero-title" className="hero__title">
              <span className="hero__line">Young voices</span>
              <span className="hero__line">
                <span className="outline">building</span>
              </span>
              <span className="hero__line">
                lasting <span className="hero__sun">peace.</span>
              </span>
            </h1>
            <p className="hero__lead">
              A 4-month peace education, conflict resolution &amp; human rights program for young people aged 16–24
              from <strong>Kazakhstan</strong>, <strong>Kyrgyzstan</strong> &amp; <strong>Tajikistan</strong>.
            </p>
            <div className="btn-row">
              <Button href={site.applicationUrl} external>
                Apply now
              </Button>
              <Button href="/program" variant="light">
                Explore the program
              </Button>
            </div>
          </div>

          <div className="hero__art">
            <EmblemBadge priority />
            <div className="hero__chip hero__chip--a">Ages 16–24</div>
            <div className="hero__chip hero__chip--b">3 countries · 1 community</div>
          </div>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <span>Scroll</span>
        </div>
      </section>

      <Marquee items={peaceWords} variant="sun" />

      {/* ───────── MANIFESTO ───────── */}
      <section className="section manifesto" aria-labelledby="about-program">
        <div className="container">
          <div className="section-label">
            <span className="section-label__num">01</span>
            <h2 id="about-program">The program</h2>
          </div>
          <ScrollText
            text={home.intro}
            highlight={["peace", "conflict", "resolution", "human", "rights", "young", "sustainable", "empowered", "community"]}
          />
        </div>
      </section>

      {/* ───────── STATS BENTO ───────── */}
      <section className="section section--tight" aria-label="Program at a glance">
        <div className="container">
          <ul className="bento">
            {home.stats.map((s, i) => (
              <Reveal as="li" key={s.unit} delay={i * 90} className={`bento__cell bento__cell--${i + 1}`}>
                <p className="bento__value">{s.value}</p>
                <p className="bento__unit">{s.unit}</p>
                <p className="bento__label">{s.label}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── PILLARS ───────── */}
      <section className="section pillars" aria-labelledby="pillars-title">
        <div className="container">
          <div className="section-head">
            <div className="section-label section-label--light">
              <span className="section-label__num">02</span>
              <span>What you&apos;ll explore</span>
            </div>
            <Reveal>
              <h2 id="pillars-title" className="h-xl">
                Understand conflict. <span className="outline outline--light">Imagine</span> peace.
              </h2>
            </Reveal>
          </div>
          <ol className="pillars__list">
            {home.pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 120} className="pillar">
                <span className="pillar__num" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3 className="pillar__title">{p.title}</h3>
                <p className="pillar__text">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── FORMAT ───────── */}
      <section className="section" aria-labelledby="format-title">
        <div className="container split">
          <div className="split__aside">
            <div className="section-label">
              <span className="section-label__num">03</span>
              <span>How you&apos;ll learn</span>
            </div>
            <Reveal>
              <h2 id="format-title" className="h-lg">
                Learn from experts. <br />
                Build with peers.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Button href="/program" variant="ink">
                See the full program
              </Button>
            </Reveal>
          </div>
          <ul className="format-list">
            {home.formats.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 100} className="format-item">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── COUNTRIES ───────── */}
      <section className="section countries" aria-labelledby="countries-title">
        <div className="container">
          <div className="section-label">
            <span className="section-label__num">04</span>
            <h2 id="countries-title">Three countries. One community.</h2>
          </div>
          <ul className="countries__list">
            {countries.map((c, i) => (
              <Reveal as="li" key={c.name} delay={i * 100} className={`country country--${c.accent}`}>
                <span className="country__name">{c.name}</span>
                <span className="country__peace" lang={c.name === "Kazakhstan" ? "kk" : c.name === "Kyrgyzstan" ? "ky" : "tg"}>
                  {c.peace}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
