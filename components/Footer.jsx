"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaEtsy,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter
} from "react-icons/fa6";

import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineMapPin } from "react-icons/hi2";

import FooterBottom from "./FooterBottom";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email) return;

  const res = await fetch("/api/subscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();
  setMessage(data.message);
  setEmail("");
};
  return (
    <footer className="bg-[#f5f3ee] text-blackPrimary border-t border-black/10">

      <div className="max-w-7xl mx-auto px-12 py-24 max-lg:px-8 max-md:px-6">

        {/* ===================== */}
        {/* TOP 3 COLUMN SECTION */}
        {/* ===================== */}

        <div className="grid grid-cols-3 gap-32 max-lg:grid-cols-1 max-lg:gap-16">

          {/* COLUMN 1 */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.35em] mb-10 opacity-60">
              Explore
            </h3>

            <ul className="space-y-5 text-sm opacity-80">
              <li><Link href="/shop" className="hover:opacity-50 transition">Shop All</Link></li>
              <li><Link href="/about-us" className="hover:opacity-50 transition">Our Story</Link></li>
              <li><Link href="/contact" className="hover:opacity-50 transition">Contact</Link></li>
              <li><Link href="/shipping-policy" className="hover:opacity-50 transition">International Shipping</Link></li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.35em] mb-10 opacity-60">
              Legal
            </h3>

            <ul className="space-y-5 text-sm opacity-80">
              <li><Link href="/refund-policy" className="hover:opacity-50 transition">Refund Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:opacity-50 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:opacity-50 transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.35em] mb-10 opacity-60">
              Our Contacts
            </h3>

            <div className="space-y-6 text-sm opacity-80">

              <div className="flex items-start gap-3">
                <HiOutlineMapPin className="mt-1 text-base" />
                <p>C-68, Sector 20, Noida, UP 201301, India</p>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlinePhone />
                <p>+91 93151 44408</p>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlineEnvelope />
                <p>nivoraliving@gmail.com</p>
              </div>

            </div>
          </div>

        </div>

        {/* ===================== */}
        {/* SOCIAL ICONS */}
        {/* ===================== */}

        <div className="mt-20 flex justify-center gap-6">

          {[
            { icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=61588533831742" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/shopnivoraliving/" },
            { icon: <FaPinterestP />, link: "https://in.pinterest.com/shopnivoraliving/" },
            { icon: <FaEtsy />, link: "https://nivoraliving.etsy.com" },
            { icon: <FaYoutube />, link: "https://www.youtube.com/channel/UC-ntLy6lToFolGdyMtfk9CQ" },
            { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/nivoraliving/" },
            { icon: <FaXTwitter />, link: "https://x.com/NivoraLiving" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center
                         border border-black/20 rounded-full
                         text-sm
                         opacity-60
                         hover:bg-black hover:text-white
                         hover:opacity-100
                         transition duration-300"
            >
              {item.icon}
            </a>
          ))}

        </div>

        {/* ===================== */}
        {/* NEWSLETTER SECTION */}
        {/* ===================== */}

<div className="mt-20 text-center">

  <p className="text-xs uppercase tracking-[0.4em] opacity-60 mb-4">
    Join the
  </p>

  <h3 className="text-4xl font-light mb-8">
    Nivora Circle
  </h3>

  <p className="text-sm opacity-70 max-w-xl mx-auto mb-10 leading-relaxed">
    Be the first to discover new collections, exclusive releases,
    and curated styling inspiration for refined living spaces.
  </p>

  <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">

    <input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="w-full bg-transparent border-b border-black/30 
                 pb-3 pr-10 text-sm text-center
                 focus:outline-none focus:border-black 
                 placeholder:opacity-40"
    />

<button
  type="submit"
  className="absolute right-0 bottom-3 text-xs uppercase tracking-[0.3em] opacity-60 hover:opacity-100 transition"
>
  Submit
</button>

  </form>

  {message && (
    <p className="text-sm mt-6 opacity-70">
      {message}
    </p>
  )}

</div>

        {/* ===================== */}
        {/* FOOTER BOTTOM */}
        {/* ===================== */}

        <div className="mt-20">
          <FooterBottom />
        </div>

      </div>

    </footer>
  );
};

export default Footer;