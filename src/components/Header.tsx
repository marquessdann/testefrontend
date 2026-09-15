'use client';

import { useEffect, useState } from 'react';
import { navItems } from '@/data/nav';
import Logo from './Logo';
import { MenuIcon, CloseIcon } from './icons';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? 'bg-ink/90 backdrop-blur-md shadow-card-dark'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-20 w-full max-w-content items-center justify-between px-6 md:px-10"
      >
        <a href="#inicio" className="focus-ring rounded-sm" aria-label="Della — início">
          <Logo tone="light" />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="focus-ring rounded-sm text-sm font-medium text-white/75 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="focus-ring hidden rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Fale com a Della
        </a>

        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-full p-2 text-white md:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden bg-ink/95 backdrop-blur-md transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          menuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-1 px-6 pb-8 pt-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="focus-ring block rounded-lg px-2 py-3 text-lg font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contato"
                onClick={handleNavClick}
                className="focus-ring block rounded-full bg-brand-gradient px-5 py-3 text-center text-sm font-semibold text-ink"
              >
                Fale com a Della
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
