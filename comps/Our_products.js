import React from "react";
import Product from "./Product_comp";
import styles from "../styles/Product.module.css";
import Link from "next/link";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import {
  products
} from "@/data/products";
import { useTranslation } from "react-i18next";

const Our_products = () => {

  const [t, i18n] = useTranslation();
  const { language } = i18n;

  return (
    <div className="bg-[#ebeb1914] pt-14 pb-9 relative">
      <div className="px-24 max-xl:px-10">
        <div className="">
          <div className="relative">
            <div className={`bg-[#f3ec5e24] p-6 rounded-full absolute ${language === "en" ? "-left-3" : "-right-3"} -top-3`}></div>
            <p className="text-[#d9d640] text-lg tracking-widest uppercase font-medium">
              {t("OUR PRODUCTS")}
            </p>
          </div>
          <h1 className="text-[#1c1c1c] text-xl mt-4">
            {/* We offer a suitable laser machine for virtually any application. The
            range includes laser engravers, laser cutters, large-format laser
            cutting machines, and industrial marking lasers. */}
            {t("High-Precision CNC & Laser Cutting Machines")}
          </h1>
        </div>
        <Carousel autoplay>
          <div>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 mt-10 items-stretch">
              {products.slice(0, 3).map((product) => {
                const truncatedDesc =
                  product.desc.length > 100
                    ? product.desc.substring(0, 100) + "..."
                    : product.desc;

                const truncatedDescAr =
                  product.desc.length > 100
                    ? product.descAr.substring(0, 100) + "..."
                    : product.descAr;

                return (
                  <Product
                    key={product.id}
                    title={(language === "en" ? product.name : product.nameAr) || product.name}
                    href={`/products/${product.id}`}
                    background={{ backgroundImage: `url(${product.image_small || "empty.jpg"})` }}
                    method={(language === "en" ? product.title : product.titleAr) || product.title}
                    description={(language === "en" ? truncatedDesc : truncatedDescAr) || truncatedDesc}
                    rate={product.rate}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 mt-10 items-stretch">
              {products.slice(4, 7).map((product) => {
                const truncatedDesc =
                  product.desc.length > 100
                    ? product.desc.substring(0, 100) + "..."
                    : product.desc;

                const truncatedDescAr =
                  product.desc.length > 100
                    ? product.descAr.substring(0, 100) + "..."
                    : product.descAr;

                return (
                  <Product
                    key={product.id}
                    title={(language === "en" ? product.name : product.nameAr) || product.name}
                    href={`/products/${product.id}`}
                    background={{ backgroundImage: `url(${product.image_small || "empty.jpg"})` }}
                    method={(language === "en" ? product.title : product.titleAr) || product.title}
                    description={(language === "en" ? truncatedDesc : truncatedDescAr) || truncatedDesc}
                    rate={product.rate}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 mt-10 mb-7 items-stretch">
              {products.slice(7, 10).map((product) => {
                const truncatedDesc =
                  product.desc.length > 100
                    ? product.desc.substring(0, 100) + "..."
                    : product.desc;

                const truncatedDescAr =
                  product.desc.length > 100
                    ? product.descAr.substring(0, 100) + "..."
                    : product.descAr;

                return (
                  <Product
                    key={product.id}
                    title={(language === "en" ? product.name : product.nameAr) || product.name}
                    href={`/products/${product.id}`}
                    background={{ backgroundImage: `url(${product.image_small || "empty.jpg"})` }}
                    method={(language === "en" ? product.title : product.titleAr) || product.title}
                    description={(language === "en" ? truncatedDesc : truncatedDescAr) || truncatedDesc}
                    rate={product.rate}
                  />
                );
              })}
            </div>
          </div>
        </Carousel>
        <div className="mx-auto flex justify-center mt-14">
          <Link href="/" className={`${styles.btn_more} flex items-center`}>
            {t("More")}
            {
              language === "en" ?
                <RightOutlined className={`ml-5 ${styles.arrow}`} /> :
                <LeftOutlined className={`mr-5 ${styles.arrow}`} />
            }
          </Link>
        </div>
      </div>

      <img
        src="../home/abstract_shape.png"
        width={130}
        height={130}
        className="absolute right-1 bottom-1 max-lg:w-[100px]"
        alt="abstract_shape"
      />
    </div>
  );
};

export default Our_products;
