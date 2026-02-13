"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Wifi, Bath, ShieldCheck, Zap, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Akses 24 Jam",
    desc: "Kebebasan keluar masuk dengan sistem kunci mandiri praktis.",
    icon: <Clock className="h-5 w-5" />,
    gridClass: "md:col-span-2 lg:col-span-1", // Normal
  },
  {
    title: "WiFi Cepat",
    desc: "Koneksi stabil untuk produktivitas kerja remote atau streaming tanpa hambatan.",
    icon: <Wifi className="h-5 w-5" />,
    gridClass: "md:col-span-2 lg:col-span-2", // Lebih lebar untuk highlight
  },
  {
    title: "Kamar Mandi Dalam",
    desc: "Privasi maksimal dengan fasilitas bersih dan terawat.",
    icon: <Bath className="h-5 w-5" />,
    gridClass: "md:col-span-1",
  },
  {
    title: "Keamanan CCTV",
    desc: "Monitor 24 jam memastikan lingkungan tetap kondusif.",
    icon: <ShieldCheck className="h-5 w-5" />,
    gridClass: "md:col-span-1",
  },
  {
    title: "Lokasi Strategis",
    desc: "Dekat kampus, perkantoran, dan pusat perbelanjaan utama.",
    icon: <MapPin className="h-5 w-5" />,
    gridClass: "md:col-span-2 lg:col-span-1",
  },
  {
    title: "Listrik & Air",
    desc: "Instalasi modern dengan ketersediaan air bersih terjamin.",
    icon: <Zap className="h-5 w-5" />,
    gridClass: "md:col-span-2 lg:col-span-3", // Footer feature yang lebar
  },
];

const Features = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="bg-white py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header yang lebih compact */}
        <div className="mb-12">
          <span className="text-[#FFCB61] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Fasilitas Unggulan
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Kenapa memilih <span className="text-[#FFCB61]">ZahiraKost?</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-600 leading-relaxed">
            Fokus kami adalah kenyamanan dan privasi untuk mendukung gaya hidup
            produktif Anda.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`group overflow-hidden relative rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 ${item.gridClass}`}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#FFCB61] shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-snug text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Minimalist Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#FFCB61] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
