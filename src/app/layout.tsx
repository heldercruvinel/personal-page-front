import './global.scss';
import type { Metadata } from "next";

import { ThemeProvider } from '../context/Contexts';

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
            <MobileNav
                // isMenuMobileOpen={isMenuMobileOpen}
                // setMenuMobileOpe={setIsMenuMobileOpe}
            />
            <Header />
              {children}
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
