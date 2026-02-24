import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";
import EngLanguage from "../public/eng language.png";
import Link from "next/link";
import CartHeaderElement from "@/components/CartHeaderElement";

const HeaderMainMobile = () => {
  return (
    <header className="md:hidden fixed top-0 left-0 w-full bg-white border-b border-black/10 z-50">

      {/* Top Row */}
      <div className="flex items-center justify-between px-4 h-[60px]">

        {/* Language */}
        <div className="flex items-center gap-x-1">
          <Image src={EngLanguage} alt="English language" className="w-4" />
          <p className="text-blackPrimary text-[11px] tracking-wide">EN</p>
          <HiChevronDown className="text-blackPrimary text-xs" />
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Nivora Living Logo"
            width={90}
            height={30}
            priority
            className="object-contain"
          />
        </Link>

        {/* Cart */}
        <CartHeaderElement />
      </div>

      {/* Navigation */}
      <nav className="flex justify-center gap-4 py-2 text-[11px] tracking-[0.15em] uppercase border-t border-black/5">
        <Link href="/" className="hover:opacity-60 transition">
          Home
        </Link>

        <Link href="/shop" className="hover:opacity-60 transition">
          Shop
        </Link>

        <Link href="/about-us" className="hover:opacity-60 transition">
          About
        </Link>

        <Link href="/contact" className="hover:opacity-60 transition">
          Contact
        </Link>
      </nav>

    </header>
  );
};

export default HeaderMainMobile;