// app/pricing/page.tsx
// ✅ Server Component — no "use client". Static content server-rendered.
// Client interactivity isolated to <PricingSection />, <FAQItem />, <ShareButtons />.

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PricingSection from '../components/PricingSection';
import ShareButtons from '../components/ShareButtons';
import FAQItem from './FAQItem';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import {
  ShieldCheck,
  Zap,
  CreditCard,
  Award,
  Globe,
  Server,
  Trophy,
  Tv,
  Film,
  MonitorPlay,
  Wifi,
  Calendar,
  Lock,
  ThumbsUp,
  Sparkles,
  Headphones,
  Box,
  BookOpen,
} from 'lucide-react';

const BRAND = CONSTANTS.BRAND_NAME;

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: `Streaming Plans & Pricing — 4K Subscriptions | ${BRAND}`,
  description:
    'Compare DODO TV AND DODO IPTV plans: 36,000+ live channels, 120,000+ movies and shows in 4K. USD pricing starting at $35, no lock-in contract, free 24-hour trial, chat setup.',
  openGraph: {
    title: `Streaming Plans & Pricing | ${BRAND}`,
    description:
      'Pick a 3, 6 or 12 month DODO TV plan. Instant activation, New York and Los Angeles edge servers, 4K streaming on every device.',
    type: 'website',
  },
};

// ---------------------------------------------------------------------------
// SVG Flag Badges — US, CA, UK, AU (True Brand/National Colors)
// ---------------------------------------------------------------------------
const FlagUS = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6 rounded-md shadow-sm shrink-0 border border-white/25"
    viewBox="0 0 32 32"
    role="img"
    aria-label="United States"
  >
    <clipPath id="p-fl-us">
      <rect width="32" height="32" rx="4" />
    </clipPath>
    <g clipPath="url(#p-fl-us)">
      <rect width="32" height="32" fill="#FFFFFF" />
      {[0, 4.57, 9.14, 13.71, 18.29, 22.86, 27.43].map((y, i) => (
        <rect key={i} y={y} width="32" height="2.29" fill="#B22234" />
      ))}
      <rect width="14" height="15" fill="#071b5c" />
    </g>
  </svg>
);

const FlagCA = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6 rounded-md shadow-sm shrink-0 border border-white/25"
    viewBox="0 0 32 32"
    role="img"
    aria-label="Canada"
  >
    <clipPath id="p-fl-ca">
      <rect width="32" height="32" rx="4" />
    </clipPath>
    <g clipPath="url(#p-fl-ca)">
      <rect width="32" height="32" fill="#FFFFFF" />
      <rect width="8" height="32" fill="#D80621" />
      <rect x="24" width="8" height="32" fill="#D80621" />
      <path
        fill="#D80621"
        d="M16 7l1.2 2.4 2.6-.6-.9 2.5 2.3 1.3-2.1 1.5.8 2.5-2.5-.7L16 18l-1.4-2.1-2.5.7.8-2.5-2.1-1.5 2.3-1.3-.9-2.5 2.6.6L16 7z"
      />
    </g>
  </svg>
);

const FlagUK = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6 rounded-md shadow-sm shrink-0 border border-white/25"
    viewBox="0 0 32 32"
    role="img"
    aria-label="United Kingdom"
  >
    <clipPath id="p-fl-uk">
      <rect width="32" height="32" rx="4" />
    </clipPath>
    <g clipPath="url(#p-fl-uk)">
      <rect width="32" height="32" fill="#071b5c" />
      <path stroke="#FFFFFF" strokeWidth="6" d="M0 0l32 32M32 0L0 32" />
      <path stroke="#C8102E" strokeWidth="3" d="M0 0l32 32M32 0L0 32" />
      <path stroke="#FFFFFF" strokeWidth="10" d="M16 0v32M0 16h32" />
      <path stroke="#C8102E" strokeWidth="6" d="M16 0v32M0 16h32" />
    </g>
  </svg>
);

const FlagAU = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6 rounded-md shadow-sm shrink-0 border border-white/25"
    viewBox="0 0 32 32"
    role="img"
    aria-label="Australia"
  >
    <clipPath id="p-fl-au">
      <rect width="32" height="32" rx="4" />
    </clipPath>
    <g clipPath="url(#p-fl-au)">
      <rect width="32" height="32" fill="#071b5c" />
      <path stroke="#FFFFFF" strokeWidth="4" d="M0 0l16 16M16 0L0 16" />
      <path stroke="#C8102E" strokeWidth="2" d="M0 0l16 16M16 0L0 16" />
      <path stroke="#FFFFFF" strokeWidth="6" d="M8 0v16M0 8h16" />
      <path stroke="#C8102E" strokeWidth="3" d="M8 0v16M0 8h16" />
      <path
        fill="#FFFFFF"
        d="M8 19.2l.65 1.95h2.05l-1.65 1.2.63 1.95L8 23.1l-1.68 1.2.63-1.95-1.65-1.2h2.05z"
      />
      <path
        fill="#FFFFFF"
        d="M24 4.6l.5 1.5h1.55l-1.25.9.48 1.5L24 7.6l-1.28.9.48-1.5-1.25-.9h1.55z"
      />
      <path
        fill="#FFFFFF"
        d="M24 24l.5 1.5h1.55l-1.25.9.48 1.5L24 27l-1.28.9.48-1.5-1.25-.9h1.55z"
      />
      <path
        fill="#FFFFFF"
        d="M28 14l.5 1.5h1.55l-1.25.9.48 1.5L28 17l-1.28.9.48-1.5-1.25-.9h1.55z"
      />
      <path
        fill="#FFFFFF"
        d="M20 14l.5 1.5h1.55l-1.25.9.48 1.5L20 17l-1.28.9.48-1.5-1.25-.9h1.55z"
      />
    </g>
  </svg>
);

// ---------------------------------------------------------------------------
// Static data — module-scope, computed once at build time
// ---------------------------------------------------------------------------
const FEATURES = [
  {
    icon: Tv,
    title: '36,000+ Live Channels',
    desc: `Sport, news, entertainment, and local US broadcasters from over 50 countries on ${BRAND}.`,
  },
  {
    icon: Film,
    title: '120,000+ Movies & TV Shows',
    desc: `The latest movies, complete series, and documentaries updated daily on the ${BRAND} VOD library.`,
  },
  {
    icon: MonitorPlay,
    title: '4K & 60FPS Quality',
    desc: `Crystal clear streaming on compatible channels and devices without buffering through ${BRAND}.`,
  },
  {
    icon: Wifi,
    title: 'Anti Freeze Technology',
    desc: 'Buffer free viewing thanks to advanced stream optimisation and dedicated US load balancers.',
  },
  {
    icon: Calendar,
    title: 'Full EPG TV Guide',
    desc: '7 day interactive electronic program guide covering all US, UK, and international channels.',
  },
  {
    icon: Trophy,
    title: 'PPV Events Included',
    desc: 'All major UFC, boxing, NFL, NBA, and Main Event Pay Per View matches at no extra cost on your subscription.',
  },
  {
    icon: Globe,
    title: 'USA Wide Coverage',
    desc: 'Dedicated servers in New York and Los Angeles data centers for minimal latency on live sports broadcasts.',
  },
  {
    icon: Server,
    title: '99.9% Server Uptime',
    desc: 'Enterprise infrastructure with redundant backup servers for guaranteed streaming stability.',
  },
] as const;

const COMPARISON_ROWS = [
  { feature: '1 Device Price', basic: '$35 (3 Mo)', pro: '$59 (12 Mo)', premium: '$45 (6 Mo)' },
  { feature: '2 Devices Price', basic: '$45 (3 Mo)', pro: '$79 (12 Mo)', premium: '$65 (6 Mo)' },
  { feature: '3 Devices Price', basic: '$59 (3 Mo)', pro: '$99 (12 Mo)', premium: '$79 (6 Mo)' },
  { feature: 'Live Channels', basic: '36,000+', pro: '36,000+ VIP', premium: '36,000+' },
  { feature: 'Movies & TV Shows', basic: '120,000+', pro: '120,000+ (Daily Updates)', premium: '120,000+' },
  { feature: '4K & 60FPS Streaming', basic: 'Yes', pro: 'Yes (Ultra Bitrate)', premium: 'Yes' },
  { feature: 'Live Sport & PPV', basic: 'Included', pro: 'All PPV + VIP Feeds', premium: 'Included' },
  { feature: 'EPG & Catch Up', basic: 'Standard EPG', pro: '7 Day Catch Up + EPG', premium: 'Full EPG' },
  { feature: 'Anti Freeze Technology', basic: 'Standard', pro: 'VIP Priority Routing', premium: 'Advanced' },
  { feature: 'VPN Compatible', basic: 'Yes (Not Required)', pro: '100% Compatible', premium: 'Yes' },
  { feature: 'Number of Devices', basic: '1, 2, or 3 Devices', pro: '1, 2, or 3 Devices', premium: '1, 2, or 3 Devices' },
  { feature: 'Customer Support', basic: 'Chat Support', pro: '24/7 VIP Priority', premium: 'Priority Support' },
] as const;

const TRUST_BADGES = [
  {
    icon: ShieldCheck,
    title: 'Secure Payments',
    body: 'Encrypted transactions via Credit Card, PayPal, and Crypto with 256 bit SSL protection.',
  },
  {
    icon: Zap,
    title: 'Chat Guided Setup',
    body: 'Our team walks you through the whole install on chat, step by step until you are watching.',
  },
  {
    icon: CreditCard,
    title: 'Free Trial First',
    body: 'Test the service on your own device and internet before you pay a cent. No lock in, no pressure.',
  },
  {
    icon: Headphones,
    title: '24/7 Chat Support',
    body: 'Real people on hand around the clock to help with setup, streaming, or anything else you need.',
  },
] as const;

const PAGE_FAQS = [
  {
    question: `Which payment methods does ${BRAND} accept?`,
    answer: `${BRAND} accepts all major credit cards (Visa, Mastercard, American Express), PayPal, and cryptocurrencies (Bitcoin, Ethereum, USDT). All prices are in US dollars and every payment is processed via encrypted 256 bit SSL connections.`,
  },
  {
    question: 'Can I upgrade or modify my subscription later?',
    answer:
      'Yes, you can upgrade at any time to add more devices or switch to a longer period. Just message our chat help desk and we will adjust your account straight away.',
  },
  {
    question: 'Am I tied to a contract or automatic renewal?',
    answer:
      'No, absolutely not. There are no long term contracts and no automatic renewals. Every plan is a prepaid one time payment that stops on its own when the period ends.',
  },
  {
    question: 'What happens when my subscription expires?',
    answer:
      'We will send you a reminder before your subscription ends. You can renew easily through chat. If you decide not to renew, the service stops automatically with no further obligation.',
  },
  {
    question: 'Do you offer a free trial before I commit?',
    answer:
      'Yes. Message us on chat and we will set you up with a free 24 hour trial so you can test the 4K picture quality and channel lineup on your own device and internet connection. Upgrade to a paid plan only when you are happy.',
  },
  {
    question: 'Can I use the service on multiple devices at the same time?',
    answer:
      'Yes, depending on your chosen plan. You can pick 1, 2, or 3 simultaneous devices during checkout to watch in multiple rooms at once. Everyone in the household can watch what they want.',
  },
  {
    question: 'Are there discounts for longer subscriptions?',
    answer:
      'Yes. Our 12 month plans offer the best value: $59 for 1 device ($4.92/mo), $79 for 2 devices ($6.58/mo), and $99 for 3 devices ($8.25/mo).',
  },
  {
    question: 'Do I need a VPN to use your US streaming service?',
    answer:
      'No VPN is required. Our servers are optimised for US ISPs to deliver smooth, buffer free streaming on your home connection.',
  },
] as const;

// ---------------------------------------------------------------------------
// MAIN PRICING PAGE
// ---------------------------------------------------------------------------
export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#071b5c] text-white flex flex-col">

      {/* HERO — Cinematic Banner with Living Room Couch Background */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden text-white pt-32 pb-20 border-b border-[#fff3b0]/20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/cinema61.webp"
            alt="Streaming plans and pricing background in US living room"
            fill
            priority
            className="object-cover object-center brightness-[0.4] contrast-[1.1]"
            sizes="100vw"
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071b5c] via-[#071b5c]/30 to-[#071b5c]/40" />
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <FadeInStagger className="flex flex-col items-center justify-center text-center w-full">
            
            {/* Top Pill Badge */}
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-[#fff3b0] text-[#071b5c] px-5 py-2 rounded-full mb-6 shadow-xl border border-[#FFD700]">
                <Sparkles className="w-4 h-4 text-[#071b5c]" aria-hidden="true" />
                <span className="font-black text-xs uppercase tracking-widest">
                  Official DODO TV USA Pricing Plans 🇺🇸
                </span>
              </div>
            </FadeInItem>

            {/* Main Headline */}
            <FadeInItem>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-none text-center drop-shadow-md">
                DODO TV IPTV <br />
                <span className="text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.35)]">
                  SUBSCRIPTION PLANS
                </span>
              </h1>
            </FadeInItem>

            {/* Subheadline */}
            <FadeInItem>
              <p className="text-base sm:text-lg md:text-xl text-[#f0ebd8] max-w-3xl mx-auto leading-relaxed px-2 text-center mb-8 font-medium">
                Explore flexible <span className="text-[#fff3b0] font-bold">dodotv</span> subscription plans designed for entertainment lovers across the United States. Choose 1, 2, or 3 screens and compare our 3, 6, and 12-month packages. Enjoy available live TV, movies, series, and sports in HD and 4K on supported devices.
              </p>
            </FadeInItem>

            {/* Glassmorphic Country Coverage Pill */}
            <FadeInItem>
              <div className="w-full flex items-center justify-center mb-6">
                <div className="inline-flex items-center justify-center flex-wrap sm:flex-nowrap gap-3 sm:gap-4 px-6 py-3 rounded-2xl bg-black/40 border border-[#fff3b0]/30 shadow-2xl backdrop-blur-md">
                  <div className="flex items-center gap-2 shrink-0">
                    <FlagUS />
                    <span className="text-xs font-black uppercase tracking-wider text-white">USA</span>
                  </div>
                  <span className="text-[#fff3b0]/40 text-xs font-black" aria-hidden="true">•</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <FlagCA />
                    <span className="text-xs font-black uppercase tracking-wider text-white">Canada</span>
                  </div>
                  <span className="text-[#fff3b0]/40 text-xs font-black" aria-hidden="true">•</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <FlagUK />
                    <span className="text-xs font-black uppercase tracking-wider text-white">UK</span>
                  </div>
                  <span className="text-[#fff3b0]/40 text-xs font-black" aria-hidden="true">•</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <FlagAU />
                    <span className="text-xs font-black uppercase tracking-wider text-white">Australia</span>
                  </div>
                </div>
              </div>
            </FadeInItem>

            {/* Feature Badges (Flexible Subscriptions, 4K & Full HD, Easy Setup Guides) */}
            <FadeInItem>
              <div className="flex flex-wrap justify-center items-center gap-6 text-[#fff3b0] text-xs font-black uppercase tracking-widest pt-2">
                <div className="flex items-center gap-2">
                  <Box className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
                  <span>Flexible Subscriptions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tv className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
                  <span>4K &amp; Full HD</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
                  <span>Easy Setup Guides</span>
                </div>
              </div>
            </FadeInItem>

          </FadeInStagger>
        </div>
      </section>

      {/* PRICING CARDS */}
      <div className="w-full relative z-20 bg-[#071b5c] py-12" id="pricing-section">
        <PricingSection />
      </div>

      {/* FEATURES GRID */}
      <section className="py-24 bg-[#051342] w-full border-y border-[#fff3b0]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="inline-block bg-[#ffd700] text-[#071b5c] font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Standard Inclusion
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight leading-none">
              Everything Included In <span className="text-[#fff3b0]">Every Plan</span>
            </h2>
            <p className="text-[#f0ebd8] text-base sm:text-lg font-medium max-w-2xl mx-auto mt-4">
              All {BRAND} plans come with these premium features as standard.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="bg-white text-[#071b5c] border-2 border-[#fff3b0] rounded-3xl p-6 hover:border-[#FFD700] shadow-xl transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#f0ebd8] border border-[#071b5c]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#071b5c]" aria-hidden="true" />
                    </div>
                    <h3 className="font-black text-[#071b5c] uppercase tracking-wide text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#333333] text-sm font-medium leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-24 bg-[#071b5c] border-b border-[#fff3b0]/15 w-full text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="inline-block bg-[#fff3b0] text-[#071b5c] font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Plan Matrix
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              Compare <span className="text-[#fff3b0]">{BRAND} Plans</span>
            </h2>
            <p className="text-[#f0ebd8] text-sm sm:text-base font-bold uppercase tracking-widest mt-2">
              Find the perfect streaming plan for your home
            </p>
          </FadeIn>

          <div className="overflow-x-auto bg-white text-[#071b5c] border-2 border-[#fff3b0] rounded-3xl p-4 md:p-6 shadow-2xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[#071b5c]/10">
                  <th className="text-left p-4 text-[#071b5c] font-black uppercase tracking-wider text-sm sm:text-base">
                    Specification
                  </th>
                  <th className="text-center p-4 text-[#071b5c] font-black uppercase tracking-wider text-sm sm:text-base">
                    3 Months
                  </th>
                  <th className="text-center p-4 text-[#071b5c] font-black uppercase tracking-wider text-sm sm:text-base bg-[#FFD700] rounded-2xl shadow-sm">
                    12 Months (VIP)
                  </th>
                  <th className="text-center p-4 text-[#071b5c] font-black uppercase tracking-wider text-sm sm:text-base">
                    6 Months
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#071b5c]/10">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#f0ebd8]/30 transition-colors">
                    <td className="p-4 text-[#071b5c] font-black uppercase text-xs sm:text-sm">{row.feature}</td>
                    <td className="p-4 text-center text-[#333333] font-bold text-xs sm:text-sm">{row.basic}</td>
                    <td className="p-4 text-center text-[#071b5c] font-black text-xs sm:text-sm bg-[#FFD700]/10">{row.pro}</td>
                    <td className="p-4 text-center text-[#333333] font-bold text-xs sm:text-sm">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-24 bg-[#ede8d5] w-full relative overflow-hidden border-b border-[#fff3b0]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="inline-block bg-[#ede8d5] text-[#ede8d5] font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              US Reliability
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#071b5c] mb-4 uppercase tracking-tight">
              Why Choose <span className="text-[#071b5c]">{BRAND}</span>
            </h2>
            <p className="text-[#141d43] text-base sm:text-lg font-medium max-w-2xl mx-auto mt-4">
              Trusted by over 15,000 happy viewers right across America, from New York to Los Angeles.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_BADGES.map((badge, i) => {
              const BadgeIcon = badge.icon;
              return (
                <FadeInItem
                  key={i}
                  className="flex flex-col items-center text-center p-8 bg-white text-[#071b5c] border-2 border-[#fff3b0] rounded-3xl shadow-xl hover:border-[#FFD700] hover:-translate-y-1 transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#f0ebd8] border border-[#071b5c]/20 flex items-center justify-center mb-6">
                    <BadgeIcon className="w-8 h-8 text-[#071b5c]" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-black text-[#071b5c] mb-3 uppercase tracking-wide">
                    {badge.title}
                  </h3>
                  <p className="text-[#333333] text-sm font-medium">{badge.body}</p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* FREE TRIAL BANNER */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#071b5c] w-full">
        <div className="bg-[#051342] border-2 border-[#fff3b0]/30 rounded-3xl p-8 md:p-10 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 bg-[#fff3b0] text-[#071b5c] px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <Award className="w-4 h-4 text-[#071b5c]" aria-hidden="true" />
            <span className="font-black text-xs uppercase tracking-widest">
              Try Before You Pay 🇺🇸
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-3">
            Free 24 Hour Trial First
          </h2>
          <p className="text-[#f0ebd8] max-w-2xl mx-auto text-sm md:text-base font-semibold leading-relaxed">
            Message us on chat and we will set you up with a free 24 hour trial. Test the 4K picture, check the sport lineup, and make sure everything runs smooth on your device and internet connection. Upgrade to a paid plan only when you are happy.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-[#051342] py-24 relative overflow-hidden border-t border-[#fff3b0]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="inline-block bg-[#fff3b0] text-[#071b5c] font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Help Center
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Frequently Asked <span className="text-[#fff3b0]">Questions</span>
            </h2>
            <p className="text-[#f0ebd8] font-medium text-lg">
              Everything you need to know about our streaming service, pricing, and setup.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-4 relative z-10">
            {PAGE_FAQS.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* SHARE BUTTONS */}
      <div className="w-full flex justify-center items-center py-12 bg-[#071b5c]">
        <ShareButtons />
      </div>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-gradient-to-b from-[#040f36] via-[#071b5c] to-[#071b5c] border-t border-[#fff3b0]/15 w-full relative overflow-hidden text-white">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight drop-shadow-md">
              Ready To Start Streaming?
            </h2>
            <p className="text-[#f0ebd8] font-medium text-lg mb-8 max-w-2xl mx-auto">
              Join over 15,000 happy viewers across America. Pick your plan, message us on chat, and test everything on a free trial first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
              <Link
                href="#pricing-section"
                className="btn-gold w-full sm:w-auto text-center py-4 px-8 text-xs uppercase tracking-widest shadow-xl"
              >
                Choose Your Plan
              </Link>
              <Link
                href="/setup"
                className="w-full sm:w-auto text-center py-4 px-8 rounded-xl bg-white text-[#071b5c] font-black uppercase tracking-widest text-xs hover:bg-[#f0ebd8] transition-all shadow-md"
              >
                Setup Guide
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-[#fff3b0] text-xs font-black uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#fff3b0]" aria-hidden="true" /> Chat Guided Setup
              </span>
              <span className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#fff3b0]" aria-hidden="true" /> Secure Checkout
              </span>
              <span className="flex items-center gap-2">
                <CreditCard className="w-3.5 h-3.5 text-[#fff3b0]" aria-hidden="true" /> Card, PayPal &amp; Crypto
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}