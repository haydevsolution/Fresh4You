import { setRequestLocale } from "next-intl/server";
import Imprint from "@/components/Imprint";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ImprintPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-10">
      <Imprint />
    </div>
  );
}
