import { Category } from '@/data/categories';
import { ArrowRightIcon } from './icons';

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <a
      href="#produtos"
      className="focus-ring group flex flex-col justify-between gap-8 rounded-2xl border border-ink/8 bg-paper-off p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-lilac-deep/40"
    >
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-lg font-semibold text-ink">{category.name}</h3>
        <p className="text-sm leading-relaxed text-ink/55">{category.description}</p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-lilac-deep">
        Ver produtos
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </a>
  );
}
