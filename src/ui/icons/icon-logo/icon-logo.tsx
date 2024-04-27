import ImageLogo from "@/src/ui/components/logo/image-logo/image-logo"
import styles from "@/src/ui/icons/icon-logo/icon-logo.module.scss";
import { useThemeContext } from "@/src/context/Contexts";

export default function IconLogo({ className } : { className: string }) {
    const { theme } = useThemeContext();

    return (
        <div className={`${theme} ${styles.iconSize} ${className}`}>
            <ImageLogo />
        </div>
    )
}