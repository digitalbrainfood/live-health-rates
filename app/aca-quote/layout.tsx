import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Free ACA Health Insurance Quote",
  description: "Answer a few simple questions to see your personalized ACA health coverage options. Fast, free quotes with no obligation—speak to a licensed agent today.",
  alternates: {
    canonical: "https://healthcoveragesearch.com/aca-quote",
  },
  openGraph: {
    title: "Get Your Free ACA Quote | Health Coverage Search",
    description: "Answer a few simple questions to see your personalized ACA health coverage options.",
    url: "https://healthcoveragesearch.com/aca-quote",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ACAQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
