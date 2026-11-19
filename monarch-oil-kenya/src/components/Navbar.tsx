"use client";
import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  lang: 'EN' | 'ZH';
  setLang: (lang: 'EN' | 'ZH') => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  return (
    <>
      {/* Top Notice Bar */}
      <div className="bg-[#0b132b] text-slate-300 text-xs py-2 px-6 flex justify-between items-center flex-wrap gap-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Athi River Lubricant Blending & Production Plant, Machakos County</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+254142521446" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={13} className="text-amber-400" /> +254 142 521 446
          </a>
          <a 
            href="https://wa.me/254740506085" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
          >
            <MessageSquare size={13} /> WhatsApp: +254 740 506 085
          </a>
          <Link href="/admin" className="text-slate-400 hover:text-white underline">
            Staff Portal
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Monarch Lubricating Oil Trading Company Limited"
              className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e: any) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/logo.png.png';
              }}
            />
            <div className="hidden sm:block">
              <div className="font-black text-[#1a1d24] text-base leading-tight tracking-tight uppercase">
                MONARCH
              </div>
              <div className="text-[9px] text-[#8B0032] font-black uppercase tracking-wider">
                Lubricating Oil Trading Co. Ltd.
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-700">
            <a href="#products" className="hover:text-[#8B0032] transition-colors">
              {lang === 'EN' ? 'Manufactured Products' : '生产产品与参数'}
            </a>
            <a href="#depot" className="hover:text-[#8B0032] transition-colors">
              {lang === 'EN' ? 'Production Plant' : '生产基地'}
            </a>
            <a href="#approvals" className="hover:text-[#8B0032] transition-colors">
              {lang === 'EN' ? 'OEM Certifications' : '国际OEM认证'}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'EN' ? 'ZH' : 'EN')}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-300 transition-colors"
            >
              {lang === 'EN' ? '中文' : 'English'}
            </button>
            <a
              href="https://wa.me/254740506085?text=Hello%20Monarch%20Plant,%20I%20would%20like%20to%20request%20a%20factory-direct%20fleet%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8B0032] hover:bg-[#6b0026] text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              {lang === 'EN' ? 'Factory Quote' : '出厂询价'}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
