import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import { marketplaces } from '@/data/whereToBuy';

export default function WhereToBuy() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <Container className="flex flex-col items-center gap-8">
        <RevealOnScroll>
          <SectionHeading eyebrow="Marketplaces" title="Compre também em" align="center" />
        </RevealOnScroll>

        <RevealOnScroll delayMs={60}>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {marketplaces.map((store, index) => (
              <span key={store.name} className="flex items-center gap-x-10">
                <a
                  href={store.href}
                  title={
                    store.available
                      ? `Comprar na ${store.name}`
                      : `Link da ${store.name} em breve`
                  }
                  className="focus-ring text-sm font-medium text-ink transition-colors hover:text-lilac-deep"
                >
                  {store.name}
                </a>
                {index < marketplaces.length - 1 && (
                  <span aria-hidden className="h-4 w-px bg-line" />
                )}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        <p className="text-center text-xs text-ink/35">
          * Links oficiais das lojas serão adicionados assim que os canais
          estiverem publicados.
        </p>
      </Container>
    </section>
  );
}
