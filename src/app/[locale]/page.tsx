import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import Delivery from "@/components/Delivery";
import Customers from "@/components/Customers";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Customers />
      <Delivery />
    </>
  );
}
