import '@/styles/globals.css'
import Head from "next/head";
import Script from "next/script";
import Layout from "../comps/Layout";
import Link from 'next/link';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getCookie, setCookie } from "cookies-next";
import { i18n } from "../comps/i18n"

export default function App({ Component, pageProps }) {

  const [t, i18n] = useTranslation();
  const language = i18n.language;

  const lang = getCookie("language") || "en";

  useEffect(() => {
    if (i18n.language !== lang) {
      setCookie("language", lang);
      i18n.changeLanguage(lang);
    }
  }, [i18n, lang]);  

  return (
    <>
      <Head>
        <title>Sigma Machines</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/dist/output.css" rel="stylesheet" />
        {/* <link rel="icon" href="/logo.png" /> */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
