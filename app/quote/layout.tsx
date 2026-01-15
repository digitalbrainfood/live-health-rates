import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Health Insurance Quote | Live Health Rates",
  description: "Complete our quick questionnaire to receive personalized health coverage options. Connect with licensed agents who understand your unique situation and budget.",
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
