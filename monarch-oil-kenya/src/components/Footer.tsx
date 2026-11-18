import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-monarch-navy text-slate-400 text-xs pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-slate-800">
        <div>
          <div className="text-white font-black text-lg mb-2">MONARCH 统一</div>
          <p className="leading-relaxed mb-4 text-slate-400">
            Backed by Tongyi Petroleum Chemical Co., Ltd. and CHINA CINDA GROUP. Stock Code: 600506.
          </p>
          <p className="text-[11px] text-slate-500">
            ISO 9001 • IATF 16949 • ISO 14067 Product Carbon Footprint Certified.
          </p>
        </div>

        <div>
          <div className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">Core Products</div>
          <ul className="space-y-2">
            <li>FULMER C12 PLUS (API CJ-4)</li>
            <li>C4000 Ultra-Clean Hydraulic Oil</li>
            <li>FULMER Drive TO-4 (CAT Spec)</li>
            <li>TALOS MoS2 & Complex Greases</li>
            <li>HEC-II Heavy-Duty Coolant</li>
          </ul>
        </div>

        <div>
          <div className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">Official Social Channels</div>
          <div className="flex flex-col space-y-2">
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

        <div>
          <div className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">Kenya Depot Hub</div>
          <p className="leading-relaxed mb-2">
            Athi River, Near Toptank Greyland, Near CITAM Church, Machakos County.
          </p>
          <p className="text-slate-300 font-bold mb-1">Call: +254 700 000 000</p>
          <p className="text-slate-300">Email: sales@monarchoil.co.ke</p>
          <div className="mt-3 text-[11px] text-emerald-400 font-bold">
            ✔ Safaricom M-Pesa & Corporate LPO Terms Accepted
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 text-center text-slate-500 text-[11px]">
        &copy; 2026 Monarch Lubricating Oil and Grease Company Kenya. All Rights Reserved.
      </div>
    </footer>
  );
}