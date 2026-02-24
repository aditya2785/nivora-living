import EngLanguage from "../public/eng language.png";
import { HiChevronDown } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import CartHeaderElement from "./CartHeaderElement";

const HeaderMain = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 px-16 hidden lg:block z-50"
      
      <div className="flex items-center justify-between h-[110px]">

        {/* LEFT SIDE — LOGO */}
        <Link href="/" className="flex items-center">
        <Image
            src="/logo.png"
            alt="Nivora Living Logo"
            width={210}
            height={70}
            priority
            className="object-contain"
        />
        </Link>

        {/* CENTER — NAVIGATION */}
        <nav className="flex gap-12 text-sm tracking-widest uppercase">
          <Link
            href="/"
            className="hover:opacity-60 transition"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="hover:opacity-60 transition"
          >
            Shop
          </Link>

          <Link
            href="/about-us"
            className="hover:opacity-60 transition"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="hover:opacity-60 transition"
          >
            Contact
          </Link>
        </nav>

        {/* RIGHT SIDE — LANGUAGE + CART */}
        <div className="flex items-center gap-8">

          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={EngLanguage} alt="English language" className="w-6" />
            <span className="text-sm tracking-wide">EN</span>
            <HiChevronDown className="text-base" />
          </div>

          <CartHeaderElement />

        </div>

      </div>
    </header>
  );
};

export default HeaderMain;