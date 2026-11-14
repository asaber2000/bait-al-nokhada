import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/Admin/", "/api/"],
      },
      {
        userAgent: [
          "OAI-SearchBot",
          "OAI-AdsBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
        ],
        allow: "/",
        disallow: ["/Admin/", "/api/"],
      },
    ],
    sitemap: "https://baitalnokhada.com/sitemap.xml",
  };
}