import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b132b] text-slate-400 text-xs pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-slate-800">
        {/* Brand & Factory */}
        <div>
          <div className="text-white font-black text-base mb-1 tracking-tight">
            MONARCH LUBRICATING OIL TRADING CO. LTD.
          </div>
          <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider mb-3">
            Quality Lubricants • Industrial Excellence • Professional Service
          </div>
          <p className="leading-relaxed mb-4 text-slate-400">
            Advanced manufacturing, formulation blending, and bulk distribution plant in Athi River, Machakos County.
          </p>
          <p className="text-[11px] text-slate-500">
            ISO 9001 Quality • IATF 16949 • ISO 14067 Product Carbon Footprint Certified.
          </p>
        </div>

        {/* Products */}
        <div>
          <div className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">Factory Lines</div>
          <ul className="space-y-2">
            <li>FULMER C12 PLUS (API CJ-4 15W-40)</li>
            <li>C4000 Ultra-Clean Hydraulic Oil (NAS 8)</li>
            <li>FULMER Drive System TO-4 (CAT Spec)</li>
            <li>TALOS MoS2 & Complex Lithium Greases</li>
            <li>HEC-II Anti-Boil Fleet Coolants</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <div className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">Official Channels</div>
          <div className="flex flex-col space-y-2.5">
            <a href="https://www.instagram.com/monarchoil" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              📸 Instagram: @monarchoil
            </a>
            <a href="https://www.tiktok.com/@monarchoil" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              🎵 TikTok: @monarchoil
            </a>
            <a href="https://www.facebook.com/profile.php?id=61591755906357" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              👍 Facebook: Monarch Lubricating Oil
            </a>
          </div>
        </div>

        {/* Factory Contacts */}
        <div>
          <div className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">Athi River Plant Desk</div>
          <p className="leading-relaxed mb-3 flex items-start gap-1.5">
            <MapPin size={14} className="text-[#8B0032] shrink-0 mt-0.5" />
            <span>Athi River, Near Toptank Greyland & CITAM Church, Machakos County, Kenya.</span>
          </p>
          <p className="text-white font-bold mb-1.5 flex items-center gap-1.5">
            <Phone size={13} className="text-amber-400" />
            <a href="tel:+254142521446" className="hover:underline">+254 142 521 446</a>
          </p>
          <p className="text-emerald-400 font-bold mb-3 flex items-center gap-1.5">
            <MessageSquare size={13} />
            <a href="https://wa.me/254740506085" target="_blank" rel="noopener noreferrer" className="hover:underline">
              WhatsApp: +254 740 506 085
            </a>
          </p>
          <div className="text-[11px] text-slate-300 bg-white/5 p-2 rounded border border-white/10">
            ✔ Direct Factory Invoices, Local Bank Wire &amp; M-Pesa Business Terms
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 text-center text-slate-500 text-[11px]">
        &copy; 2026 Monarch Lubricating Oil Trading Company Limited. All Rights Reserved.
      </div>
    </footer>
  );
}
