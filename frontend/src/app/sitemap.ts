import { categories } from "@/data/services";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://repukeel.com"; // Replace with real domain if needed
  const entries: MetadataRoute.Sitemap = [];
  
  categories.forEach((category) => {
    entries.push({ url: `${baseUrl}/${category.slug}` });
    category.subServices.forEach((service) => {
      entries.push({ url: `${baseUrl}/${category.slug}/${service.slug}` });
    });
  });
  
  return entries;
}
