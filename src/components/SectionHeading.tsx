type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
  align = 'left',
}: SectionHeadingProps) {
  const isDark = tone === 'dark';
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            isDark ? 'text-lilac' : 'text-lilac-deep'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
          isDark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed ${isDark ? 'text-white/70' : 'text-ink/60'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
