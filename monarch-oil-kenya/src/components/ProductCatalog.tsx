"use client";
import React, { useState, useEffect } from 'react';
import { initialProducts, Product } from '@/data/products';
import { FileText, Send, CheckCircle2 } from 'lucide-react';

interface CatalogProps {
  products: Product[];
  lang: 'EN' | 'ZH';
}

export default function ProductCatalog({ products: defaultProducts, lang }: CatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteForm, setQuoteForm] = useState({ company: '', phone: '', volume: '', location: '' });
  const [successMsg, setSuccessMsg] = useState(false);

  // Dynamic live products state
  const [liveProducts, setLiveProducts] = useState<Product[]>(defaultProducts);

  // Fetch updated products from Supabase and Local Storage
  useEffect(() => {
    async function loadDynamicCatalog() {
      // 1. Check local storage
      const local = localStorage.getItem('monarch_live_products');
      if (local) {
        try {
          const parsed = JSON.parse(local);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setLiveProducts(parsed);
          }
        } catch (e) {}
      }

      // 2. Fetch from Supabase REST API if configured
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (supabaseUrl && supabaseAnonKey) {
        try {
          const res = await fetch(`${supabaseUrl}/rest/v1/products?select=*`, {
            headers: {
              apikey: supabaseAnonKey,
              Authorization: `Bearer ${supabaseAnonKey}`,
            },
          });
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped: Product[] = data.map((d: any) => ({
              id: d.id,
              name: d.name,
              category: d.category,
              viscosity: d.viscosity,
              standards: d.standards || '',
              operatingLife: d.operating_life || '',
              packaging: d.packaging || '18L Pail, 170kg Barrel',
              containerType: d.container_type || 'pail-black-gold',
              imagePath: d.image_url || '/logo.png',
              application: d.application || '',
              description: d.description || '',
            }));
            setLiveProducts(mapped);
            localStorage.setItem('monarch_live_products', JSON.stringify(mapped));
          }
        } catch (err) {
          console.warn("Using cached catalog", err);
        }
      }
    }

    loadDynamicCatalog();

    // Listen for storage updates across tabs
    const handleStorageChange = () => {
      const updated = localStorage.getItem('monarch_live_products');
      if (updated) setLiveProducts(JSON.parse(updated));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [defaultProducts]);

  const categories = [
    { key: 'all', en: 'All Products', zh: '全部产品' },
    { key: 'engine', en: 'Engine Oils', zh: '重负荷柴机油' },
    { key: 'hydraulic', en: 'Hydraulic Oils', zh: '液压系统油' },
    { key: 'drivetrain', en: 'TO-4 & Gear', zh: '传动与齿轮油' },
    { key: 'industrial', en: 'Industrial Gear', zh: '工业齿轮油' },
    { key: 'grease', en: 'Greases', zh: '特种润滑脂' },
    { key: 'coolant', en: 'Coolants', zh: '重负荷冷却液' },
  ];

  const filtered = activeCategory === 'all' 
    ? liveProducts 
    : liveProducts.filter(p => p.category === activeCategory);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      setSelectedProduct(null);
      setQuoteForm({ company: '', phone: '', volume: '', location: '' });
    }, 2500);
  };

  return (
    <section id="products" className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-extrabold text-[#8B0032] tracking-widest uppercase">
          {lang === 'EN' ? 'Factory Direct Production' : '阿西河工厂直发'}
        </span>
        <h2 className="text-3xl font-black text-[#1a1d24] mt-1">
          {lang === 'EN' ? 'Official Technical Specifications' : '产品技术参数与出厂询价'}
        </h2>
        <p className="text-slate-500 text-sm mt-2">
          {lang === 'EN' 
            ? 'Factory-direct formulation and bulk supply for mining, quarries, cement, and construction fleets across Kenya.' 
            : '工厂直供，按车队用量核算批发报价，支持 LPO 及现场看油。'}
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActiveCategory(c.key)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === c.key
                  ? 'bg-[#1a1d24] text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {lang === 'EN' ? c.en : c.zh}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Image container */}
              <div className="bg-slate-50 border-b border-slate-100 p-6 flex flex-col items-center justify-center relative min-h-[200px]">
                <span className="absolute top-3 left-3 bg-[#1a1d24] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  {p.category}
                </span>
                <span className="absolute top-3 right-3 bg-amber-400 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded">
                  OEM Certified
                </span>

                {p.imagePath ? (
                  <img
                    src={p.imagePath}
                    alt={p.name}
                    className="max-h-36 max-w-full object-contain filter drop-shadow-md"
                    onError={(e: any) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/logo.png';
                    }}
                  />
                ) : (
                  <div className="w-28 h-36 bg-slate-900 rounded-t-lg rounded-b-md shadow-md flex flex-col justify-between p-2 text-center text-white border-t-4 border-amber-400">
                    <div className="text-[9px] font-bold text-amber-400 uppercase tracking-tighter">MONARCH</div>
                    <div>
                      <div className="text-xs font-black text-white leading-tight">{p.name.split(' ')[1] || 'LUBRICANT'}</div>
                      <div className="text-[8px] text-slate-300 font-mono mt-1">{p.viscosity}</div>
                    </div>
                    <div className="text-[8px] bg-[#8B0032] py-0.5 rounded text-white font-bold uppercase">18L / 170KG</div>
                  </div>
                )}
              </div>

              {/* Specs Body */}
              <div className="p-6">
                <h3 className="font-extrabold text-[#1a1d24] text-base leading-snug mb-2">{p.name}</h3>
                <div className="text-xs text-slate-600 space-y-1 mb-4">
                  <div><strong className="text-slate-800">Viscosity:</strong> {p.viscosity}</div>
                  <div><strong className="text-slate-800">Approvals:</strong> {p.standards}</div>
                  <div><strong className="text-slate-800">Drain Life:</strong> {p.operatingLife}</div>
                  <div><strong className="text-slate-800">Packaging:</strong> {p.packaging}</div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3">{p.description}</p>
              </div>
            </div>

            {/* Action Row */}
            <div className="p-6 pt-0">
              <div className="text-xs text-emerald-700 font-bold bg-emerald-50 py-1 px-2 rounded mb-3 text-center border border-emerald-100">
                ✔ {lang === 'EN' ? 'Direct Factory Production (Athi River)' : '阿西河工厂现货直发'}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedProduct(p)}
                  className="bg-[#8B0032] hover:bg-[#6b0026] text-white text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1 transition-colors"
                >
                  <FileText size={14} /> {lang === 'EN' ? 'Factory Quote' : '出厂询价'}
                </button>
                <a
                  href={`https://wa.me/254740506085?text=${encodeURIComponent(
                    `Hello Monarch Plant Desk, I am inquiring about factory supply for: ${p.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1 transition-colors"
                >
                  <Send size={14} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold text-lg"
            >
              &times;
            </button>

            <h3 className="font-extrabold text-[#1a1d24] text-lg mb-1">
              {lang === 'EN' ? 'Request Factory LPO Quotation' : '申请官方出厂报价单'}
            </h3>
            <p className="text-xs text-slate-500 mb-4">{selectedProduct.name}</p>

            {successMsg ? (
              <div className="py-8 text-center text-emerald-600">
                <CheckCircle2 size={40} className="mx-auto mb-2" />
                <p className="font-bold text-sm">Quote Dispatched to Plant Sales Desk!</p>
                <p className="text-xs text-slate-500">We will call you shortly on the provided number.</p>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Company / Fleet Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Athi River Quarries Ltd"
                    value={quoteForm.company}
                    onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                    className="w-full border border-slate-300 rounded p-2 focus:outline-[#8B0032]"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Contact Phone (or WhatsApp)</label>
                  <input
                    required
                    type="tel"
                    placeholder="07XX XXX XXX"
                    value={quoteForm.phone}
                    onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                    className="w-full border border-slate-300 rounded p-2 focus:outline-[#8B0032]"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Estimated Quantity Required</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. 5x 170kg drums or 20x 18L pails"
                    value={quoteForm.volume}
                    onChange={(e) => setQuoteForm({ ...quoteForm, volume: e.target.value })}
                    className="w-full border border-slate-300 rounded p-2 focus:outline-[#8B0032]"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Delivery Destination / Site</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Kitengela Quarry, Lukenya, Mombasa Rd"
                    value={quoteForm.location}
                    onChange={(e) => setQuoteForm({ ...quoteForm, location: e.target.value })}
                    className="w-full border border-slate-300 rounded p-2 focus:outline-[#8B0032]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#8B0032] hover:bg-[#6b0026] text-white font-bold py-2.5 rounded-lg transition-colors mt-2"
                >
                  Submit Official Factory LPO Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
