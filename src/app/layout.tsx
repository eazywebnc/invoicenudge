import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://invoicenudge.eazyweb.nc"),
  title: {
    default: "InvoiceNudge — Automated Invoice Reminders | Get Paid Faster",
    template: "%s | InvoiceNudge",
  },
  description:
    "Stop chasing payments. InvoiceNudge sends smart, automated invoice reminders so freelancers and agencies get paid 2x faster. Track overdue invoices, send polite escalations, include payment links.",
  keywords: [
    "invoice reminders",
    "automated invoicing",
    "get paid faster",
    "overdue invoice tracker",
    "freelancer payments",
    "payment reminders",
    "invoice follow-up",
    "accounts receivable",
    "cash flow management",
    "invoice automation",
  ],
  authors: [{ name: "EazyWebNC", url: "https://eazyweb.nc" }],
  creator: "EazyWebNC",
  publisher: "EazyWebNC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://invoicenudge.eazyweb.nc",
    siteName: "InvoiceNudge",
    title: "InvoiceNudge — Stop Chasing Payments. Start Getting Paid.",
    description:
      "Automated invoice reminders that are polite, persistent, and effective. Track overdue invoices and get paid 2x faster.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "InvoiceNudge — Automated Invoice Reminders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InvoiceNudge — Get Paid 2x Faster",
    description:
      "Smart automated invoice reminders for freelancers and agencies.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "InvoiceNudge",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://invoicenudge.eazyweb.nc",
  description:
    "Automated invoice reminders that help freelancers and agencies get paid 2x faster.",
  offers: [
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      name: "Free",
      description: "5 invoices/month, basic reminders",
    },
    {
      "@type": "Offer",
      price: "19",
      priceCurrency: "USD",
      name: "Pro",
      description: "Unlimited invoices, smart sequences, payment links",
    },
    {
      "@type": "Offer",
      price: "49",
      priceCurrency: "USD",
      name: "Business",
      description: "Team accounts, API, custom branding",
    },
  ],
  creator: {
    "@type": "Organization",
    name: "EazyWebNC",
    url: "https://eazyweb.nc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-neutral-950 text-neutral-100 font-[family-name:var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
