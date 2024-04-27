import { useThemeContext } from "@/src/context/Contexts"
import { roboto } from "@/src/ui/fonts/fonts";
import styles from "@/src/ui/components/button/button.module.scss";
import Link from "next/link";

export default function Button({
    buttonText = "Button text",
    href,
    classes
} : {
    buttonText?: string,
    href: string
    classes?: string
}) {
    const { theme } = useThemeContext();

    return (
        <Link 
            className={`${theme} ${roboto.className} ${styles.btnLink} ${classes} secondary`}
            href={href}
        >
            <span>
                {buttonText}
            </span>
        </Link>        
    )
}