import {  Outfit} from "next/font/google";
import "./globals.css";

export const metadata = {
  title: 'Movie Website',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  description: "Generated by create next app",
};
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${outfit.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
