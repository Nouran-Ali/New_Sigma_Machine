import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Product.module.css";
import { Image } from "antd";
import { CaretRightOutlined, MailOutlined } from "@ant-design/icons";
import Product_comp from "@/comps/Product_comp";
import Head from "next/head";
import {
  products,
  productsWelding,
  productsPlasma,
  productsPress,
  productsShearing,
} from "@/data/products";

const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(750);
  const [imageHight, setImageHight] = useState(550);

  const [imageWidthTwo, setImageWidthTwo] = useState(1150);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1280px)");

    function handleMediaChange(event) {
      if (event.matches) {
        setImageWidth(400);
        setImageHight(300);

        setImageWidthTwo(400);
      } else {
        setImageWidth(750);
        setImageHight(500);

        setImageWidthTwo(1150);
      }
    }

    mediaQuery.addListener(handleMediaChange);

    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, []);

  const router = useRouter();

  const { id } = router.query;

  const product = products.find((item) => item.id === Number(id));

  const visibleProducts = products.slice(currentIndex, currentIndex + 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 3 >= products.length ? 0 : prevIndex + 3
      );
    }, 60000);

    return () => clearInterval(interval);
  }, [products.length]);

  const truncatedDesc =
    product?.desc.length > 100
      ? product?.desc.substring(0, 100) + "..."
      : product?.desc;

  const mailtoLink = `mailto:info@sigmamachines.net?subject=Inquiry about ${product?.name}`;

  return (
    <>
      <Head>
        <title>{product?.name} - Sigma Machines</title>
        <meta name="description" content={product?.desc} />

        <meta property="og:title" content={product?.name} />
        <meta property="og:description" content={product?.desc} />
        <meta property="og:image" content={product?.image} />
        <meta property="og:type" content="product" />
        <meta
          property="og:url"
          content={`https://sigmamachines.net/products/${product?.slug}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product?.name} />
        <meta name="twitter:description" content={product?.desc} />
        <meta name="twitter:image" content={product?.image} />

        <link rel="icon" href="/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: product?.name,
              image: [product?.image],
              description: product?.desc,
              sku: product?.sku || "N/A",
              brand: {
                "@type": "Organization",
                name: "Sigma Machines",
              },
              offers: {
                "@type": "Offer",
                url: `https://sigmamachines.net/products/${product?.slug}`,
                priceCurrency: "USD",
                price: product?.price || "0",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </Head>

      <div className="relative">
        <div className={`${styles.bg_products} `}>
          <p className="relative z-10 text-center text-3xl max-lg:text-xl text-white font-semibold pt-36 max-lg:pt-32 max-lg:px-5">
            Sigma Machines Products ( {product?.name} )
          </p>
          <p className="text-center lg:text-lg text-[#a9a9a9] mt-3 relative z-10 max-lg:px-5">
            {product?.overview || "HIGH SPEED, HIGH ACCURACY, HIGH EFFICIENCY"}
          </p>
        </div>

        {/* <div className="bg-[#00000085] h-[350px] w-full absolute top-0 z-0"></div> */}
      </div>

      <div className="px-24 max-lg:px-10">
        {/* {
          
          product?.id == "20"  ? (
          <p className="mt-5 mb-5 text-lg text-[#54545f]">{product?.desc}</p>
        ) : (
          ""
        )} */}

        {/* {
          
          product?.id == "21" ? (
          <>
             {
            // product?.id == "10" ? (
            //   <>
            //     <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4 mt-9 mb-9 relative">
            //       {productsWelding.map((product) => (
            //         <div>
            //           <Product_comp
            //             key={product.id}
            //             title={product.name}
            //             href={`/products/${product.id}`}
            //             background={{
            //               backgroundImage: `url(${product.image})`,
            //             }}
            //             method={product.title}
            //             description={truncatedDesc}
            //           />
            //         </div>
            //       ))}
            //     </div>
            //   </>
            // ) :
            //  product?.id == "11" ? (
            //   <>
            //     <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4 mt-9 mb-9 relative">
            //       {productsPlasma.map((product) => (
            //         <div>
            //           <Product_comp
            //             key={product.id}
            //             title={product.name}
            //             href={`/products/${product.id}`}
            //             background={{
            //               backgroundImage: `url(${product.image})`,
            //             }}
            //             method={product.title}
            //             description={truncatedDesc}
            //           />
            //         </div>
            //       ))}
            //     </div>
            //   </>
            // ) :
            //  product?.id == "20" ? (
            //   <>
            //     <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4 mt-9 mb-9 relative">
            //       {productsPress.map((product) => (
            //         <div>
            //           <Product_comp
            //             key={product.id}
            //             title={product.name}
            //             href={`/products/${product.id}`}
            //             background={{
            //               backgroundImage: `url(${product.image})`,
            //             }}
            //             method={product.title}
            //             description={truncatedDesc}
            //           />
            //         </div>
            //       ))}
            //     </div>
            //   </>
            // ) : 
            // product?.id == "21" ? (
            //   <>
            //     <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4 mt-9 mb-9 relative">
            //       {productsShearing.map((product) => (
            //         <div>
            //           <Product_comp
            //             key={product.id}
            //             title={product.name}
            //             href={`/products/${product.id}`}
            //             background={{
            //               backgroundImage: `url(${product.image})`,
            //             }}
            //             method={product.title}
            //             description={truncatedDesc}
            //           />
            //         </div>
            //       ))}
            //     </div>
            //   </>
            // ) : (
            //   ""
            // )}
          </>
        ) : ( */}
          
            <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-7 mb-7">
              <div className="col-span-2">
                <img
                  src={product?.image}
                  width={imageWidth}
                  height={imageHight}
                  className="rounded-lg max-lg:mb-5"
                />
              </div>
              <div>
                <div>
                  <div className="bg-[#f7f4f775] p-12 rounded-3xl">
                    <h3 className="text-[#d9d640] text-2xl tracking-widest">
                      {product?.name}
                    </h3>

                    <h3 className="text-[#1c1c1c] text-xl mt-5">
                      Working Area
                    </h3>

                    {product?.details?.workingArea?.map((w, index) => (
                      <div key={index}>
                        <p className="text-[#8d8e99] text-xl mt-2">{w}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex bg-[#3baec1] text-white rounded-2xl mt-5 p-5 text-xl">
                    <a href={mailtoLink} className="flex items-center">
                      <MailOutlined />
                      <p className="ml-4">Email us</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-7 mb-7">
              <div className="col-span-2 lg:ml-6">
                {/* <h3 className="text-[#1c1c1c] text-3xl">Product Parameters</h3> */}
                <p className="mt-5 mb-5 text-lg text-[#54545f]">
                  {product?.desc}
                </p>

                <div className="mt-12">
                  <h3 className="mt-8 text-3xl font-semibold text-[#1c1c1c]">Key Features</h3>

                  <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-6 mt-6">
                    {product?.details?.keyFeatures?.map((section) => (
                      <div key={section.title} className="bg-[#d9d64029] p-5 rounded-3xl">
                        {/* <h3 className="text-[#1c1c1c] text-xl font-semibold">{section.title}</h3> */}

                        <div className="w-fit text-[17px] font-[700] p-[2px] rounded-full bg-gradient-to-r from-black via-[#c5c23a] to-[#d9d640]">
                          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2">
                            <div
                              className="rounded-full p-1"
                              style={{
                                background:
                                  "linear-gradient(to top right, #d9d640, #c5c23a, #d9d640)",
                              }}
                            ></div>
                            <p className="">{section.title}</p>
                          </div>
                        </div>

                        {section.points.map((p) => (
                          <p className="text-[#74757e] text-lg mt-2" key={p}>{p}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div className="mt-12">
                  <h2 className="text-3xl font-semibold  text-[#1c1c1c] text-center"> Applications</h2>
                  <hr className={`${styles.line} mx-auto text-center mt-3 mb-6`} />

                  <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-6 mt-9">
                    {product?.details?.applications?.map((section) => (
                      <div key={section.category}>
                        <h3 className="text-[#1c1c1c] text-xl text-center">{section.category}</h3>
                        {section.items.map((i) => (
                          <p className="text-[#8d8e99] text-lg mt-2 text-center" key={i}>{i}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div> */}

                <div className="mt-12">
                  <h2 className="text-3xl font-semibold text-[#1c1c1c] text-center">
                    Applications
                  </h2>
                  <hr className={`${styles.line} mx-auto text-center mt-3 mb-10`} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {product?.details?.applications?.map((section, idx) => (
                      <div
                        key={section.category}
                        className="
          relative group p-7 rounded-3xl border border-gray-200 
          bg-white/60 backdrop-blur-xl shadow-md 
          hover:shadow-xl transition-all duration-300 hover:-translate-y-1
        "
                      >
                        {/* Circle Number */}
                        <div className="
          absolute -top-4 -left-4 bg-gradient-to-br from-[#d9d640] via-[#c5c23a] to-[#d9d640]
          text-white w-10 h-10 rounded-full flex items-center justify-center
          shadow-md font-semibold
        ">
                          {idx + 1}
                        </div>

                        {/* Category Title */}
                        <h3 className="text-[#1c1c1c] text-xl font-semibold text-center mb-5 
          group-hover:text-[#c5c23a] transition-all duration-300">
                          {section.category}
                        </h3>

                        {/* Items List */}
                        <div className="flex flex-col gap-3">
                          {section.items.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-3 text-lg 
                text-[#6a6b75] group-hover:text-[#50515a] transition-all"
                            >
                              <span className="
                w-2.5 h-2.5 rounded-full 
                bg-gradient-to-br from-[#d9d640] to-[#c5c23a]
              "></span>
                              <p>{item}</p>
                            </div>
                          ))}
                        </div>

                        {/* Hover Glow Border Effect */}
                        <div className="
          absolute inset-0 rounded-3xl border-2 border-transparent 
          group-hover:border-[#d9d640] transition-all duration-300 pointer-events-none
        "></div>
                      </div>
                    ))}
                  </div>
                </div>


                <div className="mt-12">
                  <h2 className="text-3xl font-semibold text-[#1c1c1c] text-center">
                    Advantages
                  </h2>
                  <hr className={`${styles.line} mx-auto text-center mt-3 mb-6`} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product?.details?.advantages?.map((adv, i) => (
                      <div
                        key={i}
                        className="group p-6 rounded-2xl border-2 border-black bg-white shadow-sm 
                   hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-center gap-4">
                          {/* Icon */}
                          <div className=" flex items-center justify-center rounded-xl 
                          bg-gradient-to-br from-[#d9d640] via-[#c5c23a] to-[#d9d640] 
                          text-white text-2xl font-bold shadow-md group-hover:scale-110 
                          transition-all duration-300">
                            <p className="w-10 h-10 flex mx-auto text-center justify-center items-center">✓</p>
                          </div>

                          {/* Text */}
                          <p className="text-lg font-medium text-[#333] leading-relaxed">
                            {adv}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>


                {/* <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-1">
                  <h3 className="text-xl">Model</h3>
                  <p className="text-lg text-[#54545f]">1325, 2040, 2060</p>
                </div> */}
                {/* <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-3">
                  <h3 className="text-xl">Working Size</h3>
                  <p className="text-lg text-[#54545f] col-span-2">
                    3000×1500mm, 4000x1500mm, 6000x1500mm
                  </p>
                </div> */}
                {/* <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-3">
                  <h3 className="text-xl">Laser Power</h3>
                  <p className="text-lg text-[#54545f]">1000-3000w</p>
                </div>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-3">
                  <h3 className="text-xl">Linkage speed</h3>
                  <p className="text-lg text-[#54545f]">100m/min</p>
                </div>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-3">
                  <h3 className="text-xl">Positioning Accuracy</h3>
                  <p className="text-lg text-[#54545f]">±0.05mm</p>
                </div>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-3">
                  <h3 className="text-xl">Repeatability</h3>
                  <p className="text-lg text-[#54545f]">±0.03mm</p>
                </div>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-1 mt-3">
                  <h3 className="text-xl">Maximum Acceleration</h3>
                  <p className="text-lg text-[#54545f]">1.0G</p>
                </div> */}
              </div>
            </div>
          
        

        {/* <div>
          <h2 className="text-center text-4xl mt-9">Features</h2>
          <hr className={`${styles.line} mx-auto text-center mt-3`} />
          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-9">
            <div>
              <h3 className="text-2xl mt-5 mb-5">
                Machine Body--Welding Machine Body
              </h3>
              <div className="flex items-center">
                <CaretRightOutlined />
                <p className="ml-3 text-xl">
                  High strength, not easily deformed
                </p>
              </div>
              <p className="text-lg mt-2 text-[#54545f]">
                The following features ensure that the bed will not be deformed
                for 20 years like high strength, good stability and strong
                tensile strength.
              </p>
              <div className="flex items-center mt-5">
                <CaretRightOutlined />
                <p className="ml-3 text-xl">More stable</p>
              </div>
              <p className="text-lg mt-2 text-[#54545f]">
                The rectangular tube has a wall thickness of 6 mm and the entire
                body weighs 3,000 kg.
              </p>
            </div>
            <div className="mx-auto">
              <Image
                src="/../products/9.png"
                width={400}
                height={300}
                className="rounded-lg mx-auto"
              />
            </div>
          </div>
        </div> */}
      </div>

      <div className="px-24 max-xl:px-10">
        <h2 className="text-4xl mt-14">You Also Might Like</h2>
        <hr className={`${styles.line} mt-3`} />

        <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4 mt-9 mb-9 relative">
          {visibleProducts.map((product) => (
            <div>
              <Product_comp
                key={product.id}
                title={product.name}
                href={`/products/${product.id}`}
                background={{ backgroundImage: `url(${product.image})` }}
                method={product.title}
                description={product.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
