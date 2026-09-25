import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind the Central Asia Peace Scholars Program — our founder and country coordinators from Kazakhstan, Kyrgyzstan, and Tajikistan.",
  alternates: { canonical: "/about" },
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .replace(/[^A-Za-zА-Яа-яЁё]/g, "")
    .slice(0, 2)
    .toUpperCase();
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="The people behind"
        outline="the program."
        lead="We are a team of young people from across Central Asia who believe peace is something you learn, practice, and build — together."
      />

      <section className="section" aria-labelledby="mission-title">
        <div className="container split">
          <div className="split__aside">
            <div className="section-label">
              <span className="section-label__num">01</span>
              <h2 id="mission-title">Our mission</h2>
            </div>
          </div>
          <Reveal>
            <p className="statement">
              To give young people in <mark>Kazakhstan</mark>, <mark>Kyrgyzstan</mark>, and <mark>Tajikistan</mark> the
              knowledge, skills, and community they need to understand conflict — and to advocate for{" "}
              <strong>sustainable peace</strong> in their home countries.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section team" aria-labelledby="team-title">
        <div className="container">
          <div className="section-head">
            <div className="section-label section-label--light">
              <span className="section-label__num">02</span>
              <span>Our team</span>
            </div>
            <Reveal>
              <h2 id="team-title" className="h-xl">
                Meet the <span className="outline outline--light">coordinators</span>
              </h2>
            </Reveal>
          </div>

          <ul className="team__list">
            {team.map((m, i) => (
              <Reveal as="li" key={`${m.name}-${i}`} delay={(i % 2) * 120} className="member">
                <div className="member__photo">
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={`Portrait of ${m.name}`}
                      fill
                      sizes="(max-width: 700px) 90vw, 280px"
                    />
                  ) : (
                    <span className="member__initials" aria-hidden="true">
                      {initials(m.name)}
                    </span>
                  )}
                  <span className="member__index" aria-hidden="true">
                    0{i + 1}
                  </span>
                </div>
                <div className="member__body">
                  <p className="member__country">{m.country}</p>
                  <h3 className="member__name">{m.name}</h3>
                  <p className="member__role">{m.role}</p>
                  <p className="member__bio">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
