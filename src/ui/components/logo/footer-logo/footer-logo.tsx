import IconLogo from "@/src/ui/icons/icon-logo/icon-logo";
import TextLogo from "@/src/ui/components/logo/text-logo/text-logo";
import styles from "@/src/ui/components/logo/footer-logo/footer-logo.module.scss";
import Link from "next/link";

export default function FooterLogo() {
    return (
        <Link href={"/"} className={styles.footerLogo}>
            <IconLogo 
                className="footerIconLogoColors"
            />
            <TextLogo 
                className={`${styles.textLogo}`}
                toCodeClassName="footerToCodeLogoColors"
                cafeClassName="footerCafeLogoColors"
            />
        </Link>
    )
}