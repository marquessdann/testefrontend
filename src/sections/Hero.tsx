import Container from '@/components/Container';
import { ArrowRightIcon } from '@/components/icons';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-ink pb-24 pt-40 text-white md:pb-32 md:pt-48"
    >
      {/* Glow decorativo sutil — puramente estético, sem impacto em SEO/acessibilidade */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-lilac-deep/30 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-[420px] w-[420px] rounded-full bg-azure-deep/25 blur-[110px]"
      />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal is-visible flex flex-col items-start gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-lilac">
            Distribuidora de Produtos
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Tudo o que você procura,{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              em um só lugar.
            </span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            Um catálogo completo pensado para profissionais da beleza descobrirem
            produtos selecionados, com curadoria, qualidade e agilidade — do
            estúdio ao home care.
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <a
              href="#produtos"
              className="focus-ring group inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
            >
              Conheça nossos produtos
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#sobre"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/85 transition-colors hover:border-white/30 hover:text-white"
            >
              Conhecer a Della
            </a>
          </div>
        </div>

        {/*
          Placeholder da composição visual de produtos.
          Substitua o bloco abaixo por <Image src="/images/hero-produtos.png" .../>
          com a fotografia real assim que estiver disponível.
        */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] shadow-card-dark" />
          <div className="absolute inset-6 flex flex-col justify-between rounded-[24px] bg-ink-soft/80 p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Catálogo Della
              </span>
              <span className="h-2 w-2 rounded-full bg-lilac" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['Cílios', 'Adesivos', 'Lifting', 'Home Care'].map((label) => (
                <div
                  key={label}
                  className="flex aspect-square flex-col justify-end rounded-2xl border border-white/10 bg-white/[0.04] p-3"
                >
                  <span className="text-xs font-medium text-white/70">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
