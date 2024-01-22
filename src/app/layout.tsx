import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "../theme/ThemeRegistry";
import Header from "@/layout/Header/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Craft Your Pixel",
  description: "Craft Your Pixel",
};

/**
 * Top-level layout component for the entire application.
 *
 * @param {object} props - The properties of the RootLayout component.
 * @param {React.ReactNode} props.children - The content to be rendered within the layout.
 *
 * @returns {JSX.Element} The rendered RootLayout component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </ThemeRegistry>
    </html>
  );
}
