import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navBar/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  default: "Next App",
  template: "%s | Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={(inter.className, "global-gradient")}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
