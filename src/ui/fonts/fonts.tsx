import { Roboto } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({
    weight: "400",
    style: ['normal', 'italic'],
    subsets: ['latin'],
    fallback: ['system-ui', 'arial']
  })

export const beverage = localFont({ src: "./external-fonts/beverage.otf" })

export const commitMono = localFont({ src: "./external-fonts/commit-mono-regular.otf" })

export const unageo = localFont({ src: "./external-fonts/unageo-medium.ttf" })

export const geoMatrix = localFont({ src: "./external-fonts/geomatrixMedium.ttf" })