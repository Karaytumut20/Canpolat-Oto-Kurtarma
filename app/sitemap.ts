import type { MetadataRoute } from "next";
import { serviceAreas } from "@/lib/service-areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://canpolatotokurtarma.com";
  return [{ url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }, ...serviceAreas.map(area => ({ url: `${base}/bolgeler/${area.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: area.type === "mahalle" ? .8 : .7 }))];
}
