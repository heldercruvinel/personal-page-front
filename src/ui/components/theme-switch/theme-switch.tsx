
import { useThemeContext } from "@/src/context/Contexts";
import styles from "@/src/ui/components/theme-switch/theme-switch.module.scss";
import LightMode from "../../icons/light-mode/light-mode";
import DarkMode from "../../icons/dark-mode/dark-mode";

export default function ThemeSwitch() {

    const { theme, setTheme } = useThemeContext();
    const ThemeIcon = theme == 'dark' ? LightMode : DarkMode;
    
    return (
        <div>
            <button 
                onClick={() => {
                    setTheme(theme == 'light' ? 'dark' : 'light');
                    return theme;
                }}
                className={`${styles.buttonIcon} tertiary`}
            >
                <ThemeIcon 
                    className={`${styles.themeIcon} tertiary`}
                />
            </button>
        </div>
        
    )
}