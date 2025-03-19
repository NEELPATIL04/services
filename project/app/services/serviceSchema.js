export const getServiceSchema = () => ({
    __html: `{
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "TechSolutions Web Development Services",
      "description": "We offer a wide range of services including API integration, web development, frontend development, and more using Java, React, and Next.js.",
      "provider": {
        "@type": "Organization",
        "name": "TechSolutions",
        "url": "https://webdrift.in"
      },
      "serviceType": [
        "Web Development",
        "API Integration",
        "Frontend Development",
        "Backend Development",
        "Full-Stack Development",
        "E-commerce Solutions"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "Worldwide"
      },

      "keywords": [
        "Java Development",
        "React Services",
        "Next.js Development",
        "API Integration",
        "SEO-friendly Web Development",
        "Custom Web Applications"
      ]
    }`
  });
  