import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fintech Agent",
  description: "A Platform for End to End Fintech Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-bl  from-sky-900 via-gray-900 to-slate-900 `}
      >
        {children}
      </body>
    </html>
  );
}
