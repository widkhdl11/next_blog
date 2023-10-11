import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaewon's blog",
  description: "재원이의 블로그",
  openGraph: {
    type: "website",
    url: "https://next-blog-tau-six.vercel.app",
    title: "Jaewon's blog",
    description: "재원이의 블로그",
    images: ["/images/owl.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaewon's blog",
    description: "재원이의 블로그",
    images: ["/images/owl.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="md-container min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
