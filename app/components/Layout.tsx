import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "./Navbar";
import { SushiCartProvider } from "@context/SushiCartContextProvider";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SushiCartProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </SushiCartProvider>
  );
}
