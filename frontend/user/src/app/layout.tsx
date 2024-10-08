import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { HeaderComponent } from "./Header";

import "@/app/ui/globals.css";
import StoreProvider from "./StoreProvider";
import NavLinks from "./dashboard/nav-links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider user={null}>
      <html lang="en">
        <body className={inter.className}>
          <HeaderComponent></HeaderComponent>
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
              <NavLinks />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
