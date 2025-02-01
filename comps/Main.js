import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const Main = () => {
  return (
    <>
      <div>
        <div className={styles.background}>
          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4 px-24 max-xl:px-10">
            <div className="mt-20">
              <p className="text-[#666666] text-xl max-xl:text-lg tracking-widest uppercase font-medium">
                Empowering laser users
              </p>
              <h1 className="text-[#1c1c1c] mt-4 text-6xl max-xl:text-4xl font-bold">
                Sigma Machines
              </h1>
              <p className="text-[#54545f] text-xl max-xl:text-lg mt-8 mb-12">
                Simplify your processes, increase your productivity, and
                maximize your profitability.
              </p>
              <Link href="/about" className={styles.btn_more}>
                Read More
              </Link>

              <div className={styles.half_circle}></div>
              <div>
                <img
                  src="../home/right-arrow.png"
                  width="40"
                  height="40"
                  className={`${styles.triangle_one} mobile_d_none`}
                  loading="lazy"
                />
                <img
                  src="../home/right-arrow.png"
                  width="20"
                  height="20"
                  className={`${styles.triangle_two} mobile_d_none`}
                  loading="lazy"
                />
                <img
                  src="../home/right-arrow.png"
                  width="30"
                  height="30"
                  className={styles.triangle_three}
                  loading="lazy"
                />
                <img
                  src="../home/right-arrow.png"
                  width="20"
                  height="20"
                  className={styles.triangle_four}
                  loading="lazy"
                />
                <img
                  src="../home/right-arrow.png"
                  width="20"
                  height="20"
                  className={styles.triangle_five}
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <div className={styles.right_circle}></div>
              <img
                src="../home/4.png"
                className={` ${styles.image} mobile_d_none`}
                width="600"
                height="550"
              />
              <div className={styles.right_dots}>
                <img
                  src="../home/menu.png"
                  width="50"
                  height="50"
                  loading="lazy"
                />
                <img
                  src="../home/menu.png"
                  width="50"
                  height="50"
                  loading="lazy"
                />
                <img
                  src="../home/menu.png"
                  width="50"
                  height="50"
                  loading="lazy"
                />
                <img
                  src="../home/menu.png"
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.white_circle} mobile_d_none`}></div>
        <div className={styles.left_dots}>
          <img src="../home/menu.png" width="40" height="40" loading="lazy" />
          <img src="../home/menu.png" width="40" height="40" loading="lazy" />
          <img
            src="../home/menu.png"
            width="40"
            height="40"
            loading="lazy"
            // placeholder="blur"
          />
        </div>
      </div>
    </>
  );
};

export default Main;
