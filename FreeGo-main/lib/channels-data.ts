// app/reseller/page.tsx
'use client';

import { useState, useId, type ComponentProps } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CONSTANTS } from '@/lib/seo';
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  Globe,
  Headphones,
  LayoutDashboard,
  MessageCircle,
  Package,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';

const BRAND = CONSTANTS.BRAND_NAME || 'Dodo IPTV';
const YEAR = new Date().getFullYear();

const HERO_GRID_STYLE = {
  backgroundImage: `linear-gradient(to right, #0052FF 1px, transparent 1px), linear-gradient(to bottom, #0052FF 1px, transparent 1px)`,
  backgroundSize: '60px 60px',
} as const;

type CurrencyCode = 'USD' | 'CAD' | 'GBP';

const CURRENCIES: Record<
  CurrencyCode,
  { code: CurrencyCode; label: string; symbol: string; usdRate: number }
> = {
  USD: { code: 'USD', label: 'USD', symbol: '$', usdRate: 1 },
  CAD: { code: 'CAD', label: 'CAD', symbol: 'C$', usdRate: 1.36 },
  GBP: { code: 'GBP', label: 'GBP', symbol: '£', usdRate: 0.79 },
};

const CURRENCY_ORDER: readonly CurrencyCode[] = ['USD', 'CAD', 'GBP'];

const formatPrice = (usdAmount: number, currency: CurrencyCode): string => {
  const { symbol, usdRate } = CURRENCIES[currency];
  const converted = Math.round(usdAmount * usdRate);
  return `${symbol}${converted.toLocaleString('en-US')}`;
};

interface PricingTier {
  name: string;
  tag: string;
  years: number;
  credits: number;
  wholesaleUSD: number;
  perYearUSD: number;
  retailMinUSD: number;
  retailMaxUSD: number;
  highlighted: boolean;
  features: string[];
  waMessage: string;
}

const TIERS: readonly PricingTier[] = [
  {
    name: 'Starter',
    tag: '10 Years',
    years: 10,
    credits: 10,
    wholesaleUSD: 300,
    perYearUSD: 30,
    retailMinUSD: 50,
    retailMaxUSD: 100,
    highlighted: false,
    features: [
      `10 ${BRAND} reseller credits (10 years)`,
      'Full reseller panel access',
      'Instant per customer activation',
      '24/7 live chat support',
      'Credits never expire',
      'Free trial line generator',
      'Payment integration ready',
    ],
    waMessage: `Hi! I want the Starter ${BRAND} Reseller package (10 years / $300).`,
  },
  {
    name: 'Growth',
    tag: '20 Years',
    years: 20,
    credits: 20,
    wholesaleUSD: 550,
    perYearUSD: 27.5,
    retailMinUSD: 50,
    retailMaxUSD: 100,
    highlighted: true,
    features: [
      `20 ${BRAND} reseller credits (20 years)`,
      'Full reseller panel access',
      'Instant per customer activation',
      'Priority live chat support',
      'Credits never expire',
      'Free trial line generator',
      'Custom pricing per customer',
      'API access included',
    ],
    waMessage: `Hi! I want the Growth ${BRAND} Reseller package (20 years / $550).`,
  },
  {
    name: 'Pro',
    tag: '30 Years',
    years: 30,
    credits: 30,
    wholesaleUSD: 750,
    perYearUSD: 25,
    retailMinUSD: 50,
    retailMaxUSD: 100,
    highlighted: false,
    features: [
      `30 ${BRAND} reseller credits (30 years)`,
      'Full reseller panel access',
      'Instant per customer activation',
      'Dedicated live chat support',
      'Credits never expire',
      'Free trial line generator',
      'Custom pricing per customer',
      'Full API access included',
      'White label branding option',
    ],
    waMessage: `Hi! I want the Pro ${BRAND} Reseller package (30 years / $750).`,
  },
];

const FAQS: readonly { q: string; a: string }[] = [
  {
    q: `What exactly is a ${BRAND} reseller panel?`,
    a: `A ${BRAND} reseller panel is a private dashboard that lets you create and manage streaming subscriptions for your own customers. You buy credits from us in bulk, then use those credits to activate yearly, monthly, or trial subscriptions for anyone you sell to.`,
  },
  {
    q: `How much can I realistically earn as a ${BRAND} reseller in the USA?`,
    a: `It depends on how many customers you bring in. Customers typically pay between $50 and $100 per year, with $75 being the average. Your wholesale cost per credit starts around $30 per year, so your profit per sale ranges from $20 to $70 depending on your selling price.`,
  },
  {
    q: 'Do I need technical skills to become a reseller?',
    a: 'No. The reseller panel is simple to use in any web browser, and our support team helps walk you through onboarding.',
  },
  {
    q: 'Do the reseller credits expire?',
    a: 'No. Your credits stay in your account with no expiration date or monthly minimum.',
  },
  {
    q: 'Which currencies can I sell in?',
    a: 'You can sell to your customers in USD, CAD, GBP, or any currency you choose while using the currency switcher on this page to preview prices.',
  },
  {
    q: 'What kind of support do I get as a reseller?',
    a: 'Every reseller gets direct live chat support, with priority and dedicated support options on Growth and Pro.',
  },
];

const STEPS: readonly { icon: LucideIcon; number: string; title: string; description: string }[] = [
  {
    icon: Wallet,
    number: '01',
    title: 'Buy Your Credits',
    description: `Choose a package and receive your ${BRAND} credits quickly after payment confirmation.`,
  },
  {
    icon: LayoutDashboard,
    number: '02',
    title: 'Access Your Panel',
    description:
      'Log into your private reseller dashboard to create subscriptions, generate trials, and manage accounts.',
  },
  {
    icon: Users,
    number: '03',
    title: 'Sell to Customers',
    description:
      'Set your own retail prices and spend credits only when activating customer subscriptions.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Scale Your Profit',
    description:
      'Order larger credit tiers as your customer base grows to lower your per-year cost.',
  },
];

const VALUE_CARDS: readonly { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: BadgeDollarSign,
    title: 'Low Entry Cost',
    description: `Start your ${BRAND} reseller business with a single $300 package and no monthly contracts.`,
  },
  {
    icon: Users,
    title: 'Global Demand',
    description: `Reach viewers looking for flexible streaming options across regions with ${BRAND}.`,
  },
  {
    icon: Wallet,
    title: 'High Margins',
    description:
      'Wholesale costs start at $25 to $30 per year while retail pricing typically ranges from $50 to $100.',
  },
  {
    icon: Server,
    title: 'Real Infrastructure',
    description:
      'Built on dedicated servers engineered for smooth high-bitrate delivery during peak hours.',
  },
];

const PANEL_FEATURES: readonly { icon: LucideIcon; label: string }[] = [
  { icon: LayoutDashboard, label: 'Reseller Dashboard' },
  { icon: Zap, label: 'Instant Activation' },
  { icon: Package, label: 'No Expiry Credits' },
  { icon: Bot, label: 'Trial Generator' },
  { icon: BarChart3, label: 'Sales Tracking' },
  { icon: CreditCard, label: 'Payment Ready' },
  { icon: Globe, label: 'Multi Currency' },
  { icon: Headphones, label: '24/7 Support' },
  { icon: ShieldCheck, label: 'Encrypted Panel' },
  { icon: Rocket, label: 'API Automation' },
];

const waLink = (message: string): string =>
  `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;

function PricingCard({ tier, currency }: { tier: PricingTier; currency: CurrencyCode }) {
  const wholesalePrice = formatPrice(tier.wholesaleUSD, currency);
  const perYearPrice = formatPrice(tier.perYearUSD, currency);
  const retailMin = formatPrice(tier.retailMinUSD, currency);
  const retailMax = formatPrice(tier.retailMaxUSD, currency);
  const totalProfit = formatPrice((tier.retailMaxUSD - tier.perYearUSD) * tier.years, currency);

  return (
    <div
      className={`relative flex flex-col rounded-none p-6 md:p-8 transition-all duration-300 ${
        tier.highlighted
          ? 'bg-[#0052FF] border-2 border-white shadow-xl lg:-translate-y-4 z-20 text-white'
          : 'bg-white border-2 border-[#0052FF] hover:-translate-y-2 hover:shadow-md text-black'
      }`}
    >
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
        <div
          className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-none text-[10px] font-black uppercase tracking-widest shadow-sm border whitespace-nowrap ${
            tier.highlighted
              ? 'bg-white text-[#0052FF] border-white'
              : 'bg-[#0052FF] text-white border-[#0052FF]'
          }`}
        >
          {tier.highlighted && <Sparkles className="w-3 h-3 shrink-0" aria-hidden="true" />}
          {tier.tag}
        </div>
      </div>

      <div className="pt-4">
        <h3
          className={`text-xs font-black uppercase tracking-[0.2em] mb-3 ${
            tier.highlighted ? 'text-white' : 'text-[#0052FF]'
          }`}
        >
          {tier.name}
        </h3>

        <div
          className={`text-2xl font-black uppercase tracking-tight mb-4 ${
            tier.highlighted ? 'text-white' : 'text-black'
          }`}
        >
          {tier.years} Years
        </div>

        <div className="mb-4">
          <div
            className={`text-5xl md:text-6xl font-black tracking-tighter mb-2 ${
              tier.highlighted ? 'text-white' : 'text-black'
            }`}
          >
            {wholesalePrice}
          </div>
          <div
            className={`text-xs font-bold tracking-wide ${
              tier.highlighted ? 'text-white' : 'text-black'
            }`}
          >
            {tier.credits} credits total
          </div>
        </div>

        <div
          className={`text-[11px] font-black uppercase tracking-widest mb-6 inline-block px-3 py-1 rounded-none border whitespace-nowrap ${
            tier.highlighted
              ? 'text-white border-white bg-[#024ef4]'
              : 'text-[#0052FF] border-[#0052FF] bg-white'
          }`}
        >
          {perYearPrice} per year
        </div>

        <div
          className={`rounded-none p-4 mb-6 border ${
            tier.highlighted
              ? 'bg-[#024ef4] border-white text-white'
              : 'bg-white border-[#0052FF] text-black'
          }`}
        >
          <div
            className={`text-[10px] font-black uppercase tracking-widest mb-2 ${
              tier.highlighted ? 'text-white' : 'text-[#0052FF]'
            }`}
          >
            Your Profit Potential
          </div>
          <div
            className={`text-xs font-bold mb-1 ${
              tier.highlighted ? 'text-white' : 'text-black'
            }`}
          >
            Sell at {retailMin} to {retailMax} / year
          </div>
          <div
            className={`text-base font-black uppercase mt-2 ${
              tier.highlighted ? 'text-white' : 'text-[#0052FF]'
            }`}
          >
            Up to {totalProfit} total
          </div>
        </div>

        <ul className="space-y-2.5 mb-8 flex-1">
          {tier.features.map((feature) => (
            <li
              key={feature}
              className={`flex items-start gap-2.5 text-xs font-bold ${
                tier.highlighted ? 'text-white' : 'text-black'
              }`}
            >
              <CheckCircle2
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  tier.highlighted ? 'text-white' : 'text-[#0052FF]'
                }`}
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={waLink(tier.waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-none font-black text-xs uppercase tracking-widest transition-all hover:scale-105 whitespace-nowrap shadow-sm border ${
            tier.highlighted
              ? 'bg-white text-[#0052FF] border-white hover:bg-black hover:text-white hover:border-black'
              : 'bg-[#0052FF] text-white border-[#0052FF] hover:bg-black hover:border-black'
          }`}
        >
          <span>Get This Package</span>
          <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

function FaqItem({
  faq,
  index,
  defaultOpen = false,
}: {
  faq: { q: string; a: string };
  index: number;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const headingId = useId();
  const answerId = useId();
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className={`relative overflow-hidden rounded-none border-2 transition-all duration-300 ${
        isOpen ? 'border-[#0052FF] shadow-md' : 'border-[#0052FF]'
      } bg-white`}
    >
      <h3 className="m-0">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left p-6 md:p-7 flex items-start gap-5 cursor-pointer rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0052FF]"
          aria-expanded={isOpen}
          aria-controls={answerId}
          id={headingId}
        >
          <div
            className="shrink-0 w-14 h-14 rounded-none bg-[#0052FF] flex items-center justify-center text-white font-black text-lg shadow-sm border border-[#0052FF]"
            aria-hidden="true"
          >
            {num}
          </div>
          <div className="flex-1 min-w-0">
            <span className="block font-black text-black text-base md:text-lg uppercase tracking-tight leading-snug">
              {faq.q}
            </span>
          </div>
          <ChevronDown
            className={`shrink-0 w-5 h-5 text-[#0052FF] transition-transform duration-300 mt-4 ${
              isOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>

      <div
        id={answerId}
        role="region"
        aria-labelledby={headingId}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-black font-medium leading-relaxed text-sm md:text-base mt-1 ml-6 md:ml-7 pl-4 border-l-4 border-[#0052FF] pb-6 pr-6">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

function HelpCircleIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export default function ResellerPage() {
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0052FF] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/cinema61.webp"
            alt="Dodo IPTV living room streaming setup"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={100}
          />
          <div className="absolute inset-0 bg-[#0052FF]/80" />
        </div>

        <div
          className="absolute inset-0 opacity-20 pointer-events-none z-0"
          style={HERO_GRID_STYLE}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#024ef4] px-5 py-2.5 rounded-none mb-8 shadow-md border border-white">
              <BadgeDollarSign className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
              <span className="text-white font-black text-xs uppercase tracking-widest whitespace-nowrap">
                {BRAND} Reseller {YEAR}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.05] text-white mb-6 max-w-4xl mx-auto">
              BECOME A <br className="hidden sm:block" />
              <span className="text-white underline decoration-white">RESELLER</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white font-bold max-w-3xl mx-auto leading-relaxed mb-10">
              Start your own {BRAND} reseller business with a single $300 package. Buy credits in bulk, sell yearly subscriptions at $50 to $100, and earn up to $70 profit per customer.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-12">
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-none bg-white text-[#0052FF] font-black text-sm uppercase tracking-widest shadow-md hover:bg-black hover:text-white transition-colors whitespace-nowrap border border-white"
              >
                See Pricing
                <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
              </a>
              <a
                href={waLink(`Hi! I want to learn more about becoming a ${BRAND} reseller.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-none bg-black text-white font-black text-sm uppercase tracking-widest hover:bg-white hover:text-[#0052FF] transition-colors whitespace-nowrap border border-white"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                Talk to Us
              </a>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#024ef4] border border-white text-white text-xs font-black uppercase tracking-widest whitespace-nowrap">
                <Zap className="w-3.5 h-3.5 text-white shrink-0" aria-hidden="true" />
                Instant Access
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#024ef4] border border-white text-white text-xs font-black uppercase tracking-widest whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5 text-white shrink-0" aria-hidden="true" />
                No Expiry
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#024ef4] border border-white text-white text-xs font-black uppercase tracking-widest whitespace-nowrap">
                <Headphones className="w-3.5 h-3.5 text-white shrink-0" aria-hidden="true" />
                24/7 Support
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VALUE CARDS */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0052FF] border border-[#0052FF] px-4 py-1.5 rounded-none mb-5">
              <TrendingUp className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
              <span className="text-white font-black text-xs uppercase tracking-widest whitespace-nowrap">
                Why Join Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-tight mb-5">
              WHY RESELL {BRAND} <span className="text-[#0052FF]">TODAY</span>?
            </h2>
            <p className="text-base md:text-lg text-black font-bold leading-relaxed">
              Low upfront costs, strong demand, and full profit control make {BRAND} straightforward to scale.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <FadeInItem
                  key={card.title}
                  className="group bg-white border-2 border-[#0052FF] rounded-none p-6 md:p-7 hover:-translate-y-2 hover:shadow-md transition-all duration-300 shadow-sm"
                >
                  <div className="w-14 h-14 rounded-none bg-[#0052FF] flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-black uppercase tracking-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-black text-sm font-medium leading-relaxed">
                    {card.description}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* PROFIT MATH */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y-2 border-[#0052FF]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#0052FF] border border-[#0052FF] px-4 py-1.5 rounded-none mb-5 shadow-sm">
              <BarChart3 className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
              <span className="text-white font-black text-xs uppercase tracking-widest whitespace-nowrap">
                The Real Math
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-tight mb-5">
              HOW MUCH CAN YOU <span className="text-[#0052FF]">EARN</span>?
            </h2>
          </FadeIn>

          <FadeIn className="bg-white text-black border-2 border-[#0052FF] rounded-none p-6 sm:p-8 md:p-12 shadow-sm mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-[#0052FF] mb-3">
                  Starter Package
                </div>
                <div className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-2">
                  {formatPrice(300, currency)}
                </div>
                <div className="text-xs font-bold text-black">10 credits (10 years)</div>
              </div>
              <div className="md:border-x-2 border-[#0052FF] md:px-8">
                <div className="text-xs font-black uppercase tracking-widest text-[#0052FF] mb-3">
                  Sell Per Year At
                </div>
                <div className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-2">
                  {formatPrice(75, currency)}
                </div>
                <div className="text-xs font-bold text-black">average retail price</div>
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-[#0052FF] mb-3">
                  Total Revenue
                </div>
                <div className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-2">
                  {formatPrice(750, currency)}
                </div>
                <div className="text-xs font-bold text-black">from 10 customers</div>
              </div>
            </div>

            <div className="pt-6 md:pt-8 border-t-2 border-[#0052FF] mt-6 md:mt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-xs font-black uppercase tracking-widest text-[#0052FF] mb-2">
                    Revenue minus Cost
                  </div>
                  <div className="text-sm font-bold text-black">
                    Net profit from your first 10 customers
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <div className="text-xs font-black uppercase tracking-widest text-[#0052FF] mb-1">
                    Your Profit
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-[#0052FF] tracking-tighter">
                    {formatPrice(450, currency)}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PRICING SECTION WITH #024ef4 BACKGROUND AND WHITE TEXT */}
      <section
        id="pricing"
        className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 w-full scroll-mt-24 bg-[#024ef4] text-white"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0052FF] border border-white px-4 py-1.5 rounded-none mb-5 shadow-sm">
              <Package className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
              <span className="text-white font-black text-xs uppercase tracking-widest whitespace-nowrap">
                Reseller Packages
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-5">
              CHOOSE YOUR <span className="text-white underline">PACKAGE</span>
            </h2>
            <p className="text-base md:text-lg text-white font-bold max-w-3xl mx-auto">
              Every {BRAND} package includes full reseller panel access, instant activation per customer, and 24/7 live chat support. Credits never expire.
            </p>
          </FadeIn>

          <FadeIn className="flex justify-center mb-12">
            <div
              role="group"
              aria-label="Currency"
              className="inline-flex bg-[#0052FF] border border-white rounded-none p-1.5 shadow-md"
            >
              {CURRENCY_ORDER.map((code) => {
                const active = currency === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setCurrency(code)}
                    aria-pressed={active}
                    className={`px-5 sm:px-8 py-2.5 rounded-none text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      active
                        ? 'bg-white text-[#0052FF] shadow-sm'
                        : 'text-white hover:bg-[#024ef4]'
                    }`}
                  >
                    {CURRENCIES[code].label}
                  </button>
                );
              })}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch max-w-6xl mx-auto mt-8">
            {TIERS.map((tier) => (
              <PricingCard key={tier.name} tier={tier} currency={currency} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y-2 border-[#0052FF]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0052FF] border border-[#0052FF] px-4 py-1.5 rounded-none mb-5">
              <Rocket className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
              <span className="text-white font-black text-xs uppercase tracking-widest whitespace-nowrap">
                Step by Step
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-tight mb-5">
              HOW TO START AS A <span className="text-[#0052FF]">RESELLER</span>
            </h2>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <FadeInItem
                  key={step.number}
                  className="bg-white border-2 border-[#0052FF] rounded-none p-6 md:p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-md transition-all duration-300 shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-none bg-[#0052FF] text-white flex items-center justify-center font-black text-xl shadow-sm border border-[#0052FF]">
                        {step.number}
                      </div>
                      <Icon className="w-7 h-7 text-[#0052FF]" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-black text-black uppercase tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-black text-sm font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* PANEL FEATURES */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0052FF] border border-[#0052FF] px-4 py-1.5 rounded-none mb-5 shadow-sm">
              <LayoutDashboard className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
              <span className="text-white font-black text-xs uppercase tracking-widest whitespace-nowrap">
                Panel Power
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-tight mb-5">
              YOUR RESELLER <span className="text-[#0052FF]">DASHBOARD</span>
            </h2>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {PANEL_FEATURES.map((feat) => {
              const Icon = feat.icon;
              return (
                <FadeInItem
                  key={feat.label}
                  className="bg-white border-2 border-[#0052FF] rounded-none p-5 text-center flex flex-col items-center justify-center gap-3 hover:shadow-md transition-all duration-300 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-none bg-[#0052FF] flex items-center justify-center text-white">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="font-black text-xs uppercase tracking-wider text-black">
                    {feat.label}
                  </span>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y-2 border-[#0052FF]">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#0052FF] border border-[#0052FF] px-4 py-1.5 rounded-none mb-5">
              <HelpCircleIcon className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
              <span className="text-white font-black text-xs uppercase tracking-widest whitespace-nowrap">
                Common Questions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-tight mb-5">
              RESELLER <span className="text-[#0052FF]">FAQS</span>
            </h2>
          </FadeIn>

          <FadeInStagger className="space-y-4">
            {FAQS.map((faq, i) => (
              <FadeInItem key={faq.q}>
                <FaqItem faq={faq} index={i} defaultOpen={i === 0} />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#0052FF] text-white text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-white text-[#0052FF] px-4 py-2 rounded-none mb-6 shadow-md border border-white">
              <Rocket className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span className="font-black text-xs uppercase tracking-widest whitespace-nowrap">
                Start Today
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-tight">
              READY TO LAUNCH YOUR <br />
              <span className="text-white underline">{BRAND} BUSINESS</span>?
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mt-8">
              <a
                href={waLink(`Hi! I am ready to purchase a ${BRAND} reseller package.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-none bg-white text-[#0052FF] font-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors shadow-md border border-white whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                Get Started on WhatsApp
              </a>
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-none bg-black text-white font-black text-sm uppercase tracking-widest hover:bg-white hover:text-[#0052FF] transition-colors border border-white whitespace-nowrap"
              >
                View Plans
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}