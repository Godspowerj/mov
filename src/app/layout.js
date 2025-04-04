import {  Outfit} from "next/font/google";
import "./globals.css";


export const metadata = {
  title: 'MovStream',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  description: "MovStream is your ultimate destination for exploring trending movies, top-rated films, popular TV shows, and upcoming releases. Stay updated with the latest in entertainment!",
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
