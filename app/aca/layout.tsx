import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACA Health Insurance Plans - $0/Month Coverage Available",
  description: "Discover if you qualify for $0/month health insurance. Compare ACA plans, get personalized options, and enroll with expert guidance from licensed agents.",
  alternates: {
    canonical: "https://healthcoveragesearch.com/aca",
  },
  openGraph: {
    title: "ACA Health Insurance Plans | Health Coverage Search",
    description: "Discover if you qualify for $0/month health insurance through the Affordable Care Act.",
    url: "https://healthcoveragesearch.com/aca",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ACALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
