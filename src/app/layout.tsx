import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Philisa Energy | Revolutionizing Biodiesel",
  description: "Philisa Energy is a leader in biofuels and circular economy solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}