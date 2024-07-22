import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "大和言葉辞典",
  description: "大和言葉辞典は、現代の日本語と大和言葉を検索できる辞典サービスです。",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {
  const message = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={message}>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white">
              <Header />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
