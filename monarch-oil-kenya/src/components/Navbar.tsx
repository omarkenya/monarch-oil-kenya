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
          <span className="bg-[#8B0032] text-white px-2 py-0.5 rounded font-bold">KENYA HUB</span>
          <span>Athi River, Near Toptank Greyland & CITAM Church, Machakos County</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+254700000000" className="flex items-center gap-1 hover:text-white">
            <Phone size={13} /> +254 700 000 000
          </a>
          <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300">
            <MessageSquare size={13} /> Fleet WhatsApp
          </a>
          <Link href="/admin" className="text-slate-400 hover:text-white underline">
            Staff Sign In
          </Link>
        </div>
      </div>

      {/* Main Header with Official Logo */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Real Logo Image with fallback */}
            <div className="relative h-14 w-auto flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Monarch Lubricating Oil Trading Company Limited"
                className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e: any) => {
                  // Fallback if logo is in another directory or extension
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/logo.png.png';
                }}
              />
            </div>
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
              {lang === 'EN' ? 'Products & Specs' : '产品参数'}
            </a>
            <a href="#depot" className="hover:text-[#8B0032] transition-colors">
              {lang === 'EN' ? 'Athi River Depot' : '阿西河仓库'}
            </a>
            <a href="#approvals" className="hover:text-[#8B0032] transition-colors">
              {lang === 'EN' ? 'OEM Approvals' : 'OEM认证'}
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
              href="#products"
              className="bg-[#8B0032] hover:bg-[#6b0026] text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              {lang === 'EN' ? 'Request Fleet Quote' : '车队询价'}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
