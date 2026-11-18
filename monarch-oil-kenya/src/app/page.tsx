"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCatalog from '@/components/ProductCatalog';
import AthiRiverMap from '@/components/AthiRiverMap';
import BilingualChat from '@/components/BilingualChat';
import Footer from '@/components/Footer';
import { initialProducts } from '@/data/products';

export default function Home() {
  const [lang, setLang] = useState<'EN' | 'ZH'>('EN');

  return (
    <main className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar lang={lang} setLang={setLang} />
        <Hero lang={lang} />

        <section id="approvals" className="bg-white border-b border-slate-200 py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center gap-6 text-center">
            <div>
              <div className="text-monarch-navy font-black text-lg">CATERPILLAR</div>
              <div className="text-[11px] text-slate-500 font-bold">ECF-3, ECF-2, Cat TO-4</div>
            </div>
            <div>
              <div className="text-monarch-navy font-black text-lg">VOLVO</div>
              <div className="text-[11px] text-slate-500 font-bold">VDS-4.5, VDS-3 Approvals</div>
            </div>
            <div>
              <div className="text-monarch-navy font-black text-lg">CUMMINS</div>
              <div className="text-[11px] text-slate-500 font-bold">CES 20086, 20081, 20078</div>
            </div>
            <div>
              <div className="text-monarch-navy font-black text-lg">DENISON & REXROTH</div>
              <div className="text-[11px] text-slate-500 font-bold">HF-0, HF-1, HF-2 Certified</div>
            </div>
            <div>
              <div className="text-monarch-navy font-black text-lg">LOW CARBON</div>
              <div className="text-[11px] text-slate-500 font-bold">ISO 14067 (BSI / SGS)</div>
            </div>
          </div>
        </section>

        <ProductCatalog products={initialProducts} lang={lang} />
        <AthiRiverMap lang={lang} />
      </div>

      <Footer />
      <BilingualChat lang={lang} />
    </main>
  );
}