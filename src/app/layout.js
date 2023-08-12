import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BjEventMarket - Accueil",
  description: "Découvrez, créez des évènements autour de vous",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className} style={{backgroundColor: '#f7f3f394'}}>

        {children}
      </body>
    </html>
  );
}
