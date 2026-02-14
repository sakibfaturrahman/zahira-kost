"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Menambahkan generic type pada useRef untuk akurasi TypeScript
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  // Menggunakan HTMLDivElement atau HTMLElement untuk array ref
  const textElementsRef = useRef<(HTMLElement | HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animasi Gambar: Scale & Fade
      if (imageWrapperRef.current) {
        gsap.fromTo(
          imageWrapperRef.current,
          { x: -100, opacity: 0, scale: 0.9 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
              toggleActions: "play reverse play reverse",
            },
          },
        );
      }

      // 2. Animasi Teks: Staggered Fade In
      // Memfilter null agar GSAP tidak error
      const validElements = textElementsRef.current.filter((el) => el !== null);

      gsap.fromTo(
        validElements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Helper dengan tipe parameter eksplisit
  const addToRefs = (el: HTMLElement | HTMLDivElement | null) => {
    if (el && !textElementsRef.current.includes(el)) {
      textElementsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[#FAFAFA] py-24 lg:py-40 px-6 overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-0" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:gap-24 md:grid-cols-2">
          {/* SISI KIRI: FOTO */}
          <div ref={imageWrapperRef} className="relative group">
            <div className="absolute -top-6 -left-6 h-full w-full border-2 border-[#FFCB61]/30 rounded-[2rem] -z-10 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2" />

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <Image
                src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Interior"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            <div className="absolute -bottom-8 -right-4 lg:-right-8 rounded-3xl bg-white p-8 shadow-2xl border border-slate-50">
              <div className="flex flex-col items-center">
                <span className="text-5xl font-extrabold text-slate-900 leading-none">
                  10<span className="text-[#FFCB61]">+</span>
                </span>
                <span className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">
                  Years of <br /> Excellence
                </span>
              </div>
            </div>
          </div>

          {/* SISI KANAN: KONTEN TEKS */}
          <div className="flex flex-col">
            <header>
              <h2
                ref={addToRefs}
                className="text-5xl lg:text-7xl font-bold leading-[1.1] text-slate-900 tracking-tight"
              >
                Bikin rumah jadi <br />
                <span className="text-slate-400 font-bold">
                  tempat paling nyaman.
                </span>
              </h2>
            </header>

            <p
              ref={addToRefs}
              className="text-lg lg:text-xl leading-relaxed text-slate-600 mb-12 max-w-xl"
            >
              Bagi kami, rumah bukan cuma soal bangunan. Ini adalah tempat di
              mana Anda bisa tenang, beristirahat dengan maksimal, dan memulai
              hari dengan semangat baru setiap harinya.
            </p>

            <div
              ref={addToRefs}
              className="grid grid-cols-1 gap-10 sm:grid-cols-2"
            >
              <div className="group">
                <h4 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                  Tujuan Kami
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed border-l-2 border-slate-100 pl-4 group-hover:border-[#FFCB61] transition-colors">
                  Menjadi pilihan utama buat siapa saja yang mencari hunian
                  simpel, modern, dan tetap terasa eksklusif.
                </p>
              </div>
              <div className="group">
                <h4 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                  Cara Kami
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed border-l-2 border-slate-100 pl-4 group-hover:border-[#FFCB61] transition-colors">
                  Selalu memberikan pelayanan yang jujur dan memudahkan urusan
                  Anda lewat sistem yang praktis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
