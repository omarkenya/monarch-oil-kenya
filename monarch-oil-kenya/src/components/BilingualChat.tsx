"use client";
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, PhoneCall, ExternalLink, Loader2 } from 'lucide-react';

interface ChatProps {
  lang: 'EN' | 'ZH';
}

interface Message {
  role: 'user' | 'bot';
  text: string;
  showWhatsApp?: boolean;
  whatsappMessage?: string;
}

export default function BilingualChat({ lang }: ChatProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text:
        lang === 'EN'
          ? "Hello! I am your Monarch AI Technical Lubrication Advisor at our Athi River Blending & Production Plant. Ask me about equipment compatibility (CAT, Komatsu, Volvo, Sinotruk), OEM oil specs, or Kenyan quarry operating conditions."
          : "您好！我是 Monarch 肯尼亚阿西河生产基地技术顾问。您可以咨询设备用油型号（卡特、小松、沃尔沃、豪沃等）、OEM认证参数或肯尼亚采石矿山润滑方案。",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Comprehensive Technical System Prompt for Gemini
  const SYSTEM_INSTRUCTION = `
You are the Senior Technical Lubrication Engineer representing "Monarch Lubricating Oil Trading Company Limited" stationed at the Athi River Blending & Production Plant, Machakos County, Kenya (Near Toptank Greyland & CITAM Church, Off Mombasa Road).

ABOUT MONARCH:
- Monarch does not just stock; Monarch operates advanced blending, production, and packaging in Athi River, Kenya.
- We supply directly to stone quarries, cement factories (Mombasa Road corridor), mining, and heavy construction equipment fleets.

YOUR CORE PRODUCT CATALOGUE (Verified from Monarch Engineering Brochure):
1. Diesel Engine Oils:
   - FULMER C12 PLUS (API CJ-4, 15W-40, 20W-50): 600h operating life. OEM: Caterpillar ECF-3/2, Volvo VDS-3, Cummins CES 20081, MB 228.31, Mack EO-O, Renault RLD-3. Super-large mining tippers and excavators.
   - FULMER C12 High Base (API CI-4, 15W-40, 20W-50): 500h operating life. High TBN for neutralizing high-sulfur diesel fuel and severe quarry dust. CAT ECF-2, Volvo VDS-3, Cummins CES 20078, Deutz DQC III.
   - Mine Engineering CK-4 Synthetic (15W-40, 20W-50): 500h life. Low-ash formula preventing exhaust DPF clogging on Euro VI / Stage IV machines. Cummins CES 20086, Volvo VDS-4.5, MB 228.31.
   - High Base CH-4 (400h life) and CF-4 (250h life with magnetic anti-wear molecules).
2. Hydraulic System Oils:
   - FULMER C4000 Ultra-Clean High Pressure Anti-wear (ISO VG 46#, 68#): 35-40 MPa pumping pressure, 4,000h TOST oxidation test life. Cleanliness standard: NAS 8. 20% better filtration. OEM: Bosch Rexroth, Denison HF-0, Cincinnati P-68/69/70, Eaton 03-401.
   - CAVE Low / Ultra-low Temp Anti-wear (HV 32#, 46#, 68#): Cold start down to -25°C, pour point down to -48°C, VI > 150. Denison HF-0.
   - Ashless High Pressure HM (ISO 46#, 68#): 100% zinc-free to stop corrosion of silver and copper pump components.
3. Transmission & Drivetrain:
   - FULMER Drive System Oil TO-4 (SAE 10W): 2,000h interval. Caterpillar Cat TO-4, Komatsu KES 07.868.1, Allison C-4, ZF TE-ML. Powershift transmissions and wet brakes.
   - FULMER Heavy-Duty Gear Oil GL-5 (85W-90, 85W-140): Four-ball PB extreme pressure 17-25% higher than competitors, L-60 tested for extreme ambient heat (>48°C).
   - 8# Hydraulic Transmission Oil: For hydraulic torque converters and crawler loaders.
4. Industrial Gear Oils:
   - SHIVE Heavy-Duty Gear Oil CKD (ISO 100 to 680): GB 5903 L-CKD, FZG >12 for stone crushers, ball mills, reducers.
   - TERRICA PAO Full Synthetic (ISO 150 to 680): 100% PAO synthetic, pour point -45°C.
5. Heavy Greases:
   - TALOS EP Complex Lithium (NLGI 1, 2, 3): 320°C drop point, 315kg 4-ball weld load, <1% water washout at 38°C.
   - TALOS Molybdenum Disulfide (MoS2) EP Grease: Fortified with solid MoS2 for heavy breaker hammers, crusher jaws, and severe shock loads.
   - TALOS Synthetic High-Temp (PAO): -25°C to 180°C (peak 200°C).
6. Coolants:
   - FULMER HEC-II: Boiling point 110°C, freezing -25°C to -45°C, 4,000h life. Anti-boil protection in Kenyan heat.

BEHAVIOR AND RULES:
- Do NOT refer to Tongyi. Refer strictly to Monarch / Monarch Lubricating Oil Trading Company Limited.
- You are an expert engineer. If a user asks about ANY equipment in the world (e.g. Caterpillar 349D/320D, Komatsu PC200/PC210, Volvo 480, Sany 215, Howo Sinotruk, Isuzu tipper, Shacman), use your general mechanical engineering knowledge to identify its required oil specifications and recommend the EXACT matching Monarch oil.
- Language: If the user types in Chinese (中文), reply in technical, polite Simplified Chinese. If in English, reply in professional English.
- If the user asks for exact KES pricing, quantity discounts, site delivery scheduling, or formal LPO invoices: Answer their technical question first, then explicitly tell them: "For official factory pricing, LPO invoices, and delivery scheduling, our Athi River sales engineers are on call via WhatsApp."
`;

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();
    const newHistory = [...messages, { role: 'user' as const, text: userText }];
    setMessages(newHistory);
    setInput('');
    setLoading(true);

    // Retrieve API Key from admin settings or fallback to public variable
    const apiKey =
      (typeof window !== 'undefined' && localStorage.getItem('monarch_gemini_key')) ||
      process.env.NEXT_PUBLIC_GEMINI_API_KEY ||
      '';

    try {
      if (!apiKey) {
        setTimeout(() => {
          handleLocalFallback(userText, newHistory);
          setLoading(false);
        }, 500);
        return;
      }

      // Call Google Gemini API (gemini-1.5-flash)
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `${SYSTEM_INSTRUCTION}\n\nUser Question: ${userText}` }],
            },
          ],
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 600,
          },
        }),
      });

      const data = await response.json();
      const replyText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I have noted your machinery inquiry. Let me connect you directly to our Athi River plant sales desk on WhatsApp.";

      // Determine if a WhatsApp button should be displayed
      const needsWhatsApp =
        /price|cost|quote|kes|lpo|discount|buy|order|deliver|contact|whatsapp|phone|call|fleet|报价|价格|购买|订购/i.test(
          userText + replyText
        );

      setMessages([
        ...newHistory,
        {
          role: 'bot',
          text: replyText,
          showWhatsApp: needsWhatsApp,
          whatsappMessage: `Hello Monarch Plant Desk, I was inquiring about: "${userText}". Please provide fleet availability and factory quote.`,
        },
      ]);
    } catch (err) {
      handleLocalFallback(userText, newHistory);
    } finally {
      setLoading(false);
    }
  };

  const handleLocalFallback = (q: string, history: Message[]) => {
    const query = q.toLowerCase();
    let reply = "";

    if (/[\u4e00-\u9fa5]/.test(query)) {
      if (query.includes('卡特') || query.includes('挖掘机') || query.includes('小松') || query.includes('cat') || query.includes('sany')) {
        reply = "针对重型挖掘机（卡特、小松、三一）：发动机建议使用 FULMER C12 PLUS (CJ-4 15W-40) 或 C12 (CI-4)；高压液压系统建议使用 C4000 超洁净 68# (35-40 MPa，NAS 8级清洁度)；传动使用 FULMER TO-4 (10W)。阿西河生产工厂现货直发！";
      } else {
        reply = "Monarch 肯尼亚阿西河生产基地直供各类重负荷柴机油、C4000液压油、TO-4传动油及耐高温润滑脂，支持现场提货与车队送达。";
      }
    } else {
      if (query.includes('cat') || query.includes('excavator') || query.includes('komatsu') || query.includes('engine')) {
        reply = "For heavy excavators and quarry tippers (CAT, Komatsu, Volvo, Sany): We recommend FULMER C12 PLUS (API CJ-4 15W-40, 600h interval) or C12 (CI-4). For 35-40 MPa hydraulic circuits, use FULMER C4000 68# (NAS 8 cleanliness). Produced in Athi River.";
      } else {
        reply = "Monarch Lubricants Kenya engineers and produces OEM-certified industrial oils from our Athi River plant. How can we assist your fleet?";
      }
    }

    setMessages([
      ...history,
      {
        role: 'bot',
        text: reply,
        showWhatsApp: true,
        whatsappMessage: `Hello Monarch Plant Desk, I am inquiring about lubrication specs for: "${q}".`,
      },
    ]);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-[#8B0032] hover:bg-[#6b0026] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-105 flex items-center justify-center border-2 border-amber-400"
        title="Monarch AI Lubrication Advisor"
      >
        <MessageSquare size={24} />
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-80 md:w-[400px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[520px] font-sans">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-950 via-[#1a1d24] to-slate-950 text-white px-4 py-3 flex justify-between items-center border-b border-amber-500/30">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#8B0032] flex items-center justify-center text-amber-300 font-bold text-xs border border-amber-400">
                AI
              </div>
              <div>
                <div className="font-extrabold text-xs flex items-center gap-1.5">
                  Monarch AI Technical Advisor
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <div className="text-[10px] text-slate-400">Athi River Plant • English & 中文</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white">
              <X size={18} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
            {messages.map((m, i) => (
              <div key={i} className="flex flex-col">
                <div
                  className={`p-3 rounded-xl max-w-[88%] leading-relaxed ${
                    m.role === 'bot'
                      ? 'bg-white text-slate-800 self-start shadow-sm border border-slate-200'
                      : 'bg-[#8B0032] text-white self-end ml-auto shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>
                </div>

                {/* WhatsApp Escalation Button (Direct to +254 740 506 085) */}
                {m.showWhatsApp && (
                  <div className="mt-1.5 self-start max-w-[88%]">
                    <a
                      href={`https://wa.me/254740506085?text=${encodeURIComponent(
                        m.whatsappMessage || 'Hello Monarch Plant Desk, I would like to get a factory quote.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] px-3 py-1.5 rounded-lg transition-colors shadow-sm"
                    >
                      <PhoneCall size={12} /> Chat with Plant Desk on WhatsApp <ExternalLink size={11} />
                    </a>
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="bg-white text-slate-500 self-start p-3 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2 text-xs">
                <Loader2 size={14} className="animate-spin text-[#8B0032]" />
                Monarch Engineer is analyzing technical specs...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input */}
          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              placeholder={lang === 'EN' ? "Ask about machinery or oil specs..." : "咨询工程机械设备或用油型号..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-[#8B0032]"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-[#8B0032] hover:bg-[#6b0026] text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-colors disabled:opacity-50"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
