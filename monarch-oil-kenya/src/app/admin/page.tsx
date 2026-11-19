"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { initialProducts, Product } from '@/data/products';
import { PlusCircle, Trash2, Edit3, Image, LogOut, CheckCircle, Package, UserPlus, X } from 'lucide-react';

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [message, setMessage] = useState('');
  
  // Create / Edit State
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [form, setForm] = useState({
    name: '',
    category: 'engine',
    viscosity: '',
    standards: '',
    operatingLife: '500-600 Operating Hours',
    packaging: '18L Pail, 170kg Barrel',
    application: '',
    description: '',
    imagePath: '',
  });

  // Pre-load products on mount
  useEffect(() => {
    const saved = localStorage.getItem('monarch_live_products');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setProducts(parsed);
          return;
        }
      } catch (e) {}
    }
    // If empty, initialize with all 12 official brochure products!
    setProducts(initialProducts);
    localStorage.setItem('monarch_live_products', JSON.stringify(initialProducts));
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.toLowerCase().includes('@') && password.length >= 6) {
      setIsLoggedIn(true);
      setMessage('');
    } else {
      setMessage('Invalid credentials. Password must be at least 6 characters.');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, imagePath: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  // Save new product or edit existing
  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.viscosity) return;

    let updatedList: Product[] = [];

    if (editingProduct) {
      // Update existing item
      updatedList = products.map(p => 
        p.id === editingProduct.id 
          ? { ...p, ...form, containerType: p.containerType } 
          : p
      );
      setMessage(`Successfully updated "${form.name}"!`);
      setEditingProduct(null);
    } else {
      // Create new item
      const newProduct: Product = {
        id: 'prod-' + Date.now(),
        name: form.name,
        category: form.category as any,
        viscosity: form.viscosity,
        standards: form.standards || 'Meets Industry Standards',
        operatingLife: form.operatingLife || '500 Hours',
        packaging: form.packaging || '18L, 170kg',
        containerType: 'pail-black-gold',
        imagePath: form.imagePath || '/logo.png',
        application: form.application || 'Heavy Machinery',
        description: form.description || '',
      };
      updatedList = [newProduct, ...products];
      setMessage(`Successfully added "${form.name}" to live store!`);
    }

    setProducts(updatedList);
    localStorage.setItem('monarch_live_products', JSON.stringify(updatedList));

    // Optional: Sync to Supabase table
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (supabaseUrl && supabaseAnonKey) {
      try {
        await fetch(`${supabaseUrl}/rest/v1/products`, {
          method: 'POST',
          headers: {
            apikey: supabaseAnonKey,
            Authorization: `Bearer ${supabaseAnonKey}`,
            'Content-Type': 'application/json',
            Prefer: 'resolution=merge-duplicates'
          },
          body: JSON.stringify({
            name: form.name,
            category: form.category,
            viscosity: form.viscosity,
            standards: form.standards,
            operating_life: form.operatingLife,
            packaging: form.packaging,
            image_url: form.imagePath,
            description: form.description
          })
        });
      } catch (err) {}
    }

    // Reset Form
    setForm({
      name: '',
      category: 'engine',
      viscosity: '',
      standards: '',
      operatingLife: '500-600 Operating Hours',
      packaging: '18L Pail, 170kg Barrel',
      application: '',
      description: '',
      imagePath: '',
    });

    setTimeout(() => setMessage(''), 3500);
  };

  const handleStartEdit = (p: Product) => {
    setEditingProduct(p);
    setForm({
      name: p.name,
      category: p.category,
      viscosity: p.viscosity,
      standards: p.standards,
      operatingLife: p.operatingLife,
      packaging: p.packaging,
      application: p.application,
      description: p.description,
      imagePath: p.imagePath || '',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete "${name}" from the live website?`)) {
      const updated = products.filter(p => p.id !== id);
      setProducts(updated);
      localStorage.setItem('monarch_live_products', JSON.stringify(updated));
      setMessage(`Removed "${name}" from live store.`);
      setTimeout(() => setMessage(''), 3000);
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
            <h1 className="text-xl font-black text-slate-900">Staff Sign In</h1>
            <p className="text-xs text-slate-500 mt-1">Authorized for staff & inventory managers</p>
          </div>

          {message && <div className="text-xs text-red-600 bg-red-50 p-3 rounded-lg mb-4 font-bold">{message}</div>}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Staff Email</label>
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
    <div className="min-h-screen bg-slate-50 font-sans p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Bar */}
        <div className="flex flex-wrap justify-between items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
          <div>
            <div className="text-[11px] font-bold text-[#8B0032] tracking-wider uppercase">Monarch Kenya Hub</div>
            <h1 className="text-2xl font-black text-slate-900">Product & Inventory Manager</h1>
            <p className="text-xs text-slate-500">Signed in: {email || 'omarkenya4@gmail.com'}</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
            >
              View Live Storefront
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
          {/* Add / Edit Form */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-fit">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                {editingProduct ? <Edit3 size={18} className="text-[#8B0032]" /> : <PlusCircle size={18} className="text-[#8B0032]" />}
                {editingProduct ? `Edit: ${editingProduct.name}` : 'Upload New Product'}
              </h2>
              {editingProduct && (
                <button
                  onClick={() => {
                    setEditingProduct(null);
                    setForm({ name: '', category: 'engine', viscosity: '', standards: '', operatingLife: '', packaging: '', application: '', description: '', imagePath: '' });
                  }}
                  className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1"
                >
                  <X size={14} /> Cancel
                </button>
              )}
            </div>

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
                  <label className="font-bold text-slate-700 block mb-1">Packaging Sizes</label>
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
                  placeholder="e.g. Caterpillar ECF-3, Volvo VDS-4.5"
                  value={form.standards}
                  onChange={(e) => setForm({ ...form, standards: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg p-2.5 focus:outline-[#8B0032]"
                />
              </div>

              {/* Photo Upload Box */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">Product Photo</label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center hover:border-[#8B0032] transition-colors bg-slate-50">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="admin-photo"
                  />
                  <label htmlFor="admin-photo" className="cursor-pointer">
                    {form.imagePath ? (
                      <img src={form.imagePath} alt="Preview" className="h-24 mx-auto object-contain mb-2 rounded" />
                    ) : (
                      <Image size={32} className="mx-auto text-slate-400 mb-1" />
                    )}
                    <span className="text-[#8B0032] font-bold block">
                      {form.imagePath ? "Click to change photo" : "Select photo from laptop/phone"}
                    </span>
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
                {editingProduct ? 'Save Changes' : 'Publish Product to Live Website'}
              </button>
            </form>
          </div>

          {/* Active Items with Edit and Delete Buttons */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2">
              <Package size={18} className="text-[#8B0032]" /> Manage Active Catalog ({products.length} Items)
            </h2>

            <div className="divide-y divide-slate-100 max-h-[700px] overflow-y-auto">
              {products.map((p) => (
                <div key={p.id} className="py-4 flex items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-3">
                    <img
                      src={p.imagePath || '/logo.png'}
                      alt={p.name}
                      className="w-14 h-14 object-contain rounded-lg bg-slate-50 border p-1"
                      onError={(e: any) => { e.target.src = '/logo.png'; }}
                    />
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm leading-tight">{p.name}</h3>
                      <div className="text-slate-500 font-mono text-[11px] mt-0.5">
                        {p.viscosity} • {p.packaging}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{p.standards}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleStartEdit(p)}
                      className="text-slate-700 hover:text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1 font-bold"
                      title="Edit Details"
                    >
                      <Edit3 size={15} /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p.id, p.name)}
                      className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Product"
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
