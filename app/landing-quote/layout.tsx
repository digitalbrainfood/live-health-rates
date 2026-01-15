import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Free Health Insurance Quote | Live Health Rates",
  description: "Answer a few simple questions to see your personalized health coverage options. Fast, free quotes with no obligation—speak to a licensed agent today.",
};

export default function LandingQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
