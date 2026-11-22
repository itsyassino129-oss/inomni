'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { CONSTANTS } from '@/lib/seo';

const BRAND = CONSTANTS.BRAND_NAME;

const NAV_LINKS: readonly { name: string; href: string }[] = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Setup Guide', href: '/setup' },
  { name: 'Blog', href: '/blog' },
];

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === href;
  return pathname.startsWith(href);
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const nextVal = window.scrollY > 20;
      setScrolled((prev) => (prev === nextVal ? prev : nextVal));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const closeDrawer = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-3 px-4 sm:px-6' : 'py-5 px-4 sm:px-6'
        }`}
      >
        <div
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-5 sm:px-8 ${
            scrolled
              ? 'bg-[#040f36]/90 backdrop-blur-xl border border-[#fff3b0]/25 shadow-[0_12px_40px_rgba(0,0,0,0.45)]'
              : 'bg-[#071b5c]/65 backdrop-blur-md border border-[#fff3b0]/15'
          }`}
        >
          <div className="flex items-center justify-between h-16">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center group focus:outline-none"
              aria-label={`${BRAND} Home`}
            >
              <div className="h-10 flex items-center group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/img/banner-logo.png"
                  alt="DODO TV AND DODO IPTV Official USA Logo"
                  width={160}
                  height={40}
                  className="object-contain h-full w-auto"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Pill Navigation */}
            <nav className="hidden lg:block" aria-label="Main Navigation">
              <ul className="flex items-center gap-1.5 bg-[#071b5c]/80 p-1.5 rounded-xl border border-[#fff3b0]/15">
                {NAV_LINKS.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        aria-current={active ? 'page' : undefined}
                        className={`font-bold uppercase tracking-wider text-xs xl:text-sm transition-all duration-200 px-4 py-2 rounded-lg inline-block ${
                          active
                            ? 'bg-[#fff3b0] text-[#071b5c] shadow-sm font-black'
                            : 'text-[#f0ebd8] hover:text-[#fff3b0] hover:bg-white/5'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/free-trial"
                className="px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider text-[#fff3b0] border border-[#fff3b0]/30 hover:bg-[#fff3b0]/10 transition-all"
              >
                Free Trial
              </Link>
              <Link
                href="/pricing"
                className="btn-gold px-6 py-2.5 text-xs xl:text-sm uppercase tracking-wider inline-flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4" /> Get DODO TV
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-[#fff3b0] p-2.5 rounded-xl bg-[#071b5c] border border-[#fff3b0]/25 focus:outline-none"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        ref={drawerRef}
        className={`fixed inset-0 z-40 bg-[#040f36]/98 backdrop-blur-2xl transition-all duration-300 lg:hidden flex flex-col justify-center items-center px-6 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="w-full max-w-sm flex flex-col gap-3">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeDrawer}
                className={`w-full text-center py-4 rounded-xl text-base font-black tracking-widest uppercase transition-all border ${
                  active
                    ? 'bg-[#fff3b0] text-[#071b5c] border-[#fff3b0]'
                    : 'bg-[#071b5c] text-[#f0ebd8] border-[#fff3b0]/20 hover:border-[#fff3b0]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/pricing"
            onClick={closeDrawer}
            className="btn-gold w-full text-center py-4 text-base tracking-widest uppercase mt-3"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </>
  );
}