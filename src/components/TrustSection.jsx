import React from 'react';
import { TRUST_BADGES, CLIENT_LOGOS } from '../data/products';
import { Award, MapPin, ShieldCheck, Wrench, Building2, CheckCircle } from 'lucide-react';

export default function TrustSection() {
  const iconMap = {
    Award: Award,
    MapPin: MapPin,
    ShieldCheck: ShieldCheck,
    Wrench: Wrench
  };

  return (
    <section id="trust-section" className="py-16 px-4 bg-surface-0 border-b border-border-custom space-y-16">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Trust Badges Bar */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_BADGES.map((badge, idx) => {
            const IconComponent = iconMap[badge.icon] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="bg-surface-1 border border-border-custom p-6 rounded-xl space-y-3 hover:border-gold-500 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center font-bold">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-sm font-display">{badge.title}</h3>
                  <p className="text-xs text-ink-600 mt-1 leading-relaxed">{badge.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Krykard Care Service Feature Block */}
        <div className="bg-navy-900 text-surface-0 rounded-2xl p-8 lg:p-10 border border-gold-500/40 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl"></div>

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold text-gold-400 uppercase tracking-widest">
                BENZENE & KRYKARD CARE PROGRAM
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
                Factory-Trained Engineers & Pan-India Calibration Support
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                We support every instrument with genuine spares network, automated e-Service calibration certificates, and emergency on-site backup units to keep your grid operational.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-gold-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>24-Hour Service Response</span>
                </div>
                <div className="flex items-center gap-2 text-gold-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>NABL Traceable Calibration</span>
                </div>
                <div className="flex items-center gap-2 text-gold-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Annual Maintenance Contracts</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-navy-800/80 p-6 rounded-xl border border-navy-700 text-center space-y-3">
              <div className="text-3xl font-extrabold font-display text-metallic-gold">
                4.9 / 5.0 ★
              </div>
              <div className="text-xs text-gray-300 font-sans">
                Rated by 1,200+ Industrial Auditing Engineers Across India
              </div>
              <a
                href="mailto:service@benzene-electricals.com"
                className="inline-block w-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-xs py-2.5 rounded-lg transition-colors shadow-sm"
              >
                Request Calibration / Support
              </a>
            </div>
          </div>
        </div>

        {/* Client Logos Marquee */}
        <div className="space-y-6 text-center">
          <div className="text-xs font-mono font-bold text-ink-600 uppercase tracking-widest">
            TRUSTED BY INDIA'S LEADING POWER & UTILITY ENTERPRISES
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {CLIENT_LOGOS.map((client, idx) => (
              <div 
                key={idx}
                className="bg-surface-1 border border-border-custom hover:border-gold-500 p-4 rounded-xl text-center space-y-1 transition-all duration-200"
              >
                <div className="font-bold text-navy-900 text-xs font-display">{client.name}</div>
                <div className="text-[10px] text-ink-600 font-mono">{client.location}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
