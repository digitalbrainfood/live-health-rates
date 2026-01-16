import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Have questions about health coverage? Reach out to our team at Health Coverage Search. We're here to help you find the right insurance solution.",
  alternates: {
    canonical: "https://healthcoveragesearch.com/contact",
  },
  openGraph: {
    title: "Contact Us | Health Coverage Search",
    description: "Have questions about health coverage? Reach out to our team.",
    url: "https://healthcoveragesearch.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
