import { setRequestLocale } from "next-intl/server";
import About from "@/components/About";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-10">
      <About />
    </div>
  );
}
