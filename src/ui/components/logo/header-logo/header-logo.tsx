import IconLogo from "@/src/ui/icons/icon-logo/icon-logo";
import TextLogo from "@/src/ui/components/logo/text-logo/text-logo";
import styles from "@/src/ui/components/logo/header-logo/header-logo.module.scss";
import Link from "next/link";

export default function HeaderLogo() {
    return (
        <Link href={"/"} className={styles.headerLogo}>
            <IconLogo 
                className="headerIconLogoColors"
            />
            <TextLogo
                toCodeClassName="headerToCodeLogoColors"
                cafeClassName="headerCafeLogoColors"
            />
        </Link>
    )
}