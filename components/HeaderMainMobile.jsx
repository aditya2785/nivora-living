"use client";

import { useState } from "react";
import Image from "next/image";
import { HiChevronDown, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import EngLanguage from "../public/eng language.png";
import Link from "next/link";
import CartHeaderElement from "@/components/CartHeaderElement";

const HeaderMainMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ===== MOBILE HEADER BAR ===== */}
      <header className="fixed top-0 left-0 w-full bg-white border-b border-black/10 lg:hidden z-50">

        <div className="flex items-center justify-between px-4 h-[60px]">

          {/* Hamburger */}
          <button onClick={() => setIsOpen(true)}>
            <HiOutlineMenu className="text-2xl" />
          </button>

          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Nivora Living Logo"
              width={85}
              height={28}
              priority
            />
          </Link>

          {/* Cart */}
          <CartHeaderElement />
        </div>
      </header>

      {/* ===== OVERLAY ===== */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* ===== SLIDE MENU ===== */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] bg-white z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-6 h-[60px] border-b border-black/10">
          <p className="text-sm tracking-widest uppercase">Menu</p>
          <button onClick={() => setIsOpen(false)}>
            <HiOutlineX className="text-2xl" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col px-6 py-8 space-y-6 text-sm tracking-[0.15em] uppercase">

          <Link href="/" onClick={() => setIsOpen(false)}>
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

        {/* Language */}
        <div className="absolute bottom-10 left-6 flex items-center gap-2">
          <Image src={EngLanguage} alt="English language" className="w-5" />
          <span className="text-xs tracking-wide">EN</span>
          <HiChevronDown className="text-sm" />
        </div>
      </div>
    </>
  );
};

export default HeaderMainMobile;