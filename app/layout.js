import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Etherwise",
  description: "Pioneering Tech Solutions for Modern Challenges",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/imgs/heading-logo.svg" type="image/x-icon" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
        </body>
      
    </html>
  );
}
