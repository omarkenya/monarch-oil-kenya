"use client";
import React, { useEffect } from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';

interface MapProps {
  lang: 'EN' | 'ZH';
}

export default function AthiRiverMap({ lang }: MapProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('leaflet').then((L) => {
        const container = L.DomUtil.get('athi-map');
        if (container && !container.hasChildNodes()) {
          const map = L.map('athi-map').setView([-1.4451, 37.0046], 14);

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
          }).addTo(map);

          const pin = L.divIcon({
            className: 'custom-pin',
            html: `<div style="background-color:#c62828; width:22px; height:22px; border-radius:50%; border:3px solid white; box-shadow:0 2px 8px rgba(0,0,0,0.5);"></div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12],
          });

          L.marker([-1.4451, 37.0046], { icon: pin })
            .addTo(map)
            .bindPopup(`
              <div style="font-size:12px; font-family:sans-serif; line-height:1.4;">
                <b style="color:#c62828;">Monarch Lubricating Oil & Grease</b><br/>
                Athi River Depot, Machakos County<br/>
                Near Toptank Greyland & CITAM Church.<br/>
                <b>Direct Dispatch:</b> 170kg Barrels, 18L Pails.
              </div>
            `)
            .openPopup();
        }
      });
    }
  }, []);

  return (
    <section id="depot" className="py-16 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-extrabold text-monarch-red tracking-widest uppercase">
            {lang === 'EN' ? 'Strategic Logistics' : '仓库位置'}
          </span>
          <h2 className="text-3xl font-black text-monarch-navy mt-1">
            {lang === 'EN' ? 'Athi River Distribution Depot' : '阿西河直营仓储中心'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden min-h-[420px]">
            <div id="athi-map" className="w-full h-full min-h-[420px]"></div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <h3 className="font-extrabold text-monarch-navy text-lg mb-4 flex items-center gap-2">
                <MapPin className="text-monarch-red" size={20} />
                {lang === 'EN' ? 'Facility Address' : '详细地址'}
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Athi River, Near Toptank Greyland, Near CITAM Church, Off Mombasa Road, Machakos County, Kenya.
              </p>

              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Navigation size={14} className="text-slate-500" />
                {lang === 'EN' ? 'Direct Supply Corridors' : '物流辐射'}
              </h4>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Prompt dispatch to Kitengela stone quarries, cement factories along Mombasa Road, Lukenya, Machakos, and the Nairobi Industrial Area.
              </p>

              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Clock size={14} className="text-slate-500" />
                {lang === 'EN' ? 'Depot Hours' : '提货时间'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Monday – Saturday: 7:30 AM – 5:30 PM<br />
                Emergency fleet dispatches supported 24/7 on call.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-1.4451,37.0046"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-monarch-navy hover:bg-slate-800 text-white text-xs font-bold py-3 rounded-lg text-center block transition-colors"
              >
                {lang === 'EN' ? 'Open in Google Maps Directions' : '在谷歌地图中导航'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}