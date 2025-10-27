import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce",
  description: "Front y back de E-commerce con Next.js y Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white">
        {" "}
        {/* asegurar fondo blanco */}
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <main className="flex-1">{children}</main>{" "}
          {/* flex-1 para ocupar espacio */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
