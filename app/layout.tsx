import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://healthcoveragesearch.com'),
  title: {
    default: "Health Coverage Search - Save Up to 77% on Health Insurance",
    template: "%s | Health Coverage Search",
  },
  description: "Connect with licensed insurance professionals who simplify your health coverage search. Find personalized options from top carriers—no jargon, no pressure, just real guidance.",
  keywords: "health insurance, health coverage search, licensed insurance agents, PPO networks, affordable coverage, insurance quotes, ACA plans, marketplace insurance",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://healthcoveragesearch.com',
    siteName: 'Health Coverage Search',
    title: 'Health Coverage Search - Save Up to 77% on Health Insurance',
    description: 'Connect with licensed insurance professionals who simplify your health coverage search. Find personalized options from top carriers.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Health Coverage Search',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health Coverage Search - Save Up to 77% on Health Insurance',
    description: 'Connect with licensed insurance professionals who simplify your health coverage search.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://healthcoveragesearch.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '4311816405805186');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=4311816405805186&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17856739006"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17856739006');
          `}
        </Script>

        {/* Contentsquare */}
        <Script
          src="https://t.contentsquare.net/uxa/cc757dc8c5848.js"
          strategy="afterInteractive"
        />

        {/* TrustedForm */}
        <Script id="trustedform" strategy="afterInteractive">
          {`
            (function() {
              var field = 'xxTrustedFormCertUrl';
              var provideReferrer = false;
              var invertFieldSensitivity = false;
              var tf = document.createElement('script');
              tf.type = 'text/javascript'; tf.async = true;
              tf.src = 'http' + ('https:' == document.location.protocol ? 's' : '') +
                '://api.trustedform.com/trustedform.js?provide_referrer=' + escape(provideReferrer) +
                '&field=' + escape(field) + '&l=' + new Date().getTime() + Math.random() +
                '&invert_field_sensitivity=' + invertFieldSensitivity;
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(tf, s);
            })();
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
