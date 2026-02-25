"use client";

import { useState } from "react";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import EngLanguage from "../public/eng language.png";
import Link from "next/link";
import CartHeaderElement from "@/components/CartHeaderElement";

const HeaderMainMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="md:hidden fixed top-0 left-0 w-full bg-white border-b border-black/10 z-50">

      {/* Top Row */}
      <div className="flex items-center justify-between px-4 h-[60px]">

        {/* Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <HiOutlineX className="text-2xl" />
          ) : (
            <HiOutlineMenu className="text-2xl" />
          )}
        </button>

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

      {/* Slide Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-6 text-sm tracking-[0.2em] uppercase border-t border-black/5">
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setIsOpen(false);
            }}
          >
            Home
          </Link>

          <Link href="/shop" onClick={() => setIsOpen(false)}>
            Shop
          </Link>

          <Link href="/about-us" onClick={() => setIsOpen(false)}>
            About
          </Link>

          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>

    </header>
  );
};

export default HeaderMainMobile;