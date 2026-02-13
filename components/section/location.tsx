"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  TrainFront,
  School,
  ShoppingBag,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const nearbyPlaces = [
  {
    category: "Pendidikan",
    items: [
      { name: "Universitas Indonesia", time: "5 mnt" },
      { name: "Gunadarma Kampus D", time: "8 mnt" },
    ],
    icon: <School className="h-5 w-5" />,
  },
  {
    category: "Transportasi",
    items: [
      { name: "Stasiun Pondok Cina", time: "3 mnt" },
      { name: "Halte TransJakarta", time: "5 mnt" },
    ],
    icon: <TrainFront className="h-5 w-5" />,
  },
  {
    category: "Pusat Belanja",
    items: [
      { name: "Margo City Mall", time: "10 mnt" },
      { name: "Pasar Tradisional", time: "5 mnt" },
    ],
    icon: <ShoppingBag className="h-5 w-5" />,
  },
];

const Location = () => {
  const sectionRef = useRef(null);
  const textContentRef = useRef(null);
  const mapWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in Up untuk Text Content
      gsap.fromTo(
        textContentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Subtle Parallax untuk Map
      gsap.fromTo(
        mapWrapperRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="location"
      className="bg-white py-24 px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* SISI KIRI: KONTEN TEKS */}
          <div ref={textContentRef} className="lg:col-span-5">
            <header className="mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
                Lokasi Strategis
              </span>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Segalanya dalam{" "}
                <span className="text-amber-500">Jangkauan.</span>
              </h2>
              <p className="mt-5 text-slate-600 text-lg leading-relaxed">
                Akses instan ke transportasi publik, pusat pendidikan, dan area
                gaya hidup utama di jantung kota.
              </p>
            </header>

            <div className="grid grid-cols-1 gap-4">
              {nearbyPlaces.map((group, idx) => (
                <div
                  key={idx}
                  className="group p-5 rounded-2xl bg-zinc-50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-amber-500 shadow-sm border border-slate-100 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      {group.icon}
                    </div>
                    <h4 className="font-bold text-lg text-slate-900">
                      {group.category}
                    </h4>
                  </div>

                  <div className="space-y-3 pl-14">
                    {group.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center text-sm"
                      >
                        <span className="text-slate-500 font-medium">
                          {item.name}
                        </span>
                        <span className="font-bold text-slate-800 bg-white px-2 py-1 rounded-lg border border-slate-100 shadow-sm">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://maps.google.com"
                target="_blank"
                className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-amber-500 transition-all gap-2 group shadow-lg shadow-slate-200"
              >
                Petunjuk Lokasi
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          {/* SISI KANAN: MAP EMBED */}
          <div ref={mapWrapperRef} className="lg:col-span-7 sticky top-10">
            <div className="relative h-[550px] w-full overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
              {/* Floating Address Card */}
              <div className="absolute bottom-6 left-6 right-6 z-10 md:left-8 md:right-auto">
                <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-xl border border-white/20 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-white shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Alamat Unit
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Jl. Melati No. 123, Depok, Jawa Barat
                    </p>
                  </div>
                </div>
              </div>

              <iframe
                title="ZahiraKost Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.232353787747!2d106.8306!3d-6.3639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjEnNTAuMCJTIDEwNsKwNDknNTAuMiJF!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="brightness-95 contrast-110 hover:brightness-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
