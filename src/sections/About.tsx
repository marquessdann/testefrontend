import Container from '@/components/Container';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function About() {
  return (
    <section id="sobre" className="bg-paper-off py-24">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <RevealOnScroll>
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lilac-deep">
              Sobre a Della
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Encontre o que combina com você.
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-ink/60">
              A Della é uma distribuidora e vitrine de produtos profissionais para
              beleza e estética. Reunimos categorias essenciais em um único
              catálogo, com curadoria de qualidade para quem vive da aplicação
              no dia a dia.
            </p>
            <a
              href="#produtos"
              className="focus-ring inline-flex w-fit items-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-lilac-deep/50 hover:text-lilac-deep"
            >
              Ver catálogo completo
            </a>
          </div>
        </RevealOnScroll>

        {/*
          Placeholder da composição institucional.
          Substitua por <Image src="/images/sobre-della.jpg" .../> quando disponível.
        */}
        <RevealOnScroll delayMs={100}>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[28px] border border-ink/8 bg-brand-gradient-soft shadow-card">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-sm font-medium text-ink/40">
                Composição institucional Della
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
