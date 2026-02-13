"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const productItems = [
  { key: "vegetables", emoji: "🥬", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80" },
  { key: "fruits", emoji: "🍎", image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&q=80" },
  { key: "herbs", emoji: "🌿", image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80" },
  { key: "sprouts", emoji: "🌱", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80" },
  { key: "mushrooms", emoji: "🍄", image: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=600&q=80" },
  { key: "specialties", emoji: "✨", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80" },
] as const;

export default function Products() {
  const t = useTranslations("products");

  return (
    <section id="products" className="bg-surface-warm py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-accent/20 px-4 py-1 text-sm font-semibold text-primary">
            {t("tag")}
          </span>
          <h2 className="font-display mb-4 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-muted">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productItems.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={t(`items.${item.key}.title`)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-3 left-4 text-3xl">
                  {item.emoji}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-text">
                  {t(`items.${item.key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {t(`items.${item.key}.text`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
