
'use client';

import { useThemeContext } from "@/src/context/Contexts";

import styles from '@/src/app/content.module.scss';
import { roboto } from "@/src/ui/fonts/fonts";

export default function Home() {
  const { theme } = useThemeContext();

  return (
    <main className={`${theme} ${roboto.className} background`}>
      <div className="container">
        Main
      </div>
    </main>
  );
}
