import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import { StarIcon } from '@/components/icons';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="bg-paper-off py-24">
      <Container className="flex flex-col gap-14">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Depoimentos"
            title="O que dizem nossos clientes"
            align="center"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll key={testimonial.name} delayMs={index * 60}>
              <figure className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-ink/8 bg-white p-7 shadow-card">
                <div className="flex gap-1 text-lilac-deep" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-ink/70">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="text-sm">
                  <span className="font-semibold text-ink">{testimonial.name}</span>
                  <span className="text-ink/50"> · {testimonial.role}</span>
                </figcaption>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
