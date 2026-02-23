import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";
import EngLanguage from "../public/eng language.png";
import Link from "next/link";
import CartHeaderElement from "@/components/CartHeaderElement";

const HeaderMainMobile = async () => {
  return (
    <header className="bg-primary border-b border-black/10 px-6 py-5 md:hidden">

      {/* Top Row */}
      <div className="flex items-center justify-between">

        {/* Language */}
        <div className="flex items-center gap-x-2">
          <Image src={EngLanguage} alt="English language" className="w-6" />
          <p className="text-blackPrimary text-xs tracking-wide">EN</p>
          <HiChevronDown className="text-blackPrimary text-sm" />
        </div>

        {/* Logo */}
<Link href="/" className="flex items-center justify-center">
  <Image
    src="/logo.png"
    alt="Nivora Living Logo"
    width={120}
    height={40}
    priority
    className="object-contain"
  />
</Link>

        {/* Cart */}
        <CartHeaderElement />

      </div>

      {/* Navigation */}
      <nav className="flex justify-center gap-6 mt-6 text-xs tracking-widest uppercase">
        <Link
          href="/"
          className="text-blackPrimary hover:opacity-60 transition"
        >
          Home
        </Link>

        <Link
          href="/shop"
          className="text-blackPrimary hover:opacity-60 transition"
        >
          Shop
        </Link>

        <Link
          href="/about-us"
          className="text-blackPrimary hover:opacity-60 transition"
        >
          About
        </Link>

        <Link
          href="/contact"
          className="text-blackPrimary hover:opacity-60 transition"
        >
          Contact
        </Link>
      </nav>

    </header>
  );
};

export default HeaderMainMobile;