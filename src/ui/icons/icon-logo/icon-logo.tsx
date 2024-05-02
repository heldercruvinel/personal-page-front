import ImageLogo from "@/src/ui/components/logo/image-logo/image-logo"
import styles from "@/src/ui/icons/icon-logo/icon-logo.module.scss";

export default function IconLogo({ className } : { className: string }) {
    return (
        <div className={`${styles.iconSize} ${className}`}>
            <ImageLogo />
        </div>
    )
}