import { Product } from '@/data/products';
import { ArrowRightIcon } from './icons';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/*
        Placeholder de imagem — substitua por <Image src={product.image} alt={product.name} fill />
        quando as fotografias reais dos produtos estiverem disponíveis em /public/images/produtos/.
      */}
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-brand-gradient-soft">
        {product.isNew && (
          <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            Novidade
          </span>
        )}
        <span className="font-display text-sm font-medium text-ink/35">
          Imagem do produto
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-lilac-deep">
          {product.category}
        </span>
        <h3 className="font-display text-lg font-semibold text-ink">{product.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-ink/55">{product.description}</p>
        <a
          href={product.href}
          className="focus-ring group/link mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-lilac-deep"
        >
          Ver produto
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
