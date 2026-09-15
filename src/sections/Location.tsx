import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import { MapPinIcon, ArrowRightIcon } from '@/components/icons';
import { address, fullAddress, googleMapsUrl } from '@/data/contact';

export default function Location() {
  return (
    <section id="localizacao" className="bg-paper-off py-20 md:py-28">
      <Container className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
        <RevealOnScroll>
          <SectionHeading eyebrow="Localização" title="Venha nos visitar" />
        </RevealOnScroll>

        <RevealOnScroll delayMs={60}>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group flex items-start gap-3"
            aria-label={`Abrir ${fullAddress} no Google Maps`}
          >
            <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-lilac-deep" />
            <span className="flex flex-col gap-2">
              <span className="text-sm leading-relaxed text-ink/70">
                {address.line1}
                <br />
                {address.line2}
                <br />
                {address.cep}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-lilac-deep">
                Ver no Google Maps
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </span>
          </a>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
