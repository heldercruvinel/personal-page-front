'use client';

import Nav from "../nav/nav"
import Close from "../../icons/close/close"
import styles from "@/src/ui/components/mobile-nav/mobile-nav.module.scss";
import { useThemeContext, useMobileMenuContext } from "@/src/context/Contexts";
import { use } from "react";

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
        <div className={`${styles.mobileNav} ${theme} ${isOpened ? styles.open : styles.close} surface shadow-r`}>
            <div onClick={() => {
                setIsOpened(false)
            }}>
                <Close />
            </div>
            <Nav />
        </div>
    )
}