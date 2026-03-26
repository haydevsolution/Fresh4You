import { setRequestLocale } from "next-intl/server";
import Products from "@/components/Products";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-10">
      <Products />
    </div>
  );
}
