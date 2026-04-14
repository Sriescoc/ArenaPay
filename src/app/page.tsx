"use client";
import React, { useState, useEffect } from 'react';
import { formatRut, validateRut } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Trophy, Smartphone, ArrowRight } from 'lucide-react';

export default function ArenaPay() {
  const [rut, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1); // 1: Welcome, 2: Register, 3: OTP
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validateRut(rut) && email.includes('@'));
  }, [rut, email]);

  const handleRutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRut(formatRut(e.target.value));
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center p-6 font-sans selection:bg-blue-500/30">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-[#1e293b]/40 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-10"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-black tracking-tighter bg-gradient-to-r from-blue-400 via-white to-emerald-400 bg-clip-text text-transparent">
            ARENAPAY
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <Shield className="w-3 h-3 text-emerald-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Secure Professional Registry</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h2 className="text-xl font-bold mb-2">Bienvenido a la Arena</h2>
                <p className="text-gray-400 text-sm">Regístrate con tus datos oficiales para participar en torneos profesionales.</p>
              </div>
              <button 
                onClick={() => setStep(2)}
                className="w-full bg-white text-[#0f172a] py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-blue-400 transition-colors group"
              >
                REGISTRARSE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ) : step === 2 ? (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-5"
            >
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-blue-400 uppercase tracking-widest ml-1">RUT Chileno</label>
                <input 
                  value={rut} onChange={handleRutChange}
                  placeholder="12.345.678-9"
                  className="w-full bg-[#0f172a]/50 border border-white/10 p-4 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 text-lg font-medium"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-blue-400 uppercase tracking-widest ml-1">Email</label>
                <input 
                  type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  className="w-full bg-[#0f172a]/50 border border-white/10 p-4 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 text-lg font-medium"
                />
              </div>
              <button 
                disabled={!isValid}
                onClick={() => setStep(3)}
                className={`w-full py-4 rounded-2xl font-black transition-all shadow-xl ${
                  isValid ? 'bg-blue-600 shadow-blue-900/40 hover:scale-[1.02]' : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                }`}
              >
                VERIFICAR IDENTIDAD
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8 py-4"
            >
              <div className="bg-blue-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto border border-blue-500/20">
                <Smartphone className="w-8 h-8 text-blue-400 animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Verifica tu correo</h3>
                <p className="text-gray-400 text-xs px-6">
                  Hemos enviado un código de seguridad a <span className="text-white">{email}</span>. Ingresa los 6 dígitos.
                </p>
              </div>
              <div className="flex justify-between gap-2 max-w-[280px] mx-auto">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <input 
                    key={i} 
                    maxLength={1} 
                    className="w-10 h-14 bg-[#0f172a] border border-white/10 rounded-xl text-center text-xl font-black focus:border-blue-500 outline-none transition-all" 
                  />
                ))}
              </div>
              <button className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] hover:text-blue-400 transition-colors">
                No recibí el código
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      <p className="mt-10 text-[10px] text-gray-600 font-medium uppercase tracking-[0.3em]">
        &copy; 2026 ArenaPay Engineering - Braga, PT
      </p>
    </div>
  );
}
