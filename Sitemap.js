import React, { useEffect, useState } from "react";

const Sitemap = () => {
  const [sitemap, setSitemap] = useState([]);

  useEffect(() => {
    // Fetch or import sitemap data here
    const fetchedSitemap = [
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

    setSitemap(fetchedSitemap);
  }, []);

  const generateXML = () => {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    sitemap.forEach((item) => {
      xml += "<url>";
      xml += `<loc>${item.loc}</loc>`;
      xml += `<changefreq>${item.changefreq}</changefreq>`;
      xml += `<priority>${item.priority}</priority>`;
      xml += "</url>";
    });
    xml += "</urlset>";
    return xml;
  };

  return <pre>{generateXML()}</pre>;
};

export default Sitemap;
