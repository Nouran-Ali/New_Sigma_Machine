import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { TikTokOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <>
      <div className="relative">
        <div className={`${styles.bg_footer}`}>
          <div className="relative z-10">
            <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4 px-24 max-xl:px-10 text-white font-medium pt-24 pb-24">
              <div className={`${styles.border} pr-6`}>
                <div className="flex">
                  <img src="../logo2.png" width="90px" />
                  {/* <Image src="/logo2.png" width={90} height={60} className="" /> */}
                  {/* <h3 className='text-[#fff] mt-4 text-xl font-bold'>Sigma Machines</h3> */}
                </div>
                <p className="mt-6">
                  A professional CNC machine manufacturer. We are always
                  providing customers with high-quality products, competitive
                  prices, and excellent services.
                </p>
              </div>
              <div className={`${styles.border} pl-6 max-xl:pl-0`}>
                <h3 className="text-[#fff] mt-4 text-xl">Quick Links</h3>
                <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-2 mt-6 font-light">
                  <Link href="/about">About us</Link>
                  <Link href="/services">Services</Link>
                  <Link href="/products/1">Products</Link>
                  <Link href="/resources">Resources</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
              <div className="pl-6 max-xl:pl-0">
                <h3 className="text-[#fff] mt-4 text-xl">Contact Us</h3>
                <div className="flex mt-6">
                  {/* <img
                    src="../home/facebook.png"
                    width={30}
                    height={60}
                    className="mr-3"
                  /> */}
                  <Link href="https://www.instagram.com/sigma_machines?igsh=MWRlMmc4OTMyanJwZQ==">
                    <img
                      src="../home/instagram.png"
                      width={30}
                      height={60}
                      className="mr-3"
                    />
                  </Link>

                  <Link href="https://www.tiktok.com/@sigma.machines?_t=ZS-8sxXxLs0xXg&_r=1">
                    {/* <TikTokFilled className="text-3xl mr-3"/> */}
                    <TikTokOutlined className="text-3xl mr-3" />
                  </Link>
                  {/* <img
                    src="../home/linkedin.png"
                    width={30}
                    height={60}
                    className="mr-3"
                  /> */}
                  <Link href="mailto:info@sigmamachines.net">
                    <img src="../home/search.png" width={30} height={60} />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`${styles.border_top} px-24 max-xl:px-10 text-white font-medium py-7`}
            >
              <p>
                Copyright © 2025{" "}
                <Link
                  href="https://www.linkedin.com/in/nouran-ali-1732b8266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="text-white font-light"
                >
                  here.
                </Link>{" "}
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="bg-[#fffa004f] h-[450px] max-lg:h-full w-full absolute top-0 z-0"></div> */}
      </div>
    </>
  );
};

export default Footer;
