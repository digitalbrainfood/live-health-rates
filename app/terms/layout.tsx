import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Live Health Rates",
  description: "Review the terms of service for Live Health Rates. Understand your rights and responsibilities when using our health insurance comparison and agent connection services.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
