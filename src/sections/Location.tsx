import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import { MapPinIcon, ArrowRightIcon } from '@/components/icons';
import { address, fullAddress, googleMapsUrl } from '@/data/contact';

export default function Location() {
  return (
    <section id="localizacao" className="bg-paper py-24">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <RevealOnScroll>
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Localização" title="Venha nos visitar" />

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group flex items-start gap-3 rounded-2xl border border-ink/8 bg-paper-off p-5 transition-colors hover:border-lilac-deep/40"
              aria-label={`Abrir ${fullAddress} no Google Maps`}
            >
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-lilac-deep" />
              <span className="text-sm leading-relaxed text-ink/70">
                {address.line1}
                <br />
                {address.line2}
                <br />
                {address.cep}
              </span>
            </a>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group inline-flex w-fit items-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
            >
              Ver no Google Maps
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </RevealOnScroll>

        {/*
          Substitua pelo embed real do Google Maps (iframe) quando desejar
          exibir o mapa incorporado. Mantido como composição visual por ora
          para não depender de chave de API.
        */}
        <RevealOnScroll delayMs={100}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-ink/8 bg-paper-off shadow-card">
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgba(5,7,13,0.15) 1px, transparent 0)',
                backgroundSize: '18px 18px',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <MapPinIcon className="h-8 w-8 text-lilac-deep" />
                <span className="text-sm font-medium text-ink/50">Curitiba - PR</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
