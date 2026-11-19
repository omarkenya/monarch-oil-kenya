"use client";
import React from 'react';
import { ArrowRight, Phone, Factory, ShieldCheck, Sparkles, CheckCircle2, Droplets } from 'lucide-react';

interface HeroProps {
  lang: 'EN' | 'ZH';
}

export default function Hero({ lang }: HeroProps) {
  const heroProducts = [
    {
      id: "c12-plus",
      name: "FULMER C12 PLUS",
      category: "Heavy Diesel Engine",
      grade: "15W-40 / 20W-50",
      spec: "API CJ-4 • CAT ECF-3 • Volvo VDS-3 • Cummins",
      drain: "600 Operating Hours",
      badge: "Flagship Diesel",
      badgeColor: "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black",
      accentGlow: "rgba(245, 158, 11, 0.35)",
      // High-res realistic black & gold heavy-duty industrial lubricant pail
      imageUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=85",
      localFallback: "/images/fulmer-c12-plus.png",
    },
    {
      id: "c4000",
      name: "FULMER C4000",
      category: "Ultra-Clean Hydraulic",
      grade: "ISO VG 46# / 68#",
      spec: "NAS 8 Cleanliness • 35-40 MPa • Denison HF-0",
      drain: "4,000h TOST Oxidation",
      badge: "35-40 MPa Pressure",
      badgeColor: "bg-gradient-to-r from-[#8B0032] to-[#b70043] text-white font-black",
      accentGlow: "rgba(139, 0, 50, 0.4)",
      // High-res realistic sealed high-pressure hydraulic fluid drum/container
      imageUrl: "https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?auto=format&fit=crop&w=600&q=85",
      localFallback: "/images/fulmer-c4000.png",
    },
    {
      id: "to-4",
      name: "FULMER TO-4",
      category: "Drivetrain & Powershift",
      grade: "SAE 10W",
      spec: "Caterpillar Cat TO-4 • Komatsu KES 07.868.1",
      drain: "2,000h Transmission Life",
      badge: "CAT & Komatsu Spec",
      badgeColor: "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black",
      accentGlow: "rgba(245, 158, 11, 0.35)",
      // High-res realistic commercial transmission fluid pail
      imageUrl: "https://images.unsplash.com/photo-1578874691223-a49262e0cca3?auto=format&fit=crop&w=600&q=85",
      localFallback: "/images/fulmer-to4.png",
    },
    {
      id: "talos-mos2",
      name: "TALOS MoS2 EP",
      category: "Quarry & Breaker Grease",
      grade: "NLGI 2# • Solid MoS2",
      spec: "320°C Drop Point • 315kg Sintering Weld",
      drain: "<1% Water Washout",
      badge: "Heavy Shock Load",
      badgeColor: "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-black",
      accentGlow: "rgba(16, 185, 129, 0.35)",
      // High-res realistic industrial grease container with mechanical background
      imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=85",
      localFallback: "/images/talos-mos2.png",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#070a13] text-white pt-24 pb-24 px-6">
      {/* =========================================================================
          BACKGROUND: CINEMATIC ULTRA-REALISTIC MOTOR OIL IN MOTION
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Real Macro Photography of Golden Amber Engine Oil Flowing */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 filter brightness-105 contrast-125 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1920&q=85')`,
          }}
        />

        {/* Ambient Viscous Oil Shimmer Gradients */}
        <div className="oil-shimmer-layer" />

        {/* Deep Industrial Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070a13]/95 via-[#070a13]/75 to-[#070a13]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a13] via-transparent to-[#070a13]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Factory Production Badge */}
        <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500/20 via-[#8B0032]/40 to-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-black px-5 py-2 rounded-full mb-6 tracking-widest uppercase shadow-2xl backdrop-blur-md">
          <Factory size={15} className="text-amber-400 animate-pulse" />
          {lang === 'EN'
            ? 'DIRECT FACTORY BLENDING & PRODUCTION PLANT • ATHI RIVER, KENYA'
            : '阿西河润滑油生产调配工厂 • 厂家直供'}
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">
          {lang === 'EN' ? (
            <>
              We Don&apos;t Just Stock.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-amber-400 drop-shadow-sm">
                We Engineer, Blend &amp; Produce.
              </span>
            </>
          ) : (
            <>
              源头工厂调配生产<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-amber-400 drop-shadow-sm">
                服务肯尼亚矿山与重载工程机械
              </span>
            </>
          )}
        </h1>

        <p className="text-sm md:text-lg text-slate-300 max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          {lang === 'EN'
            ? 'Monarch Lubricating Oil Trading Company Limited manufactures, tests, and packs high-performance lubricants directly in Athi River, Machakos County. Supplying certified CJ-4/CK-4 engine oils, NAS 8 hydraulic fluids, and 320°C extreme-pressure greases to quarries, cement mills, and heavy equipment fleets.'
            : 'Monarch 肯尼亚阿西河生产调配基地直供：卡特彼勒、沃尔沃、康明斯官方认证高碱值柴机油、NAS 8级超洁净高压液压油、TO-4传动油及320°C耐高温极压润滑脂。无中间商零售加价，支持车队现场看油与工厂直发。'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
          <a
            href="https://wa.me/254740506085?text=Hello%20Monarch%20Plant%20Desk,%20I%20want%20to%20inquire%20about%20direct%20factory%20fleet%20supply."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#8B0032] hover:bg-[#6b0026] text-white font-black px-8 py-4 rounded-xl flex items-center gap-2.5 transition-all shadow-2xl hover:shadow-[#8B0032]/50 hover:-translate-y-1 border border-amber-400/30 text-sm tracking-wide"
          >
            {lang === 'EN' ? 'WhatsApp Factory Desk' : '联系工厂销售'} <ArrowRight size={18} />
          </a>
          <a
            href="tel:+254142521446"
            className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2.5 transition-all border border-white/20 text-sm backdrop-blur-md hover:-translate-y-1"
          >
            <Phone size={17} className="text-amber-400" /> +254 142 521 446
          </a>
        </div>

        {/* =========================================================================
            FLAGSHIP HERO PRODUCTS (CLASSIC ULTRA-REALISTIC PHOTOGRAPHY SHOWCASE)
            ========================================================================= */}
        <div className="border-t border-slate-800/80 pt-12">
          <div className="text-xs font-black text-amber-400 uppercase tracking-widest mb-8 flex items-center justify-center gap-2.5">
            <Sparkles size={16} className="text-amber-400 animate-spin" />
            <span>{lang === 'EN' ? 'Flagship Manufactured Product Lines' : '阿西河工厂核心生产系列'}</span>
            <Sparkles size={16} className="text-amber-400 animate-spin" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {heroProducts.map((p) => (
              <div
                key={p.id}
                className="group relative bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-[#0c0f1a]/95 border border-slate-800 hover:border-amber-400/60 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between"
              >
                {/* Glowing Top Accent Accent */}
                <div
                  className="absolute top-0 left-6 right-6 h-1 rounded-full opacity-60 group-hover:opacity-100 transition-opacity blur-[1px]"
                  style={{ backgroundColor: p.accentGlow }}
                />

                <div>
                  {/* Category Pill & Verified Icon */}
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                    <ShieldCheck size={18} className="text-amber-400" />
                  </div>

                  {/* Photorealistic Product Visual Stage */}
                  <div className="relative w-full h-44 bg-gradient-to-b from-slate-950 to-slate-900/80 rounded-xl flex items-center justify-center p-3 mb-4 border border-slate-800/90 overflow-hidden shadow-inner group-hover:border-slate-700">
                    {/* Realistic Radial Backlight Beam */}
                    <div
                      className="absolute inset-0 opacity-25 blur-2xl group-hover:opacity-50 transition-opacity"
                      style={{ background: `radial-gradient(circle, ${p.accentGlow} 0%, transparent 70%)` }}
                    />

                    {/* Realistic Product Container Image with Fallback */}
                    <img
                      src={p.localFallback}
                      alt={p.name}
                      className="relative z-10 h-36 w-auto max-w-full object-contain filter drop-shadow-[0_12px_18px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-300"
                      onError={(e: any) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = p.imageUrl;
                      }}
                    />

                    {/* Capacity Indicator Pill */}
                    <span className="absolute bottom-2 right-2 z-10 bg-black/70 backdrop-blur-sm text-[9px] font-mono text-slate-300 px-2 py-0.5 rounded border border-white/10">
                      18L Pail / 170kg
                    </span>
                  </div>

                  {/* Title & Technical Specs */}
                  <h3 className="font-black text-white text-base leading-snug group-hover:text-amber-300 transition-colors">
                    {p.name}
                  </h3>
                  <div className="text-amber-400 font-mono text-xs font-black mt-0.5">{p.grade}</div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-snug font-medium">{p.spec}</div>
                  <div className="text-[10px] text-emerald-400 font-bold mt-2 flex items-center gap-1">
                    <CheckCircle2 size={12} /> {p.drain}
                  </div>
                </div>

                {/* Direct Factory Inquiry Button */}
                <a
                  href={`https://wa.me/254740506085?text=${encodeURIComponent(
                    `Hello Monarch Plant Desk, I am inquiring about direct factory pricing for ${p.name} (${p.grade}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full bg-slate-800/90 hover:bg-[#8B0032] text-slate-200 hover:text-white text-xs font-bold py-2.5 rounded-xl text-center transition-all border border-slate-700/80 hover:border-amber-400/40 flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Droplets size={13} className="text-amber-400" />
                  Inquire Factory Price &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Viscous Amber Flow Styles */}
      <style jsx>{`
        .oil-shimmer-layer {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 60%),
                      radial-gradient(circle at 80% 60%, rgba(139, 0, 50, 0.2) 0%, transparent 50%),
                      radial-gradient(circle at 20% 70%, rgba(217, 119, 6, 0.12) 0%, transparent 50%);
          animation: pulseShimmer 12s ease-in-out infinite alternate;
        }
        @keyframes pulseShimmer {
          0% { transform: scale(1) translateY(0); opacity: 0.7; }
          100% { transform: scale(1.08) translateY(-20px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
