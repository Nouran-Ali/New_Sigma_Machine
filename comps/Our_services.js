import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Our_services = () => {
  return (
    <div className={`${styles.bg_services} px-24 max-xl:px-10 mb-20`}>
      <div className="text-center mt-24">
        <p className="text-[#d9d640] lg:text-lg tracking-widest uppercase font-medium">
          OUR SERVICES
        </p>
        <h1 className="text-[#1c1c1c] text-3xl max-lg:text-xl mt-4">
          We Offer a Wide Variety of Technical Services
        </h1>
      </div>

      <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-8 text-center mt-10">
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
      </div>
    </div>
  );
};

export default Our_services;
