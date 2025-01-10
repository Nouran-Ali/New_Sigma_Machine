import { Experience } from "@/comps/Experience";
import Main from "@/comps/Main";
import Our_products from "@/comps/Our_products";
import Our_services from "@/comps/Our_services";
import Samples from "@/comps/Samples";
import WhatWeOffer from "@/comps/WhatWeOffer";
import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sigma Machines</title>
        <link rel="icon" href="logo.png" />
      </Head>

      <Main />
      <WhatWeOffer />
      <Our_products />
      <Our_services />
      <Experience />
      <Samples />
    </>
  );
}
