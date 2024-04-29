'use client';

import { useThemeContext } from "@/src/context/Contexts";
import { useState } from "react";
import { roboto } from "../../fonts/fonts";
import styles from "@/src/ui/components/header/header.module.scss";
import Link from "next/link";


import TopNav from "@/src/ui/components/top-nav/top-nav";
import ThemeSwitch from "@/src/ui/components/theme-switch/theme-switch";
import Button from "@/src/ui/components/button/button";

export default function Header() {
    const { theme } = useThemeContext();
    const [isMenuMobileOpen, setIsMenuMobileOpe] = useState(false);
    return (
        <header className={`${theme} ${styles.header} shadow-b surface`}>
          <div className={`container`}>
            {/* <MobileNav
              isMenuMobileOpen={isMenuMobileOpen}
              setMenuMobileOpe={setIsMenuMobileOpe}
            /> */}
            <TopNav />
            <div className={`${styles.headerGroup}`}>
              <ThemeSwitch />
              <Link 
                className={`${theme} ${roboto.className} themeLink`}
                href="/login"
              >
                Login
              </Link>
              <Button 
                buttonText="Sing up"
                href="/create-account"
              />
            </div>
          </div>     
        </header>
    )
}