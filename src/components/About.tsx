"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

const values = ["quality", "freshness", "personal"] as const;
const timelineSteps = ["2018", "2019", "2021", "today"] as const;

const icons: Record<string, React.ReactNode> = {
  quality: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  freshness: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
  personal: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
};

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();

  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-lg font-semibold text-accent">
            — {t("tag")}
          </span>
          <h2 className="font-display mb-6 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </motion.div>

        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80"
              alt="Fresh vegetables market"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-4 text-lg leading-relaxed text-text-light">
              {t("text1")}
            </p>
            <p className="mb-4 text-lg leading-relaxed text-text-light">
              {t("text2")}
            </p>
            <p className="text-lg font-semibold leading-relaxed text-primary">
              {t("text3")}
            </p>
          </motion.div>
        </div>

        {/* History Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="mb-12 text-center text-2xl font-bold text-text sm:text-3xl">
            {t("history.heading")}
          </h3>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 hidden h-full w-px bg-accent/30 md:left-1/2 md:block" />

            {timelineSteps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative mb-10 flex flex-col gap-4 md:flex-row md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                    <span className="mb-1 inline-block text-sm font-bold uppercase tracking-wider text-accent">
                      {t(`history.timeline.${step}.title`)}
                    </span>
                    <p className="text-text-light">
                      {t(`history.timeline.${step}.text`)}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-white md:left-1/2 md:block" />

                {/* Year label */}
                <div className={`flex flex-1 items-start ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                  <span className="text-3xl font-bold text-primary/20">
                    {step === "today" ? "2025" : step}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-10 text-center"
          >
            <a
              href={`/${locale}/#customers`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg"
            >
              {t("history.cta")}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Values */}
        <div className="grid gap-8 sm:grid-cols-3">
          {values.map((value, i) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-2xl bg-surface p-8 text-center transition-all hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                {icons[value]}
              </div>
              <h3 className="mb-2 text-xl font-bold text-text">
                {t(`values.${value}.title`)}
              </h3>
              <p className="text-text-muted">
                {t(`values.${value}.text`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
