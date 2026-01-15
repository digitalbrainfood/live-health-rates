import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Do Not Sell My Personal Information | Live Health Rates",
  description: "Exercise your privacy rights. Submit a request to opt out of the sale of your personal information as required by California and other state privacy laws.",
};

export default function DoNotSellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
