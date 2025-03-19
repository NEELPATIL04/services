import { MetadataRoute } from "next";

const SITE_URL = "https://webdrift.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: new Date().toISOString() },
    { url: `${SITE_URL}/home`, lastModified: new Date().toISOString() },
    { url: `${SITE_URL}/contact`, lastModified: new Date().toISOString() },
    { url: `${SITE_URL}/for-whom`, lastModified: new Date().toISOString() },
    { url: `${SITE_URL}/services`, lastModified: new Date().toISOString() },
    { url: `${SITE_URL}/service`, lastModified: new Date().toISOString() },
    { url: `${SITE_URL}/service/enterprise`, lastModified: new Date().toISOString() },
    { url: `${SITE_URL}/service/student`, lastModified: new Date().toISOString() },
    { url: `${SITE_URL}/service/solo-entrepreneur`, lastModified: new Date().toISOString() },
    { url: `${SITE_URL}/policy`, lastModified: new Date().toISOString() },
    { url: `${SITE_URL}/policy/cookies`, lastModified: new Date().toISOString() },
    { url: `${SITE_URL}/policy/privacy`, lastModified: new Date().toISOString() },
    { url: `${SITE_URL}/policy/terms`, lastModified: new Date().toISOString() },
  ];
}
