"use client";

import { airIndiaFont } from "../airIndiaFont";
import {
  AI_BORDER,
  AI_COPYRIGHT,
  AI_CREAM,
  AI_LINK,
  AI_PURPLE,
  AI_ROUNDEL,
  APP_LINKS,
  FOOTER_COLUMNS,
  getCopyrightLines,
  LEGAL_COLUMNS,
  SOCIAL_LINKS,
  STAR_ALLIANCE,
  TATA_LOGO,
  TRANSLATION_DISCLAIMER
} from "./data";

// Real airindia.com footer (.ai-footer): cream background, purple column
// headings, slate link text, dashed section dividers.
export function AirIndiaFooter() {
  const year = new Date().getFullYear();
  const row1 = FOOTER_COLUMNS.slice(0, 4);
  const row2 = FOOTER_COLUMNS.slice(4);

  return (
    <footer className={`${airIndiaFont.className} w-full`} style={{ backgroundColor: AI_CREAM }}>
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        {/* Link columns */}
        <div
          className="grid grid-cols-2 gap-x-6 gap-y-8 pb-8 md:grid-cols-4"
          style={{ borderBottom: `0.6px dashed ${AI_BORDER}` }}
        >
          {[...row1, ...row2].map(col => (
            <div key={col.title}>
              <h3 className="mb-2.5 text-xs font-normal" style={{ color: AI_PURPLE }}>
                {col.title.toUpperCase()}
              </h3>
              <ul className="flex flex-col">
                {col.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-1 text-sm hover:underline hover:text-black"
                      style={{ color: AI_LINK }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-2.5 text-xs font-normal" style={{ color: AI_PURPLE }}>
              AIR INDIA APP
            </h3>
            <p className="mb-3 text-sm" style={{ color: AI_LINK }}>
              Download the app to book and manage your flights on the go.
            </p>
            <div className="flex items-center gap-2">
              <a href={APP_LINKS.appStore} target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={APP_LINKS.appStoreBadge} alt="appstore" className="h-10 w-auto" />
              </a>
              <a href={APP_LINKS.googlePlay} target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={APP_LINKS.googlePlayBadge} alt="googleplay" className="h-10 w-auto" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal links + social column */}
        <div
          className="flex flex-col gap-8 py-8 md:flex-row md:justify-between"
          style={{ borderBottom: `0.6px dashed ${AI_BORDER}` }}
        >
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-3">
            {LEGAL_COLUMNS.map((col, idx) => (
              <ul key={idx} className="flex flex-col">
                {col.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.target ?? "_blank"}
                      rel="noopener noreferrer"
                      className="inline-block py-1 text-sm hover:underline hover:text-black"
                      style={{ color: AI_LINK }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <h3 className="text-xs font-normal uppercase" style={{ color: AI_PURPLE }}>
              Follow Us On
            </h3>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(social => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={social.icon} alt={social.label} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Translation disclaimer */}
        <p className="pt-6 text-xs" style={{ color: AI_COPYRIGHT }}>
          {TRANSLATION_DISCLAIMER}
        </p>

        {/* Tata / AI roundel / Star Alliance icons */}
        <div
          className="flex items-center justify-between py-8"
          style={{ borderBottom: `0.6px dashed ${AI_BORDER}` }}
        >
          <a href={TATA_LOGO.href} target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={TATA_LOGO.img} alt="tata" className="h-8 w-auto" />
          </a>
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={AI_ROUNDEL} alt="airindia-logo" className="h-7 w-auto" />
            <div className="h-5 w-px bg-neutral-300" />
            <a href={STAR_ALLIANCE.href} target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={STAR_ALLIANCE.img} alt="star alliance" className="h-7 w-auto" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs font-semibold" style={{ color: AI_COPYRIGHT }}>
          {getCopyrightLines(year).map(line => (
            <p key={line} className="m-0">{line}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default AirIndiaFooter;
