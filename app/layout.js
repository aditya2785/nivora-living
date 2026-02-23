import { Merriweather } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Nivora Living | Aesthetic Indian-Inspired Metal Home Decor",
    template: "%s | Nivora Living",
  },
  description:
    "Discover timeless Indian-inspired metal home decor crafted for modern living. From elegant diya stands to artistic candle holders, Nivora Living brings warmth, heritage, and global sophistication to your space.",
  keywords: [
    "Indian metal home decor",
    "aesthetic home decor",
    "luxury metal decor",
    "peacock diya stand",
    "decorative candle holders",
    "modern ethnic decor",
    "international home styling",
  ],
  metadataBase: new URL("https://www.nivoraliving.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${merriweather.className} antialiased bg-white text-secondary`}
      >
        <Header />
        <main className="pt-[100px] bg-white">
  {children}
</main>
        <Footer />
      </body>
    </html>
  );
}