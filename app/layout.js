import { Merriweather } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Nivora Living | Luxury Indian Metal Home Decor",
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
  metadataBase: new URL("https://nivoraliving.co"),
  openGraph: {
    title: "Nivora Living | Aesthetic Indian-Inspired Metal Home Decor",
    description:
      "Discover timeless Indian-inspired metal home decor crafted for modern living.",
    url: "https://nivoraliving.co",
    siteName: "Nivora Living",
    images: [
      {
        url: "/nivora-hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ CRITICAL FIX FOR MOBILE RESPONSIVENESS */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nivora Living",
              url: "https://nivoraliving.co",
              logo: "https://nivoraliving.co/logo.png",
              sameAs: [
                "https://www.instagram.com/shopnivoraliving/",
                "https://www.facebook.com/profile.php?id=61588533831742",
                "https://x.com/NivoraLiving",
                "https://in.pinterest.com/shopnivoraliving/",
                "https://www.youtube.com/@NivoraLiving",
                "https://www.linkedin.com/in/nivoraliving/",
                "https://nivoraliving.etsy.com"
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${merriweather.className} antialiased bg-white text-secondary`}
      >
        <Header />

        {/* Mobile = 60px header | Desktop = 110px header */}
        <main className="pt-[60px] md:pt-[110px] bg-white">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}