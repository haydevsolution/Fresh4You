import { setRequestLocale } from "next-intl/server";
import Privacy from "@/components/Privacy";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-10">
      <Privacy />
    </div>
  );
}
