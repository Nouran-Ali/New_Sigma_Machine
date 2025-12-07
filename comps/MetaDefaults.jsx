import Head from "next/head";

export default function MetaDefaults() {
  return (
    <Head>
      {/* Default Title */}
      <title>Sigma Machines | CNC & Industrial Machinery</title>

      {/* Default Meta */}
      <meta
        name="description"
        content="Sigma Machines specializes in CNC machines, fiber laser cutters, routers, welding systems, and industrial machinery across Saudi Arabia and the Middle East."
      />
      <meta
        name="keywords"
        content="
          CNC machines Saudi Arabia,
          CNC router supplier,
          Fiber laser machines KSA,
          Industrial machinery distributor,
          Laser cutting machines,
          CNC machines Middle East
        "
      />

      {/* OG Defaults */}
      <meta property="og:title" content="Sigma Machines" />
      <meta
        property="og:description"
        content="High-performance CNC and industrial machinery with professional after-sales service."
      />
      <meta property="og:image" content="https://sigmamachines.net/logo.png" />
      <meta property="og:site_name" content="Sigma Machines" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://sigmamachines.net/logo.png" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}