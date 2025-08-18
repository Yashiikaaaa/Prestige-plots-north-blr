import { useCallback } from "react";
import ReactGA from "react-ga4";

// Utility: Get UTM params from current URL
const getUTMParams = () => {
  if (typeof window === "undefined") return {};
  const urlParams = new URLSearchParams(window.location.search);

  return {
    utm_source: urlParams.get("utm_source") || null,
    utm_medium: urlParams.get("utm_medium") || null,
    utm_campaign: urlParams.get("utm_campaign") || null,
    utm_term: urlParams.get("utm_term") || null,
    utm_content: urlParams.get("utm_content") || null,
  };
};

export const useLeadTracking = () => {
  const utmParams = getUTMParams();

  const trackButtonClick = useCallback(
    (source, action, label, propertyType = null) => {
      ReactGA.gtag("event", action, {
        event_category: "Button Click",
        event_label: `${source}${propertyType ? ` - ${propertyType}` : ""}`,
        lead_source: source,
        property_type: propertyType,
        funnel_stage: "interest",
        ...utmParams,
      });
    },
    [utmParams]
  );

  const trackFormSubmission = useCallback(
    (source, formType, propertyType = null) => {
      ReactGA.gtag("event", `${formType}_submit`, {
        event_category: "Form Submission",
        event_label: `${source}${propertyType ? ` - ${propertyType}` : ""}`,
        lead_source: source,
        property_type: propertyType,
        funnel_stage:
          formType === "contact_form" ? "lead" : "site_visit_request",
        ...utmParams,
      });
    },
    [utmParams]
  );

  const trackFormOpen = useCallback(
    (source, formType, propertyType = null) => {
      const normalize = (str) =>
        (str || "")
          .toLowerCase()
          .replace(/[_\s]+/g, "")
          .trim();

      ReactGA.gtag("event", `${formType}_opened`, {
        event_category: "Form Interaction",
        event_label:
          propertyType && !normalize(source).includes(normalize(propertyType))
            ? `${source} - ${propertyType}`
            : source,
        lead_source: source,
        property_type: propertyType,
        funnel_stage: "consideration",
        ...utmParams,
      });
    },
    [utmParams]
  );

  return {
    trackButtonClick,
    trackFormSubmission,
    trackFormOpen,
  };
};

// Lead source constants
export const LEAD_SOURCES = {
  HERO: "hero_banner",
  OVERVIEW: "overview_section",
  PRICING_sqft2400: "pricing_2400_sq.ft",
  PRICING_sqft4000: "pricing_4000_sq.ft",
  MASTER_PLAN: "master_plan_section",
  FOOTER: "footer_section",
  CONTACT_FORM_LINK: "contact_form_internal_link",
  UNKNOWN: "unknown_source",
};

// Property types
export const PROPERTY_TYPES = {
  sqft2400: "2400 sq.ft",
  sqft4000: "4000 sq.ft",
};
