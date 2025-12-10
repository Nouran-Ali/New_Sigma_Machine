import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FaTools, FaFileContract, FaTruck, FaGlobe, FaClock, FaCogs } from "react-icons/fa";

const Our_services = () => {

  const [t, i18n] = useTranslation();
  const { language } = i18n;

  return (
    <div className={`${styles.bg_services} px-24 max-xl:px-10 mb-20`}>
      <div className="text-center mt-24">
        <p className="text-[#d9d640] lg:text-lg tracking-widest uppercase font-medium">
           {t("OUR SERVICES")}
        </p>
        <h1 className="text-[#1c1c1c] text-3xl max-lg:text-xl mt-4">
          {t("Professional Maintenance & Technical Support")}
        </h1>
      </div>

      {/* <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-8 text-center mt-10">
        <div className={`${styles.card_services} ${styles.card_services_2}`}>
          <div className={styles.card_icon}>
            <img
              src="../home/maintenance.png"
              width="50"
              height="50"
              className="mx-auto"
            />
          </div>
          <h3 className={`${styles.title_services} text-xl mt-2 mb-1`}>
            Maintenance of the machines
          </h3>
          <p className="text-[#54545f]">
            Regular maintenance ensures the optimal performance and longevity of
            laser cutting machines. This includes cleaning optical components,
            checking gas flow systems, and calibrating the laser source.
          </p>
        </div>

        <div className={`${styles.card_services} ${styles.card_services_3}`}>
          <div className={styles.card_icon}>
            <img
              src="../home/spare_parts.png"
              width="50"
              height="50"
              className="mx-auto"
            />
          </div>
          <h3 className={`${styles.title_services} text-xl mt-2 mb-1`}>
            Spare parts for the machines
          </h3>
          <p className="text-[#54545f]">
            High-quality spare parts are essential for maintaining precision and
            efficiency. We provide reliable components to minimize downtime and
            keep your operations running smoothly.
          </p>
        </div>

        <div className={`${styles.card_services}`}>
          <div className={styles.card_icon}>
            <img
              src="../home/sell.png"
              width="50"
              height="50"
              className="mx-auto"
            />
          </div>
          <h3 className={`${styles.title_services} text-xl mt-2 mb-1`}>
            Software and manuals
          </h3>
          <p className="text-[#54545f]">
            User-friendly software and comprehensive manuals help operators
            achieve accurate and efficient laser cuts while maximizing machine
            capabilities.
          </p>
        </div>
      </div> */}

      <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-24 lg:gap-y-14 max-lg:gap-14 text-center mt-10">
        <div className={`${styles.card_services} ${styles.card_services_2}`}>
          <div className={styles.card_icon}>
            <FaTools className="mx-auto text-4xl text-[#d7d43f]" />
          </div>
          <h3 className={`${styles.title_services} text-xl mt-2 mb-1`}>
            {t("Strong After-Sales Maintenance Team")}
          </h3>
        </div>

        <div className={`${styles.card_services} ${styles.card_services_3}`}>
          <div className={styles.card_icon}>
            <FaFileContract className="mx-auto text-4xl text-[#6dc9ff]" />
          </div>
          <h3 className={`${styles.title_services} text-xl mt-2 mb-1`}>
            {t("Annual Maintenance Contracts")}
          </h3>
        </div>

        <div className={`${styles.card_services}`}>
          <div className={styles.card_icon}>
            <FaTruck className="mx-auto text-4xl text-[#ff7951]" />
          </div>
          <h3 className={`${styles.title_services} text-xl mt-2 mb-1`}>
            {t("On-Site External Maintenance Service")}
          </h3>
        </div>

        <div className={`${styles.card_services} ${styles.card_services_4}`}>
          <div className={styles.card_icon}>
            <FaGlobe className="mx-auto text-4xl text-purple-500" />
          </div>
          <h3 className={`${styles.title_services} text-xl mt-2 mb-1`}>
            {t("Support for Chinese and International Suppliers in Saudi Arabia")}
          </h3>
        </div>

        <div className={`${styles.card_services} ${styles.card_services_5}`}>
          <div className={styles.card_icon}>
            <FaClock className="mx-auto text-4xl text-red-500" />
          </div>
          <h3 className={`${styles.title_services} text-xl mt-2 mb-1`}>
            {t("Fast Response & Reliable Support")}
          </h3>
        </div>

        <div className={`${styles.card_services} ${styles.card_services_6}`}>
          <div className={styles.card_icon}>
            <FaCogs className="mx-auto text-4xl text-yellow-500" />
          </div>
          <h3 className={`${styles.title_services} text-xl mt-2 mb-1`}>
            {t("Spare Parts Availability")}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Our_services;
