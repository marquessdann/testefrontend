import { Product } from '@/data/products';
import { ArrowRightIcon } from './icons';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[10px] border border-line bg-paper transition-colors duration-200 hover:border-lilac-deep/40">
      {/*
        Placeholder de imagem — substitua por
        <Image src={product.image} alt={product.name} fill className="object-contain" />
        quando as fotografias reais dos produtos estiverem disponíveis em /public/images/produtos/.
      */}
      <div className="relative aspect-[4/3] overflow-hidden bg-paper-off">
        {product.isNew && (
          <span className="absolute left-4 top-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-lilac-deep">
            Novidade
          </span>
        )}
        <div className="flex h-full w-full items-center justify-center transition-transform duration-300 ease-out group-hover:scale-[1.03]">
          <span className="font-display text-sm font-medium text-ink/30">Imagem do produto</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink/40">
          {product.category}
        </span>
        <h3 className="font-display text-base font-semibold text-ink">{product.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-ink/55">{product.description}</p>
        <a
          href={product.href}
          className="focus-ring group/link mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-lilac-deep"
        >
          Ver produto
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
