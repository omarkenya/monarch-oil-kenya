"use client";
import React from 'react';
import { ArrowRight, Phone, Factory, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  lang: 'EN' | 'ZH';
}

export default function Hero({ lang }: HeroProps) {
  const heroProducts = [
    {
      name: "FULMER C12 PLUS",
      subtitle: "API CJ-4 • ACEA E9",
      viscosity: "15W-40 / 20W-50",
      tag: "Heavy Diesel",
      spec: "CAT ECF-3 • Volvo VDS-3 • Cummins",
      color: "border-amber-400",
      bgBadge: "bg-amber-400 text-slate-950",
    },
    {
      name: "FULMER C4000",
      subtitle: "NAS 8 Ultra-Clean",
      viscosity: "ISO VG 46# / 68#",
      tag: "35-40 MPa Hydraulic",
      spec: "Bosch Rexroth • Denison HF-0",
      color: "border-[#8B0032]",
      bgBadge: "bg-[#8B0032] text-white",
    },
    {
      name: "FULMER TO-4",
      subtitle: "Drivetrain & Transmission",
      viscosity: "SAE 10W",
      tag: "CAT & Komatsu",
      spec: "Cat TO-4 • Komatsu KES 07.868.1",
      color: "border-amber-400",
      bgBadge: "bg-amber-400 text-slate-950",
    },
    {
      name: "TALOS MoS2 EP",
      subtitle: "High Temp & Shock Load",
      viscosity: "NLGI 2# • Drop 320°C",
      tag: "Heavy Grease",
      spec: "315kg Sintering Weld Load",
      color: "border-emerald-500",
      bgBadge: "bg-emerald-500 text-white",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-20 pb-20 px-6">
      {/* Dynamic Animated Video Background of Golden Oil Pouring */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 scale-105 filter brightness-110 contrast-125"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-motor-oil-being-poured-into-a-car-engine-41718-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-[#1a1d24]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Plant Badge */}
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

        <p className="text-sm md:text-base text-slate-300 max-w-3xl mx-auto mb-8 font-normal leading-relaxed">
          {lang === 'EN'
            ? 'Monarch Lubricating Oil Trading Company Limited operates direct blending, rigorous testing, and drum/pail packaging in Athi River, Machakos County. Supplying quarries, cement plants, and heavy fleets across Kenya.'
            : 'Monarch 肯尼亚阿西河生产基地直供：卡特彼勒、沃尔沃、康明斯官方认证高碱值柴机油、NAS 8级超洁净高压液压油、TO-4传动油及320°C耐高温极压润滑脂。无零售加价，欢迎车队实地考察。'}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a
            href="https://wa.me/254740506085?text=Hello%20Monarch%20Plant,%20I%20want%20to%20inquire%20about%20direct%20factory%20supply%20for%20our%20fleet."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#8B0032] hover:bg-[#6b0026] text-white font-black px-7 py-3 rounded-xl flex items-center gap-2 transition-all shadow-xl hover:-translate-y-0.5 border border-amber-400/30 text-xs md:text-sm"
          >
            {lang === 'EN' ? 'WhatsApp Factory Desk' : '联系工厂销售'} <ArrowRight size={16} />
          </a>
          <a
            href="tel:+254142521446"
            className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3 rounded-xl flex items-center gap-2 transition-all border border-white/20 text-xs md:text-sm backdrop-blur-sm"
          >
            <Phone size={16} className="text-amber-400" /> +254 142 521 446
          </a>
        </div>

        {/* =========================================================
            FEATURED HERO PRODUCTS SHOWCASE (FLAGSHIP MANUFACTURED LINES)
            ========================================================= */}
        <div className="border-t border-slate-800/80 pt-10">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center justify-center gap-2">
            <Zap size={14} className="text-amber-400" />
            {lang === 'EN' ? 'Flagship Manufactured Product Lines' : '阿西河工厂核心生产系列'}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {heroProducts.map((p, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 backdrop-blur-md border border-slate-800 hover:border-amber-400/50 rounded-xl p-4 transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase ${p.bgBadge}`}>
                      {p.tag}
                    </span>
                    <ShieldCheck size={16} className="text-amber-400" />
                  </div>

                  {/* Container Graphic Replica */}
                  <div className="w-full h-24 bg-slate-950 rounded-lg flex items-center justify-center p-2 mb-3 border border-slate-800">
                    <div className="w-16 h-20 bg-slate-900 rounded-t-md rounded-b shadow border-t-2 border-amber-400 flex flex-col justify-between p-1.5 text-center">
                      <div className="text-[7px] font-bold text-amber-400">MONARCH</div>
                      <div className="text-[9px] font-black text-white leading-tight">{p.name.split(' ')[1]}</div>
                      <div className="text-[7px] text-slate-400 font-mono">{p.viscosity}</div>
                    </div>
                  </div>

                  <h3 className="font-extrabold text-white text-sm">{p.name}</h3>
                  <div className="text-amber-400 font-mono text-xs font-bold mt-0.5">{p.viscosity}</div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-snug">{p.spec}</div>
                </div>

                <a
                  href={`https://wa.me/254740506085?text=${encodeURIComponent(
                    `Hello Monarch Plant, I am inquiring about factory pricing for ${p.name} (${p.viscosity}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-white/5 hover:bg-[#8B0032] text-slate-300 hover:text-white text-[11px] font-bold py-1.5 rounded text-center transition-colors border border-white/10 block"
                >
                  Inquire Factory Price &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
