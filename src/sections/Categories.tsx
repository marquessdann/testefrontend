import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/categories';

export default function Categories() {
  return (
    <section id="categorias" className="bg-paper py-24">
      <Container className="flex flex-col gap-14">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Categorias"
            title="Explore nossas categorias"
            description="Um portfólio organizado para facilitar a descoberta de produtos profissionais."
          />
        </RevealOnScroll>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <RevealOnScroll key={category.slug} as="li" delayMs={index * 60}>
              <CategoryCard category={category} />
            </RevealOnScroll>
          ))}
        </ul>
      </Container>
    </section>
  );
}
