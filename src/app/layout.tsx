import type { Metadata } from "next";
import { AuthProvider } from "./AuthProvider";
import "./globals.css";
import Footer from "../components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="text-teal-600  font-sans  bg-gray-100">
          <Header />
          <div className="mx-auto  w-[400px] sm:w-[600px] md:w-[780px] lg:[1000px] xl:w-[1200px]">
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
