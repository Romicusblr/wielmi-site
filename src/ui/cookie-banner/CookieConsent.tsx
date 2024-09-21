"use client";

import React, { useEffect, useState } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";
import pluginConfig from "./CookieConsentConfig";
import { GoogleAnalytics } from "@next/third-parties/google";

const CookieConsentComponent = () => {
  const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "";
  const [isAnalyticsAllowed, setIsAnalyticsAllowed] = useState(false);

  const handleConsent =
    (action: string) =>
    ({ cookie }: { cookie: CookieConsent.CookieValue }) => {
      console.log(action, cookie);
      if (CookieConsent.acceptedCategory("analytics")) {
        setIsAnalyticsAllowed(true);
      } else {
        setIsAnalyticsAllowed(false);
      }
    };

  useEffect(() => {
    CookieConsent.run({
      ...pluginConfig,
      onConsent: handleConsent("onConsent"),
      onChange: handleConsent("onChange"),
      onFirstConsent: handleConsent("onFirstConsent"),
    });
  }, []);

  return gaId && isAnalyticsAllowed && <GoogleAnalytics gaId={gaId} />;
};

export default CookieConsentComponent;
