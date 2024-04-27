'use client';

import { useThemeContext } from "@/src/context/Contexts"
import FooterLogo from "@/src/ui/components/logo/footer-logo/footer-logo";

export default function Footer() {
    const { theme } = useThemeContext();

    return (
        <footer className={`${theme} surface`}>
            <div className="container">
                <FooterLogo />
            </div>
        </footer>
    )
}