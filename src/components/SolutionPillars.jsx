import React from 'react';
import { Activity, ShieldAlert, Leaf, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SolutionPillars({ onSelectCategory }) {
  const pillars = [
    {
      id: 'measure',
      title: 'MEASURE',
      tagline: 'High Precision Diagnostic Audits',
      badge: 'PILLAR 1',
      icon: Activity,
      colorClass: 'bg-gold-100/60 border-gold-500/30 text-navy-900',
      iconBg: 'bg-gold-500 text-navy-900',
      bullets: [
        'Class A IEC 61000-4-30 Power Quality Recording',
        'High frame rate 384x288 Thermal Imaging',
        '15kV Cable & Transformer Insulation Resistance',
        'Harmonics & Transient Waveform Analysis'
      ],
      targetCategory: 'power-quality'
    },
    {
      id: 'protect',
      title: 'PROTECT',
      tagline: 'Equipment & Grid Reliability',
      badge: 'PILLAR 2',
      icon: ShieldAlert,
      colorClass: 'bg-navy-900 text-surface-0 border-navy-700',
      iconBg: 'bg-gold-500 text-navy-900',
      bullets: [
        'Predictive Hot-Spot Detection before failure',
        'Earth Loop & Soil Resistivity Protection Testing',
        'Circuit Breaker & Busbar Micro-Ohm Resistance',
        '1000V CAT IV Safety Compliant DMMs'
      ],
      targetCategory: 'insulation-earth'
    },
    {
      id: 'conserve',
      title: 'CONSERVE',
      tagline: 'Energy Efficiency & Cost Optimization',
      badge: 'PILLAR 3',
      icon: Leaf,
      colorClass: 'bg-emerald-50 border-emerald-200 text-navy-900',
      iconBg: 'bg-emerald-600 text-white',
      bullets: [
        'Revenue Grade Class 0.2S Smart Energy Monitoring',
        'Dual Source (EB vs DG) Power Consumption Audits',
        'Alensoft Power Management Software Integration',
        'Peak Load & Power Factor Optimization'
      ],
      targetCategory: 'oscilloscopes-energy'
    }
  ];

  return (
    <section id="solutions-section" className="py-16 px-4 bg-surface-1 border-b border-border-custom">
      <div className="max-w-7xl mx-auto space-y-10">
        
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest">
            BENZENE ENGINEERING METHODOLOGY
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-navy-900">
            Measure • Protect • Conserve
          </h2>
          <p className="text-xs sm:text-sm text-ink-600">
            Our three core testing pillars empower electrical engineers to diagnose, protect, and optimize industrial power systems.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const IconComp = p.icon;
            return (
              <div 
                key={p.id}
                className={`rounded-2xl p-7 border shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${p.colorClass}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-sm ${p.iconBg}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-extrabold tracking-wider uppercase px-2.5 py-1 rounded bg-navy-800/10">
                      {p.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold font-display tracking-tight">
                      {p.title}
                    </h3>
                    <div className="text-xs font-semibold opacity-80 mt-0.5">
                      {p.tagline}
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs pt-2">
                    {p.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectCategory(p.targetCategory)}
                  className="w-full bg-navy-900 hover:bg-navy-800 text-gold-400 font-bold text-xs py-3 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  View {p.title} Line Products
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
