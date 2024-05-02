'use client';

import './global.scss';

import Header from "@/src/ui/components/header/header";
import Footer from "@/src/ui/components/footer/footer";

import { roboto } from '@/src/ui/fonts/fonts';

import { useThemeContext } from '@/src/context/Contexts';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const {theme} = useThemeContext();
  
  return (
    <div className={`mainContent ${roboto.variable}`} data-theme={theme}>
      <Header />
          {children}
      <Footer />
    </div>
  );
}
