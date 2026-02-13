"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BedDouble, Maximize, Wind, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const roomTypes = [
  {
    name: "Standar",
    price: "1.500.000",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop",
    features: ["Single", "Fan", "3x3m"],
    tag: "Terlaris",
  },
  {
    name: "Deluxe",
    price: "2.200.000",
    image:
      "https://images.unsplash.com/photo-1616594111704-38c42065ff4f?q=80&w=2070&auto=format&fit=crop",
    features: ["Queen", "AC", "4x4m"],
    tag: "Populer",
  },
  {
    name: "Suite",
    price: "3.500.000",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop",
    features: ["King", "AC + TV", "5x5m"],
    tag: "Premium",
  },
];

const Rooms = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="rooms" className="bg-[#FAFAFA] py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-[#FFCB61] font-bold tracking-wider uppercase text-sm">
              Pilihan Kamar
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pilih <span className="text-[#FFCB61]">Kenyamananmu</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-sm md:text-base leading-relaxed">
            Temukan ruang yang sesuai dengan gaya hidup dan produktivitas Anda.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomTypes.map((room, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-800 shadow-sm">
                  {room.tag}
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/40 backdrop-blur-sm p-3 rounded-2xl flex justify-between items-center text-white">
                  <span className="text-xs font-medium opacity-90">
                    Mulai dari
                  </span>
                  <span className="font-bold text-sm">
                    Rp {room.price}
                    <span className="text-[10px] opacity-70">/bln</span>
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                  Tipe {room.name}
                </h3>

                {/* Features Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                    <BedDouble size={14} className="text-[#FFCB61]" />
                    <span className="text-[11px] font-semibold text-slate-600">
                      {room.features[0]}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                    <Wind size={14} className="text-[#FFCB61]" />
                    <span className="text-[11px] font-semibold text-slate-600">
                      {room.features[1]}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                    <Maximize size={14} className="text-[#FFCB61]" />
                    <span className="text-[11px] font-semibold text-slate-600">
                      {room.features[2]}
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <Button className="mt-auto w-full bg-slate-900 text-white hover:bg-[#FFCB61] hover:text-slate-900 group/btn transition-all duration-300 py-6 rounded-xl font-bold flex items-center justify-center gap-2">
                  Cek Detail Kamar
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="text-slate-400 hover:text-slate-900 font-bold text-sm underline underline-offset-8 transition-colors">
            Lihat perbandingan fasilitas antar tipe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
