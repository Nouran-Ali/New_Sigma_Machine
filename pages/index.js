import { Experience } from "@/comps/Experience";
import Main from "@/comps/Main";
import Our_products from "@/comps/Our_products";
import Our_services from "@/comps/Our_services";
import Samples from "@/comps/Samples";
import WhatWeOffer from "@/comps/WhatWeOffer";
import Image from "next/image";
import Head from 'next/head';
import Meta from "@/comps/Meta";

export default function Home() {
  return (
    <>
      <Meta
        title="Sigma Machines | High Quality Industrial Machinery"
        description="Sigma Machines is your trusted partner in industrial machinery – discover our top-quality machines for all your needs."
      />

      <Main />
      <WhatWeOffer />
      <Our_products />
      <Our_services />
      <Experience />
      <Samples />
    </>
  );
}
