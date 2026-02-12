import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import theme from '@/theme/themeConfig';

export const metadata: Metadata = {
  title: "Cysporteveryday's Blog",
  description: "A personal blog showcasing my work and thoughts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <Navigation />
            <main className="pt-16 min-h-screen">
              {children}
            </main>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}

