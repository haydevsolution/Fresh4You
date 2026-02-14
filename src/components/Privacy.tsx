"use client";

import { useTranslations } from "next-intl";

const rightKeys = [
  "info",
  "correction",
  "deletion",
  "restriction",
  "portability",
  "objection",
] as const;

const collectionKeys = ["ip", "date", "browser", "os", "referrer"] as const;

export default function Privacy() {
  const t = useTranslations("privacy");

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display mb-12 text-3xl font-bold text-text sm:text-4xl">
          {t("title")}
        </h1>

        {/* 1. Verantwortlicher */}
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-text">
            {t("responsible.heading")}
          </h2>
          <p className="mb-4 text-text-light">{t("responsible.text")}</p>
          <address className="not-italic leading-relaxed text-text-light">
            <strong>{t("responsible.company")}</strong>
            <br />
            {t("responsible.person")}
            <br />
            {t("responsible.street")}
            <br />
            {t("responsible.city")}
            <br />
            {t("responsible.country")}
            <br />
            <br />
            {t("responsible.phone")}
          </address>
        </div>

        {/* 2. Allgemeine Hinweise */}
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-text">
            {t("general.heading")}
          </h2>
          <p className="mb-3 text-text-light">{t("general.text1")}</p>
          <p className="text-text-light">{t("general.text2")}</p>
        </div>

        {/* 3. Datenerfassung */}
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-text">
            {t("collection.heading")}
          </h2>
          <p className="mb-3 text-text-light">{t("collection.text")}</p>
          <ul className="mb-4 list-inside list-disc space-y-1 text-text-light">
            {collectionKeys.map((key) => (
              <li key={key}>{t(`collection.items.${key}`)}</li>
            ))}
          </ul>
          <p className="mb-3 text-text-light">{t("collection.purpose")}</p>
          <p className="text-text-light">{t("collection.legal")}</p>
        </div>

        {/* 4. Kontakt per E-Mail */}
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-text">
            {t("email.heading")}
          </h2>
          <p className="mb-3 text-text-light">{t("email.text1")}</p>
          <p className="mb-3 text-text-light">{t("email.text2")}</p>
          <p className="text-text-light">{t("email.legal")}</p>
        </div>

        {/* 5. Speicherdauer */}
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-text">
            {t("storage.heading")}
          </h2>
          <p className="text-text-light">{t("storage.text")}</p>
        </div>

        {/* 6. Ihre Rechte */}
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-text">
            {t("rights.heading")}
          </h2>
          <p className="mb-3 text-text-light">{t("rights.text")}</p>
          <ul className="mb-4 list-inside list-disc space-y-1 text-text-light">
            {rightKeys.map((key) => (
              <li key={key}>{t(`rights.items.${key}`)}</li>
            ))}
          </ul>
          <p className="text-text-light">{t("rights.complaint")}</p>
        </div>

        {/* 7. SSL/TLS */}
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-text">
            {t("ssl.heading")}
          </h2>
          <p className="text-text-light">{t("ssl.text")}</p>
        </div>
      </div>
    </section>
  );
}
