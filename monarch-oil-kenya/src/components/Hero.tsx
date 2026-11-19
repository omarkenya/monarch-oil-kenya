"use client";
import React from 'react';
import { ArrowRight, Phone, Factory } from 'lucide-react';

interface HeroProps {
  lang: 'EN' | 'ZH';
}

export default function Hero({ lang }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-24 md:py-32 px-6">
      {/* Dynamic Animated Video Background of Golden Oil Pouring */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 scale-105 filter brightness-110 contrast-125"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-motor-oil-being-poured-into-a-car-engine-41718-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Rich Industrial Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-[#1a1d24]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Production Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-[#8B0032]/30 to-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-black px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase shadow-lg">
          <Factory size={14} className="text-amber-400" />
          {lang === 'EN'
            ? 'DIRECT FACTORY PRODUCTION & BLENDING PLANT • ATHI RIVER'
            : '阿西河润滑油生产调配工厂 • 厂家直供'}
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-6xl font-black leading-tight tracking-tight mb-6">
          {lang === 'EN' ? (
            <>
              We Don&apos;t Just Stock.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-amber-400">
                We Engineer &amp; Produce.
              </span>
            </>
          ) : (
            <>
              源头工厂调配生产<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-amber-400">
                服务肯尼亚矿山与重载工程机械
              </span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          {lang === 'EN'
            ? 'Monarch Lubricating Oil Trading Company Limited operates high-capacity blending, quality testing, and drum/pail packaging in Athi River, Machakos County. Supplying quarries, cement factories, and heavy fleets across Kenya with certified CJ-4/CK-4 engine oils, NAS 8 hydraulic fluids, and 320°C extreme-pressure greases.'
            : 'Monarch 肯尼亚阿西河生产调配基地直供：卡特彼勒、沃尔沃、康明斯官方认证高碱值柴机油、NAS 8级超洁净高压液压油、TO-4传动油及320°C耐高温极压润滑脂。无中间商零售加价，欢迎车队实地考察与看油。'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/254740506085?text=Hello%20Monarch%20Production%20Plant,%20I%20want%20to%20inquire%20about%20direct%20factory%20supply%20for%20our%20fleet."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#8B0032] hover:bg-[#6b0026] text-white font-black px-7 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-xl hover:shadow-[#8B0032]/40 hover:-translate-y-0.5 border border-amber-400/30 text-sm"
          >
            {lang === 'EN' ? 'WhatsApp Factory Desk' : '联系工厂销售'} <ArrowRight size={16} />
          </a>
          <a
            href="tel:+254142521446"
            className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl flex items-center gap-2 transition-all border border-white/20 text-sm backdrop-blur-sm"
          >
            <Phone size={16} className="text-amber-400" /> +254 142 521 446
          </a>
        </div>
      </div>
    </section>
  );
}
