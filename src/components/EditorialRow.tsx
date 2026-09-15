import { ReactNode } from 'react';
import { ArrowRightIcon } from './icons';

type EditorialRowProps = {
  number: string;
  title: string;
  description?: string;
  href?: string;
};

export default function EditorialRow({ number, title, description, href }: EditorialRowProps) {
  const content = (
    <div className="flex flex-col gap-2 border-b border-line py-7 md:flex-row md:items-baseline md:gap-10 md:py-8">
      <span className="w-10 shrink-0 font-display text-sm font-semibold text-lilac">{number}</span>
      <div className="flex flex-1 flex-col gap-1.5">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-lilac-deep sm:text-2xl">
            {title}
          </h3>
          {href && (
            <ArrowRightIcon className="h-5 w-5 shrink-0 text-ink/30 transition-all duration-200 group-hover:translate-x-1 group-hover:text-lilac-deep" />
          )}
        </div>
        {description && (
          <p className="max-w-md text-sm leading-relaxed text-ink/50">{description}</p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="focus-ring group block">
        {content}
      </a>
    );
  }

  return <div className="group">{content}</div>;
}

export function EditorialList({ children }: { children: ReactNode }) {
  return <div className="border-t border-line">{children}</div>;
}
