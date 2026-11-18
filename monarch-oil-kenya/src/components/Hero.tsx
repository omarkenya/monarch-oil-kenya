"use client";
import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

interface HeroProps {
  lang: 'EN' | 'ZH';
}

export default function Hero({ lang }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-r from-monarch-navy via-slate-900 to-monarch-navy text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          {lang === 'EN'
            ? 'Heavy-Duty Lubricants for Extreme Heat & Quarry Dust'
            : '重负荷工业级 • 专为高粉尘与高温工况设计'}
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
          {lang === 'EN' ? (
            <>Monarch Lubricating Oil & Grease <br className="hidden md:block"/> Now Stocked in Athi River, Kenya</>
          ) : (
            <>统一 Monarch 工程机械润滑油 <br className="hidden md:block"/> 肯尼亚阿西河中心现货直发</>
          )}
        </h1>

        <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-8 font-normal">
          {lang === 'EN'
            ? 'Direct wholesale depot supplying CJ-4/CI-4 diesel engine oils, C4000 ultra-clean hydraulic oils (NAS 8), TO-4 drivetrain fluids, and 320°C high-temp greases for quarries, cement plants, and construction contractors.'
            : '直供卡特彼勒、沃尔沃、康明斯认证柴机油、C4000 超洁净液压油 (NAS 8级)、TO-4 传动油及耐高温二硫化钼极压润滑脂。无中间商零售加价，支持车队 LPO 结算与现场提货。'}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#products"
            className="bg-monarch-red hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors shadow-lg"
          >
            {lang === 'EN' ? 'Browse Catalog & Specs' : '查阅官方产品目录'} <ArrowRight size={16} />
          </a>
          <a
            href="#depot"
            className="border-2 border-white/80 hover:bg-white/10 text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
          >
            <MapPin size={16} /> {lang === 'EN' ? 'Visit Athi River Depot' : '前往阿西河仓库'}
          </a>
        </div>
      </div>
    </section>
  );
}