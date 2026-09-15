import Container from '@/components/Container';
import RevealOnScroll from '@/components/RevealOnScroll';
import { categories } from '@/data/categories';

export default function ImpactBanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-brand-gradient-soft"
      />
      <Container className="relative flex flex-col gap-10">
        <RevealOnScroll>
          <p className="font-display max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Variedade para{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              todos os momentos.
            </span>
          </p>
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
          <ul className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <li key={category.slug}>
                <a
                  href="#categorias"
                  className="focus-ring inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:border-lilac/50 hover:text-white"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
