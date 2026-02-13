"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "de" | "en") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/30 bg-white/10 px-1 py-0.5 backdrop-blur-sm">
      <button
        onClick={() => switchLocale("de")}
        className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-all ${
          locale === "de"
            ? "bg-white text-primary"
            : "text-white hover:bg-white/20"
        }`}
      >
        DE
      </button>
      <button
        onClick={() => switchLocale("en")}
        className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-all ${
          locale === "en"
            ? "bg-white text-primary"
            : "text-white hover:bg-white/20"
        }`}
      >
        EN
      </button>
    </div>
  );
}
