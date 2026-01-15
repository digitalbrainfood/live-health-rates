import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Live Health Rates",
  description: "Learn how Live Health Rates collects, uses, and protects your personal information. Your privacy matters—read our comprehensive privacy policy.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
