import { Star } from "./Icons";

/** Infinite horizontal ticker. Content is duplicated for a seamless loop. */
export default function Marquee({
  items,
  variant = "ink",
  reverse = false,
}: {
  items: { word: string; lang?: string }[];
  variant?: "ink" | "sun" | "blue";
  reverse?: boolean;
}) {
  const row = (hidden: boolean) => (
    <ul className="marquee__row" aria-hidden={hidden || undefined}>
      {items.map((it, i) => (
        <li key={i} lang={langCode(it.lang)}>
          <span className="marquee__word">{it.word}</span>
          {it.lang && <span className="marquee__lang">{it.lang}</span>}
          <Star className="marquee__star" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`marquee marquee--${variant} ${reverse ? "marquee--reverse" : ""}`}>
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

function langCode(lang?: string) {
  switch (lang) {
    case "Russian":
      return "ru";
    case "Kazakh":
      return "kk";
    case "Kyrgyz":
      return "ky";
    case "Tajik":
      return "tg";
    default:
      return undefined;
  }
}
