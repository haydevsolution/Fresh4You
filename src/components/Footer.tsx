"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const navItems = [
  { key: "about", href: "/about" },
  { key: "products", href: "/products" },
  { key: "contact", href: "/contact" },
] as const;

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Mobile: centered stacked / Desktop: Quick Links | Logo | Legal */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-evenly">
          {/* Quick Links – left of logo on desktop, order 1 mobile / order 1 desktop */}
          <div className="order-2 text-center lg:order-1">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-accent"
                  >
                    {nav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo – center */}
          <div className="order-1 lg:order-2">
            <Link href="/">
              <img
                src="/images/Logo.png"
                alt="fresh for you – obst & gemüse"
                className="h-28 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
          </div>

          {/* Legal – right of logo on desktop */}
          <div className="order-3 text-center">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              {t("legalLinks")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/imprint" className="text-sm text-white/70 transition-colors hover:text-accent">
                  {t("imprint")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-white/70 transition-colors hover:text-accent">
                  {t("privacy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
