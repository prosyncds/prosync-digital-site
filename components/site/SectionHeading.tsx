type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] tracking-[0.14em] text-zinc-300 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-zinc-300 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
