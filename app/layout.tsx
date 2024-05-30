import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";

import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "e6data - The world's fastest analytics engine",
  description: "e6data - The world's fastest analytics engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <head>
        {/* <!-- Calendly link widget begin --> */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        ></link>
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
      </head>
      <body className={inter.className}>
        <Navbar />
        <div className="pt-[var(--mobile-navbar-height)] lg:pt-[var(--desktop-navbar-height)]  w-full max-w-full  min-h-screen overflow-x-hidden">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
