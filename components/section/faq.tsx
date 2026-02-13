"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  CalendarDays,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Apakah harga sudah termasuk biaya listrik?",
    answer:
      "Untuk tipe standar, biaya listrik menggunakan sistem token mandiri. Untuk tipe deluxe dan suite, biaya listrik sudah termasuk dalam biaya sewa bulanan.",
  },
  {
    question: "Bagaimana sistem keamanan di ZahiraKost?",
    answer:
      "Kami menggunakan sistem akses kartu untuk pintu utama, penjagaan keamanan malam hari, dan pantauan CCTV 24 jam di seluruh area publik.",
  },
  {
    question: "Apakah diperbolehkan membawa tamu menginap?",
    answer:
      "Tamu diperbolehkan berkunjung hingga jam 22.00 WIB. Untuk tamu yang menginap, wajib melapor kepada pengelola dan akan dikenakan biaya tambahan.",
  },
  {
    question: "Apakah tersedia area parkir untuk mobil?",
    answer:
      "Tersedia area parkir motor gratis. Untuk mobil, tersedia slot terbatas dengan biaya langganan tambahan per bulan.",
  },
];

const FaqCta = () => {
  const containerRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // FAQ Stagger Animation
      gsap.from(".faq-item", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top bottom-=100",
        },
      });

      // CTA Animation
      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top bottom-=50",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#F8FAFC] py-20 px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl">
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-amber-600 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            Support Center
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
            Punya <span className="text-amber-500">Pertanyaan?</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium">
            Segala hal yang perlu kamu ketahui tentang kenyamanan tinggal di
            ZahiraKost.
          </p>
        </div>

        {/* ACCORDION FAQ */}
        <div ref={faqRef} className="space-y-4 mb-20">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="faq-item border border-slate-200 bg-white rounded-2xl px-2 transition-all hover:border-amber-200 data-[state=open]:ring-2 data-[state=open]:ring-amber-500/10 data-[state=open]:border-amber-500"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-bold text-slate-800 hover:no-underline py-5 px-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed px-4 pb-5 text-[15px] md:text-base font-medium">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* BRIGHT & CLEAN CTA CARD */}
        <div
          ref={ctaRef}
          className="rounded-[3rem] bg-white border border-slate-200 p-8 md:p-12 text-center relative overflow-hidden shadow-xl shadow-slate-200/60"
        >
          {/* Soft Decorative Background Circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-64 w-64 bg-amber-100/50 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 h-64 w-64 bg-blue-50/50 blur-3xl rounded-full" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-slate-900">
              Mulai Petualanganmu di{" "}
              <span className="text-amber-500">ZahiraKost</span>
            </h2>
            <p className="mt-4 text-slate-500 text-base md:text-lg font-medium max-w-lg mx-auto">
              Booking unit impianmu hari ini. Proses 100% online, tanpa ribet,
              dan transparan.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-amber-500 text-white hover:bg-amber-600 font-bold px-10 py-7 text-lg rounded-2xl shadow-lg shadow-amber-200 transition-all hover:scale-[1.03] active:scale-95"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Tanya CS
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-bold px-8 py-7 text-lg rounded-2xl group transition-all"
              >
                Jadwal Survei
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <p className="mt-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
              Tersedia 12 Slot Terakhir Bulan Ini
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqCta;
