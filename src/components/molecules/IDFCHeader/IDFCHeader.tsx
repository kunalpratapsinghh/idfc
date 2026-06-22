"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";

const LOGO_URL =
  "https://d3fin6m3yk3m30.cloudfront.net/string111/img/93fed9e3-b7fa-425f-b01c-ec000461053e_IDFC First Logo.svg";

const MODAL_BANNER =
  "https://d3fin6m3yk3m30.cloudfront.net/string111/img/6505f5c5-86d1-44be-8180-b82fc1e18659_login banner desktop.webp";

// Exact nav structure from firstrewards.in (all <a> tags, relative icon paths)
const NAV_ITEMS = [
  {
    label: "Travel",
    icon: "/headerImages/Travel.png",
    dataUrl: "https://sso.ai-loyalty.com/Login/PR98-KH890-KJODLK9-IDF87K7C-D20240530T",
    openModal: true,
    href: "/"
  },
  {
    label: "Shopping",
    icon: "/headerImages/Shopping.png",
    dataUrl: "https://sso.ai-loyalty.com/Login/SHOPCC-HGT67-KJHUY89-IDF87K7C-IDFC20240708",
    openModal: true,
    href: "/"
  },
  {
    label: "Gift Cards",
    icon: "/headerImages/Gift Cards.png",
    dataUrl:
      "https://sso.ai-loyalty.com/Login/SHOPCC-HGT67-KJHUY89-IDF87K7C-IDFC20240708/List/Z2lmdC1jYXJkcy1jZC03ODI=",
    openModal: true,
    href: "/"
  },
  {
    label: "Offers",
    icon: "/headerImages/Offers.png",
    dataUrl: "/deal",
    openModal: false,
    href: "https://firstrewards.in/deal?category=all"
  }
];



function LoginModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="idfc-modal-overlay" onClick={onClose}>
      <div className="download-modal" onClick={e => e.stopPropagation()}>
        <div className="cursor-pointer relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-full" alt="not-found" src={MODAL_BANNER} />
          <button
            className="modal-close-btn"
            aria-label="Close modal"
            onClick={onClose}
          >
            <X size={28} strokeWidth={3} className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}

const GET_APP_BANNER =
  "https://d3fin6m3yk3m30.cloudfront.net/string111/img/7febc4cd-4541-4d1f-957a-95f06a7251a2_Non Login banner.svg";

const DOWNLOAD_URL = "https://my.idfcfirst.bank.in/";

const SMALL_LOGO =
  "https://d3fin6m3yk3m30.cloudfront.net/string111/img/4f21f301-7dae-47ff-a6a5-afcafc0e2907_ifdcSmallLogo.svg";

function GetAppModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="get-app-overlay" onClick={onClose}>
      <div className="get-app-modal" onClick={e => e.stopPropagation()}>
        <div
          className="relative cursor-pointer"
          onClick={() => window.open(DOWNLOAD_URL, "_blank")}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={GET_APP_BANNER}
            alt="Get App"
            className="block h-auto w-full"
          />
          <X
            size={28}
            strokeWidth={3}
            className="absolute right-4 top-3 cursor-pointer text-black"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function IDFCHeader() {
  const [showModal, setShowModal] = useState(false);
  const [showGetAppModal, setShowGetAppModal] = useState(false);
  const [mobileBannerVisible, setMobileBannerVisible] = useState(true);

  const openModal = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  }, []);
  const closeModal = useCallback(() => setShowModal(false), []);

  return (
    <>
      {showGetAppModal && <GetAppModal onClose={() => setShowGetAppModal(false)} />}
      {showModal && <LoginModal onClose={closeModal} />}

      {/* ── Desktop header — exact HTML match of firstrewards.in ── */}
      <header className="bg-white p-3 flex justify-between items-center shadow mb-1 idfc-header-sticky hidden md:flex">
        <div className="flex items-center space-x-4">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Logo" className="h-8 w-auto ml-6" src={LOGO_URL} />
          </Link>
        </div>

        {/* Exact nav structure from firstrewards.in */}
        <nav className="flex items-center space-x-6">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={idx}
              data-url={item.dataUrl}
              className="nav-item flex items-center space-x-2"
              href={item.href}
              onClick={item.openModal ? openModal : undefined}
              target={!item.openModal ? "_blank" : undefined}
              rel={!item.openModal ? "noopener noreferrer" : undefined}
            >
              <span className="h-5 w-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={item.label} src={item.icon} />
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div>
          <button
            className="login-ft px-4 py-2 mr-8"
            aria-label="Login"
            onClick={() => setShowModal(true)}
          >
            Login
          </button>
        </div>
      </header>

      {/* ── Mobile app-promo banner (dismissible) ── */}
      {mobileBannerVisible && (
        <div className="flex items-center justify-between bg-white p-4 rounded-md md:hidden">
          <div className="flex items-center gap-4">
            <button
              className="cross-btn"
              aria-label="Dismiss banner"
              onClick={() => setMobileBannerVisible(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="IDFC Logo" className="h-10 w-10" src={SMALL_LOGO} />
              <div>
                <div><strong style={{ fontSize: "14px" }}>IDFC FIRST Bank</strong></div>
                <div><span style={{ color: "rgb(153, 153, 153)" }}>Mobile Banking</span></div>
              </div>
            </div>
          </div>
          <div>
            <button className="get-app-box px-4 py-3" onClick={() => setShowGetAppModal(true)}>Get the app</button>
          </div>
        </div>
      )}

    </>
  );
}

export default IDFCHeader;
