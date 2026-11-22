// app/not-found.tsx
'use client';

import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';
import { ArrowLeft } from 'lucide-react';

const BRAND = CONSTANTS.BRAND_NAME;

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden justify-center items-center py-20 sm:py-24 md:py-30 bg-[#0a1b59]">
      {/* Background Image with Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/error-404.webp"
          alt={`404 error page background for the ${BRAND} website`}
          className="w-full h-full object-cover opacity-60 brightness-50"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1920&auto=format';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1b59]/95 via-[#0a1b59]/85 to-[#07133d]/95" />
      </div>

      {/* Animated Gold Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFD700]/10 rounded-none blur-[120px] animate-pulse pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* 404 Number */}
          <div className="mb-6">
            <div className="text-[120px] sm:text-[160px] md:text-[200px] font-black leading-none tracking-tighter uppercase select-none">
              <span className="text-[#FFD700]">4</span>
              <span className="text-white">0</span>
              <span className="text-[#FFD700]">4</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter drop-shadow-md">
            Page Not Found
          </h1>

          <div className="w-24 h-1.5 bg-[#FFD700] mx-auto mb-8 rounded-none border border-[#0a1b59]" />

          <p className="text-white/90 text-base sm:text-lg font-bold max-w-xl mx-auto mb-12 leading-relaxed">
            That page seems to have gone off the air. The link might be old or the address may have a typo. Use the shortcuts below to get back to what matters on our US streaming service.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-none bg-[#FFD700] text-[#0a1b59] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 shrink-0 shadow-md border border-[#FFD700] hover:bg-[#ffdf33]"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              Back to Home
            </Link>

            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-none bg-[#07133d] border border-[#FFD700]/60 text-[#FFD700] font-black uppercase tracking-widest text-sm transition-all hover:scale-105 shrink-0 shadow-md hover:bg-[#FFD700] hover:text-[#0a1b59] hover:border-[#FFD700]"
            >
              View Subscription Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
