import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your InvoiceNudge account to manage invoices and reminders.",
  alternates: {
    canonical: "https://invoicenudge.eazyweb.nc/auth/login",
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
