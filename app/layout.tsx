import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Bar from "./components/Bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaewon's blog",
  description: "재원이의 블로그",
  openGraph: {
    type: "website",
    url: "https://next-blog-tau-six.vercel.app",
    title: "Jaewon's blog",
    description: "재원이의 블로그",
    images: ["/images/dog.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaewon's blog",
    description: "재원이의 블로그",
    images: ["/images/dog.png"],
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
        <Banner />
        <Header />
        <main className="md-container min-h-screen bg-gray-100">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
