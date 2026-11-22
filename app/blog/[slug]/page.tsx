// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog';
import { CONSTANTS } from '@/lib/seo';
import {
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  Tag,
  MessageCircle,
  BookOpen,
  ChevronLeft,
  Share2,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// CONSTANTS
// ---------------------------------------------------------------------------
const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;

// ---------------------------------------------------------------------------
// GENERATE STATIC PARAMS
// ---------------------------------------------------------------------------
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: `Article Not Found | ${BRAND} Blog`,
    };
  }

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: `${post.title} | ${BRAND} Blog`,
    description: post.description || post.excerpt || '',
    authors: [{ name: post.author || `${BRAND} Team` }],
    creator: BRAND,
    publisher: BRAND,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description || post.excerpt || '',
      url: postUrl,
      siteName: BRAND,
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || `${BRAND} Team`],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description || post.excerpt || '',
      images: [imageUrl],
    },
    keywords: post.keywords || [],
  };
}

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------
function getPostCategory(post: any): string {
  if (post.category) return post.category;
  const kw = (post.keywords || []).join(' ').toLowerCase();
  const title = (post.title || '').toLowerCase();
  if (title.includes('setup') || title.includes('install') || kw.includes('setup guide')) return 'setup';
  if (title.includes('review') || title.includes('compare') || title.includes('best')) return 'review';
  if (title.includes('sport') || kw.includes('live sports')) return 'sports';
  if (title.includes('tip') || title.includes('troubleshoot')) return 'tips';
  return 'news';
}

function getCategoryLabel(id: string): string {
  const map: Record<string, string> = {
    setup: 'Setup Guide',
    review: 'Review',
    sports: 'Live Sports',
    tips: 'Tips & Tricks',
    news: 'News',
  };
  return map[id] || 'Guide';
}

function getReadTime(post: any): string {
  if (post.readTime) return post.readTime;
  const words = (post.content || '').split(/\s+/).length;
  const mins = Math.max(5, Math.round(words / 220));
  return `${mins} min read`;
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

// ---------------------------------------------------------------------------
// JSON-LD ARTICLE SCHEMA
// ---------------------------------------------------------------------------
const ArticleSchema = ({ post }: { post: any }) => {
  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${postUrl}/#article`,
        isPartOf: { '@id': `${postUrl}/#webpage` },
        headline: post.title,
        description: post.description || post.excerpt || '',
        image: {
          '@type': 'ImageObject',
          url: imageUrl,
        },
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: 'en-US',
        mainEntityOfPage: { '@id': postUrl },
        publisher: { '@id': `${SITE_URL}/#organization` },
        author: {
          '@type': 'Person',
          name: post.author || `${BRAND} Team`,
        },
        keywords: (post.keywords || []).join(', '),
      },
      {
        '@type': 'WebPage',
        '@id': `${postUrl}/#webpage`,
        url: postUrl,
        name: post.title,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${postUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${SITE_URL}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: postUrl,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="article-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// ARTICLE PAGE COMPONENT
// ---------------------------------------------------------------------------
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const categoryId = getPostCategory(post);
  const categoryLabel = getCategoryLabel(categoryId);
  const readTime = getReadTime(post);
  const dateStr = formatDate(post.date);
  const imageUrl = post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`;

  // Find related posts (exclude current)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className="flex flex-col min-h-screen bg- text-[#111111]">
      <ArticleSchema post={post} />

      {/* HERO / ARTICLE HEADER */}
      <header className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#071b5c] text-white border-b border-[#0052FF]/20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/cinema61.webp"
            alt="Streaming background living room"
            fill
            priority
            className="object-cover object-center brightness-[0.35] contrast-[1.1]"
            sizes="100vw"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071b5c]/85 via-[#071b5c]/70 to-black/90" />
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0052FF]/20 blur-[150px] rounded-none pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-none bg-black/80 border border-white/20 text-white text-xs font-black uppercase tracking-wider hover:bg-[#FFD700] hover:text-black hover:border-[#FFD700] transition-all backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-wider mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-[#0052FF] text-white shadow-sm">
              <Tag className="w-3.5 h-3.5" />
              {categoryLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-black/70 border border-white/20 text-white backdrop-blur-sm">
              <Calendar className="w-3.5 h-3.5 text-[#0052FF]" />
              {dateStr}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-black/70 border border-white/20 text-white backdrop-blur-sm">
              <Clock className="w-3.5 h-3.5 text-[#0052FF]" />
              {readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-tight text-white mb-6 drop-shadow-md">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-4 border-t border-white/15">
            <div className="w-10 h-10 rounded-none bg-[#0052FF] text-white font-black flex items-center justify-center text-sm uppercase border border-white/20">
              {(post.author || BRAND).slice(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="text-white font-bold text-xs uppercase tracking-wider">
                Written by <span className="text-[#FFD700]">{post.author || `${BRAND} Team`}</span>
              </p>
              <p className="text-white/70 text-[11px] font-medium">
                Published on {dateStr} • Verified Guide
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN ARTICLE CONTAINER */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full py-12 md:py-16">
        
        {/* FEATURED IMAGE */}
        <div className="relative aspect-[16/9] rounded-none overflow-hidden mb-10 border-2 border-[#111111]/20 shadow-lg bg-black">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={675}
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ARTICLE CONTENT */}
        <div 
          className="prose prose-lg max-w-none text-[#333333] font-medium leading-relaxed 
            prose-headings:font-black prose-headings:uppercase prose-headings:text-[#111111] prose-headings:tracking-tight
            prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-[#0052FF] prose-h2:pl-4
            prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:mb-6 prose-p:text-base md:prose-p:text-lg prose-p:text-[#333333]
            prose-a:text-[#0052FF] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[#111111] prose-strong:font-black
            prose-ul:my-6 prose-li:my-2 prose-li:text-base md:prose-li:text-lg
            prose-img:rounded-none prose-img:border-2 prose-img:border-[#111111]/15 prose-img:my-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* SHARE & TAGS FOOTER */}
        <div className="mt-12 pt-8 border-t-2 border-[#111111]/15 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#555555] mr-2">
              Keywords:
            </span>
            {(post.keywords || []).slice(0, 5).map((kw: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 rounded-none bg-[#f9f9f9] border border-[#111111]/15 text-[#333333] text-[11px] font-black uppercase tracking-wider"
              >
                {kw}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#555555]">
              Share:
            </span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-none bg-black text-[#FFD700] border border-[#FFD700]/40 hover:bg-[#FFD700] hover:text-black transition-all"
              aria-label="Share on Twitter"
            >
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* CHAT CTA BOX */}
        <div className="my-16 relative rounded-none overflow-hidden border border-[#FFD700]/30 bg-gradient-to-br from-[#0052FF] via-[#071b5c] to-black p-8 md:p-10 text-center shadow-xl text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.1),_transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#FFD700] text-black px-4 py-2 rounded-none mb-5 shadow-md border border-black">
              <MessageCircle className="w-4 h-4" />
              <span className="font-black text-xs uppercase tracking-widest">
                Need Setup Help?
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter leading-tight mb-4 drop-shadow-md">
              Get 24/7 Assistance with {BRAND}
            </h3>
            <p className="text-white/90 text-sm sm:text-base font-bold max-w-xl mx-auto mb-6">
              Have questions following this guide? Our support team is ready on WhatsApp to assist with installation and setup.
            </p>
            <a
              href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                `Hi ${BRAND}, I read your article "${post.title}" and need help.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-none bg-[#FFD700] text-black font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-md border border-[#FFD700]"
            >
              <MessageCircle className="w-5 h-5 text-black" />
              Chat With Us on WhatsApp
            </a>
          </div>
        </div>

        {/* RELATED ARTICLES */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t-2 border-[#111111]/15">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-1 w-12 bg-[#0052FF] rounded-none" />
              <h2 className="text-lg font-black uppercase tracking-widest text-[#0052FF]">
                Related Articles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => {
                const relCategory = getCategoryLabel(getPostCategory(relPost));
                return (
                  <Link
                    key={relPost.id}
                    href={`/blog/${relPost.slug}`}
                    className="group flex flex-col bg-[#f9f9f9] rounded-none overflow-hidden border-2 border-[#111111]/15 hover:border-[#0052FF] hover:shadow-md transition-all duration-300"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <Image
                        src={relPost.image}
                        alt={relPost.title}
                        width={400}
                        height={250}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-none bg-[#0052FF] text-white text-[10px] font-black uppercase tracking-wider">
                          {relCategory}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-sm font-black text-[#111111] uppercase tracking-tight leading-snug mb-2 line-clamp-2 group-hover:text-[#0052FF] transition-colors">
                        {relPost.title}
                      </h3>
                      <p className="text-[#333333] text-xs font-medium line-clamp-2 mb-4 flex-1">
                        {relPost.description || relPost.excerpt || ''}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[#0052FF] font-black text-xs uppercase tracking-wider">
                        Read More <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

      </div>
    </article>
  );
}