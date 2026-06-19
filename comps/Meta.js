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
    </Head>
  );
};

export default Meta;
