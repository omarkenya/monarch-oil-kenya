"use client";
import React from 'react';
import { ArrowRight, Phone, Factory, ShieldCheck, Droplets, Sparkles, CheckCircle2 } from 'lucide-react';

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
      badgeColor: "bg-amber-400 text-slate-950",
      accentColor: "#f59e0b",
      containerHeader: "C12 PLUS",
      containerSub: "CJ-4 SYNTHETIC",
      lidColor: "#f59e0b",
      bodyColor: "#111827",
    },
    {
      id: "c4000",
      name: "FULMER C4000",
      category: "Ultra-Clean Hydraulic",
      grade: "ISO VG 46# / 68#",
      spec: "NAS 8 Cleanliness • 35-40 MPa • Denison HF-0",
      drain: "4,000h TOST Life",
      badge: "High Pressure",
      badgeColor: "bg-[#8B0032] text-white",
      accentColor: "#8B0032",
      containerHeader: "C4000",
      containerSub: "NAS 8 GRADE",
      lidColor: "#8B0032",
      bodyColor: "#111827",
    },
    {
      id: "to-4",
      name: "FULMER TO-4",
      category: "Drivetrain & Powershift",
      grade: "SAE 10W",
      spec: "Caterpillar Cat TO-4 • Komatsu KES 07.868.1",
      drain: "2,000h Transmission Life",
      badge: "CAT & Komatsu",
      badgeColor: "bg-amber-400 text-slate-950",
      accentColor: "#f59e0b",
      containerHeader: "TO-4",
      containerSub: "POWERSHIFT",
      lidColor: "#f59e0b",
      bodyColor: "#111827",
    },
    {
      id: "talos-mos2",
      name: "TALOS MoS2 EP",
      category: "Quarry & Breaker Grease",
      grade: "NLGI 2# • Solid MoS2",
      spec: "320°C Drop Point • 315kg Weld Sintering",
      drain: "<1% Water Washout",
      badge: "Heavy Shock Load",
      badgeColor: "bg-emerald-500 text-white",
      accentColor: "#10b981",
      containerHeader: "MoS2 GREASE",
      containerSub: "320°C EXTREME",
      lidColor: "#10b981",
      bodyColor: "#1f2937",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#070a13] text-white pt-24 pb-20 px-6">
      {/* =========================================================================
          DYNAMIC ANIMATED OIL FLOW ENGINE (CANVAS OF MOVING AMBER VISCOSITY)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated Fluid Amber Waves */}
        <div className="oil-wave oil-wave-1" />
        <div className="oil-wave oil-wave-2" />
        <div className="oil-wave oil-wave-3" />

        {/* Streaming Video Layer (with graceful fallbacks) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 filter brightness-110 contrast-125 mix-blend-screen"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
        </video>

        {/* Rich Shading Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070a13]/90 via-[#070a13]/70 to-[#070a13]" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Factory Production Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-[#8B0032]/40 to-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-black px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase shadow-xl animate-pulse">
          <Factory size={14} className="text-amber-400" />
          {lang === 'EN'
            ? 'DIRECT FACTORY BLENDING & PRODUCTION PLANT • ATHI RIVER'
            : '阿西河润滑油生产调配工厂 • 源头直供'}
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
          {lang === 'EN' ? (
            <>
              We Don&apos;t Just Stock.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-amber-400">
                We Engineer, Blend &amp; Produce.
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
            ? 'Monarch Lubricating Oil Trading Company Limited operates state-of-the-art lubricant blending, testing, and drum/pail packaging in Athi River, Machakos County. Supplying certified CJ-4/CK-4 engine oils, NAS 8 hydraulic fluids, and 320°C extreme-pressure greases.'
            : 'Monarch 肯尼亚阿西河生产调配基地直供：卡特彼勒、沃尔沃、康明斯官方认证高碱值柴机油、NAS 8级超洁净高压液压油、TO-4传动油及320°C耐高温极压润滑脂。无中间商零售加价，欢迎车队实地考察与看油。'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="https://wa.me/254740506085?text=Hello%20Monarch%20Plant%20Desk,%20I%20want%20to%20inquire%20about%20direct%20factory%20fleet%20supply."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#8B0032] hover:bg-[#6b0026] text-white font-black px-7 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-xl hover:-translate-y-0.5 border border-amber-400/30 text-xs md:text-sm"
          >
            {lang === 'EN' ? 'WhatsApp Factory Desk' : '联系工厂销售'} <ArrowRight size={16} />
          </a>
          <a
            href="tel:+254142521446"
            className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl flex items-center gap-2 transition-all border border-white/20 text-xs md:text-sm backdrop-blur-sm"
          >
            <Phone size={16} className="text-amber-400" /> +254 142 521 446
          </a>
        </div>

        {/* =========================================================================
            FLAGSHIP HERO PRODUCTS SHOWCASE (VISUALLY RICH 3D CONTAINER EXHIBIT)
            ========================================================================= */}
        <div className="border-t border-slate-800/80 pt-10">
          <div className="text-xs font-black text-amber-400 uppercase tracking-widest mb-6 flex items-center justify-center gap-2">
            <Sparkles size={16} className="text-amber-400 animate-spin" />
            {lang === 'EN' ? 'Flagship Manufactured Product Lines' : '阿西河工厂核心生产系列'}
            <Sparkles size={16} className="text-amber-400 animate-spin" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {heroProducts.map((p) => (
              <div
                key={p.id}
                className="group relative bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-slate-800 hover:border-amber-400/60 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
              >
                {/* Glowing top line */}
                <div
                  className="absolute top-0 left-6 right-6 h-1 rounded-full opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: p.accentColor }}
                />

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-[10px] font-black px-2.5 py-0.5 rounded uppercase tracking-wider ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                    <ShieldCheck size={18} className="text-amber-400" />
                  </div>

                  {/* 3D-Illuminated Container Showcase */}
                  <div className="w-full h-32 bg-slate-950/80 rounded-xl flex items-center justify-center p-3 mb-4 border border-slate-800/80 shadow-inner relative overflow-hidden group-hover:border-slate-700">
                    {/* Golden Backlight Glow */}
                    <div
                      className="absolute inset-0 opacity-20 blur-xl group-hover:opacity-40 transition-opacity"
                      style={{ backgroundColor: p.accentColor }}
                    />

                    {/* Industrial Pail Geometry */}
                    <div
                      className="relative w-20 h-24 rounded-t-lg rounded-b shadow-2xl flex flex-col justify-between p-1.5 text-center transition-transform group-hover:scale-105"
                      style={{
                        backgroundColor: p.bodyColor,
                        borderTop: `3px solid ${p.lidColor}`,
                        boxShadow: `0 8px 20px rgba(0,0,0,0.6), 0 0 10px ${p.accentColor}33`,
                      }}
                    >
                      <div className="text-[7px] font-black text-amber-400 tracking-tighter uppercase">MONARCH</div>
                      <div>
                        <div className="text-[11px] font-black text-white leading-tight">{p.containerHeader}</div>
                        <div className="text-[7px] text-amber-300/80 font-mono mt-0.5">{p.containerSub}</div>
                      </div>
                      <div
                        className="text-[7px] py-0.5 rounded font-black text-white uppercase tracking-tighter"
                        style={{ backgroundColor: p.accentColor }}
                      >
                        18L / 170KG
                      </div>
                    </div>
                  </div>

                  <h3 className="font-black text-white text-base leading-snug group-hover:text-amber-300 transition-colors">
                    {p.name}
                  </h3>
                  <div className="text-amber-400 font-mono text-xs font-bold mt-0.5">{p.grade}</div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-snug">{p.spec}</div>
                  <div className="text-[10px] text-emerald-400 font-bold mt-2 flex items-center gap-1">
                    <CheckCircle2 size={12} /> {p.drain}
                  </div>
                </div>

                <a
                  href={`https://wa.me/254740506085?text=${encodeURIComponent(
                    `Hello Monarch Plant Desk, I am inquiring about direct factory pricing for ${p.name} (${p.grade}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full bg-slate-800 hover:bg-[#8B0032] text-slate-200 hover:text-white text-xs font-bold py-2.5 rounded-xl text-center transition-all border border-slate-700 hover:border-amber-400/40 flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Droplets size={13} className="text-amber-400" />
                  Inquire Factory Price &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded Liquid Oil Styles */}
      <style jsx>{`
        .oil-wave {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          border-radius: 40%;
          pointer-events: none;
        }
        .oil-wave-1 {
          background: radial-gradient(circle at 40% 40%, rgba(245, 158, 11, 0.18), transparent 60%);
          animation: fluidSpin 22s infinite linear;
        }
        .oil-wave-2 {
          background: radial-gradient(circle at 60% 60%, rgba(139, 0, 50, 0.22), transparent 55%);
          animation: fluidSpin 28s infinite reverse linear;
        }
        .oil-wave-3 {
          background: radial-gradient(circle at 50% 30%, rgba(217, 119, 6, 0.15), transparent 50%);
          animation: fluidSpin 35s infinite linear;
        }
        @keyframes fluidSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
