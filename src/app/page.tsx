"use client";

import { SafeImage } from "@/components/atoms";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import DynamicIcon from "@/components/ui/DynamicIcon";
import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useRef, useState } from "react";
import FloatingParticles from "../_components/FloatingParticles";
import PartnerLogoCard from "../_components/PartnerLogoCard";
import { PARTNERS } from "../_data/data";

const CAROUSEL_IMAGES = [
  "/cache/carousel/idfc/main.png",
  "/cache/carousel/ajio.png",
  "/cache/carousel/idfc/decathalon.png",
  "/cache/carousel/myntra.png",
  "/cache/carousel/idfc/shoppersstop.png",
  "/cache/carousel/rarerabit.png",
  "/cache/carousel/idfc/tatacliq.png"
];

const FILTER_PILL =
  "rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer select-none whitespace-nowrap border tracking-tight";
const FILTER_ACTIVE_BG =
  "bg-white font-semibold border-[var(--primary-btn-color)]";
const FILTER_ACTIVE_STYLE = { color: "var(--primary-btn-color)" };
const FILTER_IDLE =
  "bg-white/80 text-slate-600 border-slate-100 hover:bg-white hover:text-slate-900 hover:border-slate-200 hover:shadow-sm";

const STATS: { icon: string; label: string; value: string }[] = [
  // { icon: "Store", label: "Brand Partners", value: `${PARTNERS.length}+` },
  // { icon: "Zap", label: "Max Reward", value: "10x Points" },
  // { icon: "ShoppingBag", label: "Categories", value: "7 Verticals" },
  // { icon: "Gift", label: "Exclusive Offers", value: "Live Now" },
];

function CachePage() {
  const searchParams = useSearchParams();
  const variant = Math.min(4, Math.max(1, parseInt(searchParams.get("variant") ?? "1") || 1));

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTier, setActiveTier] = useState("All");
  const [activeTab, setActiveTab] = useState<"All" | "Tiers" | "Categories">(
    "All"
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselApi, setCarouselApi] =
    useState<import("@/components/ui/carousel").CarouselApi>(undefined);
  const autoplayRef = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );

  const handleSetApi = (
    api: import("@/components/ui/carousel").CarouselApi
  ) => {
    setCarouselApi(api);
    api?.on("select", () => setCurrentSlide(api.selectedScrollSnap()));
  };

  const categories = useMemo(() => {
    const cats = Array.from(new Set(PARTNERS.map(p => p.cat)));
    return ["All", ...cats];
  }, []);

  const tiers = useMemo(() => {
    const ts = Array.from(new Set(PARTNERS.map(p => p.tier))).sort(
      (a, b) => parseInt(b) - parseInt(a)
    );
    return ["All", ...ts];
  }, []);

  const filtered = useMemo(() => {
    return PARTNERS.filter(p => {
      const matchesCat = activeCategory === "All" || p.cat === activeCategory;
      const matchesTier = activeTier === "All" || p.tier === activeTier;
      const matchesSearch =
        !search.trim() ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.cat.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesTier && matchesSearch;
    });
  }, [search, activeCategory, activeTier]);

  return (
    <main className="min-h-screen bg-[#f0f2f8] overflow-x-hidden">
      {/* ── Hero / Carousel Section ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #050c1a 0%, #0d1b35 50%, #0a1428 100%)"
        }}
      >
        {/* Animated glow orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)"
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)"
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(ellipse, #F59E0B 0%, transparent 70%)"
            }}
            animate={{ opacity: [0.05, 0.12, 0.05] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          <FloatingParticles />
        </div>

        {/* Carousel */}
        <div className="relative z-10 px-3 pt-5 pb-4 md:px-10 md:pt-8 md:pb-6">
          <div className="relative group max-w-7xl mx-auto">
            <Carousel
              opts={{ loop: true }}
              plugins={[autoplayRef.current]}
              setApi={handleSetApi}
              className="w-full"
            >
              <CarouselContent className="-ml-0">
                {CAROUSEL_IMAGES.map((src, i) => (
                  <CarouselItem key={i} className="pl-0 basis-full">
                    <motion.div
                      className="relative w-full aspect-[16/6] sm:aspect-[16/4.5] lg:aspect-[16/5]"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <SafeImage
                        src={src}
                        alt={`Offer banner ${i + 1}`}
                        fill
                        className="object-fill rounded-2xl"
                        priority={i === 0}
                      />
                      {/* Subtle vignette */}
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                lucideIcon="ChevronLeft"
                className="left-4 h-11 w-11 bg-white/10 hover:bg-white/25 border-0 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:flex"
              />
              <CarouselNext
                lucideIcon="ChevronRight"
                className="right-4 h-11 w-11 bg-white/10 hover:bg-white/25 border-0 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:flex"
              />
            </Carousel>

            {/* Progress dots */}
            <div className="flex justify-center gap-1.5 mt-3">
              {CAROUSEL_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => carouselApi?.scrollTo(i)}
                  className="h-1 rounded-full transition-all duration-500"
                  style={{
                    width: currentSlide === i ? "1.8rem" : "0.35rem",
                    background:
                      currentSlide === i ? "#3B82F6" : "rgba(255,255,255,0.25)"
                  }}
                />
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <motion.div
            className="max-w-5xl mx-auto mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2.5 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-lg">
                  <DynamicIcon
                    name={s.icon as any}
                    className="size-3.5 text-blue-400"
                  />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 leading-none">
                    {s.label}
                  </p>
                  <p className="text-xs font-bold text-white mt-0.5">
                    {s.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade into page bg */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-[#f0f2f8] pointer-events-none" />
      </section>

      {/* ── Filters + Grid ── */}
      <div className="max-w-6xl mx-auto px-4 space-y-2">
        {/* Filter card */}
        <motion.div
          className="pb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {/* Search */}
          {/* <div className="relative w-full">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              <DynamicIcon name="Search" className="size-4" />
            </span>
            <input
              type="text"
              placeholder="Search partners…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full h-10 rounded-xl border border-slate-100 bg-slate-50 pl-10 pr-9 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-300 transition-all duration-300 outline-none"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <DynamicIcon name="X" className="size-3.5" />
              </button>
            )}
          </div> */}

          {/* Tabs */}
          <div className="flex items-center gap-2 mt-4 bg-slate-100 rounded-xl p-1.5 w-full sm:w-fit">
            {(
              [
                { id: "All", icon: "LayoutGrid" },
                { id: "Categories", icon: "Tag" },
                { id: "Tiers", icon: "Zap" }
              ] as const
            ).map(({ id: tab, icon }) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab === "All") {
                    setActiveCategory("All");
                    setActiveTier("All");
                  }
                }}
                className={`
        flex-1 sm:flex-initial
        flex items-center gap-1.5
        px-4 py-2.5 sm:px-5 sm:py-2
        rounded-lg
        text-sm sm:text-base
        font-semibold
        transition-all duration-200
        cursor-pointer
        ${activeTab === tab
                    ? "bg-white shadow-sm border border-transparent"
                    : "bg-white text-slate-600 "
                  }
      `}
                style={
                  activeTab === tab
                    ? { color: "var(--primary-btn-color)" }
                    : undefined
                }
              >
                <DynamicIcon name={icon} className="size-3.5 shrink-0" />
                {tab}
              </button>
            ))}
          </div>

          {/* Pills for active tab */}
          {activeTab !== "All" && (
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar mt-2.5">
              <AnimatePresence mode="wait">
                {activeTab === "Tiers" ? (
                  <motion.div
                    key="tiers"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-1.5"
                  >
                    {tiers.map(tier => (
                      <button
                        key={tier}
                        onClick={() => setActiveTier(tier)}
                        className={`${FILTER_PILL} shrink-0 ${activeTier === tier ? FILTER_ACTIVE_BG : FILTER_IDLE}`}
                        style={
                          activeTier === tier ? FILTER_ACTIVE_STYLE : undefined
                        }
                      >
                        {tier === "All" ? "All Tiers" : `${tier} Points`}
                      </button>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="categories"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-1.5"
                  >
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`${FILTER_PILL} shrink-0 ${activeCategory === cat ? FILTER_ACTIVE_BG : FILTER_IDLE}`}
                        style={
                          activeCategory === cat
                            ? FILTER_ACTIVE_STYLE
                            : undefined
                        }
                      >
                        {cat}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>

        {/* Partners Grid */}
        {filtered.length === 0 ? (
          <motion.div
            className="flex flex-col items-center justify-center py-24 gap-3 bg-white rounded-2xl border border-slate-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="p-4 bg-slate-50 rounded-full text-slate-300">
              <DynamicIcon name="SearchX" className="size-8" />
            </div>
            <p className="text-sm font-semibold text-slate-700">
              No results found
            </p>
            <p className="text-xs text-slate-400">
              Try adjusting your filters.
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((partner, i) => (
                <motion.div
                  key={partner.seed}
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <PartnerLogoCard
                    name={partner.name}
                    cat={partner.cat}
                    tier={partner.tier}
                    imagePath={partner.imagePath ?? null}
                    logoPath={partner.logoPath ?? null}
                    url={partner.url}
                    variant={variant}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
        <div className="mb-6"></div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <CachePage />
    </Suspense>
  );
}
