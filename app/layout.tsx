import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Web Garage - Transform Your Business with Digital Excellence",
  description: "Leading digital solutions provider specializing in web development, mobile apps, e-commerce, SEO, and digital marketing. 200+ projects delivered, 150+ happy clients worldwide. Get your free quote today!",
  keywords: "web development, mobile app development, e-commerce solutions, SEO services, digital marketing, UI/UX design, cloud hosting, cybersecurity, data analytics, shopify development, react development, next.js development",
  authors: [{ name: "Digital Web Garage" }],
  creator: "Digital Web Garage",
  publisher: "Digital Web Garage",
  robots: "index, follow",
  openGraph: {
    title: "Digital Web Garage - Transform Your Business with Digital Excellence",
    description: "Leading digital solutions provider with 10+ years experience. Web development, mobile apps, e-commerce, SEO & digital marketing services.",
    url: "https://digitalwebgarage.com",
    siteName: "Digital Web Garage",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Web Garage - Digital Solutions Provider",
    description: "Transform your business with our digital excellence. Web development, mobile apps, e-commerce & digital marketing services.",
    creator: "@digitalwebgarage",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

