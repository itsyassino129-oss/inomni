// components/FAQ.tsx
'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

const BRAND = CONSTANTS.BRAND_NAME; // "DODO TV"

// ---------------------------------------------------------------------------
// FAQ content — English (US + International). Sports, pricing, and legal
// references are localised to the United States market for DODO IPTV.
// ---------------------------------------------------------------------------
export const faqs = [
  {
    q: 'What is IPTV and how does it work?',
    a: `IPTV stands for Internet Protocol Television. Instead of a cable or satellite box, your channels and movies are streamed over your internet connection. You can watch 36,000+ live channels plus over 120,000 movies and TV shows in 4K on your Smart TV, Firestick, smartphone, or tablet. Setup takes only a few minutes, and our team walks you through everything on chat.`,
  },
  {
    q: `Why is ${BRAND} the best IPTV subscription in the USA?`,
    a: `We build everything around American viewers. You get 36,000+ live channels including NFL Sunday, NBA, MLB, NHL, college football, ESPN, HBO, and Showtime, plus over 120,000 movies and TV shows on demand. Our DODO TV service runs anti-freeze servers with dedicated capacity in New York and Los Angeles, so your stream stays smooth even on Super Bowl Sunday or a packed pay-per-view fight night.`,
  },
  {
    q: 'Which devices are compatible with your streaming service?',
    a: 'Pretty much everything you already own. That includes Samsung and LG Smart TVs, Android TV, Google TV, Amazon Firestick, Apple TV, iPhone, iPad, Windows PC, Mac, and MAG and Formuler set-top boxes. If you are not sure about your device, just message us on chat — we will check it for you before you subscribe.',
  },
  {
    q: 'How does setup and activation work?',
    a: 'Once you have chosen your plan and the number of devices you want, we chat. Our team guides you through installing and configuring an app like IBO Player Pro, IPTV Smarters Pro, or TiviMate, then sends you the trial content. You test everything for free first, and only switch to a paid subscription once you are happy. Activation is quick and you are never on your own.',
  },
  {
    q: 'Can I request a free trial before paying?',
    a: 'Yes, and we strongly recommend it. Message us on chat and we will set you up with a free 24-hour trial. That way you can check the 4K picture quality, browse the channel lineup for NFL, NBA, or MLB, and make sure everything runs smoothly on your device and internet connection. No lock-in, no pressure.',
  },
  {
    q: 'How do I install the streaming app on my Smart TV or Firestick?',
    a: 'For Smart TVs and Firestick, download a supported app like IBO Player Pro, IPTV Smarters Pro, TiviMate, or Smart IPTV from the relevant app store. Then enter the login details we send you on chat. If any step is unclear, our support team walks you through it in chat until you are streaming. We stay with you for the entire subscription.',
  },
  {
    q: 'Is IPTV legal in the United States?',
    a: 'IPTV itself is a completely legal delivery technology used by many providers and telecommunications companies worldwide. What matters is that you hold the appropriate rights to the content you access. We encourage our customers to check the current regulations in the United States and to only stream content they are authorised to view. If you have questions about this, our support team is happy to help.',
  },
  {
    q: `What internet speed do I need for ${BRAND}?`,
    a: 'For standard definition streams we recommend at least 10 Mbps, for Full HD 20 Mbps, and for 4K Ultra HD streaming 25 Mbps or more. A stable connection matters more than raw peak speed. If you are unsure, message us on chat — we will help you test your connection and get it set up properly.',
  },
  {
    q: 'What payment methods do you accept and in what currency?',
    a: 'All prices are in US Dollars (USD) and there is no lock-in contract. We accept credit card, PayPal, bank transfer, and crypto through a secure, encrypted checkout. You can choose a 3, 6, or 12-month plan and run 1, 2, or 3 devices simultaneously depending on your household.',
  },
  {
    q: 'Do you offer support during my subscription?',
    a: 'Yes, for the entire length of your subscription. You can contact our team on chat at any time for help with installation, configuration, or anything else that comes up. That includes tips for getting the most out of your player app and fast fixes if you ever run into buffering.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#071b5c] text-white relative overflow-hidden"
      aria-label={`Frequently asked questions about ${CONSTANTS.BRAND_NAME}`}
    >
      {/* Ambient Warm Yellow / Gold Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#fff3b0]/10 blur-[140px] rounded-full pointer-events-none" />

      <FadeIn className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#051342] border border-[#fff3b0]/40 px-5 py-2 rounded-full mb-6 shadow-md">
          <Sparkles className="w-4 h-4 text-[#fff3b0]" />
          <span className="text-white font-black text-xs uppercase tracking-widest">
            {CONSTANTS.FOCUS_KEYWORD} Help Center 🇺🇸
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-none drop-shadow-md">
          FREQUENTLY ASKED <span className="text-[#fff3b0]">QUESTIONS</span>
        </h2>
        <p className="text-[#f0ebd8] font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about{' '}
          <strong className="text-white font-bold">{CONSTANTS.BRAND_NAME}</strong>
          {' '}— setup, free trial, channel list, and billing via dodoiptv.pro.
        </p>
      </FadeIn>

      <FadeInStagger className="space-y-4 relative z-10">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          const headingId = `faq-heading-${i}`;
          const answerId = `faq-answer-${i}`;
          return (
            <FadeInItem key={faq.q}>
              <div
                className={`relative rounded-3xl transition-all duration-300 overflow-hidden border-2 ${
                  isOpen
                    ? 'bg-white text-[#071b5c] border-[#fff3b0] shadow-2xl'
                    : 'bg-[#051342] text-white hover:bg-white/5 border-[#fff3b0]/20 hover:border-[#fff3b0]/60'
                }`}
              >
                {/* Accent Left Bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-2 transition-colors duration-300 ${
                    isOpen ? 'bg-[#FFD700]' : 'bg-transparent'
                  }`}
                  aria-hidden="true"
                />

                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 transition-all duration-300 rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700]"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    id={headingId}
                  >
                    <div className="flex items-center gap-4 pr-2">
                      <div
                        className={`p-2.5 rounded-2xl shrink-0 transition-colors duration-300 ${
                          isOpen
                            ? 'bg-[#071b5c] text-[#fff3b0] border border-[#071b5c]/20'
                            : 'bg-[#071b5c] text-[#fff3b0] border border-[#fff3b0]/30'
                        }`}
                        aria-hidden="true"
                      >
                        <HelpCircle className="w-5 h-5" />
                      </div>

                      <span
                        className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 ${
                          isOpen ? 'text-[#071b5c]' : 'text-white'
                        }`}
                      >
                        {faq.q}
                      </span>
                    </div>

                    <div
                      className={`p-2 rounded-xl shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#071b5c] text-[#fff3b0] rotate-180 border border-[#071b5c]/20'
                          : 'bg-[#071b5c] text-[#fff3b0] border border-[#fff3b0]/30'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                </h3>

                {/* Answer Area */}
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={headingId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100 pb-6'
                      : 'grid-rows-[0fr] opacity-0 pb-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className={`font-normal leading-relaxed pl-16 sm:pl-20 pr-6 sm:pr-8 text-sm sm:text-base border-t pt-4 mt-1 ${
                      isOpen ? 'text-[#333333] border-[#071b5c]/10' : 'text-[#f0ebd8] border-white/10'
                    }`}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInItem>
          );
        })}
      </FadeInStagger>
    </section>
  );
}