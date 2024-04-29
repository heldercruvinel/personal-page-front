'use client';

import { createContext, useContext } from "react";

export const ThemeContext = createContext({ 
    theme: 'light', 
    setTheme: (theme: string) => {} 
});

export const MobileMenuContext = createContext({ 
    isOpened: false, 
    setIsOpened: (opened: boolean) => {} 
});

export function useThemeContext() {
    return useContext(ThemeContext);
}

export function useMobileMenuContext() {
    return useContext(MobileMenuContext);
}