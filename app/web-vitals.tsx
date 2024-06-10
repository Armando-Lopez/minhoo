"use client";

import { useReportWebVitals } from "next/web-vitals";
import { useRef } from "react";

export function WebVitals() {
  const metrics = useRef<any[]>([]);

  useReportWebVitals((metric) => {
    metrics.current.push(metric);

    // setMetrics(metric)
  });
  console.log(metrics);
  return (
    <div className="fixed z-50 w-80 h-52 bottom-4 right-4 bg-black-1/50 rounded-lg shadow">
      <div>{/* {metrics.current.value} */}</div>
    </div>
  );
}
