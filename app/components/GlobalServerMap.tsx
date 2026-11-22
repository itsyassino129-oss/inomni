// components/GlobalServerMap.tsx
// ✅ Server Component — no "use client". No state, no effects, no handlers.
//    <FadeIn> is imported as a client component; that's supported.

import Image from 'next/image';
import { Wifi, Server, ShieldCheck, Zap, type LucideIcon } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';
import { FadeIn } from './AnimatedSection';

const BRAND = CONSTANTS.BRAND_NAME; // "DODO TV"

// ---------------------------------------------------------------------------
// Static feature cards — module scope, no per-render allocation
// ---------------------------------------------------------------------------
const FEATURES: readonly { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Zap,
    title: 'Ultra-Low Latency',
    desc: 'Optimized network routing for smooth live sports and instant channel switching.',
  },
  {
    icon: Server,
    title: 'Redundant Servers',
    desc: 'Automated failover systems keep your stream running without interruptions.',
  },
  {
    icon: ShieldCheck,
    title: '99.9% Uptime',
    desc: 'Around-the-clock monitoring for a reliable, hassle-free viewing experience.',
  },
];

// ---------------------------------------------------------------------------
// SECTION
// ---------------------------------------------------------------------------
export default function GlobalServerMap() {
  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#071b5c] via-[#040f36] to-[#071b5c] py-16 sm:py-20 lg:py-28 text-white border-y border-[#fff3b0]/15"
      aria-labelledby="global-server-map-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,243,176,0.1),_transparent_65%)] pointer-events-none"
        aria-hidden="true"
      />

      <FadeIn className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#fff3b0]/40 bg-[#051342] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#fff3b0] shadow-md">
            <Wifi className="h-4 w-4 text-[#fff3b0]" aria-hidden="true" />
            <span>
              Global Server Network{' '}
              <span aria-label="United States" role="img">
                🇺🇸
              </span>
            </span>
          </div>

          <h2
            id="global-server-map-heading"
            className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl drop-shadow-md"
          >
            Global Server Coverage In <span className="text-[#fff3b0]">100+ Countries</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#f0ebd8] sm:text-base font-medium">
            Experience ultra-fast 4K IPTV streaming powered by {BRAND}&apos;s global network. Enjoy zero buffering, maximum stability, and guaranteed 99.9% uptime worldwide via dodoiptv.pro.
          </p>
        </div>

        {/* Map graphic */}
        <div className="relative mx-auto my-8 max-w-5xl">
          <Image
            src="/img/global.png"
            alt={`Global ${BRAND} server network coverage map`}
            width={1400}
            height={787}
            className="w-full h-auto max-h-[600px] object-contain block mx-auto opacity-95 filter drop-shadow-[0_0_25px_rgba(255,243,176,0.2)]"
            loading="lazy"
            sizes="(max-width: 1088px) 100vw, 992px"
          />
        </div>

        {/* Feature highlights */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white text-[#071b5c] backdrop-blur-md p-6 rounded-3xl border-2 border-[#fff3b0] shadow-xl hover:border-[#FFD700] hover:shadow-[0_10px_30px_rgba(255,215,0,0.25)] transition-all duration-300 flex flex-col items-center justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#f0ebd8] border border-[#071b5c]/20 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="h-6 w-6 text-[#071b5c]" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-black uppercase text-[#071b5c] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#333333] mt-1 font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}