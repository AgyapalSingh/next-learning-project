import { Bowlby_One_SC, Proza_Libre, Rammetto_One } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/Header";
import SmoothScrolling from "./Components/SmoothScrolling";

const bowlbyOneSC = Bowlby_One_SC({
  weight: ["400"],
  variable: "--font-bowlby-one-sc",
  subsets: ["latin"],
});

const rammettoOne = Rammetto_One({
  weight: ["400"],
  variable: "--font-rammetto-one",
  subsets: ["latin"],
});

const prozaLibre = Proza_Libre({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-proza-libre",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${bowlbyOneSC.variable} ${prozaLibre.variable} ${rammettoOne.variable}`}
      >
        <Header />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
