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
import Meta from "@/comps/Meta";
import { useTranslation } from "react-i18next";

const Themaintenance = () => {

  const [t, i18n] = useTranslation();
  const { language } = i18n;

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
      <Meta
        title="The Maintenance"
        description="Discover Sigma Machines' professional maintenance services and spare parts solutions for fiber laser cutting systems and industrial machinery. We provide fast, reliable support to keep your equipment operating at maximum efficiency with genuine and compatible spare parts from leading brands including Raycus, Max Laser, MFCS, IPG, BWT, Reci, AU3tech, Ospri, Bodor, BOCHU, BLT, CypCut, FSCUT, and Raytools. Our available components include laser sources, cutting heads, nozzles, ceramics, focus lenses, collimation lenses, protection lenses, protective lenses, and essential laser consumables. We support popular models such as RFL-C6000, BM109, BM110, BM111, BM114S, BM06K, BS06K, BM12K, BS12K, BLT421S, BLT310, BLT442, FSCUT2000E, FSCUT2000C, CypCutE, and XC3000. Whether you need maintenance, replacement parts, troubleshooting, upgrades, or technical support for your fiber laser machine, Sigma Machines delivers dependable solutions, expert service, and fast response times across the Middle East."
      />

      <div className={`${styles.bg_resources}`}>
        <h1 className="text-white text-5xl text-center pt-24">{t("Applications")}</h1>
        <h1 className="text-[#bfbfbf] text-2xl text-center pt-5">
          {t("Maintenance")}
        </h1>
      </div>

      <div className="px-24 max-xl:px-10 mt-12 mb-12" dir={language === "en" ? "ltr" : "rtl"}>

        <h3 className="text-2xl">{t("Signs that your machine needs maintenance")}</h3>

        <div className="mb-4 mt-6">
          <div className="grid grid-cols-3 max-xl:grid-cols-2 gap-4">

            <img
              src="../maintaines/7.jpeg"
              height="90"
              className="rounded-xl"
              alt="Fiber laser cutting machine"
            />
            <img
              src="../maintaines/8.jpeg"
              height="90"
              className="rounded-xl"
              alt="Fiber laser cutting machine"
            />
            <img
              src="../maintaines/9.jpeg"
              height="90"
              className="rounded-xl"
              alt="Fiber laser cutting machine"
            />
            <img
              src="../maintaines/10.jpeg"
              height="90"
              className="rounded-xl"
              alt="Fiber laser cutting machine"
            />
            <img
              src="../maintaines/11.jpeg"
              height="90"
              className="rounded-xl"
              alt="Fiber laser cutting machine"
            />
          </div>
        </div>


        <p className="mt-10">{t("Fiber laser cutting machine malfunctions are not a surprise...because ignoring warning signs reduces the likelihood of timely detection and repair. Preventive maintenance is not optional...it's a successful operating strategy and a smart investment that preserves machine efficiency. 👌🏻✨")}</p>

        <div className="mb-6 mt-3 grid grid-cols-2 max-xl:grid-cols-1 gap-4 items-center">
          <img
            src="../maintaines/1.jpeg"
            className="rounded-xl "
            alt="Fiber laser cutting machine"
          />

          <div className="">
            <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-5">

              <img
                src="../maintaines/2.jpeg"
                width="280"
                height="90"
                className="rounded-xl"
                alt="Fiber laser cutting machine"
              />
              <img
                src="../maintaines/3.jpeg"
                width="280"
                height="90"
                className="rounded-xl"
                alt="Fiber laser cutting machine"
              />
              <img
                src="../maintaines/4.jpeg"
                width="280"
                height="90"
                className="rounded-xl"
                alt="Fiber laser cutting machine"
              />
              <img
                src="../maintaines/5.jpeg"
                width="280"
                height="90"
                className="rounded-xl"
                alt="Fiber laser cutting machine"
              />
            </div>
          </div>
        </div>


        <p className="mt-10">{t("The most important indicator that a machine needs maintenance is the quality of its workmanship, because cutting accuracy and engraving cleanliness are the first things affected by a CO2 laser machine. ⚠️ Machine maintenance is a priority to maintain your work quality, not just to prevent breakdowns. 👌🏻")}</p>
        <div className="mb-6 mt-3 grid grid-cols-2 max-xl:grid-cols-1 gap-4 items-center">
          <img
            src="../maintaines/12.jpeg"
            className="rounded-xl "
            alt="Fiber laser cutting machine"
          />

          <div className="">
            <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-5">

              <img
                src="../maintaines/13.jpeg"
                width="280"
                height="90"
                className="rounded-xl"
                alt="Fiber laser cutting machine"
              />
              <img
                src="../maintaines/14.jpeg"
                width="280"
                height="90"
                className="rounded-xl"
                alt="Fiber laser cutting machine"
              />
              <img
                src="../maintaines/15.jpeg"
                width="280"
                height="90"
                className="rounded-xl"
                alt="Fiber laser cutting machine"
              />
              <img
                src="../maintaines/17.jpeg"
                width="280"
                height="90"
                className="rounded-xl"
                alt="Fiber laser cutting machine"
              />
            </div>
          </div>
        </div>



        <h3 className="text-2xl">{t("Maintenance")}</h3>

        <div className="mb-4 mt-6 grid grid-cols-4 max-xl:grid-cols-1 gap-4">

          <Link href="/maintenance/1">
            <img
              src="../3.jpeg"
              width="280"
              height="90"
              className="rounded-xl"
              alt="Fiber laser cutting machine"
            />
            <p className="mt-3 text-center">Fiber laser cutting machine</p>
          </Link>
          <Link href="/maintenance/2">
            <img
              src="../4.jpeg"
              width="280"
              height="90"
              className="rounded-xl"
              alt="Router machines"
            />
            <p className="mt-3 text-center">Router machines</p>
          </Link>
          <Link href="/maintenance/3">
            <img
              src="../5.jpeg"
              width="280"
              height="90"
              className="rounded-xl"
              alt="Plasma machine maintenance"
            />
            <p className="mt-3 text-center">Plasma machine maintenance</p>
          </Link>

          <Link href="/maintenance/4">
            <img
              src="../6.jpeg"
              width="280"
              height="90"
              className="rounded-xl"
              alt="Fiber laser cutting rotary"
            />
            <p className="mt-3 text-center">Fiber laser cutting rotary</p>
          </Link>

          {/* <Link href="/maintenance/5">
            <Image
              src="/7.jpeg"
              width={280}
              height={90}
              className="rounded-xl"
            />
            <p className="mt-3 text-center">Welding yag</p>
          </Link> */}

          <Link href="/maintenance/6">
            <img
              src="../8.jpeg"
              width="280"
              height="90"
              className="rounded-xl"
              alt="Marker"
            />
            <p className="mt-3 text-center">Marker</p>
          </Link>

          <Link href="/maintenance/7">
            <img
              src="../9.jpeg"
              width="280"
              height="90"
              className="rounded-xl"
              alt="Welding yag"
            />
            <p className="mt-3 text-center">Welding yag</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Themaintenance;
