import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import { ArrowRightIcon } from '@/components/icons';
import { marketplaces } from '@/data/whereToBuy';

export default function WhereToBuy() {
  return (
    <section className="bg-paper py-24">
      <Container className="flex flex-col gap-10">
        <RevealOnScroll>
          <SectionHeading eyebrow="Marketplaces" title="Compre também em" align="center" />
        </RevealOnScroll>

        <RevealOnScroll delayMs={80}>
          <div className="mx-auto flex max-w-2xl flex-col gap-4 sm:flex-row">
            {marketplaces.map((store) => (
              <a
                key={store.name}
                href={store.href}
                title={
                  store.available
                    ? `Comprar na ${store.name}`
                    : `Link da ${store.name} em breve`
                }
                className="focus-ring group flex flex-1 items-center justify-between gap-3 rounded-2xl border border-ink/8 bg-paper-off px-6 py-5 transition-colors hover:border-lilac-deep/40"
              >
                <span className="font-display text-base font-semibold text-ink">
                  {store.name}
                </span>
                <ArrowRightIcon className="h-4 w-4 text-ink/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-lilac-deep" />
              </a>
            ))}
          </div>
        </RevealOnScroll>

        <p className="mx-auto max-w-lg text-center text-xs text-ink/40">
          * Links oficiais das lojas serão adicionados assim que os canais
          estiverem publicados.
        </p>
      </Container>
    </section>
  );
}
