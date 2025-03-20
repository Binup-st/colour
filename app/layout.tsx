import type { Metadata } from "next";
import {
  Bebas_Neue as FontSans,
  Open_Sans as FontOpenSans,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import { SearchProvider } from "@/context/search-context";
import { CategoryProvider } from "@/context/category-context";
import { ThemeProvider } from "@/components/theme-provider";
import HeroSection from "@/home/hero-section";
import Footer from "@/components/common/footer";
// import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const fontOpenSans = FontOpenSans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Colours Nepal Pvt. Ltd.",
  description: "Project Listing Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontOpenSans.variable} font-open-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SearchProvider>
            <CategoryProvider>
              <Header />
              <div className="relative z-1">
                <HeroSection />
              </div>
              <main className="relative -z-100">{children}</main>
              <Footer />
            </CategoryProvider>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
