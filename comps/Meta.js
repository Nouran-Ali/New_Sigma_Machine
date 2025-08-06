import Head from "next/head";

const Meta = ({ title, description }) => {
  const defaultTitle = "Sigma Machines";
  const fullTitle = title ? `${title} - ${defaultTitle}` : defaultTitle;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description || "Sigma Machines is your trusted partner in industrial machinery."} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;