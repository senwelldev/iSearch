import React from "react";

const Sitemap = () => {
  const sitemapUrls = [
    { loc: "http://isearch.co.in/", changefreq: "daily", priority: 1.0 },
    {
      loc: "http://isearch.co.in/aboutus",
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      loc: "http://isearch.co.in/services",
      changefreq: "weekly",
      priority: 0.8,
    },
    { loc: "http://isearch.co.in/blog", changefreq: "daily", priority: 0.6 },
    {
      loc: "http://isearch.co.in/blog/blog1",
      changefreq: "weekly",
      priority: 0.5,
    },
    {
      loc: "http://isearch.co.in/blog/blog2",
      changefreq: "weekly",
      priority: 0.5,
    },
    {
      loc: "http://isearch.co.in/blog/blog3",
      changefreq: "weekly",
      priority: 0.5,
    },
    {
      loc: "http://isearch.co.in/career",
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      loc: "http://isearch.co.in/contactus",
      changefreq: "weekly",
      priority: 0.7,
    },
  ];

  const generateXML = () => {
    const today = new Date().toISOString().slice(0, 10);
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
    sitemapUrls.forEach(({ loc, changefreq, priority }) => {
      xml += `
        <url>
          <loc>${loc}</loc>
          <lastmod>${today}</lastmod>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
        </url>`;
    });
    xml += `
      </urlset>`;
    return xml;
  };

  return <pre>{generateXML()}</pre>;
};

export default Sitemap;
