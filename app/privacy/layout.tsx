import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Health Coverage Search collects, uses, and protects your personal information. Your privacy matters—read our comprehensive privacy policy.",
  alternates: {
    canonical: "https://healthcoveragesearch.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Health Coverage Search",
    description: "Learn how Health Coverage Search collects, uses, and protects your personal information.",
    url: "https://healthcoveragesearch.com/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
