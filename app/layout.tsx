import type { Metadata } from "next";
import {
  Bebas_Neue as FontSans,
  Open_Sans as FontOpenSans,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import { SearchProvider } from "@/context/search-context";
import { CategoryProvider } from "@/context/category-context";
import Footer from "@/components/common/footer";
import { ClientThemeProvider } from "@/components/client-theme-provider";
import { CartProvider } from "@/context/cart-context";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontOpenSans.variable} font-open-sans antialiased`}
        suppressHydrationWarning
      >
        <SearchProvider>
          <CategoryProvider>
            <CartProvider>
              <ClientThemeProvider>
                {" "}
                <Header />
                <main className="">{children}</main>
                <Footer />
              </ClientThemeProvider>
            </CartProvider>
          </CategoryProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
