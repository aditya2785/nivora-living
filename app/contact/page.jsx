"use client";
import { useState, useRef } from "react";
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineClock,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setStatus(data.message);
    setLoading(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      messageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  return (
    <div>

      {/* Hero Banner */}
      <div className="bg-[#6B8F86] py-20 text-center text-black">
        <h1 className="text-5xl font-light tracking-wide">Contact Us</h1>
      </div>

      {/* Main Section */}
      <div className="px-32 py-24 max-xl:px-16 max-lg:px-10 max-md:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT SIDE */}
          <div className="space-y-12">

            <div>
              <h2 className="text-3xl font-light mb-6">Address</h2>
              <div className="flex items-start gap-4 text-lg font-light">
                <HiOutlineMapPin className="text-[#C8A75C] text-2xl mt-1" />
                <p>
                  Nivora Living Pvt. Ltd.<br />
                  C-68, Sector 10<br />
                  Noida, UP 201301<br />
                  India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-lg font-light">
              <HiOutlinePhone className="text-[#C8A75C] text-2xl" />
              <p>+91-98765 43210</p>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-6">Email</h2>
              <div className="flex items-center gap-4 text-lg font-light">
                <HiOutlineEnvelope className="text-[#C8A75C] text-2xl" />
                <p>nivoraliving@gmail.com</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-6">Working Hours</h2>
              <div className="flex items-center gap-4 text-lg font-light">
                <HiOutlineClock className="text-[#C8A75C] text-2xl" />
                <p>Mon–Sat: 10:00 – 19:00</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-6">Follow Us</h2>
              <div className="flex gap-6 text-2xl text-[#C8A75C]">
                <a
                  href="https://www.facebook.com/profile.php?id=61588533831742"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/shopnivoraliving/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaXTwitter />
                </a>
                <a
                  href="https://in.pinterest.com/shopnivoraliving/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPinterestP />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE — FORM */}
          <div>

            <h2 className="text-4xl font-light mb-10">
              Send Your Question
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">

              <div>
                <label className="block mb-2 text-lg font-light">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-black/20 p-4 outline-none focus:border-black transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-lg font-light">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-black/20 p-4 outline-none focus:border-black transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-lg font-light">
                  Your Phone Number
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border border-black/20 p-4 outline-none focus:border-black transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-lg font-light">
                  Your Message (optional)
                </label>
                <textarea
                  rows="6"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full border border-black/20 p-4 outline-none focus:border-black resize-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="border border-black px-10 py-4 text-lg font-light hover:bg-black hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "SUBMIT"}
              </button>

              {status && (
                <div
                  ref={messageRef}
                  className="mt-6 border border-green-500/40 bg-green-50 text-green-700 px-6 py-4 text-sm"
                >
                  {status}
                </div>
              )}

            </form>

          </div>

        </div>
      </div>
    </div>
  );
}