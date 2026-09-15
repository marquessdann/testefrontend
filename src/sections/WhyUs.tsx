import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import { differentials } from '@/data/differentials';

export default function WhyUs() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container className="flex flex-col gap-14">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Diferenciais"
            title="Por que a Della"
            tone="dark"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {differentials.map((item, index) => (
            <RevealOnScroll key={item.number} delayMs={index * 60}>
              <div className="group flex flex-col gap-3 border-t border-white/10 pt-6 transition-colors hover:border-lilac/50">
                <span className="font-display bg-brand-gradient bg-clip-text text-4xl font-bold text-transparent">
                  {item.number}
                </span>
                <h3 className="font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
