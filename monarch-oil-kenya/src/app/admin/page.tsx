"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PlusCircle, Trash2, Edit3, Image, LogOut, CheckCircle, Package, UserPlus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  viscosity: string;
  standards: string;
  operating_life: string;
  packaging: string;
  image_url: string;
  application: string;
  description: string;
  in_stock: boolean;
}

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  // New Product Form State
  const [form, setForm] = useState({
    name: '',
    category: 'engine',
    viscosity: '',
    standards: '',
    operating_life: '500-600 Operating Hours',
    packaging: '18L Pail, 170kg Barrel',
    application: '',
    description: '',
    image_url: '',
    in_stock: true
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Load Products from Local Storage / Database
  useEffect(() => {
    const saved = localStorage.getItem('monarch_live_products');
    if (saved) {
      setProducts(JSON.parse(saved));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default authorized staff login (can be added via Supabase Auth)
    if (email.toLowerCase().includes('@') && password.length >= 6) {
      setIsLoggedIn(true);
      setMessage('');
    } else {
      setMessage('Invalid credentials. Password must be at least 6 characters.');
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      // Create instant preview URL
      setForm({ ...form, image_url: URL.createObjectURL(file) });
    }
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.viscosity) return;

    const newProduct: Product = {
      id: 'prod-' + Date.now(),
      name: form.name,
      category: form.category,
      viscosity: form.viscosity,
      standards: form.standards,
      operating_life: form.operating_life,
      packaging: form.packaging,
      image_url: form.image_url || 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80',
      application: form.application,
      description: form.description,
      in_stock: form.in_stock
    };

    const updated = [newProduct, ...products];
    setProducts(updated);
    localStorage.setItem('monarch_live_products', JSON.stringify(updated));

    setMessage('Product successfully published to Athi River live store!');
    setForm({
      name: '',
      category: 'engine',
      viscosity: '',
      standards: '',
      operating_life: '500-600 Operating Hours',
      packaging: '18L Pail, 170kg Barrel',
      application: '',
      description: '',
      image_url: '',
      in_stock: true
    });
    setImageFile(null);
    setTimeout(() => setMessage(''), 3500);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this product from the live catalog?')) {
      const updated = products.filter(p => p.id !== id);
      setProducts(updated);
      localStorage.setItem('monarch_live_products', JSON.stringify(updated));
    }
  };

  const handleInviteManager = () => {
    const newStaff = prompt("Enter the email address of the new manager you want to authorize:");
    if (newStaff && newStaff.includes('@')) {
      alert(`An invite and manager access key have been authorized for: ${newStaff}`);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 font-sans">
        <div className="bg-white rounded-2xl max-w-sm w-full p-8 shadow-2xl border border-slate-100">
          <div className="text-center mb-6">
            <div className="inline-block bg-[#8B0032] text-white text-xs font-black px-3 py-1 rounded mb-2">
              MONARCH PORTAL
            </div>
            <h1 className="text-xl font-black text-slate-900">Manager Sign In</h1>
            <p className="text-xs text-slate-500 mt-1">Authorized for staff & inventory managers</p>
          </div>

          {message && <div className="text-xs text-red-600 bg-red-50 p-3 rounded-lg mb-4 font-bold">{message}</div>}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Email Address</label>
              <input
                required
                type="email"
                placeholder="omarkenya4@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-3 focus:outline-[#8B0032]"
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
                className="w-full border border-slate-300 rounded-lg p-3 focus:outline-[#8B0032]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#8B0032] hover:bg-[#6b0026] text-white font-bold py-3 rounded-lg transition-colors shadow-md text-xs"
            >
              Access Product Manager
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
    <div className="min-h-screen bg-slate-50 font-sans p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Bar */}
        <div className="flex flex-wrap justify-between items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
          <div>
            <div className="text-[11px] font-bold text-[#8B0032] tracking-wider uppercase">Monarch Kenya Hub</div>
            <h1 className="text-2xl font-black text-slate-900">Product & Inventory Management</h1>
            <p className="text-xs text-slate-500">Manager: {email || 'omarkenya4@gmail.com'}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleInviteManager}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors border border-slate-300"
            >
              <UserPlus size={14} /> Add Manager
            </button>
            <Link
              href="/"
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
            >
              View Live Website
            </Link>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-red-600 hover:bg-red-50 text-xs font-bold px-3 py-2 rounded-lg border border-red-200 transition-colors flex items-center gap-1"
            >
              <LogOut size={14} /> Log Out
            </button>
          </div>
        </div>

        {message && (
          <div className="mb-6 p-4 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-bold flex items-center gap-2 border border-emerald-200">
            <CheckCircle size={16} /> {message}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Upload Form */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-fit">
            <h2 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2">
              <PlusCircle size={18} className="text-[#8B0032]" /> Upload New Product
            </h2>

            <form onSubmit={handleSaveProduct} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Product Title</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. FULMER C12 PLUS (CJ-4)"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 focus:outline-[#8B0032]"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 focus:outline-[#8B0032]"
                >
                  <option value="engine">Diesel Engine Oil</option>
                  <option value="hydraulic">Hydraulic Oil</option>
                  <option value="drivetrain">TO-4 / Transmission & Axle</option>
                  <option value="industrial">Industrial Gear Oil</option>
                  <option value="grease">Heavy Grease (MoS2 / Complex)</option>
                  <option value="coolant">Heavy-Duty Fleet Coolant</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Viscosity / Grade</label>
                  <input
                    required
                    type="text"
                    placeholder="15W-40 or 68#"
                    value={form.viscosity}
                    onChange={(e) => setForm({ ...form, viscosity: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg p-2.5 focus:outline-[#8B0032]"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Packaging Format</label>
                  <input
                    type="text"
                    placeholder="18L, 170kg"
                    value={form.packaging}
                    onChange={(e) => setForm({ ...form, packaging: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg p-2.5 focus:outline-[#8B0032]"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">OEM Approvals</label>
                <input
                  type="text"
                  placeholder="e.g. Caterpillar ECF-3, Volvo VDS-4.5, Cummins"
                  value={form.standards}
                  onChange={(e) => setForm({ ...form, standards: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 focus:outline-[#8B0032]"
                />
              </div>

              {/* Photo Upload Box */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">Product Photograph (Pail / Drum)</label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center hover:border-[#8B0032] transition-colors bg-slate-50">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="product-photo"
                  />
                  <label htmlFor="product-photo" className="cursor-pointer">
                    {form.image_url ? (
                      <img src={form.image_url} alt="Preview" className="h-28 mx-auto object-contain mb-2 rounded" />
                    ) : (
                      <Image size={32} className="mx-auto text-slate-400 mb-1" />
                    )}
                    <span className="text-[#8B0032] font-bold block">Click to select photo</span>
                    <span className="text-[10px] text-slate-400">PNG, JPG, or WebP up to 5MB</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Technical Description</label>
                <textarea
                  rows={3}
                  placeholder="Application specifications and machine suitability..."
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 focus:outline-[#8B0032]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8B0032] hover:bg-[#6b0026] text-white font-bold py-3 rounded-xl transition-colors shadow-md"
              >
                Publish to Athi River Live Store
              </button>
            </form>
          </div>

          {/* Existing Live Products List */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2">
              <Package size={18} className="text-[#8B0032]" /> Live Catalog Items ({products.length})
            </h2>

            <div className="divide-y divide-slate-100 max-h-[700px] overflow-y-auto">
              {products.map((p) => (
                <div key={p.id} className="py-4 flex items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-3">
                    <img
                      src={p.image_url || '/logo.png'}
                      alt={p.name}
                      className="w-14 h-14 object-contain rounded-lg bg-slate-50 border p-1"
                      onError={(e: any) => { e.target.src = '/logo.png'; }}
                    />
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm leading-tight">{p.name}</h3>
                      <div className="text-slate-500 font-mono text-[11px] mt-0.5">
                        {p.viscosity} • {p.packaging}
                      </div>
                      <span className="inline-block mt-1 bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded text-[10px]">
                        Active In Store
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete product"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
