import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your inquiry has been received. A licensed insurance agent will contact you shortly to discuss your personalized health coverage options.",
  alternates: {
    canonical: "https://healthcoveragesearch.com/thank-you",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
