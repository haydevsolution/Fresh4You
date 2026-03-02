"use client";

import { useTranslations } from "next-intl";

export default function Imprint() {
  const t = useTranslations("imprint");

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display mb-12 text-3xl font-bold text-text sm:text-4xl">
          {t("title")}
        </h1>

        {/* § 5 TMG */}
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-text">
            {t("section1.heading")}
          </h2>
          <address className="not-italic leading-relaxed text-text-light">
            <strong>{t("section1.company")}</strong>
            <br />
            {t("section1.person")}
            <br />
            {t("section1.street")}
            <br />
            {t("section1.city")}
            <br />
            {t("section1.country")}
          </address>
        </div>

        {/* Kontakt */}
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-text">
            {t("section2.heading")}
          </h2>
          <p className="text-text-light">
            {t("section2.phone")}
            <br />
            {t("section2.email")}
          </p>
        </div>

        {/* USt-ID */}
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-text">
            {t("section3.heading")}
          </h2>
          <p className="text-text-light">{t("section3.text")}</p>
        </div>

        {/* Verantwortlich */}
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-text">
            {t("section4.heading")}
          </h2>
          <address className="not-italic leading-relaxed text-text-light">
            {t("section4.person")}
            <br />
            {t("section4.street")}
            <br />
            {t("section4.city")}
          </address>
        </div>

        {/* Streitschlichtung */}
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-text">
            {t("section5.heading")}
          </h2>
          <p className="mb-3 text-text-light">{t("section5.text1")}</p>
          <p className="text-text-light">{t("section5.text2")}</p>
        </div>

        {/* Haftung Inhalte */}
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-text">
            {t("section6.heading")}
          </h2>
          <p className="text-text-light">{t("section6.text")}</p>
        </div>

        {/* Haftung Links */}
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-text">
            {t("section7.heading")}
          </h2>
          <p className="text-text-light">{t("section7.text")}</p>
        </div>

        {/* Urheberrecht */}
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-text">
            {t("section8.heading")}
          </h2>
          <p className="text-text-light">{t("section8.text")}</p>
        </div>
      </div>
    </section>
  );
}
