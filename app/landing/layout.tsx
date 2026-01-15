import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Health Insurance Plans | Live Health Rates",
  description: "Discover if you qualify for $0/month health insurance. Compare ACA plans, get personalized options, and enroll with expert guidance from licensed agents.",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
