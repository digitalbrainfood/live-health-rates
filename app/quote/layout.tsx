import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Health Insurance Quote",
  description: "Complete our quick questionnaire to receive personalized health coverage options. Connect with licensed agents who understand your unique situation and budget.",
  alternates: {
    canonical: "https://healthcoveragesearch.com/quote",
  },
  openGraph: {
    title: "Get Your Health Insurance Quote | Health Coverage Search",
    description: "Complete our quick questionnaire to receive personalized health coverage options.",
    url: "https://healthcoveragesearch.com/quote",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
