import { useEffect } from "react";
import { useLocation } from "wouter";
import { getPageSeo, type PageSeo } from "@/lib/seo";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Keeps <title>, meta description, canonical URL, Open Graph / Twitter tags
 * and per-page JSON-LD in sync with the current route. Call once from Layout.
 */
export function useSeo() {
  const [location] = useLocation();

  useEffect(() => {
    const seo: PageSeo = getPageSeo(location);

    document.title = seo.title;
    upsertMeta("name", "description", seo.description);
    upsertCanonical(seo.canonical);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "Brown Fish Technologies");
    upsertMeta("property", "og:url", seo.canonical);
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:image", "https://brownfishtech.com/opengraph.jpg");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:url", seo.canonical);
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", "https://brownfishtech.com/opengraph.jpg");

    const prev = document.head.querySelector("script[data-seo-jsonld]");
    if (prev) prev.remove();
    if (seo.jsonLd) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-seo-jsonld", "true");
      s.textContent = JSON.stringify(seo.jsonLd);
      document.head.appendChild(s);
    }
  }, [location]);
}
