import Nav from "../nav/nav"
import Close from "../../icons/close/close"
import styles from "@/src/ui/components/mobile-nav/mobile-nav.module.scss";

export default function MobileNav({ 
    isMenuMobileOpen, 
    setMenuMobileOpe 
} : {
    isMenuMobileOpen?: boolean, 
    setMenuMobileOpe?: Function
}) {
    return (
        <div className={`${styles.mobileNav}`}>
            <Close />
            <Nav />
        </div>
    )
}