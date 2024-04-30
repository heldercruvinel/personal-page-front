'use client';

import Nav from "../nav/nav"
import Close from "../../icons/close/close"
import Button from "../button/button";
import Link from "next/link";
import { roboto } from "../../fonts/fonts";
import styles from "@/src/ui/components/mobile-nav/mobile-nav.module.scss";
import { useThemeContext, useMobileMenuContext } from "@/src/context/Contexts";

export default function MobileNav({ 
    isMenuMobileOpen, 
    setMenuMobileOpe 
} : {
    isMenuMobileOpen?: boolean, 
    setMenuMobileOpe?: Function
}) {

    const { theme } = useThemeContext();
    const{ isOpened, setIsOpened } = useMobileMenuContext();
    
    return (
        <div className={`${styles.mobileNav} ${theme} ${isOpened ? styles.open : styles.close} surface shadow-l`}>
            <div className={`${styles.topMenu}`}>
                <Close 
                    className={`${theme} ${styles.buttonClose}`}
                    onClick={() => {
                        setIsOpened(false)
                    }}
                />
            </div>       
            <Nav 
              classes={`${styles.mobileMenu}`}
            />
            <div className={`${styles.bottonMenu}`}>
              <hr className={`${styles.divisor}`}/>
              <div className={`${styles.loginLinks}`}>
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
        </div>
    )
}