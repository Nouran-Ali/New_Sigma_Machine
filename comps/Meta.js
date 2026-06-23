import Head from "next/head";

const Meta = ({ title, description, keywords, image, url }) => {
  const siteName = "Sigma Machines";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  const defaultDescription =
    "Sigma Machines is your trusted partner in industrial machinery, offering CNC machines, fiber laser cutters, routers, welding systems, and sheet metal equipment.";

  const defaultKeywords =
    "CNC Machines, Fiber Laser Cutting, CNC Router Supplier, Laser Machines, Industrial Machinery";

  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;

  // IMPORTANT — Absolute URL for social media preview
  const fullImage = image
    ? `https://sigmamachines.net${image}`
    : `https://sigmamachines.net/logo.png`;

  const fullUrl = url || "https://sigmamachines.net";

  return (
    <Head>
      {/* Basic SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="product" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />

      {/* Twitter Card */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={fullImage} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sigma Machines",
            "url": "https://sigmamachines.net",
            "logo": "https://sigmamachines.net/logo.png",
            "image": "https://sigmamachines.net/logo.png",
            "telephone": "+966569745955",
            "email": "info@sigmamachines.net",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "8053 Salman Al Farisi Street, Office 4, First Floor",
              "addressLocality": "Riyadh",
              "addressRegion": "Riyadh",
              "postalCode": "13221",
              "addressCountry": "SA"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Riyadh"
              },
              {
                "@type": "Country",
                "name": "Saudi Arabia"
              }
            ],
            "sameAs": [
              "https://www.linkedin.com/company/sigma-machines",
              "https://www.facebook.com/Sigmamachines",
              "https://www.instagram.com/sigma_machines?igsh=MTQ0ZmQxYzg0Nzhncw==",
              "https://www.tiktok.com/@sigma.machines?_r=1&_t=ZS-97R3FSvmdqD"
            ]
          })
        }}
      />
    </Head>
  );
};

export default Meta;
