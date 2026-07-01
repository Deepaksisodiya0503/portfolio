import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Deepak Sisodiya | IoT & Embedded Engineer",
  description:
    "Portfolio of Deepak Sisodiya — IoT Engineer, Embedded Systems Developer, M.Tech IoT student at DAVV Indore.",
  keywords: ["IoT", "Embedded Systems", "ESP32", "FreeRTOS", "Portfolio", "Deepak Sisodiya"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
