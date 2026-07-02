import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Sakeng Livestock",
  description: "Lesotho's Trusted Livestock Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body className="antialiased bg-[#F8F6F2] text-[#3F564C] min-h-screen flex flex-col overflow-x-hidden relative w-full">
        <Header />
        <main className="flex-grow w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}