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

      <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-8 text-center mt-11">
        <div className={`${styles.card_services} ${styles.card_services_2}`}>
          <div className={styles.card_icon}>
            <img
              src="../home/maintenance.png"
              width={50}
              height={50}
              className="mx-auto"
            />
          </div>
          <h3 className={`${styles.title_services} text-xl mt-5 mb-5`}>
            Maintenance of the machines
          </h3>
          <p className="text-[#54545f]">
            Design and propose product improvements through periodical and
            accurate testing.
          </p>
        </div>

        <div className={`${styles.card_services} ${styles.card_services_3}`}>
          <div className={styles.card_icon}>
            <img
              src="../home/spare_parts.png"
              width={50}
              height={50}
              className="mx-auto"
            />
          </div>
          <h3 className={`${styles.title_services} text-xl mt-5 mb-5`}>
            Spare parts for the machines
          </h3>
          <p className="text-[#54545f]">
            Design and propose product improvements through periodical and
            accurate testing.
          </p>
        </div>

        <div className={`${styles.card_services}`}>
          <div className={styles.card_icon}>
            <img
              src="../home/sell.png"
              width={50}
              height={50}
              className="mx-auto"
            />
          </div>
          <h3 className={`${styles.title_services} text-xl mt-5 mb-5`}>
            Software and manuals
          </h3>
          <p className="text-[#54545f]">
            Design and propose product improvements through periodical and
            accurate testing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Our_services;
