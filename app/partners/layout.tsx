import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners",
  description: "Explore Health Coverage Search's trusted insurance partners. We work with leading health insurance providers to help you find the right coverage.",
  alternates: {
    canonical: "https://healthcoveragesearch.com/partners",
  },
  openGraph: {
    title: "Partners | Health Coverage Search",
    description: "Explore Health Coverage Search's trusted insurance partners.",
    url: "https://healthcoveragesearch.com/partners",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
