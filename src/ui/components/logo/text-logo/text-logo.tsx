import { beverage, commitMono, geoMatrix } from "@/src/ui/fonts/fonts"
import styles from "./text-logo.module.scss";
import { useContext } from "react";
import { ThemeContext } from "@/src/context/Contexts";


export default function TextLogo(
    { 
        className,
        toCodeClassName, 
        cafeClassName 
    } : { 
        className?: string
        toCodeClassName: string, 
        cafeClassName: string 
    }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${className} ${styles.textLogo}`}>
            <div className={`${styles.toCode} ${theme} ${geoMatrix.className} ${toCodeClassName}`}>
                ToCode
            </div>
            <div className={`${styles.cafe} ${theme} ${beverage.className} ${cafeClassName}`}>
                Cafe
            </div>
        </div>
    )
}