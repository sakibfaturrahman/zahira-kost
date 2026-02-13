"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Info, Bed, LayoutGrid, MapPin } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  const navLinks = [
    { name: "Beranda", href: "#home", icon: <Home size={18} /> },
    { name: "Tentang", href: "#about", icon: <Info size={18} /> },
    { name: "Kamar", href: "#rooms", icon: <Bed size={18} /> },
    { name: "Fasilitas", href: "#features", icon: <LayoutGrid size={18} /> },
    { name: "Lokasi", href: "#location", icon: <MapPin size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-0 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <nav
        className={`container mx-auto max-w-6xl transition-all duration-500 rounded-[2rem] ${
          isScrolled
            ? "bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-white/20 py-2 px-6"
            : "bg-transparent py-2 px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo dengan sentuhan Gradient */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              ZahiraKost
            </span>
          </div>

          {/* Desktop Menu - Minimalist Pill Style */}
          <div className="hidden md:flex items-center bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`relative px-5 py-2 text-sm font-semibold transition-all duration-300 rounded-xl ${
                    isActive
                      ? "text-slate-900"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white shadow-sm rounded-xl"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <Button className="bg-slate-900 text-white hover:bg-slate-800 font-bold rounded-2xl px-6 py-6 transition-all hover:shadow-xl active:scale-95">
              Pesan Sekarang
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex items-center justify-center h-12 w-12 rounded-2xl bg-slate-100 text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-4 right-4 md:hidden"
          >
            <div className="bg-white/90 backdrop-blur-2xl rounded-[2.5rem] border border-slate-100 shadow-2xl p-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-4 text-lg font-bold py-4 px-6 rounded-2xl transition-all ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-[#FFCB61] text-slate-900 shadow-lg shadow-[#FFCB61]/20"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                  onClick={(e) => handleScrollTo(e, link.href)}
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
              <hr className="my-2 border-slate-100" />
              <Button className="w-full bg-slate-900 text-white font-bold py-8 rounded-2xl shadow-xl">
                Daftar Sekarang
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
