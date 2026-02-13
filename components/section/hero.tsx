"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // 1. Menambahkan Type Definition pada useRef
  const containerRef = useRef<HTMLDivElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const rightSideRef = useRef<HTMLDivElement>(null);
  const bgAccentRef = useRef<HTMLDivElement>(null);

  // 2. Untuk array ref, definisikan sebagai array dari element
  const textElementsRef = useRef<
    (HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement | null)[]
  >([]);

  useEffect(() => {
    // Pastikan ref tidak null sebelum menjalankan GSAP
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
      )
        .fromTo(
          textElementsRef.current.filter(Boolean), // Filter agar tidak ada nilai null
          {
            y: 40,
            opacity: 0,
            skewY: 2,
          },
          {
            y: 0,
            opacity: 1,
            skewY: 0,
            duration: 1.2,
            stagger: 0.15,
          },
          "-=0.5",
        )
        .fromTo(
          rightSideRef.current,
          {
            scale: 0.9,
            opacity: 0,
            clipPath: "inset(0% 0% 100% 0%)",
          },
          {
            scale: 1,
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
          },
          "-=1",
        );

      gsap.to(".floating-card", {
        y: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      scrollTl.to(leftSideRef.current, { y: -50, opacity: 0.5 }, 0);
      scrollTl.to(rightSideRef.current, { y: -100 }, 0);
      scrollTl.to(bgAccentRef.current, { scaleX: 1.5, opacity: 0 }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#FAFAFA] pt-24 md:pt-0 overflow-hidden"
    >
      <div
        ref={bgAccentRef}
        className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-[#FFCB61]/10 to-transparent pointer-events-none"
      />

      <div className="container mx-auto grid min-h-screen grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 lg:px-12">
        <div ref={leftSideRef} className="z-10 flex flex-col space-y-8 ml-10">
          <div
            ref={(el) => {
              textElementsRef.current[0] = el;
            }}
            className="inline-flex w-fit items-center space-x-3 rounded-full bg-white border border-slate-100 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
            </span>
            <span>Tersedia 5 unit eksklusif</span>
          </div>

          <h1
            ref={(el) => {
              textElementsRef.current[1] = el;
            }}
            className="text-5xl font-bold tracking-tight text-slate-900 md:text-7xl leading-[1.05]"
          >
            Hunian tenang <br />
            di pusat <span className="text-amber-500 font-bold">kota.</span>
          </h1>

          <p
            ref={(el) => {
              textElementsRef.current[2] = el;
            }}
            className="max-w-md text-lg text-slate-500 md:text-xl font-light leading-relaxed"
          >
            Nikmati standar kenyamanan apartemen dengan fleksibilitas tinggi.
            Strategis, aman, dan dirancang untuk produktivitas Anda.
          </p>

          <div
            ref={(el) => {
              textElementsRef.current[3] = el;
            }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Button
              size="lg"
              className="bg-slate-900 text-white hover:bg-slate-800 px-10 h-14 rounded-full transition-all duration-300"
            >
              Eksplor Kamar
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-slate-600 hover:bg-slate-100 px-8 h-14 rounded-full"
            >
              Jadwalkan Visit
            </Button>
          </div>
        </div>

        <div
          ref={rightSideRef}
          className="relative h-[450px] w-full md:h-[600px]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
              alt="Interior ZahiraKost"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>

          <div className="floating-card absolute -left-6 bottom-12 rounded-2xl bg-white/90 backdrop-blur-md p-6 shadow-xl border border-white/20 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white bg-slate-300 shadow-sm"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 leading-none">
                  120+ Alumni
                </p>
                <p className="text-[12px] text-slate-500 mt-1">
                  Profesional & Mahasiswa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
