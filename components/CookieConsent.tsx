// components/CookieConsent.js
"use client";
import { useEffect, useState } from "react";

const EU_COUNTRIES = [
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
  "GB",
  "NO",
  "IS",
  "LI",
  "CH",
]; // List of EU & EEA countries

const CookieConsent = () => {
  const [isConsentGiven, setIsConsentGiven] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const consent = localStorage.getItem("gdpr-consent");
    return consent === "true" || consent === "false";
  });
  const [isEUUser, setIsEUUser] = useState(false);

  useEffect(() => {
    const checkUserLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const countryCode = data.country_code;
        setIsEUUser(EU_COUNTRIES.includes(countryCode));
      } catch (error) {
        console.error("Error fetching geolocation data", error);
        setIsEUUser(false);
      }
    };

    const consent = localStorage.getItem("gdpr-consent");
    if (!consent) {
      checkUserLocation();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdpr-consent", "true");
    setIsConsentGiven(true);
  };

  const handleReject = () => {
    localStorage.setItem("gdpr-consent", "false");
    setIsConsentGiven(true);
  };

  if (!isEUUser) return null;
  if (isConsentGiven) return null;

  return (
    <div className="fixed m-8 rounded-xl bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center justify-between shadow-lg z-50 gap-3 md:gap-0">
      <p className="text-sm md:text-base text-center md:text-left">
        We use cookies to enhance your experience. By continuing to visit this
        site, you agree to our use of cookies.
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleReject}
          className="bg-gray-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Reject
        </button>
        <button
          onClick={handleAccept}
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
