import TRPCProvider from "@/app/_trpc/Provider";
import SmoothScrollManager from "@/components/atoms/scroller";
import { AirIndiaFooter, AirIndiaHeader } from "@/components/molecules";
import { CARDBYPATH, CARDTYPE, ThemeTypes } from "@/config";
import { DisclaimerProvider } from "@/context";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { capitalizeFirstLetter, getBrand } from "@/lib/utils";
import { CheckCsrfResponse } from "@/server/schemas/auth/auth";
import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cookies as nextCookies, headers as nextHeaders } from "next/headers";
import React from "react";
import csrfData from "../assets/data/csrfDataLocal.json";
import data from "../assets/data/headerFooterresponse.json";
import Error from "../components/atoms/error";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Air India: Book Domestic & International Non-Stop Direct Flights",
  description:
    "Air India platform that solely displays offers extended by Merchants to Air India Customers. Air India is not responsible for selling/rendering any of the listed Products/Services. Air India does not act as an express or implied agent of the listed Merchants/owners of the following vis-a-vis the Customers.",
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const headers = await nextHeaders();
  const cookies = await nextCookies();
  const cookieCardType: CARDTYPE = cookies.get("theme")?.value as CARDTYPE;
  const paramCardType = headers.get("card-type-param") as string;

  const parsed = JSON.parse(csrfData.response.data);

  const customerInfo: CheckCsrfResponse = parsed;
  const isLoggedIn = customerInfo?.org_session === 1;
  const parsedCard = customerInfo?.ccustomer ||
    customerInfo?.ccustomer_d || {
    last4digit: "",
    points_available: 0,
    cardType: undefined
  };
  const {
    layout,
    theme,
    path = ""
  } = getBrand(
    CARDBYPATH[paramCardType],
    parsedCard,
    cookieCardType,
    customerInfo
  ) || {};
  const resolvedProgramPath = CARDBYPATH[path] || "default";

  let user = null;
  if (isLoggedIn) {
    user = {
      id: customerInfo.customer_id,
      customerInfo,
      name: (
        capitalizeFirstLetter(customerInfo.firstname) +
        " " +
        capitalizeFirstLetter(customerInfo.lastname + "")
      ).trim(),
      obopUUID: customerInfo.uuid,
      title: customerInfo.title,
      selectedCard: parsedCard,
      customerCards: customerInfo.customerCards || [],
      loginId: customerInfo.loginId
    };
  }

  if (path !== "") {
    delete metadata.title;
    delete metadata.manifest;
    metadata.manifest = `${process.env.NEXT_PUBLIC_MANIFEST_URL_PATH}${path}.json?v=${path}`;
  }
  metadata.title = "Air India: Book Domestic & International Non-Stop Direct Flights";

  const { header, footer, disclaimers, error } = data
  if (error) {
    return (
      <html
        suppressHydrationWarning
        lang="en"
        style={{ colorScheme: theme }}
        className={inter.variable}
      >
        <body
          suppressHydrationWarning
          className={`antialiased theme-${theme} light`}
        >
          <Error />
        </body>
      </html>
    );
  }

  return (
    <html
      suppressHydrationWarning
      lang="en"
      style={{ colorScheme: theme }}
      className={inter.variable}
    >
      <head>
        <meta name="theme-color" content="#0f326a" />
        <link rel="preconnect" href="https://fonts.airindia.com" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.airindia.com/fonts/AirIndiaVariable/AirIndiaVariable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.airindia.com/fonts/NunitoSans/NunitoSans10pt-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.airindia.com/fonts/NunitoSans/NunitoSans10pt-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.airindia.com/fonts/NunitoSans/NunitoSans10pt-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>

      <AuthProvider
        loggedInUser={user}
        programName={resolvedProgramPath}
        layout={layout}
        customerInfo={customerInfo}
      >
        <ThemeProvider
          initialBrand={theme as ThemeTypes}
          cardType={resolvedProgramPath}
        >
          <body
            suppressHydrationWarning
            className={`antialiased theme-${theme} light`}
          >
            <DisclaimerProvider disclaimers={disclaimers}>
              <TRPCProvider>
                <SmoothScrollManager />
                <AirIndiaHeader />
                {children}
                <AirIndiaFooter />
              </TRPCProvider>
            </DisclaimerProvider>
          </body>
        </ThemeProvider>
      </AuthProvider>
    </html>
  );
}
