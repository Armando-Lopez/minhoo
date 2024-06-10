"use client";

import { useReportWebVitals } from "next/web-vitals";
import { useState } from "react";

export function WebVitals() {
  const [metrics, setMetrics] = useState({})
  useReportWebVitals((metric) => {
    setMetrics(metric)
  });
  return (
    <div className="fixed z-50 w-80 h-52 bottom-4 right-4 bg-black-1/50 rounded-lg shadow">
      <div></div>
    </div>
  );
}
