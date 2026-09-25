import Image from "next/image";

/** The program emblem wrapped in slowly rotating circular text. */
export default function EmblemBadge({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  const text = "CENTRAL ASIA • PEACE SCHOLARS PROGRAM • EST. 2026 • ";
  return (
    <div className={`emblem-badge ${className}`}>
      <svg className="emblem-badge__ring" viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <path id="ring-path" d="M100,100 m-86,0 a86,86 0 1,1 172,0 a86,86 0 1,1 -172,0" />
        </defs>
        <text>
          <textPath href="#ring-path" startOffset="0" textLength="538">
            {text}
          </textPath>
        </text>
      </svg>
      <Image
        className="emblem-badge__img"
        src="/brand/emblem-white.png"
        alt="Central Asia Peace Scholars emblem: a dove with outstretched wings beneath a crown and seven stars"
        width={800}
        height={800}
        priority={priority}
        sizes="(max-width: 800px) 60vw, 380px"
      />
    </div>
  );
}
