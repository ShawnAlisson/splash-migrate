"use client";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import React, { useState } from "react";

const AnalayticsComponenet = () => {
  const [hasConsent] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("gdpr-consent") === "true";
  });
  return (
    <>
      {hasConsent && (
        <>
          <GoogleTagManager gtmId="GTM-MM4DSX4G" />
          {/* <GoogleAnalytics gaId="G-DB6BQ8XF0V" /> */}
        </>
      )}
    </>
  );
};

export default AnalayticsComponenet;
