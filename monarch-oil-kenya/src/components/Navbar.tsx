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
      <div className="bg-monarch-navy text-slate-300 text-xs py-2 px-6 flex justify-between items-center flex-wrap gap-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="bg-monarch-red text-white px-2 py-0.5 rounded font-bold">KENYA HUB</span>
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

      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-monarch-red text-white font-black text-xl px-3 py-1 rounded tracking-wider">
              MONARCH
            </div>
            <div>
              <div className="font-extrabold text-monarch-navy text-lg leading-tight tracking-tight">统一 TONGYI</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                {lang === 'EN' ? 'Industrial Lubrication Kenya' : '工业与工程机械润滑油'}
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-700">
            <a href="#products" className="hover:text-monarch-red transition-colors">
              {lang === 'EN' ? 'Products & Specs' : '产品参数'}
            </a>
            <a href="#depot" className="hover:text-monarch-red transition-colors">
              {lang === 'EN' ? 'Athi River Depot' : '阿西河仓库'}
            </a>
            <a href="#approvals" className="hover:text-monarch-red transition-colors">
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
              className="bg-monarch-red hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              {lang === 'EN' ? 'Request Fleet Quote' : '车队询价'}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}