"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { initialProducts, Product } from '@/data/products';
import { PlusCircle, LogOut, CheckCircle, Package } from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [newProd, setNewProd] = useState<Partial<Product>>({
    name: '',
    category: 'engine',
    viscosity: '',
    standards: '',
    operatingLife: '',
    packaging: '18L Pail, 170kg Barrel',
    containerType: 'pail-black-gold',
    application: '',
    description: '',
  });
  const [msg, setMsg] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.toLowerCase().trim() === 'omarkenya4@gmail.com' && password.length >= 6) {
      setIsAuthenticated(true);
      setMsg('');
    } else {
      setMsg('Invalid staff credentials. Authorized staff email required.');
    }
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProd.name || !newProd.viscosity) return;

    const created: Product = {
      id: 'prod-' + Date.now(),
      name: newProd.name!,
      category: newProd.category as any,
      viscosity: newProd.viscosity!,
      standards: newProd.standards || 'Meets Industry Standards',
      operatingLife: newProd.operatingLife || 'Standard Duty',
      packaging: newProd.packaging || '18L, 170kg',
      containerType: (newProd.containerType as any) || 'pail-black-gold',
      application: newProd.application || 'Heavy Machinery',
      description: newProd.description || '',
    };

    setProducts([created, ...products]);
    setMsg('Product successfully published to Athi River catalog!');
    setNewProd({
      name: '',
      category: 'engine',
      viscosity: '',
      standards: '',
      operatingLife: '',
      packaging: '18L Pail, 170kg Barrel',
      containerType: 'pail-black-gold',
      application: '',
      description: '',
    });
    setTimeout(() => setMsg(''), 3000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 text-slate-800">
        <div className="bg-white rounded-2xl max-w-sm w-full p-8 shadow-2xl">
          <div className="text-center mb-6">
            <span className="bg-monarch-red text-white text-xs font-black px-3 py-1 rounded">
              MONARCH KENYA
            </span>
            <h1 className="text-xl font-black text-monarch-navy mt-3">Staff Portal Sign In</h1>
            <p className="text-xs text-slate-500 mt-1">Authorized access for omarkenya4@gmail.com</p>
          </div>

          {msg && <div className="text-xs text-red-600 bg-red-50 p-2.5 rounded mb-4 font-bold">{msg}</div>}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Staff Email</label>
              <input
                required
                type="email"
                placeholder="omarkenya4@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2.5 focus:outline-monarch-navy"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 block mb-1">Password</label>
              <input
                required
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2.5 focus:outline-monarch-navy"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-monarch-navy hover:bg-slate-800 text-white font-bold py-3 rounded-lg transition-colors text-xs"
            >
              Log In to Manager Dashboard
            </button>
          </form>

          <div className="text-center mt-6">
            <Link href="/" className="text-xs text-slate-500 hover:text-slate-800 underline">
              &larr; Return to Public Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-xl border border-slate-200">
          <div>
            <h1 className="text-2xl font-black text-monarch-navy">Athi River Product Manager</h1>
            <p className="text-xs text-slate-500">Signed in as: omarkenya4@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-xs font-bold text-slate-600 hover:text-slate-900 border px-3 py-2 rounded">
              View Live Storefront
            </Link>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 border border-red-200 px-3 py-2 rounded"
            >
              <LogOut size={14} /> Log Out
            </button>
          </div>
        </div>

        {msg && (
          <div className="mb-6 p-4 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-bold flex items-center gap-2">
            <CheckCircle size={16} /> {msg}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-fit">
            <h2 className="text-base font-bold text-monarch-navy mb-4 flex items-center gap-2">
              <PlusCircle size={18} className="text-monarch-red" /> Upload New Product
            </h2>

            <form onSubmit={handleAddProduct} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Product Title</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. FULMER Super Synthetic CJ-4"
                  value={newProd.name}
                  onChange={(e) => setNewProd({ ...newProd, name: e.target.value })}
                  className="w-full border rounded p-2"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Category</label>
                <select
                  value={newProd.category}
                  onChange={(e) => setNewProd({ ...newProd, category: e.target.value as any })}
                  className="w-full border rounded p-2"
                >
                  <option value="engine">Diesel Engine Oil</option>
                  <option value="hydraulic">Hydraulic Oil</option>
                  <option value="drivetrain">TO-4 / Transmission</option>
                  <option value="industrial">Industrial Gear Oil</option>
                  <option value="grease">Heavy Grease</option>
                  <option value="coolant">Coolant</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Viscosity / Grade</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. 15W-40 or ISO VG 68#"
                  value={newProd.viscosity}
                  onChange={(e) => setNewProd({ ...newProd, viscosity: e.target.value })}
                  className="w-full border rounded p-2"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">OEM Approvals</label>
                <input
                  type="text"
                  placeholder="e.g. Cat ECF-3, Cummins CES 20081"
                  value={newProd.standards}
                  onChange={(e) => setNewProd({ ...newProd, standards: e.target.value })}
                  className="w-full border rounded p-2"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Packaging Format</label>
                <input
                  type="text"
                  placeholder="e.g. 18L Pail, 170kg Barrel"
                  value={newProd.packaging}
                  onChange={(e) => setNewProd({ ...newProd, packaging: e.target.value })}
                  className="w-full border rounded p-2"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Detailed Technical Description</label>
                <textarea
                  rows={3}
                  placeholder="Enter specifications from brochure..."
                  value={newProd.description}
                  onChange={(e) => setNewProd({ ...newProd, description: e.target.value })}
                  className="w-full border rounded p-2"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-monarch-red hover:bg-red-700 text-white font-bold py-2.5 rounded-lg transition-colors text-xs"
              >
                Publish to Athi River Inventory
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-base font-bold text-monarch-navy mb-4 flex items-center gap-2">
              <Package size={18} /> Active Catalog Products ({products.length})
            </h2>

            <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto">
              {products.map((p) => (
                <div key={p.id} className="py-3 flex justify-between items-center text-xs">
                  <div>
                    <div className="font-bold text-slate-800">{p.name}</div>
                    <div className="text-slate-500 font-mono text-[11px]">{p.viscosity} • {p.packaging}</div>
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded">
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}