import Container from '@/components/Container';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function ImpactBanner() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <Container>
        <RevealOnScroll>
          <p className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            <span className="text-lilac">Variedade</span> para todos os momentos.
          </p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
