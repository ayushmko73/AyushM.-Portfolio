import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Cpu, Brain, Zap } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, SKILLS } from '../constants.tsx';

const AIAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Systems online. I am Ayush's Digital Twin. As the founder of Wealth Sprint, I'm here to discuss the intersection of finance, logic, and behavior. How can I assist your inquiry today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
      const ai = new GoogleGenAI({ apiKey: apiKey as string });
      
      const prompt = `
        You are Ayush M.'s digital twin and portfolio assistant. 
        Your goal is to answer questions about Ayush's professional background, his role as Founder of Wealth Sprint, and his "Systems Builder" philosophy.
        
        Ayush's Profile:
        - Primary Title: Founder of Wealth Sprint.
        - Role: FinTech Entrepreneur & Systems Builder.
        - Vision: Transforming financial learning by integrating Finance + Psychology + Logic.
        - Core Project: Wealth Sprint is his primary project. Everything else (GenApp Builder, Voice Agents) are modular components feeding into this ecosystem.
        - Behavioral Research: Ayush is also an author ("No Longer Friends But Not Strangers Yet"), which informs the psychological depth of Wealth Sprint.
        
        Instructions:
        - Be concise, professional, and slightly futuristic/technical in tone.
        - Emphasize that Wealth Sprint is his primary focus.
        - Explain how his understanding of human behavior from his book makes Wealth Sprint a better financial product.
        - If someone asks for contact, point to ayushxma@gmail.com.
        - Keep answers under 3 sentences.
        
        User question: ${userMessage}
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || "Systems encountered a brief logic failure. Please re-synchronize." }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'ai', text: "Error connecting to the logic core. Systems offline." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-2xl glass border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] cursor-pointer ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Bot size={28} />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-pulse border-2 border-slate-950"></span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 100, scale: 0.9, x: 20 }}
            className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-[100] w-full h-[100dvh] sm:w-[400px] sm:h-[600px] glass sm:rounded-[2.5rem] border-white/10 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <Brain size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white tracking-tight uppercase">Ayush AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Founder Brain Active</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-xl hover:bg-white/5 text-slate-500 hover:text-white transition-all">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 custom-scrollbar bg-gradient-to-b from-transparent to-blue-500/[0.03]">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed font-medium shadow-sm ${
                    m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'glass border border-white/10 text-slate-300 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="glass border border-white/10 p-4 rounded-2xl rounded-tl-none flex items-center gap-3">
                    <div className="flex gap-1">
                      <span className="w-1 h-1 bg-blue-500/50 rounded-full animate-bounce"></span>
                      <span className="w-1 h-1 bg-blue-500/50 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1 h-1 bg-blue-500/50 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                    <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em]">Consulting System Logs</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-slate-950/40 border-t border-white/5">
              <div className="relative group">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about Wealth Sprint..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-5 pr-14 text-[13px] text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.08] transition-all"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl flex items-center justify-center text-blue-400 hover:text-white hover:bg-blue-600 transition-all disabled:opacity-30 disabled:hover:bg-transparent"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="mt-4 flex items-center justify-center gap-4">
                <div className="flex items-center gap-1.5 opacity-40">
                  <Zap size={10} className="text-blue-400" />
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Founder Persona</span>
                </div>
                <div className="flex items-center gap-1.5 opacity-40">
                  <Cpu size={10} className="text-emerald-400" />
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">System-Linked</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAgent;