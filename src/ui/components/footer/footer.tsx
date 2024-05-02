import FooterLogo from "@/src/ui/components/logo/footer-logo/footer-logo";
import Nav from "@/src/ui/components/nav/nav";
import styles from "@/src/ui/components/footer/footer.module.scss";

export default function Footer() {

    return (
        <footer className={`surface`}>
            <div className={`container`}>
                <div className={`${styles.footerMenu}`}>
                    <FooterLogo />
                    <Nav 
                        classes={`${styles.footerNav}`}
                        showSubmenu={true}
                    />
                </div>                
            </div>
        </footer>
    )
}