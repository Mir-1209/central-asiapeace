import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="page-hero page-hero--ink not-found">
      <div className="container">
        <p className="eyebrow">
          <span className="eyebrow__dot" aria-hidden="true" />
          Error 404
        </p>
        <h1 className="display">
          Lost your <span className="outline">way?</span>
        </h1>
        <p className="page-hero__lead">This page doesn&apos;t exist — but the path to peace does.</p>
        <div className="btn-row">
          <Button href="/">Back to home</Button>
        </div>
      </div>
    </section>
  );
}
