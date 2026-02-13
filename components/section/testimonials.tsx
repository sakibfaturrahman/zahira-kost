"use client";

import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Andi Pratama",
    role: "Mahasiswa UI",
    text: "Kost paling bersih yang pernah saya tempati selama di Depok.",
    rating: 5.0,
  },
  {
    name: "Siti Sarah",
    role: "Karyawan Swasta",
    text: "Internetnya kencang banget, kerja remote dari kamar jadi lancar jaya.",
    rating: 4.9,
  },
  {
    name: "Budi Santoso",
    role: "Alumni UI",
    text: "Dulu betah banget di sini karena lingkungannya tenang dan aman.",
    rating: 4.8,
  },
  {
    name: "Rizky Ramadhan",
    role: "Pekerja Proyek",
    text: "Fasilitas lengkap, tinggal bawa baju. Rekomendasi banget buat perantau.",
    rating: 5.0,
  },
  {
    name: "Maya Indah",
    role: "Mahasiswa Gunadarma",
    text: "Dekat kemana-mana, cari makan gampang, cari transportasi juga mudah.",
    rating: 4.9,
  },
  {
    name: "Hendra Wijaya",
    role: "Karyawan Bank",
    text: "Keamanan CCTV 24 jam bikin hati tenang kalau pulang malam.",
    rating: 5.0,
  },
];

const TestimonialCard = ({ item }: { item: (typeof reviews)[0] }) => {
  const initial = item.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="mx-4 flex w-[350px] shrink-0 flex-col space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFCB61] text-sm font-bold text-slate-900">
          {initial}
        </div>
        <div>
          <h4 className="font-bold text-slate-900">{item.name}</h4>
          <p className="text-[10px] font-bold text-[#e6b657] uppercase tracking-wider leading-none">
            {item.role}
          </p>
        </div>
        <div className="ml-auto text-sm font-bold text-slate-900 bg-zinc-50 px-2 py-1 rounded">
          ★ {item.rating}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-slate-600 font-normal">
        {item.text}
      </p>
    </div>
  );
};

const Testimonials = () => {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    // Satu pembungkus utama (Parent Element)
    <section className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h3 className="text-sm font-bold uppercase tracking-widest text-[#FFCB61]">
          Testimoni
        </h3>
        <h2 className="mt-2 text-4xl font-bold text-slate-900">
          Apa Kata Penghuni?
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {/* Baris 1: Ke Kiri */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            className="flex"
          >
            {duplicatedReviews.map((item, idx) => (
              <TestimonialCard key={`row1-${idx}`} item={item} />
            ))}
          </motion.div>
        </div>

        {/* Baris 2: Ke Kanan */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 45, repeat: Infinity }}
            className="flex"
          >
            {duplicatedReviews.map((item, idx) => (
              <TestimonialCard key={`row2-${idx}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
