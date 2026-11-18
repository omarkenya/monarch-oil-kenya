"use client";
import React, { useState } from 'react';
import { Product } from '@/data/products';
import { FileText, Send, CheckCircle2 } from 'lucide-react';

interface CatalogProps {
  products: Product[];
  lang: 'EN' | 'ZH';
}

export default function ProductCatalog({ products, lang }: CatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteForm, setQuoteForm] = useState({ company: '', phone: '', volume: '', location: '' });
  const [successMsg, setSuccessMsg] = useState(false);

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
    ? products 
    : products.filter(p => p.category === activeCategory);

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
        <span className="text-xs font-extrabold text-monarch-red tracking-widest uppercase">
          {lang === 'EN' ? 'Athi River Direct Inventory' : '肯尼亚现货库存'}
        </span>
        <h2 className="text-3xl font-black text-monarch-navy mt-1">
          {lang === 'EN' ? 'Official Technical Specifications' : '产品技术参数与车队询价'}
        </h2>
        <p className="text-slate-500 text-sm mt-2">
          {lang === 'EN' 
            ? 'Prices are quote-based for bulk fleet supply, LPOs, and site deliveries across Kenya.' 
            : '工厂直供，按车队用量核算批发报价，支持 LPO 及现场看油。'}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActiveCategory(c.key)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === c.key
                  ? 'bg-monarch-navy text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {lang === 'EN' ? c.en : c.zh}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="bg-slate-50 border-b border-slate-100 p-6 flex flex-col items-center justify-center relative min-h-[190px]">
                <span className="absolute top-3 left-3 bg-monarch-navy text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  {p.category}
                </span>
                <span className="absolute top-3 right-3 bg-amber-400 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded">
                  OEM Certified
                </span>

                <div className="w-28 h-36 bg-slate-900 rounded-t-lg rounded-b-md shadow-md flex flex-col justify-between p-2 text-center text-white border-t-4 border-amber-400">
                  <div className="text-[9px] font-bold text-amber-400 uppercase tracking-tighter">移山 FULMER</div>
                  <div>
                    <div className="text-xs font-black text-white leading-tight">{p.name.split(' ')[1] || 'MONARCH'}</div>
                    <div className="text-[8px] text-slate-300 font-mono mt-1">{p.viscosity}</div>
                  </div>
                  <div className="text-[8px] bg-red-700 py-0.5 rounded text-white font-bold uppercase">18L / 170KG</div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-extrabold text-monarch-navy text-base leading-snug mb-2">{p.name}</h3>
                <div className="text-xs text-slate-600 space-y-1 mb-4">
                  <div><strong className="text-slate-800">Viscosity:</strong> {p.viscosity}</div>
                  <div><strong className="text-slate-800">Approvals:</strong> {p.standards}</div>
                  <div><strong className="text-slate-800">Drain Life:</strong> {p.operatingLife}</div>
                  <div><strong className="text-slate-800">Sizes:</strong> {p.packaging}</div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3">{p.description}</p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="text-xs text-emerald-700 font-bold bg-emerald-50 py-1 px-2 rounded mb-3 text-center">
                ✔ {lang === 'EN' ? 'Stock Available at Athi River' : '阿西河仓库现货'}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedProduct(p)}
                  className="bg-monarch-red hover:bg-red-700 text-white text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1 transition-colors"
                >
                  <FileText size={14} /> {lang === 'EN' ? 'Fleet Quote' : '车队询价'}
                </button>
                <a
                  href={`https://wa.me/254700000000?text=${encodeURIComponent(
                    `Hello Monarch Kenya, I am inquiring about bulk availability for: ${p.name}`
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

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold text-lg"
            >
              &times;
            </button>

            <h3 className="font-extrabold text-monarch-navy text-lg mb-1">
              {lang === 'EN' ? 'Request Fleet LPO Quotation' : '申请官方车队报价单'}
            </h3>
            <p className="text-xs text-slate-500 mb-4">{selectedProduct.name}</p>

            {successMsg ? (
              <div className="py-8 text-center text-emerald-600">
                <CheckCircle2 size={40} className="mx-auto mb-2" />
                <p className="font-bold text-sm">Quote Dispatched to Sales Desk!</p>
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
                    className="w-full border border-slate-300 rounded p-2 focus:outline-monarch-navy"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Contact Phone (or M-Pesa)</label>
                  <input
                    required
                    type="tel"
                    placeholder="07XX XXX XXX"
                    value={quoteForm.phone}
                    onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                    className="w-full border border-slate-300 rounded p-2 focus:outline-monarch-navy"
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
                    className="w-full border border-slate-300 rounded p-2 focus:outline-monarch-navy"
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
                    className="w-full border border-slate-300 rounded p-2 focus:outline-monarch-navy"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-monarch-red hover:bg-red-700 text-white font-bold py-2.5 rounded-lg transition-colors mt-2"
                >
                  Submit Official LPO Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}