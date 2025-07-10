import type { Metadata } from "next";
import { Bitter, Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const bitter = Bitter({ 
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-bitter'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Enos - Where Customer Success Happens",
  description: "Enos is the world's leading CRM platform. Bring your customers, projects, tools, and AI together to drive success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bitter.variable} ${inter.variable}`}>
      <body className={`${inter.className} font-sans`} suppressHydrationWarning>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
