import NewsPostsList from "@/modules/news/components/NewsPostsList";
import { redirect } from "next/navigation";
import React from "react";

export default function NewsPage() {
  redirect("/newsletter");
  return (
    <div className="py-6 px-12">
      <NewsPostsList />
    </div>
  );
}
