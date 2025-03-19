    import { NextResponse } from "next/server";

    const SITE_URL = "https://webdrift.in"; // Change this to your actual domain

    export async function GET() {
    // Example: Define static URLs (modify based on your project structure)
    const staticUrls = [
        `${SITE_URL}/`,
        `${SITE_URL}/home`,
        `${SITE_URL}/contact`,
        `${SITE_URL}/for-whom`,      
        `${SITE_URL}/services`,
        `${SITE_URL}/service`,
        `${SITE_URL}/service/enterprise`,
        `${SITE_URL}/service/student`,
        `${SITE_URL}/service/solo-entrepreneur`,
        `${SITE_URL}/policy`,
        `${SITE_URL}/policy/cookies`,
        `${SITE_URL}/policy/privacy`,
        `${SITE_URL}/policy/terms`,

      ];
      

    // Generate the XML Sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticUrls
        .map((url) => {
            return `
        <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>0.8</priority>
        </url>`;
        })
        .join("")}
    </urlset>`;

    // Return as XML response
    return new NextResponse(sitemap, {
        headers: {
        "Content-Type": "application/xml",
        },
    });
    }
