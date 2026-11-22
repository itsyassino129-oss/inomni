// app/components/PricingSection.tsx
'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import {
  CheckCircle2,
  Zap,
  Crown,
  MonitorPlay,
  Gift,
  Sparkles,
  Flame,
  ShieldCheck,
  Lock,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Module-scope constants — exact device/duration pricing tiers
// ---------------------------------------------------------------------------
const DEVICE_OPTIONS = [1, 2, 3] as const;
type DeviceCount = (typeof DEVICE_OPTIONS)[number];
type Duration = 3 | 6 | 12;

const PRICING: Record<DeviceCount, Record<Duration, { total: number; mo: string }>> = {
  1: {
    3: { total: 35, mo: (35 / 3).toFixed(2) },
    6: { total: 45, mo: (45 / 6).toFixed(2) },
    12: { total: 59, mo: (59 / 12).toFixed(2) },
  },
  2: {
    3: { total: 45, mo: (45 / 3).toFixed(2) },
    6: { total: 65, mo: (65 / 6).toFixed(2) },
    12: { total: 79, mo: (79 / 12).toFixed(2) },
  },
  3: {
    3: { total: 59, mo: (59 / 3).toFixed(2) },
    6: { total: 79, mo: (79 / 6).toFixed(2) },
    12: { total: 99, mo: (99 / 12).toFixed(2) },
  },
};

const STANDARD_FEATURES = [
  '4K Ultra HD & 60FPS Sports Feeds',
  '36,000+ Live Channels (US, CA, UK, INTL)',
  '120,000+ Movies & TV Shows (Updated Daily)',
  'NFL Sunday, NBA, MLB, NHL & College Football',
  '7 Day US Catch Up & Full EPG Guide',
  'Anti Freeze US Edge Servers',
  'Smart TV, Firestick, iOS, Android, Shield',
  '24/7 Priority Support via Live Chat',
] as const;

const VIP_FEATURES = [
  'Ultra HD 4K & Pure Full HD Quality',
  '36,000+ Premium Live Channels',
  '120,000+ Movies & TV Shows (Updated Daily)',
  'NFL, NBA, ESPN, HBO, Showtime & All PPVs',
  '7 Day Catch Up & Electronic Program Guide',
  'Dedicated New York & Los Angeles Server Line',
  'Smart TV, Firestick, Apple TV, iOS, Android',
  '24/7 VIP Priority Support via Live Chat',
] as const;



// ---------------------------------------------------------------------------
// Payment Method SVG Icons — US & Global Standard
// ---------------------------------------------------------------------------
const SHELL_STYLES = {
  light: { bg: '#FFFFFF', border: '#f0ebd8' },
  dark: { bg: '#051342', border: 'rgba(255,243,176,0.35)' },
} as const;

function PaymentShell({
  variant,
  children,
}: {
  variant: 'light' | 'dark';
  children: React.ReactNode;
}) {
  const { bg, border } = SHELL_STYLES[variant];
  return (
    <div
      className="flex items-center justify-center h-8 w-12 rounded-xl overflow-hidden shrink-0 transition-transform duration-300 hover:scale-110 shadow-sm"
      style={{ backgroundColor: bg, border: `1px solid ${border}` }}
    >
      {children}
    </div>
  );
}

const PaymentIcons = ({ variant = 'light' }: { variant?: 'light' | 'dark' }) => {
  const isDark = variant === 'dark';
  return (
    <div className="grid grid-cols-5 gap-2 items-center">
      <PaymentShell variant={variant}>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <text x="24" y="22" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="14" fontWeight="900" fontStyle="italic" fill={isDark ? '#FFFFFF' : '#1434CB'} letterSpacing="-0.5">VISA</text>
        </svg>
      </PaymentShell>

      <PaymentShell variant={variant}>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="19" cy="16" r="9" fill="#EB001B" />
          <circle cx="29" cy="16" r="9" fill="#F79E1B" />
          <path d="M24 8.5a9 9 0 000 15 9 9 0 000-15z" fill="#FF5F00" />
        </svg>
      </PaymentShell>

      <PaymentShell variant={variant}>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="11" fontWeight="900" fontStyle="italic" fill="#003087">Pay</text>
          <text x="24" y="27" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="9" fontWeight="800" fontStyle="italic" fill="#0079C1">Pal</text>
        </svg>
      </PaymentShell>

      <PaymentShell variant={variant}>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="24" cy="16" r="10" fill="#F7931A" />
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="14" fontWeight="900" fill="#FFFFFF">₿</text>
        </svg>
      </PaymentShell>

      <PaymentShell variant={variant}>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="11" fontWeight="800" fill={isDark ? '#FFFFFF' : '#5F6368'}>GPay</text>
        </svg>
      </PaymentShell>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Feature list renderer
// ---------------------------------------------------------------------------
function FeatureList({
  devices,
  features,
  theme,
}: {
  devices: DeviceCount;
  features: readonly string[];
  theme: 'standard' | 'gold';
}) {
  const isGold = theme === 'gold';
  const checkWrap = isGold
    ? 'bg-[#FFD700]/20 p-0.5 rounded-lg border border-[#FFD700]/40'
    : '';
  const checkColor = isGold ? 'text-[#FFD700]' : 'text-[#071b5c]';
  const textColor = isGold ? 'text-white' : 'text-[#333333]';

  return (
    <ul className="w-full space-y-3.5 flex-grow relative mb-6">
      <li className={`flex items-center gap-3 text-sm font-semibold ${textColor}`}>
        {isGold ? (
          <div className={checkWrap}>
            <CheckCircle2 className={`w-4 h-4 ${checkColor} flex-shrink-0`} />
          </div>
        ) : (
          <CheckCircle2 className={`w-4 h-4 ${checkColor} flex-shrink-0`} />
        )}
        <span>{devices} Simultaneous {devices > 1 ? 'Devices' : 'Device'}</span>
      </li>
      {features.map((feature, idx) => (
        <li key={feature} className={`flex items-center gap-3 text-sm font-semibold ${textColor}`}>
          {isGold ? (
            <div className={checkWrap}>
              <CheckCircle2 className={`w-4 h-4 ${checkColor} flex-shrink-0`} />
            </div>
          ) : (
            <CheckCircle2 className={`w-4 h-4 ${checkColor} flex-shrink-0`} />
          )}
          <span className={isGold ? 'text-white' : ''}>{feature}</span>
          {isGold && idx === 3 && (
            <span className="bg-[#FFD700]/20 text-[#FFD700] text-[9px] font-black uppercase px-2 py-0.5 rounded-md ml-auto border border-[#FFD700]/40">
              All PPVs
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

// ---------------------------------------------------------------------------
// Live chat helper
// ---------------------------------------------------------------------------
function openLiveChat(message: string) {
  try {
    const url = new URL(CONSTANTS.CONTACT.whatsappUrl);
    url.searchParams.set('text', message);
    window.location.assign(url.toString());
  } catch (error) {
    console.error('Invalid WhatsApp URL in CONSTANTS.CONTACT.whatsappUrl:', error);
  }
}

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------
export default function PricingSection() {
  const [devices, setDevices] = useState<DeviceCount>(1);
  const currentPricing = PRICING[devices];

  const handleLiveChatRedirect = (months: Duration) => {
    const selectedPrice = currentPricing[months].total;
    const planName = months === 12 ? '12 Months VIP' : `${months} Months`;
    const deviceLabel = `${devices} ${devices === 1 ? 'Device' : 'Devices'}`;
    const message = `Hello D.TV Team 👋\n\nI'd like to subscribe to the ${planName} plan (${deviceLabel} - $${selectedPrice}) from your website.\n\nCould you assist me with activation?`;
    openLiveChat(message);
  };

  const handleFreeTrialRedirect = () => {
    openLiveChat('Hello D.TV Team 👋\n\nI would like to request a free 24-hour trial from your website. Could you assist me?');
  };

  return (
    <section
      id="pricing-section"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 scroll-mt-20 bg-[#071b5c] text-white overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#fff3b0]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <FadeIn className="text-center justify-center max-w-4xl mx-auto mb-16 md:mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 border border-[#fff3b0]/40 bg-[#fff3b0] text-[#071b5c] px-4 py-1.5 rounded-full mb-6 shadow-sm">
          <Crown className="w-4 h-4 text-[#071b5c]" />
          <span className="font-black text-xs uppercase tracking-widest">
            Best DODO TV AND DODO IPTV Plans 🇺🇸
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
          CHOOSE YOUR <span className="text-[#fff3b0]">DODO TV</span> PLAN
        </h2>
        <p className="text-base sm:text-lg text-[#f0ebd8] mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Official Dodo IPTV USA provider with instant 4K Ultra HD streaming. Save big on multi-month passes with simultaneous multi-device support. Set up on live chat, test on a free trial, then upgrade when you are happy.
        </p>

        {/* Device Switcher */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-[#fff3b0]" />
            <span className="text-xs text-[#fff3b0] font-black uppercase tracking-widest">
              Select Number of Devices
            </span>
          </div>
          <div className="inline-flex bg-[#051342] border border-[#fff3b0]/25 rounded-2xl p-1.5 shadow-sm relative">
            {DEVICE_OPTIONS.map((d) => (
              <button
                key={d}
                type="button"
                aria-pressed={devices === d}
                onClick={() => setDevices(d)}
                className={`px-5 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 relative ${
                  devices === d
                    ? 'bg-[#fff3b0] text-[#071b5c] shadow-md scale-[1.03]'
                    : 'text-[#f0ebd8] hover:text-white'
                }`}
              >
                {d} {d > 1 ? 'Devices' : 'Device'}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Pricing Cards Grid */}
      <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-stretch max-w-6xl mx-auto mt-12 relative z-10">

        {/* CARD 1: 3 MONTHS */}
        <FadeInItem className="relative bg-white text-[#071b5c] border-2 border-[#fff3b0] rounded-3xl p-6 sm:p-8 flex flex-col group overflow-hidden shadow-xl transition-all duration-500 hover:border-[#FFD700] hover:-translate-y-2">
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-black text-[#071b5c] uppercase tracking-[0.2em]">Starter Pass</h3>
              <MonitorPlay className="w-5 h-5 text-[#071b5c]" />
            </div>
            <div className="text-3xl font-black text-[#071b5c] mb-2 tracking-tighter uppercase">3 Months</div>

            <div className="flex items-baseline gap-2 mb-2 mt-4">
              <span className="text-5xl font-black text-[#071b5c] tracking-tighter">
                ${currentPricing[3].total}
              </span>
            </div>
            <div className="text-[11px] font-black text-[#071b5c] mb-8 uppercase tracking-widest border border-[#071b5c]/25 self-start px-3 py-1 rounded-lg inline-block bg-[#f0ebd8] shadow-sm">
              ${currentPricing[3].mo} / month
            </div>
            <button
              type="button"
              onClick={() => handleLiveChatRedirect(3)}
              className="btn-gold w-full text-center py-4 text-xs uppercase tracking-widest shadow-md"
            >
              Select 3 Months
            </button>

            <div className="my-6 pt-4 border-t border-[#071b5c]/10">
              <div className="flex items-center justify-between text-[10px] font-black text-[#555555] uppercase tracking-widest mb-3">
                <span>Accepted Payments</span>
                <Lock className="w-3 h-3 text-[#555555]" />
              </div>
              <PaymentIcons variant="light" />
            </div>

            <FeatureList devices={devices} features={STANDARD_FEATURES} theme="standard" />

            <div className="mb-6 p-3 bg-[#f0ebd8]/50 border border-[#071b5c]/15 rounded-xl flex items-center gap-2.5">
              <Zap className="w-4 h-4 text-[#071b5c] shrink-0" />
              <span className="text-[11px] font-black text-[#071b5c] uppercase tracking-wider">
                Instant Activation • 99.9% Uptime Guarantee
              </span>
            </div>
          </div>
        </FadeInItem>

        {/* CARD 2: 12 MONTHS VIP — DARK ULTIMATE CARD */}
        <FadeInItem className="relative bg-[#051342] text-white border-2 border-[#FFD700] rounded-3xl p-6 sm:p-9 flex flex-col transform lg:-translate-y-4 shadow-[0_0_50px_rgba(255,215,0,0.25)] z-20 group transition-all duration-500 hover:-translate-y-6">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 w-auto whitespace-nowrap">
            <div className="bg-[#FFD700] text-[#071b5c] text-[11px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full flex items-center gap-1.5 shadow-xl border border-black">
              <Flame className="w-3.5 h-3.5 fill-current text-[#071b5c]" /> Most Popular in USA
            </div>
          </div>

          <div className="relative z-10 flex flex-col h-full pt-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-black text-[#FFD700] uppercase tracking-[0.2em] flex items-center gap-1.5">
                <Crown className="w-4 h-4 text-[#FFD700]" /> Ultimate US VIP
              </h3>
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
            </div>

            <div className="mb-4 inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#fff3b0] text-[#071b5c] text-[10px] font-black uppercase tracking-widest shadow-lg">
              <Flame className="w-3 h-3 fill-current" /> Best Value Deal
            </div>

            <div className="text-3xl font-black text-white mb-2 tracking-tighter uppercase">
              12 Months
            </div>

            <div className="flex items-baseline gap-2 mb-2 mt-4">
              <span className="text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                ${currentPricing[12].total}
              </span>
            </div>

            <div className="text-[11px] font-black text-[#071b5c] mb-8 uppercase tracking-widest border border-[#FFD700] self-start px-4 py-1.5 rounded-xl inline-block bg-[#FFD700] shadow-sm">
              BEST VALUE: ${currentPricing[12].mo} / mo
            </div>

            <button
              type="button"
              onClick={() => handleLiveChatRedirect(12)}
              className="btn-gold w-full text-center py-4 sm:py-5 text-xs sm:text-sm uppercase tracking-widest shadow-xl"
            >
              Get 12 Months VIP
            </button>

            <div className="my-6 pt-4 border-t border-white/15">
              <div className="flex items-center justify-between text-[10px] font-black text-white/70 uppercase tracking-widest mb-3">
                <span>Accepted Payments</span>
                <Lock className="w-3 h-3 text-[#FFD700]" />
              </div>
              <PaymentIcons variant="dark" />
            </div>

            <FeatureList devices={devices} features={VIP_FEATURES} theme="gold" />

            <div className="mb-6 p-3 bg-white/5 border border-white/15 rounded-xl flex items-center gap-2.5">
              <Crown className="w-4 h-4 text-[#FFD700] shrink-0" />
              <span className="text-[11px] font-black text-white uppercase tracking-wider">
                Priority Local Server Line Included
              </span>
            </div>
          </div>
        </FadeInItem>

        {/* CARD 3: 6 MONTHS */}
        <FadeInItem className="relative bg-white text-[#071b5c] border-2 border-[#fff3b0] rounded-3xl p-6 sm:p-8 flex flex-col group overflow-hidden shadow-xl transition-all duration-500 hover:border-[#FFD700] hover:-translate-y-2">
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-black text-[#071b5c] uppercase tracking-[0.2em]">Standard Pass</h3>
              <MonitorPlay className="w-5 h-5 text-[#071b5c]" />
            </div>
            <div className="text-3xl font-black text-[#071b5c] mb-2 tracking-tighter uppercase">6 Months</div>

            <div className="flex items-baseline gap-2 mb-2 mt-4">
              <span className="text-5xl font-black text-[#071b5c] tracking-tighter">
                ${currentPricing[6].total}
              </span>
            </div>
            <div className="text-[11px] font-black text-[#071b5c] mb-8 uppercase tracking-widest border border-[#071b5c]/25 self-start px-3 py-1 rounded-lg inline-block bg-[#f0ebd8] shadow-sm">
              ${currentPricing[6].mo} / month
            </div>

            <button
              type="button"
              onClick={() => handleLiveChatRedirect(6)}
              className="btn-gold w-full text-center py-4 text-xs uppercase tracking-widest shadow-md"
            >
              Select 6 Months
            </button>

            <div className="my-6 pt-4 border-t border-[#071b5c]/10">
              <div className="flex items-center justify-between text-[10px] font-black text-[#555555] uppercase tracking-widest mb-3">
                <span>Accepted Payments</span>
                <Lock className="w-3 h-3 text-[#555555]" />
              </div>
              <PaymentIcons variant="light" />
            </div>

            <FeatureList devices={devices} features={STANDARD_FEATURES} theme="standard" />

            <div className="mb-6 p-3 bg-[#f0ebd8]/50 border border-[#071b5c]/15 rounded-xl flex items-center gap-2.5">
              <Zap className="w-4 h-4 text-[#071b5c] shrink-0" />
              <span className="text-[11px] font-black text-[#071b5c] uppercase tracking-wider">
                Instant Activation • 99.9% Uptime Guarantee
              </span>
            </div>
          </div>
        </FadeInItem>

      </FadeInStagger>

      {/* Free Trial Banner */}
      <FadeIn className="max-w-2xl mx-auto mt-16 relative z-30">
        <div className="bg-[#051342] border border-[#fff3b0]/30 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-4 text-left relative z-10">
            <div className="bg-[#fff3b0] p-3 rounded-2xl text-[#071b5c] shrink-0 hidden sm:block shadow-md">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-[#fff3b0]" />
                <h4 className="text-base font-black text-white uppercase tracking-tight">
                  Free 24 Hour DODO TV Trial 🇺🇸
                </h4>
              </div>
              <p className="text-xs text-[#f0ebd8] font-medium">
                Test 4K streaming on your own device before you commit. Our team guides you through setup on live chat so you are sorted from the start.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto shrink-0 relative z-10">
            <button
              type="button"
              onClick={handleFreeTrialRedirect}
              className="btn-gold w-full sm:w-auto text-center px-6 py-3.5 text-xs uppercase tracking-widest shadow-md"
            >
              Request Free Trial
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
