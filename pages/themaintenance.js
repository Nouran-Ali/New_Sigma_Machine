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
        title="قطع غيار ماكينات CNC وصيانة ماكينات الليزر في الرياض"
        description="اكتشف خدمات الصيانة الاحترافية وحلول قطع الغيار من سيجما ماشينز لأنظمة قطع الليزر الليفي والآلات الصناعية. نوفر دعمًا سريعًا وموثوقًا للحفاظ على تشغيل معداتك بأقصى كفاءة، قطع غيار ماكينات CNC وصيانة ماكينات الليزر في الرياض وذلك باستخدام قطع غيار أصلية ومتوافقة من علامات تجارية رائدة، تشمل Raycus وMax Laser وMFCS وIPG وBWT وReci وAU3tech وOspri وBodor وBOCHU وBLT وCypCut وFSCUT وRaytools. تشمل مكوناتنا المتوفرة مصادر الليزر، ورؤوس القطع، والفوهات، والسيراميك، وعدسات التركيز، وعدسات التجميع، وعدسات الحماية، والمواد الاستهلاكية الأساسية لليزر. ندعم الموديلات الشائعة مثل RFL-C6000، وBM109، وBM110، وBM111، وBM114S، وBM06K، وBS06K، وBM12K، وBS12K، وBLT421S، وBLT310، وBLT442، وFSCUT2000E، وFSCUT2000C، وCypCutE، وXC3000. سواء كنت بحاجة إلى صيانة، أو قطع غيار، أو استكشاف أعطال، أو ترقيات، أو دعم فني لجهاز الليزر الليفي الخاص بك، فإن شركة سيجما للآلات تقدم حلولاً موثوقة، وخدمة احترافية، واستجابة سريعة في السعودية."
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
        <p>تحديث ماكينة الفايبر ليزر قطع من قدرة 3kW إلى 6kW لعميلنا في البحرين.</p>

        <div className="mb-4 mt-6 grid grid-cols-4 max-xl:grid-cols-1 gap-4">

          <div className="col-span-2 w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-black">
            <video
              className="w-full h-auto aspect-video object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source src="../maintaines/1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="col-span-2"></p>

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
