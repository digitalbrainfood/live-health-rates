import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Review the terms of service for Health Coverage Search. Understand your rights and responsibilities when using our health insurance comparison services.",
  alternates: {
    canonical: "https://healthcoveragesearch.com/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Health Coverage Search",
    description: "Review the terms of service for Health Coverage Search.",
    url: "https://healthcoveragesearch.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
