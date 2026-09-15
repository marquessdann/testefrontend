import Container from '@/components/Container';
import RevealOnScroll from '@/components/RevealOnScroll';
import { ArrowRightIcon } from '@/components/icons';

export default function About() {
  return (
    <section id="sobre" className="bg-lilac-light py-20 md:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll>
          <div className="flex flex-col gap-5">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-purple-deep">
              Sobre a Della
            </span>
            <h2 className="max-w-md font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Encontre o que combina com você.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-ink/60">
              A Della é uma distribuidora e vitrine de produtos profissionais para
              beleza e estética. Reunimos categorias essenciais em um único
              catálogo, com curadoria de qualidade para quem vive da aplicação
              no dia a dia.
            </p>
            <a
              href="#produtos"
              className="focus-ring group mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-purple-deep"
            >
              Ver catálogo completo
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </RevealOnScroll>

        {/*
          Placeholder da composição institucional.
          Substitua por <Image src="/images/sobre-della.jpg" .../> quando disponível.
        */}
        <RevealOnScroll delayMs={80}>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[10px] border border-line bg-paper">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-sm font-medium text-ink/30">
                Composição institucional Della
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
