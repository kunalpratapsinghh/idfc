"use client";

import { ChevronDown, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { AI_FONT_BRAND, AI_FONT_NAV, airIndiaFont } from "../airIndiaFont";
import {
  AIBIZ_LINK,
  AIBIZ_LOGO,
  AI_BLACK,
  AI_RED,
  AI_UNDERLINE_RED,
  LOGO_RED,
  NAV_ITEMS,
  SIGN_UP_URL,
  SUPPORT_LINKS,
  TARIFF_LINK
} from "./data";

const TARIFF_ICON = "/airindia/tariff-icon.svg";
const SUPPORT_ICON = "/airindia/support-icon.svg";
const SEARCH_ICON = "/airindia/search-icon.svg";
const GLOBE_ICON = "/airindia/globe-icon.svg";

function SignInModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className={`${airIndiaFont.className} fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4`}
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-lg bg-white p-6"
        onClick={e => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold" style={{ color: AI_BLACK }}>
            Sign In
          </h2>
          <button aria-label="Close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <p className="mb-4 text-sm text-neutral-500">
          Sign in to your Maharaja Club account to manage bookings and earn points.
        </p>
        <div className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email or Membership ID"
            className="rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none"
          />
          <button
            className="rounded-full px-4 py-2 text-sm font-semibold text-white"
            style={{ backgroundColor: AI_RED }}
          >
            Sign In
          </button>
          <a
            href={SIGN_UP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-sm font-semibold"
            style={{ color: AI_RED }}
          >
            New to Maharaja Club? Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export function AirIndiaHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [supportOpen, setSupportOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [showSignIn, setShowSignIn] = useState(false);

  const activeNavItem = NAV_ITEMS.find(item => item.label === openMenu);

  return (
    <>
      {showSignIn && <SignInModal onClose={() => setShowSignIn(false)} />}

      <header
        className={`${airIndiaFont.className} relative z-40 w-full bg-white ${
          openMenu ? "border-b border-neutral-200" : ""
        }`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
          {/* item-left: hamburger (mobile) + logo */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Main Menu"
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={24} color={AI_BLACK} />
            </button>
            <a href="https://www.airindia.com/" target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO_RED} alt="airindia" className="h-9 w-auto md:h-10" />
            </a>
          </div>

          {/* item-center: utility row (top) + main mega-menu nav (bottom), desktop only */}
          <div className="hidden flex-1 flex-col items-end gap-2.5 lg:flex">
            {/* utility row */}
            <div className="flex items-center gap-4">
              <a
                href={TARIFF_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 whitespace-nowrap text-[11px] font-medium text-neutral-700 hover:text-[#DA0E29]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={TARIFF_ICON} alt="Tariff" className="h-3.5 w-3.5" />
                Tariff
              </a>

              <a href={AIBIZ_LINK} target="_blank" rel="noopener noreferrer" aria-label="AI Biz">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={AIBIZ_LOGO} alt="aibiz" className="h-4 w-auto" />
              </a>

              <div
                className="relative"
                onMouseEnter={() => setSupportOpen(true)}
                onMouseLeave={() => setSupportOpen(false)}
              >
                <button className="flex items-center gap-1 whitespace-nowrap text-[11px] font-medium text-neutral-700 hover:text-[#DA0E29]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={SUPPORT_ICON} alt="Support" className="h-3.5 w-3.5" />
                  Support
                </button>
                {supportOpen && (
                  <ul className="absolute right-0 top-full z-50 min-w-[150px] rounded-md border border-neutral-100 bg-white py-2 shadow-xl">
                    {SUPPORT_LINKS.map(link => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-1.5 text-sm text-neutral-700 hover:text-[#DA0E29]"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                aria-label="Search"
                className="flex items-center gap-1 whitespace-nowrap text-[11px] font-medium text-neutral-700 hover:text-[#DA0E29]"
                onClick={() => setSearchOpen(v => !v)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={SEARCH_ICON} alt="Search" className="h-3.5 w-3.5" />
                Search
              </button>

              <button
                aria-label="Country"
                className="flex items-center gap-0.5 whitespace-nowrap text-[11px] font-medium text-neutral-700"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={GLOBE_ICON} alt="Country" className="h-3.5 w-3.5" />
                IN
                <ChevronDown size={11} />
              </button>

              <div className="h-4 w-px bg-neutral-300" />

              <a
                href={SIGN_UP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap rounded-md border px-3 py-1 text-[11px] uppercase"
                style={{ borderColor: AI_RED, color: AI_RED, fontFamily: AI_FONT_NAV, fontWeight: 600, letterSpacing: "0.12px" }}
              >
                Sign Up
              </a>
              <button
                className="whitespace-nowrap rounded-md px-3 py-1 text-[11px] uppercase text-white"
                style={{ backgroundImage: `linear-gradient(135deg, ${AI_RED}, #BE1E24)`, fontFamily: AI_FONT_NAV, fontWeight: 600, letterSpacing: "0.12px" }}
                onClick={() => setShowSignIn(true)}
              >
                Sign In
              </button>
            </div>

            {/* main mega-menu nav */}
            <nav className="flex items-center gap-7">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.label}
                  className="flex flex-col items-center gap-1 whitespace-nowrap py-1 text-[13px] uppercase tracking-tight"
                  style={{ color: AI_BLACK, fontFamily: AI_FONT_NAV, fontWeight: 500, letterSpacing: "0.12px" }}
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                >
                  {item.label}
                  <span
                    className="block h-[3px] w-0 transition-all duration-300"
                    style={{
                      backgroundColor: AI_UNDERLINE_RED,
                      width: openMenu === item.label ? "100%" : "0%"
                    }}
                  />
                </button>
              ))}
            </nav>
          </div>
        </div>

        {activeNavItem && (
          <div className="absolute left-0 top-full z-50 w-full bg-white shadow-[0_10px_10px_rgba(0,0,0,0.16)]">
            <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
              <div className="flex gap-12">
                {activeNavItem.columns.map((col, idx) => (
                  <div key={idx} className="min-w-[200px]">
                    {col.title && (
                      <a
                        href={col.titleHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-3 block text-[13px] uppercase text-black hover:underline"
                        style={{ fontFamily: AI_FONT_NAV, fontWeight: 600, letterSpacing: "0.16px" }}
                      >
                        {col.title}
                      </a>
                    )}
                    <ul className="flex flex-col">
                      {col.links.map(link => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            target={link.target ?? "_blank"}
                            rel="noopener noreferrer"
                            className="-mx-1 block whitespace-nowrap rounded px-1 py-2.5 text-sm text-black hover:bg-[#F9F6EE] hover:underline"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {activeNavItem.imageTiles && activeNavItem.imageTiles.length > 0 && (
                  <div className="ml-auto flex gap-4">
                    {activeNavItem.imageTiles.map(tile => (
                      <a
                        key={tile.label}
                        href={tile.href}
                        target={tile.target ?? "_blank"}
                        rel="noopener noreferrer"
                        className="block w-48 shrink-0 overflow-hidden rounded-lg"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={tile.img}
                          alt={tile.label}
                          className="aspect-[580/522] w-full object-cover"
                        />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {searchOpen && (
          <div className="border-t border-neutral-100 bg-white px-4 py-3 lg:px-6">
            <div className="mx-auto flex max-w-xl items-center gap-2 rounded-full border border-neutral-200 px-4 py-2">
              <Search size={16} className="text-neutral-400" />
              <input
                autoFocus
                placeholder="Search airindia.com"
                className="w-full text-sm outline-none"
              />
            </div>
          </div>
        )}

      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className={`${airIndiaFont.className} fixed inset-0 z-50 flex lg:hidden`}>
          <div className="flex h-full w-80 max-w-[85vw] flex-col overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
              <span className="text-sm font-bold" style={{ color: AI_BLACK }}>
                Main Menu
              </span>
              <button aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col px-2 py-2">
              {NAV_ITEMS.map(item => (
                <div key={item.label} className="border-b border-neutral-50">
                  <button
                    className="flex w-full items-center justify-between px-3 py-3 text-sm font-semibold"
                    style={{ color: AI_BLACK }}
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={mobileExpanded === item.label ? "rotate-180" : ""}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="flex flex-col gap-2 px-5 pb-3">
                      {item.columns.flatMap(col => col.links).map(link => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-neutral-600"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="border-b border-neutral-50">
                <button
                  className="flex w-full items-center justify-between px-3 py-3 text-sm font-semibold"
                  style={{ color: AI_BLACK }}
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === "Support" ? null : "Support")
                  }
                >
                  Support
                  <ChevronDown
                    size={16}
                    className={mobileExpanded === "Support" ? "rotate-180" : ""}
                  />
                </button>
                {mobileExpanded === "Support" && (
                  <div className="flex flex-col gap-2 px-5 pb-3">
                    {SUPPORT_LINKS.map(link => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-neutral-600"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-auto flex gap-3 border-t border-neutral-100 p-4">
              <a
                href={SIGN_UP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full border px-4 py-2 text-center text-sm font-semibold"
                style={{ borderColor: AI_RED, color: AI_RED }}
              >
                Sign up
              </a>
              <button
                className="flex-1 rounded-full px-4 py-2 text-center text-sm font-semibold text-white"
                style={{ backgroundColor: AI_RED }}
                onClick={() => {
                  setMobileOpen(false);
                  setShowSignIn(true);
                }}
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="flex-1 bg-black/40" onClick={() => setMobileOpen(false)} />
        </div>
      )}
    </>
  );
}

export default AirIndiaHeader;
