import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sakeng Livestock Marketplace",
  description: "Highly optimized premium livestock marketplace platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-50 text-zinc-950 flex flex-col min-h-screen`}>
        {/* Navigation Wrapper */}
        <Header />
        
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footnote Wrapper */}
        <Footer />
      </body>
    </html>
  );
}