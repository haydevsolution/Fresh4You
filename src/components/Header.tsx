"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { key: "about", href: "/about" },
  { key: "products", href: "/products" },
  { key: "contact", href: "/contact" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollAccum = useRef(0);

  const isHome = pathname === "/";

  useEffect(() => {
    let ticking = false;
    const HIDE_THRESHOLD = 120;
    const SHOW_THRESHOLD = 40;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        setScrolled(currentY > 50);

        if (currentY < 50) {
          setVisible(true);
          scrollAccum.current = 0;
        } else if (delta > 0) {
          // Scrolling down: accumulate positive
          scrollAccum.current = Math.max(0, scrollAccum.current) + delta;
          if (scrollAccum.current > HIDE_THRESHOLD) {
            setVisible(false);
          }
        } else if (delta < 0) {
          // Scrolling up: accumulate negative
          scrollAccum.current = Math.min(0, scrollAccum.current) + delta;
          if (scrollAccum.current < -SHOW_THRESHOLD) {
            setVisible(true);
          }
        }

        lastScrollY.current = currentY;
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-transform duration-500 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled || !isHome
          ? "bg-primary-dark/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex w-full items-center px-4 py-1 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img
            src="/images/Logo.png"
            alt="fresh for you – obst & gemüse"
            className="h-20 w-auto sm:h-24"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Desktop Nav – centered */}
        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-accent"
                  : "text-white/90 hover:text-accent"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        {/* Language Switcher – right side */}
        <div className="hidden shrink-0 md:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile Hamburger */}
        <div className="ml-auto flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-all ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-all ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-2 bg-primary-dark/95 px-6 pb-6 backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`py-2 text-left text-base font-medium transition-colors ${
                pathname === item.href
                  ? "text-accent"
                  : "text-white/90 hover:text-accent"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
