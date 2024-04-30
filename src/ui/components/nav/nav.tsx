'use client';

import { menuItemsData } from "@/src/lib/data";
import styles from "@/src/ui/components/nav/nav.module.scss";
import { roboto } from "@/src/ui/fonts/fonts";
import { useThemeContext } from "@/src/context/Contexts";
import Link from "next/link";

export default function Nav({
    classes
} : {
    classes?: string
}) {
    const { theme } = useThemeContext();

    return (
        <nav className={`${classes} ${styles.nav}`}>
            {menuItemsData.map((item, key) => {
                return (
                    <Link key={key} href={item.url} className={`${theme} ${roboto.className} themeLink`}>
                        <div>
                            {item.title}                        
                        </div>
                    </Link>)
            })}
        </nav>
    )
}