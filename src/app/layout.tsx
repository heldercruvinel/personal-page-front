import './global.scss';
import type { Metadata } from "next";

import { ThemeProvider, MobileMenuProvider } from '../context/Providers';

import MobileNav from "@/src/ui/components/mobile-nav/mobile-nav";
import Header from "@/src/ui/components/header/header";
import Footer from "@/src/ui/components/footer/footer";

export const metadata: Metadata = {
  title: "To Code Café",
  description: "Website to study about software devolopment followed with a good coffee",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body>
        <div className="mainContent">
          <ThemeProvider>
            <MobileMenuProvider>
              <Header />
                {children}
              <Footer />
              <MobileNav />
            </MobileMenuProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
