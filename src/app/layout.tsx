import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIBubble from "@/components/AIBubble";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareerStack — Learn. Build. Prove.",
  description:
    "CareerStack helps business students turn coursework into real projects, portfolios, and verifiable certificates, starting with Supply Chain at Rutgers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <AIBubble />
      </body>
    </html>
  );
}
