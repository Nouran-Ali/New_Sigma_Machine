import { Experience } from "@/comps/Experience";
import Main from "@/comps/Main";
import Our_products from "@/comps/Our_products";
import Our_services from "@/comps/Our_services";
import Samples from "@/comps/Samples";
import WhatWeOffer from "@/comps/WhatWeOffer";
import Meta from "@/comps/Meta";
import Products_bar from "@/comps/Products_bar";
import { useTranslation } from "react-i18next";
import Blog from "../comps/Blog";
import Event from "@/comps/Event";
import Faq from "@/comps/Faq";

export default function Home() {

  const [t, i18n] = useTranslation();
  const { language } = i18n;

  return (
    <>
      <Meta
        title="CNC Machines | Fiber Laser, CNC Routers, Laser Welders & Industrial Machinery"
        description="Buy high-precision CNC machines including fiber laser cutters, CNC routers, CO2 laser machines, welding systems, and industrial machinery with fast delivery across the Middle East."
        keywords="CNC Machines, CNC Machine, CNC machines Saudi Arabia, Laser cutting machines KSA , CNC router supplier Saudi Arabia, Industrial machinery distributor, Fiber laser machines Middle East, CNC machines for metal fabrication, Laser welding systems for industry, CNC خشب , CNC إختصار , ماكينة CNC , Cnc mesrs dz , أشكال CNC , سعر ماكينة CNC , أنواع ماكينات CNC , Cnc ملابس , CNC online , Bystronic laser cutting machine price , Bystronic laser manual pdf , TRUMPF laser cutting machine , Fiber laser cutting machine , AMADA laser cutting machine , Laser Automation , Bystronic Bystar 3015 laser manual , Used tube laser , تجربتي_مع فراكشنال ليزر co2 , فراكشنال ليزر CO2 قبل وبعد , ماكينة ليزر CO2 , ماكينة ليزر CO2 , Fiber laser cutting table , Fiber laser cutting design , Fiber laser cutting near me , Fiber laser cutting machine , Fiber Laser Cutting Machine price , CNC Fiber Laser cutting Machine , Plasma cutting Machine , Plasma cutting CNC , Plasma Cutting Machine price , Plasma cutting temperature , Plasma cutting Torch , Plasma cutting working principle , cnc machine , cnc design , cnc stock , cnc operator , ماكينة cnc , cnc router , cnc lathe machine , cnc machines , modern cnc design , what is cnc , cnc machine operator , cnc خشب , Types of welding machines with pictures , 4 types of welding machines with pictures , 5 types of welding machines , Welding machines Types , Names of welding machines , Types of welding machines for beginners , 3 types of welding machines , Laser welding machines , Laser Marking Machine price , Laser marking machine for metal , Laser marking process , Laser marking near me , Laser marking video , Laser marking head , Laser Marking price , Laser Marking Products , Press brake process , Hydraulic Press brake , Press Brake Bending Machine , Press brake steel , Press Brake manufacturers , Press brake operator , Manual press brake , Press brake homemade , Shearing Machine price , Types of shearing machine , Shear Cutting Machine Manual , CNC shearing machine , Mechanical Shearing Machine , Shearing machine diagram , RapidChange ATC , ATC CNC machine price , Rapid change ATC for sale , RapidChange ATC DIY , ATC spindle adapter , RapidChange ATC 3D print"
      />

      <div dir={language === "en" ? "ltr" : "rtl"}>

        <div className="sr-only">
          <h1>Professional CNC & Laser Machine Maintenance in Saudi Arabia</h1>

          <h2>Strong After-Sales Support & Expert Engineers</h2>
          <h2>Annual Maintenance Contracts for Factories & Workshops</h2>
          <h2>On-Site External Maintenance Across Saudi Arabia</h2>
          <h2>Local Service Provider for Chinese CNC & Laser Machines</h2>
          <h2>Fast Response, Accurate Diagnosis & Reliable Repair</h2>
          <h2>Spare Parts Availability for All CNC & Laser Systems</h2>

          <h3>CNC Router Service</h3>
          <h3>Fiber Laser Cutting Machine Support</h3>
          <h3>CO₂ Laser Maintenance</h3>
          <h3>Laser Welding System Calibration</h3>
          <h3>Press Brake & Shearing Machine Repair</h3>

        </div>


        <Main />
        {/* <Products_bar /> */}
        {/* <WhatWeOffer /> */}
        <Our_services />
        <Our_products />
        <Experience />
        {/* <Samples /> */}
        <Faq />
        <Blog />
        <Event />

        <section className="container mx-auto py-10 text-gray-700 sr-only">
          <h2>CNC Machine Maintenance in Saudi Arabia – Who We Serve</h2>
          <p>We provide maintenance services to metal fabrication factories, signage companies, furniture manufacturers, engineering workshops, and industrial facilities.</p>

          <h2>Supported Machine Brands</h2>
          <p>We service Chinese CNC routers, fiber laser machines, hybrid machines, and global CNC brands.</p>

          <h2>Industries We Support</h2>
          <p>Metalworking, woodworking, signage, automotive, engineering, heavy industry.</p>
        </section>

        <section className="sr-only">
          Sigma Machines provides full maintenance, repair, calibration, and spare parts services for CNC routers, fiber laser cutters, CO₂ laser machines, plasma systems, welding machines, press brakes, and shearing machines across Saudi Arabia. We support both local and Chinese suppliers with fast on-site
        </section>

      </div>
    </>
  );
}
