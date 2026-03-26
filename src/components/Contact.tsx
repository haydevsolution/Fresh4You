"use client";

import { type FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const t = useTranslations("contact");
  const [callback, setCallback] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          callback,
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setCallback(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-surface py-16 lg:py-24">
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
          <h2 className="font-display mb-4 text-3xl font-bold text-text sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-muted">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 lg:col-span-2"
          >
            {/* Phone */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="font-bold text-text">{t("phone")}</h3>
              </div>
              <a
                href={`tel:${t("phoneNumber").replace(/\s/g, "")}`}
                className="text-xl font-bold text-primary transition-colors hover:text-primary-light"
              >
                {t("phoneNumber")}
              </a>
            </div>

            {/* Email */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="font-bold text-text">{t("email")}</h3>
              </div>
              <a
                href={`mailto:${t("emailAddress")}`}
                className="text-lg font-semibold text-primary transition-colors hover:text-primary-light"
              >
                {t("emailAddress")}
              </a>
            </div>

            {/* Address */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-text">{t("address")}</h3>
              </div>
              <p className="text-text-muted">{t("addressText")}</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div className="flex items-center justify-center rounded-2xl bg-white p-12 shadow-sm">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-primary">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-text">{t("form.success")}</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <div className="mb-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-text">
                      {t("form.name")}
                    </label>
                    <input
                      name="name"
                      type="text"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-text transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-text">
                      {t("form.email")}
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-text transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-text">
                    {t("form.phone")}
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-text transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  />
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-text">
                    {t("form.message")}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-text transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={callback}
                      onChange={(e) => setCallback(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-text-muted">
                      {t("form.callback")}
                    </span>
                  </label>
                </div>

                {status === "error" && (
                  <p className="mb-4 rounded-lg bg-red-50 p-3 text-center text-sm text-red-600">
                    {t("form.error")}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg disabled:opacity-60"
                >
                  {status === "sending" ? t("form.sending") : t("form.submit")}
                </button>

                <p className="mt-4 text-center text-xs text-text-muted">
                  {t("form.privacy")}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
