import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Utkristi AI Labs",
  description: "A Utkristi.io Product",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className+" min-h-screen box-content overflow-x-hidden"}>
        {<Navbar/>}
        {children}
        {<Footer/>}
        </body>
    </html>
  );
}
