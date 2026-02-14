"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const customers = [
  "Glashaus Bären",
  "Roberts",
  "Brauhaus eins",
  "Monsieur Baguette",
];

export default function Customers() {
  const t = useTranslations("customers");

  return (
    <section id="customers" className="bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="mb-3 inline-block text-lg font-semibold text-accent">
            — {t("tag")}
          </span>
          <h2 className="font-display mb-12 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {customers.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-gray-100 bg-white px-8 py-5 shadow-sm transition-all hover:border-accent hover:shadow-md"
            >
              <span className="text-lg font-bold text-text">{name}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-8 text-center text-lg font-medium text-text-muted"
        >
          — {t("more")}
        </motion.p>
      </div>
    </section>
  );
}
