import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Main = () => {

  const [t, i18n] = useTranslation();
  const { language } = i18n;

  const images = [
    "/products/router-550x750-removebg-preview.png",
    "../products/20.png",
    "../products/23.png",
    "../products/24.png",
    "../products/25.png",
    "../products/26.png",
    "../products/27.png",
    "../products/28.png",
    "../products/29.png",
    "../products/30.png",
    "../products/31.png",
    "../products/32.png",
    "../products/33.png",
    "../products/34.png",
    "../products/35.png",
    "../products/40.png",
    "../products/41.png",
    "../products/42.png",
    "../products/co2-550x750.png",
    "../products/fiber-laser-550x750.png",
    "../products/Letter-Bending-550x750.png",
    "../products/press-brake-550x750.png",
    "../products/welding-550x750.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div className={styles.background}>
          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4 px-24 max-xl:px-10 reverce_mobile">
            <div className="lg:mt-20 ">
              <p className="text-[#666666] text-sm max-xl:text-sm tracking-widest uppercase font-medium relative z-10">
                {t("High-Precision CNC & Laser Cutting Machines")}
              </p>
              <h1 className="text-[#1c1c1c] mt-4 text-6xl max-xl:text-4xl font-bold relative z-10">
                {t("Sigma Machines")}
              </h1>
              <p className="text-[#54545f] text-base mt-5 mb-12">
                {t("We provide a full range of CNC and laser machinery for wood, metal, acrylic, signage, furniture production, sheet metal fabrication, and industrial manufacturing. Our machines include fiber laser cutters, CNC routers (3, 4, and 5-axis), CO₂ lasers, plasma cutting systems, welding machines, marking lasers, press brakes, and shearing machines.")}
              </p>
              <Link href="/about" className={styles.btn_more}>
                {t("Read More")}
              </Link>

              <div className={styles.half_circle}></div>
              <div>
                <img
                  src="/home/right-arrow.webp"
                  width="40"
                  height="40"
                  className={`${styles.triangle_one} mobile_d_none`}
                  loading="lazy"
                />
                <img
                  src="/home/right-arrow.webp"
                  width="20"
                  height="20"
                  className={`${styles.triangle_two} mobile_d_none`}
                  loading="lazy"
                />
                <img
                  src="/home/right-arrow.webp"
                  width="30"
                  height="30"
                  className={`${styles.triangle_three} mobile_d_none`}
                  loading="lazy"
                />
                <img
                  src="/home/right-arrow.webp"
                  width="20"
                  height="20"
                  className={`${styles.triangle_four} mobile_d_none`}
                  loading="lazy"
                />
                <img
                  src="/home/right-arrow.webp"
                  width="20"
                  height="20"
                  className={`${styles.triangle_five} mobile_d_none`}
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              {/* <div className={styles.right_circle}></div> */}
              <img
                // src="/products/router-550x750-removebg-preview.png"
                src={images[currentImage]}
                className={` ${styles.image} relative z-10`}
                width="800"
                height="550"
              />
              <div className={styles.right_dots}>
                <img
                  src="/home/menu.webp"
                  width="50"
                  height="50"
                  loading="lazy"
                  className="mobile_d_none"
                />
                <img
                  src="/home/menu.webp"
                  width="50"
                  height="50"
                  loading="lazy"
                  className="mobile_d_none"
                />
                <img
                  src="/home/menu.webp"
                  width="50"
                  height="50"
                  loading="lazy"
                  className="mobile_d_none"
                />
                <img
                  src="/home/menu.webp"
                  width="50"
                  height="50"
                  loading="lazy"
                  className="mobile_d_none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.white_circle} mobile_d_none`}></div>
        <div className={styles.left_dots}>
          <img src="/home/menu.webp" width="40" height="40" loading="lazy" />
          <img src="/home/menu.webp" width="40" height="40" loading="lazy" />
          <img
            src="/home/menu.webp"
            width="40"
            height="40"
            loading="lazy"
          // placeholder="blur"
          />
        </div>
      </div>

      {/* <div className="px-24 max-xl:px-10 py-16">
        <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-6">

          {/* Banner 1 *
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="/1.png"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              {/* <p className="text-white text-xl font-bold">
                Fiber Laser Offer
              </p> *
            </div>
          </div>

          {/* Banner 2 *
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="/2.png"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              {/* <p className="text-white text-xl font-bold">
                CNC Router Deals
              </p> *
            </div>
          </div>

          {/* Banner 3 *
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="/10.jpeg"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              {/* <p className="text-white text-xl font-bold">
                Welding Machines
              </p> *
            </div>
          </div>

        </div>
      </div> */}
    </>
  );
};

export default Main;
