import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Live Health Rates",
  description: "Your inquiry has been received. A licensed insurance agent will contact you shortly to discuss your personalized health coverage options.",
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
