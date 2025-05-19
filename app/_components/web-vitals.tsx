"use client";

import { useReportWebVitals } from "next/web-vitals";

export default function WebVitals() {
  useReportWebVitals((metric) => {
    const body = JSON.stringify(metric);
    const url = "/api/web-vitals";

    switch (metric.name) {
      case "FCP":
        console.log("FCP", metric.value);
        break;
      case "LCP":
        console.log("LCP", metric.value);
        break;
      case "TTFB":
        console.log("TTFB", metric.value);
        break;
      case "FID":
        console.log("FID", metric.value);
        break;
      case "CLS":
        console.log("CLS", metric.value);
        break;
      case "INP":
        console.log("INP", metric.value);
        break;
      default:
        console.log(metric);
    }

    navigator.sendBeacon(url, body);
  });

  return null;
}
