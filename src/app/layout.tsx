import type { Metadata } from "next";
import { ThemeProvider } from '@/src/context/Providers';

export const metadata: Metadata = {
  title: "To Code Café",
  description: "Website to study about software devolopment followed with a good coffee",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider> 
      </body>
    </html>
  );
}
