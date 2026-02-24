import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";
import EngLanguage from "../public/eng language.png";
import Link from "next/link";
import CartHeaderElement from "@/components/CartHeaderElement";

const HeaderMainMobile = async () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-black/10 md:hidden z-50">

      {/* Top Row */}
      <div className="flex items-center justify-between px-4 h-[60px]">

        {/* Language */}
        <div className="flex items-center gap-x-1">
          <Image src={EngLanguage} alt="English language" className="w-4" />
          <p className="text-blackPrimary text-[10px] tracking-wide">EN</p>
          <HiChevronDown className="text-blackPrimary text-xm" />
        </div>

        {/* Logo */}
<Link href="/" className="flex items-center justify-center">
  <Image
    src="/logo.png"
    alt="Nivora Living Logo"
    width={85}
    height={28}
    priority
    className="object-contain"
  />
</Link>

        {/* Cart */}
        <CartHeaderElement />

      </div>

  {/* Navigation */}
  <nav className="flex justify-center gap-4 py-2 text-[10px] tracking-[0.12em] uppercase border-t border-black/5">
    <Link href="/" className="text-blackPrimary hover:opacity-60 transition">
      Home
    </Link>

    <Link href="/shop" className="text-blackPrimary hover:opacity-60 transition">
      Shop
    </Link>

    <Link href="/about-us" className="text-blackPrimary hover:opacity-60 transition">
      About
    </Link>

    <Link href="/contact" className="text-blackPrimary hover:opacity-60 transition">
      Contact
    </Link>
  </nav>

    </header>
  );
};

export default HeaderMainMobile;