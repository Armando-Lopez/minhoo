"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals(() => {
    // console.table([metric.name, metric.value, metric.rating]);
  });
  return null;
}
