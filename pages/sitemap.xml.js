import {
  products,
  productsWelding,
  productsPlasma,
  productsPress,
  productsShearing,
} from "@/data/products";

const baseUrl = "https://sigmamachines.net";

function generateSitemap() {
  const allProducts = [
    ...products,
    ...productsWelding,
    ...productsPlasma,
    ...productsPress,
    ...productsShearing,
  ];

  const staticPages = [
    "/",
    "/about",
    "/services",
    "/products",
    "/themaintenance",
    "/contact",
  ];

  const productLinks = allProducts.map((product) => {
    return `<url>
      <loc>${baseUrl}/products/${product.id}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>`;
  });

  const staticLinks = staticPages.map((page) => {
    return `<url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticLinks.join("\n")}
    ${productLinks.join("\n")}
  </urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSitemap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
