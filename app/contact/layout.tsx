import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Live Health Rates",
  description: "Have questions about health coverage? Reach out to our team at Live Health Rates. We're here to help you find the right insurance solution.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
