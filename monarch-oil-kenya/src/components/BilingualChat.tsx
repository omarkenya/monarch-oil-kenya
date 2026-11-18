"use client";
import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

interface ChatProps {
  lang: 'EN' | 'ZH';
}

export default function BilingualChat({ lang }: ChatProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text:
        lang === 'EN'
          ? 'Hello! I am your Monarch Lubricant Advisor at Athi River, Kenya. Ask about oil specs (C12 PLUS, C4000), CAT/Volvo/Komatsu recommendations, or stock.'
          : '您好！我是统一 Monarch 肯尼亚润滑油技术顾问。您可以咨询设备选油、卡特/小松/沃尔沃认证参数或阿西河现货情况。',
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();
    const newHistory = [...messages, { role: 'user', text: userText }];
    setMessages(newHistory);
    setInput('');

    setTimeout(() => {
      const q = userText.toLowerCase();
      let reply = '';

      if (/[\u4e00-\u9fa5]/.test(q)) {
        if (q.includes('卡特') || q.includes('挖掘机') || q.includes('小松') || q.includes('cat')) {
          reply = "针对卡特、小松等重型挖掘机：发动机推荐 FULMER C12 PLUS (CJ-4) 或 C12 (CI-4)；液压系统推荐 C4000 超洁净 68# (35-40 MPa，4000小时 TOST)；传动推荐 FULMER TO-4 (10W)。阿西河仓库现货！";
        } else if (q.includes('液压') || q.includes('c4000')) {
          reply = "FULMER C4000 达到 NAS 8 级无尘清洁度，泵压 35-40 MPa，通过丹尼逊 HF-0 和力士乐认证。提供 18L 及 170kg 大桶。";
        } else if (q.includes('黄油') || q.includes('润滑脂') || q.includes('talos')) {
          reply = "采石场与破碎锤推荐 TALOS 二硫化钼 (MoS2) 极压脂（315kg 烧结负荷）；高温部位推荐 TALOS 复合锂基脂（滴点 320°C）。";
        } else {
          reply = "统一润滑油肯尼亚直营仓位于 Athi River（靠近 Toptank Greyland）。可安排技术人员提供现场用油检测。请问您的具体机型是？";
        }
      } else {
        if (q.includes('cat') || q.includes('excavator') || q.includes('komatsu') || q.includes('sany')) {
          reply = "For CAT, Komatsu, and Sany machinery: We recommend FULMER C12 PLUS (CJ-4 15W-40) for engines, C4000 68# for high-pressure hydraulics, and TO-4 (SAE 10W) for drivetrain systems. Stocked in Athi River.";
        } else if (q.includes('hydraulic') || q.includes('c4000')) {
          reply = "FULMER C4000 features NAS 8 cleanliness, 35-40 MPa pumping pressure, and 4,000h TOST life. Meets Denison HF-0 and Rexroth specs.";
        } else if (q.includes('grease') || q.includes('crusher') || q.includes('talos')) {
          reply = "For stone crushers and bucket pins, use TALOS MoS2 Grease (315kg weld load) or TALOS Complex Lithium Grease (320°C drop point, <1% water washout).";
        } else {
          reply = "Monarch Lubricants Kenya (Athi River depot) stocks OEM-certified oils. You can also chat directly with our engineers via WhatsApp at +254 700 000 000.";
        }
      }

      setMessages([...newHistory, { role: 'bot', text: reply }]);
    }, 400);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-monarch-red hover:bg-red-700 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-105"
        title="Monarch Lubricant AI Advisor"
      >
        <MessageSquare size={22} />
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[460px]">
          <div className="bg-monarch-navy text-white px-4 py-3 flex justify-between items-center">
            <div>
              <div className="font-extrabold text-xs">Monarch Lubrication Advisor</div>
              <div className="text-[10px] text-slate-400">统一润滑油肯尼亚技术顾问 (EN / 中文)</div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white hover:text-slate-300">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl max-w-[85%] leading-relaxed ${
                  m.role === 'bot'
                    ? 'bg-slate-200 text-slate-800 self-start'
                    : 'bg-monarch-red text-white self-end ml-auto'
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              placeholder="Ask in English or 中文..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-monarch-navy"
            />
            <button
              onClick={handleSend}
              className="bg-monarch-red hover:bg-red-700 text-white px-3 py-2 rounded-lg text-xs font-bold"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}