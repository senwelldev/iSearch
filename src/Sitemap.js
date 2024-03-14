import React from "react";

const SitemapData = () => {
  const sitemapUrls = [
    {
      loc: "https://isearch.co.in/",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 0.8,
    },
    {
      loc: "https://isearch.co.in/contact",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 1.0,
    },
    {
      loc: "https://isearch.co.in/blog/blog1",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 0.6,
    },
    {
      loc: "https://isearch.co.in/blog/blog2",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 0.8,
    },
    {
      loc: "https://isearch.co.in/branding",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 1.0,
    },
    {
      loc: "https://isearch.co.in/contentServices",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 1.0,
    },
    {
      loc: "https://isearch.co.in/paidAdds",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 1.0,
    },
    {
      loc: "https://isearch.co.in/seo",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 1.0,
    },
    {
      loc: "https://isearch.co.in/social",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 1.0,
    },
    {
      loc: "https://isearch.co.in/static/media/Social%20Media%20ADsa.c1e6b09f02c386bac399.webps",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 0.4,
    },
    {
      loc: "https://isearch.co.in/aboutus",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 1.0,
    },
    {
      loc: "https://isearch.co.in/services",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 1.0,
    },
    {
      loc: "https://isearch.co.in/blog",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 1.0,
    },
    {
      loc: "https://isearch.co.in/blog/blog3",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 0.8,
    },
    {
      loc: "https://isearch.co.in/career",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 1.0,
    },
    {
      loc: "https://isearch.co.in/contactus",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 1.0,
    },
    {
      loc: "https://isearch.co.in/career/job/",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 0.4,
    },
    {
      loc: "https://isearch.co.in/jobapplication",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 1.0,
    },
    {
      loc: "https://isearch.co.in/about",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 1.0,
    },
    {
      loc: "https://isearch.co.in/webDesign",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 1.0,
    },
    {
      loc: "https://isearch.co.in/careers",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 1.0,
    },
    {
      loc: "https://isearch.co.in/admin/login",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 0.6,
    },
    {
      loc: "https://isearch.co.in/sitemap.xml",
      lastmod: "2024-03-14T07:56:36+01:00",
      priority: 1.0,
    },
  ];

  // Find the specific URL object from the sitemapUrls array
  const specificUrl = sitemapUrls.find(
    (url) => url.loc === "https://isearch.co.in/blog/blog1"
  );

  return (
    <div>
      <h2>Sitemap Data</h2>
      <div>
        <strong>URL:</strong> {specificUrl.loc}
        <br />
        <strong>Last Modified:</strong> {specificUrl.lastmod}
        <br />
        <strong>Priority:</strong> {specificUrl.priority}
      </div>
    </div>
  );
};

export default SitemapData;
