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

    return (
        <Link 
            className={`${styles.btnLink} ${classes} secondary`}
            href={href}
        >
            <span>
                {buttonText}
            </span>
        </Link>        
    )
}