import type { MetadataRoute } from "next";
import { blogIndex } from "@/data/blogPosts";
import { seoPages } from "@/data/seoPages";
import { absoluteUrl, DEFAULT_LAST_MODIFIED } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/blog"];
  const seoRoutes = Object.values(seoPages).map((page) => `/${page.slug}`);
  const blogRoutes = blogIndex.map((post) => ({
    route: `/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const evergreenRoutes = [...staticRoutes, ...seoRoutes].map((route) => ({
    route,
    lastModified: new Date(DEFAULT_LAST_MODIFIED),
  }));

  return [...evergreenRoutes, ...blogRoutes].map(({ route, lastModified }) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/blog") ? 0.7 : 0.85,
  }));
}
