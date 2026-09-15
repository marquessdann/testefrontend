import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import { StarIcon } from '@/components/icons';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Depoimentos"
            title="O que dizem nossos clientes"
            align="center"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 divide-y divide-line border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-t-0">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll key={testimonial.name} delayMs={index * 60} className="px-0 py-8 sm:px-8 sm:py-0">
              <div className="flex h-full flex-col gap-4">
                <div className="flex gap-1 text-lilac" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-3.5 w-3.5" />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-ink/65">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="text-sm">
                  <span className="font-medium text-ink">{testimonial.name}</span>
                  <span className="text-ink/40"> · {testimonial.role}</span>
                </figcaption>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
