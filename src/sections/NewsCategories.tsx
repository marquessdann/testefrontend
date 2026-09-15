import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import RevealOnScroll from '@/components/RevealOnScroll';
import ProductCard from '@/components/ProductCard';
import { newArrivals } from '@/data/products';

export default function NewsCategories() {
  return (
    <section className="bg-paper py-24">
      <Container className="flex flex-col gap-14">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Fique por dentro"
            title="Novidades e outras categorias"
            description="Novos itens do catálogo e categorias complementares para ampliar seu estúdio."
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((product, index) => (
            <RevealOnScroll key={product.slug} delayMs={index * 60}>
              <ProductCard product={product} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
