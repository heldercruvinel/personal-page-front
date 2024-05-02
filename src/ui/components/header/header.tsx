// import { roboto } from "../../fonts/fonts";
import styles from "@/src/ui/components/header/header.module.scss";
import Link from "next/link";

import TopNav from "@/src/ui/components/top-nav/top-nav";
import ThemeSwitch from "@/src/ui/components/theme-switch/theme-switch";
import Button from "@/src/ui/components/button/button";
import MobileNav from "../mobile-nav/mobile-nav";

export default function Header() {

    return (
        <header className={`${styles.header} shadow-b surface`}>
          <div className={`container`}>
            <TopNav />
            <div className={`${styles.group}`}>
              <ThemeSwitch />
              <Link 
                className={`themeLink`}
                href="/login"
              >
                Login
              </Link>
              <Button 
                buttonText="Sing up"
                href="/create-account"
              />
            </div>
            <div className={`${styles.buttonsGroup}`}>
              <ThemeSwitch />
              <MobileNav />
            </div>          
          </div>     
        </header>
    )
}