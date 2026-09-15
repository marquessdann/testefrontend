import Container from '@/components/Container';
import { ArrowRightIcon } from '@/components/icons';

export default function Hero() {
  return (
    <section id="inicio" className="bg-paper pb-20 pt-16 md:pb-28 md:pt-24">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
        <div className="flex flex-col items-start gap-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink/45">
            Della Distribuidora
          </span>
          <h1 className="max-w-xl font-display text-4xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Tudo o que você procura,{' '}
            <span className="text-lilac-deep">em um só lugar.</span>
          </h1>
          <p className="max-w-md text-base leading-relaxed text-ink/55">
            Um catálogo completo pensado para profissionais da beleza descobrirem
            produtos selecionados, com curadoria, qualidade e agilidade — do
            estúdio ao home care.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-8">
            <a
              href="#produtos"
              className="focus-ring group inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
            >
              Conheça nossos produtos
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#sobre"
              className="focus-ring group inline-flex items-center gap-1.5 text-sm font-medium text-ink/65 transition-colors hover:text-ink"
            >
              Conhecer a Della
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/*
          Placeholder da fotografia de produtos do hero.
          Substitua por <Image src="/images/hero-produtos.jpg" .../>
          assim que a imagem real estiver disponível.
        */}
        <div className="relative mx-auto w-full max-w-md">
          <span
            aria-hidden
            className="absolute -left-3 top-8 hidden h-16 w-px bg-lilac-deep/40 md:block"
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[10px] border border-line bg-paper-off">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-sm font-medium text-ink/30">
                Fotografia de produto
              </span>
            </div>
            <span className="absolute bottom-5 left-5 text-[10px] font-medium uppercase tracking-[0.2em] text-ink/35">
              Catálogo Della
            </span>
            <span aria-hidden className="absolute right-5 top-5 h-2 w-2 rounded-full bg-lilac-deep" />
          </div>
        </div>
      </Container>
    </section>
  );
}
