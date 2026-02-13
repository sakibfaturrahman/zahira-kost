"use client";

import React from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const elem = document.getElementById(id);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#FAFBFF] border-t border-slate-200/60 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-16">
          {/* Brand Column - Wider on Desktop */}
          <div className="flex flex-col space-y-6 lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                Zahira<span className="text-[#EEB64B]">Kost</span>
              </span>
            </div>
            <p className="text-[15px] leading-relaxed text-slate-500 max-w-sm">
              Menyediakan hunian eksklusif yang tenang, aman, dan strategis.
              Pilihan tepat bagi profesional muda dan mahasiswa yang menghargai
              kualitas hidup.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Facebook size={18} />, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-600 hover:border-[#FFCB61] hover:bg-[#FFCB61] hover:text-white transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-6 lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900">
              Navigasi
            </h4>
            <ul className="flex flex-col space-y-4">
              {[
                { name: "Beranda", id: "home" },
                { name: "Tentang Kami", id: "about" },
                { name: "Pilihan Kamar", id: "rooms" },
                { name: "Fasilitas", id: "features" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className="text-[15px] text-slate-600 hover:text-[#EEB64B] hover:translate-x-1 transition-all duration-200 flex items-center group"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-6 lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900">
              Hubungi Kami
            </h4>
            <ul className="flex flex-col space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="mt-1 h-8 w-8 flex items-center justify-center rounded-lg bg-yellow-50 text-[#EEB64B]">
                  <MapPin size={18} />
                </div>
                <span className="text-[15px] text-slate-600 leading-snug">
                  Jl. Melati No. 123, <br />
                  Kec. Beji, Kota Depok
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-yellow-50 text-[#EEB64B]">
                  <Phone size={18} />
                </div>
                <span className="text-[15px] text-slate-600 font-medium">
                  +62 812 3456 7890
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-yellow-50 text-[#EEB64B]">
                  <Mail size={18} />
                </div>
                <span className="text-[15px] text-slate-600 font-medium">
                  halo@zahirakost.com
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Action */}
          <div className="flex flex-col space-y-6 lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900">
              Butuh Bantuan?
            </h4>
            <div className="p-5 rounded-2xl bg-[#FFCB61]/10 border border-[#FFCB61]/20">
              <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                Punya pertanyaan seputar ketersediaan kamar?
              </p>
              <a
                href="https://wa.me/6281234567890"
                className="inline-flex items-center justify-center w-full py-3 px-4 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors gap-2"
              >
                Tanya Lewat WA
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-10 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 text-center md:text-left">
            &copy; {currentYear}{" "}
            <span className="font-semibold text-slate-800">
              ZahiraKost Indonesia
            </span>
            . Seluruh hak cipta dilindungi.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-[#EEB64B] transition-colors"
            >
              Kebijakan Privasi
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-[#EEB64B] transition-colors"
            >
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
