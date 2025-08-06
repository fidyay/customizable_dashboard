import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/lib/components/shadcn/sonner";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Customizable Dashboard",
  description: "Customizable dashboard for managing hyperlinks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <main className="w-full max-w-md mx-auto p-4">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
