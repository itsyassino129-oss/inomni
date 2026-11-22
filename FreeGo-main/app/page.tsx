// app/page.tsx
'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CONSTANTS } from '@/lib/seo';
import { ProductSchema, FAQSchema } from './components/PageSchemas';
import { blogPosts } from '@/lib/blog';
import USAFlag from './components/USAFlag';
import { 
  PlayCircle,
  UserCheck,
  BookOpen,
  Star, 
  ShieldCheck, 
  Zap, 
  CreditCard, 
  CheckCircle2, 
  MonitorSmartphone, 
  Tv2, 
  Cpu, 
  ArrowRight, 
  Lock, 
  ThumbsUp, 
  Trophy, 
  Medal, 
  LifeBuoy,
  Settings,
  Check,
  Smartphone,
  BarChart
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './components/AnimatedSection';
import AnimatedCounter from './components/AnimatedCounter';
import TargetCountries from './components/TargetCountries';
import ShareButtons from './components/ShareButtons';

// Lazy loaded components keep the page fast and improve Core Web Vitals
const PricingSection = dynamic(() => import('./components/PricingSection'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center bg-white">
      <div className="h-12 w-12 animate-spin rounded-none border-4 border-[#EF2E55] border-t-transparent" />
    </div>
  ),
});

const MovieSlider = dynamic(() => import('./components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-white rounded-none animate-pulse border border-[#EF2E55]/20 shadow-sm" />
      ))}
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('./components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

const GlobalServerMap = dynamic(() => import('./components/GlobalServerMap'), {
  loading: () => <div className="h-[400px] bg-white rounded-none animate-pulse max-w-7xl mx-auto border border-[#EF2E55]/20 shadow-sm" />,
});

const FAQ = dynamic(() => import('./components/FAQ'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center bg-white">
      <div className="h-12 w-12 animate-spin rounded-none border-4 border-[#EF2E55] border-t-transparent" />
    </div>
  ),
});

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#111111] overflow-hidden">
      <ProductSchema />
      <FAQSchema />

      {/* Hero Section */}
      <section className="relative px-4 py-24 md:py-40 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt="FreeGo TV subscription streaming in 4K ultra HD quality across the USA"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center brightness-[0.9] contrast-[1.05]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/95" />
        </div>
        
        <FadeIn className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center my-auto w-full">
          <div className="inline-flex items-center gap-2 bg-white border border-[#EF2E55]/40 px-5 py-2 rounded-none mb-6 shadow-sm backdrop-blur-md">
            <Medal className="w-4 h-4 text-[#EF2E55]" />
            <span className="text-[#111111] font-extrabold text-xs uppercase tracking-widest flex items-center gap-2">
              Official FreeGo TV USA Provider
              <USAFlag className="w-7 h-7 rounded-none shrink-0" />
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-[#111111] mb-6 leading-none break-words">
            FREEGO TV SUBSCRIPTION <br />
            <span className="text-[#EF2E55]">PREMIER IPTV SERVICE</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#333333] max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
            Stream 36,000+ live channels plus 120,000+ movies and shows in crisp 4K on any device with FreeGo TV. Our US IPTV subscription includes step-by-step setup, expert support, a free trial to test on your screen first, and USD pricing with no lock-in contract.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <Link 
              href="/pricing" 
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-none bg-[#FFD700] text-black font-black text-sm hover:bg-[#ffdf33] transition-all hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg shadow-[#FFD700]/20 border border-[#FFD700]"
            >
              Get FreeGo TV Now
            </Link>
            <Link 
              href="/free-trial" 
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-none bg-[#111111] text-white border border-[#111111] font-black text-sm hover:bg-[#EF2E55] transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 shadow-md"
            >
              <PlayCircle className="w-5 h-5 text-[#FFD700] shrink-0" /> Claim Free Trial
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-[#111111] font-bold uppercase tracking-widest bg-white/90 backdrop-blur-md px-8 py-4 rounded-none border border-[#EF2E55]/20 shadow-xl">
            <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-[#EF2E55]" /> Ultra HD Stream Quality</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#EF2E55]" /> High Uptime Network</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#EF2E55]" /> Anti Freeze Server Technology</span>
          </div>
        </FadeIn>
      </section>

      {/* Partner Slider Section */}
      <div className="min-h-[128px] bg-white">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* 3 Step Setup Section */}
      <section className="py-28 bg-[#f9f9f9] w-full relative overflow-hidden border-y border-[#EF2E55]/10">
        <div className="absolute inset-0 bg-[radial-gradient(#EF2E55_1px,transparent_1px)] [background-size:28px_28px] opacity-5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 bg-white border border-[#EF2E55]/40 px-4 py-2 rounded-none mb-6 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-none bg-[#EF2E55] animate-pulse" />
                <span className="text-[#111111] font-black text-xs uppercase tracking-widest">
                  FreeGo IPTV Setup USA
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] tracking-tight uppercase leading-[1.05]">
                START STREAMING FREEGO TV IN <br className="hidden sm:block" />
                <span className="text-[#EF2E55] relative inline-block mt-1">
                  3 SIMPLE STEPS
                  <span className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent rounded-none" />
                </span>
              </h2>
              
              <p className="text-[#333333] text-base sm:text-lg mt-6 font-semibold max-w-2xl leading-relaxed">
                No tech headaches, we keep it easy. Pick your plan, message us on chat, and our support team walks you through setup on your device. Test everything with a free trial before paying a cent.
              </p>
            </div>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative">
            {/* Step 1 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-white text-[#111111] rounded-none p-8 sm:p-10 border-2 border-[#111111]/15 shadow-[0_15px_35px_rgba(0,0,0,0.08)] hover:border-[#EF2E55] hover:shadow-[0_25px_50px_rgba(239,46,85,0.15)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-none bg-[#f9f9f9] text-[#EF2E55] shadow-md border border-[#EF2E55]/30 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Tv2 className="w-8 h-8 text-[#EF2E55]" />
                  </div>
                  <span className="text-5xl font-black text-white bg-[#EF2E55] px-4 py-1 rounded-none shadow-md tracking-tight border border-[#EF2E55]">
                    01
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#111111] bg-[#FFD700] px-3.5 py-1.5 rounded-none mb-4 shadow-sm border border-[#FFD700]">
                  Step One
                </div>

                <h3 className="text-2xl font-black text-[#111111] mb-3 uppercase tracking-tight group-hover:text-[#EF2E55] transition-colors">
                  Select A Plan
                </h3>

                <p className="text-[#333333] text-sm font-medium leading-relaxed mb-6">
                  Choose the FreeGo TV subscription that fits your home. Select 1, 2, or 3 device connections with 3, 6, or 12-month duration choices. All plans are billed in USD with zero long-term commitments.
                </p>

                <ul className="text-xs font-bold text-[#444444] space-y-2.5 mb-8">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-none bg-[#EF2E55]" /> 1, 2, or 3 Device Connections</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-none bg-[#EF2E55]" /> 3, 6, or 12 Month Options</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-none bg-[#EF2E55]" /> Billed In USD ($) With No Contracts</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#111111]/10 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#555555] uppercase tracking-wider group-hover:text-[#EF2E55] transition-colors">
                  Simple Selection
                </span>
                <div className="w-9 h-9 rounded-none bg-[#111111] text-[#FFD700] flex items-center justify-center shadow-md group-hover:bg-[#EF2E55] group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            {/* Step 2 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-white text-[#111111] rounded-none p-8 sm:p-10 border-2 border-[#111111]/15 shadow-[0_15px_35px_rgba(0,0,0,0.08)] hover:border-[#EF2E55] hover:shadow-[0_25px_50px_rgba(239,46,85,0.15)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-none bg-[#f9f9f9] text-[#EF2E55] shadow-md border border-[#EF2E55]/30 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-[#EF2E55]" />
                  </div>
                  <span className="text-5xl font-black text-white bg-[#EF2E55] px-4 py-1 rounded-none shadow-md tracking-tight border border-[#EF2E55]">
                    02
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#111111] bg-[#FFD700] px-3.5 py-1.5 rounded-none mb-4 shadow-sm border border-[#FFD700]">
                  Step Two
                </div>

                <h3 className="text-2xl font-black text-[#111111] mb-3 uppercase tracking-tight group-hover:text-[#EF2E55] transition-colors">
                  Setup On Chat
                </h3>

                <p className="text-[#333333] text-sm font-medium leading-relaxed mb-6">
                  Once you pick your plan, connect with us on chat. We guide you step-by-step to set up Firestick, Smart TV, or mobile devices using compatible streaming applications. You receive your trial credentials instantly.
                </p>

                <ul className="text-xs font-bold text-[#444444] space-y-2.5 mb-8">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-none bg-[#EF2E55]" /> Guided Setup Over Chat</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-none bg-[#EF2E55]" /> Assistance with App Installation</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-none bg-[#EF2E55]" /> Direct Access Credentials Delivered</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#111111]/10 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#555555] uppercase tracking-wider group-hover:text-[#EF2E55] transition-colors">
                  Friendly US Support
                </span>
                <div className="w-9 h-9 rounded-none bg-[#111111] text-[#FFD700] flex items-center justify-center shadow-md group-hover:bg-[#EF2E55] group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            {/* Step 3 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-white text-[#111111] rounded-none p-8 sm:p-10 border-2 border-[#111111]/15 shadow-[0_15px_35px_rgba(0,0,0,0.08)] hover:border-[#EF2E55] hover:shadow-[0_25px_50px_rgba(239,46,85,0.15)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-none bg-[#f9f9f9] text-[#EF2E55] shadow-md border border-[#EF2E55]/30 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-[#EF2E55]" />
                  </div>
                  <span className="text-5xl font-black text-white bg-[#EF2E55] px-4 py-1 rounded-none shadow-md tracking-tight border border-[#EF2E55]">
                    03
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#111111] bg-[#FFD700] px-3.5 py-1.5 rounded-none mb-4 shadow-sm border border-[#FFD700]">
                  Step Three
                </div>

                <h3 className="text-2xl font-black text-[#111111] mb-3 uppercase tracking-tight group-hover:text-[#EF2E55] transition-colors">
                  Test Then Upgrade
                </h3>

                <p className="text-[#333333] text-sm font-medium leading-relaxed mb-6">
                  Start your free trial and test the performance. Check live sports channels, browse movie catalogs, and verify stability on your device. Upgrade to a paid plan only when completely satisfied.
                </p>

                <ul className="text-xs font-bold text-[#444444] space-y-2.5 mb-8">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-none bg-[#EF2E55]" /> Free Trial To Test Streams</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-none bg-[#EF2E55]" /> Upgrade Only When Fully Satisfied</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-none bg-[#EF2E55]" /> Full Customer Support Included</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#111111]/10 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#555555] uppercase tracking-wider group-hover:text-[#EF2E55] transition-colors">
                  Ready To Watch
                </span>
                <div className="w-9 h-9 rounded-none bg-[#111111] text-[#FFD700] flex items-center justify-center shadow-md group-hover:bg-[#EF2E55] group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Living Room Section (Updated to match reference layout & style) */}
      <section className="relative w-full bg-[#111111] py-28 md:py-40 overflow-hidden border-b border-[#EF2E55]/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/error-404.webp"
            alt="The magic of cinema. The comfort of your couch with FreeGo TV"
            fill
            className="object-cover object-center brightness-[0.45] contrast-[1.1]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-[#111111]/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="max-w-3xl">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-2 leading-[1.05]">
              The magic of cinema.
            </h2>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#22c55e] mb-6 leading-[1.05]">
              The comfort of your couch.
            </h2>
            
            <p className="text-base sm:text-lg text-[#f0ebd8] font-medium leading-relaxed mb-10 max-w-2xl">
              Lights off. Sound up. Enjoy live TV, movies, series, and sports across the United States with FreeGo TV. Discover a world of entertainment right from your living room.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link 
                href="/pricing" 
                className="inline-flex items-center gap-2 bg-[#FFD700] text-black px-8 py-4 rounded-none font-black text-sm uppercase tracking-wider hover:bg-[#ffdf33] transition-all hover:scale-105 shadow-xl shadow-[#FFD700]/20 border border-[#FFD700]"
              >
                Explore your subscription <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Media Grid Section */}
      <section id="channels" className="pt-24 bg-white max-w-[100vw] overflow-hidden relative min-h-[400px]">
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#111111] mb-4 uppercase tracking-tight leading-none">
              WIDE RANGE OF FREEGO TV LOCAL & INTERNATIONAL CHANNELS
            </h2>
            <p className="text-[#444444] font-medium text-lg">
              Access 36,000+ live broadcasts alongside 120,000+ movies and series on demand with FreeGo TV. New titles are added regularly.
            </p>
          </div>
        </FadeIn>
        {isMounted ? (
          <MovieSlider />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-[#f9f9f9] rounded-none border border-[#EF2E55]/20 shadow-sm" />
            ))}
          </div>
        )}
      </section>

      {/* Pricing Section */}
      <div className="min-h-[600px] bg-white" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>

      <section className="w-full max-w-4xl mx-auto px-4 my-8 flex justify-center items-center">
        <ShareButtons />
      </section>

      {/* Trust Badges */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f9f9f9] text-[#111111] border border-[#111111]/15 rounded-none p-8 md:p-12 shadow-2xl">
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-none bg-white border border-[#EF2E55]/40 flex items-center justify-center shrink-0 shadow-sm">
                <Lock className="w-7 h-7 text-[#EF2E55]" />
              </div>
              <div>
                <div className="font-black text-[#111111] text-lg uppercase tracking-tight">Secure Payment Options</div>
                <p className="text-[#444444] font-medium text-xs mt-1">Encrypted checkout supporting Credit Cards, PayPal, Bank Transfers, and Crypto</p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-none bg-white border border-[#EF2E55]/40 flex items-center justify-center shrink-0 shadow-sm">
                <ThumbsUp className="w-7 h-7 text-[#EF2E55]" />
              </div>
              <div>
                <div className="font-black text-[#111111] text-lg uppercase tracking-tight">Free Trial Option</div>
                <p className="text-[#444444] font-medium text-xs mt-1">Test FreeGo TV stream performance on your device before deciding to subscribe</p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-none bg-white border border-[#EF2E55]/40 flex items-center justify-center shrink-0 shadow-sm">
                <LifeBuoy className="w-7 h-7 text-[#EF2E55]" />
              </div>
              <div>
                <div className="font-black text-[#111111] text-lg uppercase tracking-tight">Chat Setup Guide</div>
                <p className="text-[#444444] font-medium text-xs mt-1">Our technical team provides step-by-step assistance directly via chat</p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-none bg-white border border-[#EF2E55]/40 flex items-center justify-center shrink-0 shadow-sm">
                <Medal className="w-7 h-7 text-[#EF2E55]" />
              </div>
              <div>
                <div className="font-black text-[#111111] text-lg uppercase tracking-tight">Optimized Server Network</div>
                <p className="text-[#444444] font-medium text-xs mt-1">Dedicated network capacity ensures smooth streaming during major events</p>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="py-24 bg-[#111111] text-white relative overflow-hidden border-y border-[#EF2E55]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              {CONSTANTS.BRAND_NAME} PERFORMANCE METRICS
            </h3>
            <p className="text-[#FFD700] text-base font-bold mt-4 uppercase tracking-wider">
              Serving satisfied FreeGo TV viewers across New York, Los Angeles, Chicago, Houston, and Phoenix.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <FadeInItem className="flex flex-col items-center p-6 bg-white text-[#111111] rounded-none border border-white/20 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#EF2E55] mb-2">
                <AnimatedCounter value={15} suffix="K+" />
              </span>
              <span className="text-xs text-[#555555] font-extrabold uppercase tracking-widest mt-2">Active Subscribers</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-white text-[#111111] rounded-none border border-white/20 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#EF2E55] mb-2">
                <AnimatedCounter value={36} suffix="K+" />
              </span>
              <span className="text-xs text-[#555555] font-extrabold uppercase tracking-widest mt-2">Live Channels</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-white text-[#111111] rounded-none border border-white/20 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#EF2E55] mb-2">
                <AnimatedCounter value={120} suffix="K+" />
              </span>
              <span className="text-xs text-[#555555] font-extrabold uppercase tracking-widest mt-2">On Demand Titles</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-white text-[#111111] rounded-none border border-white/20 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#EF2E55] mb-2">
                <AnimatedCounter value={99.9} decimals={1} suffix="%" />
              </span>
              <span className="text-xs text-[#555555] font-extrabold uppercase tracking-widest mt-2">Server Uptime</span>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      <section className="w-full bg-white py-12 border-b border-[#EF2E55]/10">
        <div className="max-w-7xl mx-auto px-4">
          <TargetCountries />
        </div>
      </section>

      {/* Global Server Map */}
      <div className="min-h-[400px] bg-white">
        {isMounted ? <GlobalServerMap /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* Benefits Section */}
      <section className="py-24 bg-[#f9f9f9] relative overflow-hidden border-t border-[#EF2E55]/10">
        <div className="absolute inset-0 bg-[radial-gradient(#EF2E55_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white border border-[#EF2E55]/40 px-4 py-2 rounded-none mb-6">
              <span className="w-2.5 h-2.5 rounded-none bg-[#EF2E55] animate-pulse" />
              <span className="text-[#111111] font-black text-xs uppercase tracking-widest">
                Reliable FreeGo TV Service 🇺🇸
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111111] mb-6 uppercase tracking-tight leading-none">
              WHY FREEGO TV IS THE <span className="text-[#EF2E55]">BEST IPTV SUBSCRIPTION</span> IN THE USA
            </h2>
            <p className="text-[#333333] font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
              Cord-cutters across America looking for a smarter alternative to cable choose FreeGo TV. Here is why our platform stands out.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              { 
                iconSvg: (
                  <svg className="w-7 h-7 text-[#EF2E55]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21 3.582 4 8 4s8-1.79 8-4" />
                  </svg>
                ), 
                title: "Huge On Demand Library", 
                desc: "Instant access to 120,000+ movies, full series, and multi-language audio or subtitle options with FreeGo TV. Content updates continuously." 
              },
              { 
                iconSvg: (
                  <svg className="w-7 h-7 text-[#EF2E55]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ), 
                title: "Anti Freeze Server Infrastructure", 
                desc: "Load-balanced server architecture engineered by FreeGo TV to eliminate interruptions during peak sports broadcasts." 
              },
              { 
                iconSvg: (
                  <svg className="w-7 h-7 text-[#EF2E55]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                ), 
                title: "Optimized US Routing", 
                desc: "Dedicated US edge servers keep ping low, channel switching fast, and video quality consistent from coast to coast." 
              },
              { 
                iconSvg: (
                  <svg className="w-7 h-7 text-[#EF2E55]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ), 
                title: "NFL, NBA, MLB & NHL Action", 
                desc: "Follow NFL Sunday, NBA primetime, MLB playoffs, NHL games, college football, and PPV fight nights at fluid 60fps with FreeGo TV." 
              },
              { 
                iconSvg: (
                  <svg className="w-7 h-7 text-[#EF2E55]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ), 
                title: "7 Day Electronic Program Guide", 
                desc: "Integrated EPG schedule providing 7-day program overviews alongside catch-up TV functionality." 
              },
              { 
                iconSvg: (
                  <svg className="w-7 h-7 text-[#EF2E55]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ), 
                title: "Multi Device Connections", 
                desc: "Stream on multiple screens in your home using Firestick, Android TV, Smart TV, or mobile devices simultaneously." 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white text-[#111111] rounded-none p-8 border-2 border-[#111111]/15 shadow-xl hover:border-[#EF2E55] hover:shadow-2xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-none bg-[#f9f9f9] border border-[#EF2E55]/20 flex items-center justify-center mb-6 shadow-sm">
                    {item.iconSvg}
                  </div>
                  <h3 className="text-2xl font-black text-[#111111] mb-3 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-[#333333] font-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#111111]/10 flex items-center justify-between text-xs font-bold text-[#111111]">
                  <span className="uppercase tracking-wider">Key Feature</span>
                  <span className="w-2 h-2 rounded-none bg-[#EF2E55]" />
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="min-h-[400px] bg-white">
        {isMounted ? <FAQ /> : <div className="h-[400px] bg-transparent" />}
      </div>

    </div>
  );
}