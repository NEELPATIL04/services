const contactSeo = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contact Us - WebDrift",
    "url": "https://yourwebsite.com/contact",
    "description": "Get in touch with WebDrift for inquiries, support, and collaborations.",
    "keywords": [
      "contact WebDrift",
      "support",
      "business inquiries",
      "customer service",
      "web development consultation"
    ],
    "provider": {
      "@type": "Organization",
      "name": "WebDrift",
      "url": "https://yourwebsite.com"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-800-123-4567",
        "contactType": "customer service",
        "email": "support@yourwebsite.com",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Spanish"]
      }
    ],
    "faq": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can I contact WebDrift?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact us via phone, email, or by filling out the contact form on our website."
          }
        },
        {
          "@type": "Question",
          "name": "What services does WebDrift offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "WebDrift provides web development, design, SEO, and digital marketing services."
          }
        }
      ]
    },
    "cta": {
      "@type": "Action",
      "name": "Get in Touch",
      "url": "https://webdrift.in/contact"
    }
  };
  
  export default contactSeo;
  