import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";
import EngLanguage from "../public/eng language.png";
import Link from "next/link";
import CartHeaderElement from "@/components/CartHeaderElement";

const HeaderMainMobile = async () => {
  return (
    <header className="bg-primary border-b border-black/10 px-4 py-3 md:hidden">

      {/* Top Row */}
      <div className="flex items-center justify-between">

        {/* Language */}
        <div className="flex items-center gap-x-1">
          <Image src={EngLanguage} alt="English language" className="w-5" />
          <p className="text-blackPrimary text-[11px] tracking-wide">EN</p>
          <HiChevronDown className="text-blackPrimary text-xm" />
        </div>

        {/* Logo */}
<Link href="/" className="flex items-center justify-center">
  <Image
    src="/logo.png"
    alt="Nivora Living Logo"
    width={100}
    height={35}
    priority
    className="object-contain"
  />
</Link>

        {/* Cart */}
        <CartHeaderElement />

      </div>

  {/* Navigation */}
  <nav className="flex justify-center gap-5 mt-3 text-[11px] tracking-[0.15em] uppercase">
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