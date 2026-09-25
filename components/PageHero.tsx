import Reveal from "./Reveal";

/** Big, type-driven page header used on inner pages. */
export default function PageHero({
  eyebrow,
  title,
  outline,
  lead,
  tone = "blue",
  children,
}: {
  eyebrow: string;
  title: string;
  outline?: string;
  lead?: string;
  tone?: "blue" | "ink" | "paper";
  children?: React.ReactNode;
}) {
  return (
    <header className={`page-hero page-hero--${tone}`}>
      <div className="container">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display">
            {title}
            {outline && (
              <>
                {" "}
                <span className="outline">{outline}</span>
              </>
            )}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={160}>
            <p className="page-hero__lead">{lead}</p>
          </Reveal>
        )}
        {children && <Reveal delay={220}>{children}</Reveal>}
      </div>
      <div className="page-hero__glow" aria-hidden="true" />
    </header>
  );
}
