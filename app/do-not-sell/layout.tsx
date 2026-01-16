import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Do Not Sell My Personal Information",
  description: "Exercise your privacy rights. Submit a request to opt out of the sale of your personal information as required by California and other state privacy laws.",
  alternates: {
    canonical: "https://healthcoveragesearch.com/do-not-sell",
  },
  openGraph: {
    title: "Do Not Sell My Personal Information | Health Coverage Search",
    description: "Exercise your privacy rights and opt out of the sale of your personal information.",
    url: "https://healthcoveragesearch.com/do-not-sell",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DoNotSellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
