import React, { useEffect } from "react";
import styles from "../styles/Resources.module.css";
import { useState } from "react";
import { Radio, Space, Tabs } from "antd";
import Fiber_resources from "@/comps/Fiber_resources";
import CO2_resources from "@/comps/CO2_resources";
import Laser_marking_resources from "@/comps/Laser_marking_resources";
import Cnc_resources from "@/comps/Cnc_resources";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Themaintenance = () => {
  const [tabPosition, setTabPosition] = useState("left");
  const [tabPositionAr, setTabPositionAr] = useState("right");
  const [tabPositionTop, setTabPositionTop] = useState("top");

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
    setTabPositionTop(e.target.value);
    setTabPositionAr(e.target.value);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1280px)");

    function handleMediaChange(event) {
      if (event.matches) {
        setTabPosition("top");
      } else {
        setTabPosition("left");
      }
    }

    mediaQuery.addListener(handleMediaChange);

    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Sigma Machines / The maintenance</title>
        <link rel="icon" href="logo.png" />
      </Head>

      <div className={`${styles.bg_resources} mobile_d_none`}>
        <h1 className="text-white text-5xl text-center pt-24">Applications</h1>
        <h1 className="text-[#bfbfbf] text-2xl text-center pt-5">
          Maintenance
        </h1>
      </div>

      <div className="px-24 max-xl:px-10 mt-12 mb-12">
        <div className="grid grid-cols-4 max-xl:grid-cols-1 gap-4">
          <Link href="/aerospace_area">
            <Image
              src="/2.jpeg"
              width={280}
              height={90}
              className="rounded-xl"
            />
            <p className="mt-3 text-center">3kw fiber laser machine delivery</p>
          </Link>
          <Link href="/">
            <Image
              src="/2.jpeg"
              width={280}
              height={236}
              className="rounded-xl"
            />
            <p className="mt-3 text-center">CNC machines</p>
          </Link>
          <Link href="/">
            <Image
              src="/2.jpeg"
              width={280}
              height={200}
              className="rounded-xl"
            />
            <p className="mt-3 text-center">Plasma machine maintenance</p>
          </Link>

        </div>
      </div>
    </>
  );
};

export default Themaintenance;
