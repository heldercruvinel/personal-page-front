import { menuItemsData } from "@/src/lib/data";
import styles from "@/src/ui/components/nav/nav.module.scss";
import Link from "next/link";

export default function Nav({
    classes,
    showSubmenu = false,
} : {
    classes?: string,
    showSubmenu?: boolean
}) {
    const displaySubMenu = {
        display: showSubmenu ? '' : 'none'
    }

    return (
        <nav className={`${classes} ${styles.nav}`}>
            {
                menuItemsData.map((item, key) => {
                    return (
                        <div key={key} className={`${styles.navItem}`}>
                            <Link href={item.url} className={`themeLink`}>
                                <li>
                                    {item.title}                
                                </li>
                            </Link>
                            <div style={displaySubMenu} className={`${styles.subMenu}`}>
                                {
                                    item.submenu?.map((item, key) => {
                                        return (                                        
                                            <Link key={key} href={item.url} className={`themeLink`}>
                                                <li className={`${styles.subMenuItem}`}>
                                                    {item.title}                
                                                </li>
                                            </Link>                                        
                                        )
                                    })
                                }
                            </div>
                            
                        </div>
                    )
                })
            }
        </nav>
    )
}