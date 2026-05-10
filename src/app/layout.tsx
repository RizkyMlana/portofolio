import type { Metadata } from "next";
import { Inter, Figtree } from 'next/font/google';
import "./globals.css";
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "Mlaana Portofolio",
  description: "AI engineer portfolio featuring machine learning, computer vision, and NLP projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", figtree.variable)}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
