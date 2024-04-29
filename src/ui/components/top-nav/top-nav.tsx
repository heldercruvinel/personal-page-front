import HeaderLogo from "../logo/header-logo/header-logo";
import Nav from "../nav/nav";
import MenuIcon from "../../icons/menu-icon/menu-icon";

import styles from "@/src/ui/components/top-nav/top-nav.module.scss";

export default function TopNav() {
    return (
        <div className={`${styles.topNav}`}>
            <HeaderLogo />
            <Nav classes={`${styles.navLinks}`}/>
        </div>
    )
}