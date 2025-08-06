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
          <p className="text-center text-3xl max-lg:text-xl text-white font-semibold pt-36 max-lg:pt-32 relative z-10 max-lg:px-5">
            Sigma Machines Products ( {product?.name} )
          </p>
          <p className="text-center lg:text-lg text-[#a9a9a9] mt-3 relative z-10 max-lg:px-5">
            HIGH SPEED, HIGH ACCURACY, HIGH EFFICIENCY
          </p>
        </div>

        {/* <div className="bg-[#00000085] h-[350px] w-full absolute top-0 z-0"></div> */}
      </div>

      <div className="px-24 max-lg:px-10">
        {product?.id == "10" ||
        product?.id == "11" ||
        product?.id == "20" ||
        product?.id == "21" ? (
          <p className="mt-5 mb-5 text-lg text-[#54545f]">{product?.desc}</p>
        ) : (
          ""
        )}

        {product?.id == "10" ||
        product?.id == "11" ||
        product?.id == "20" ||
        product?.id == "21" ? (
          <>
            {product?.id == "10" ? (
              <>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4 mt-9 mb-9 relative">
                  {productsWelding.map((product) => (
                    <div>
                      <Product_comp
                        key={product.id}
                        title={product.name}
                        href={`/products/${product.id}`}
                        background={{
                          backgroundImage: `url(${product.image})`,
                        }}
                        method={product.title}
                        description={truncatedDesc}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : product?.id == "11" ? (
              <>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4 mt-9 mb-9 relative">
                  {productsPlasma.map((product) => (
                    <div>
                      <Product_comp
                        key={product.id}
                        title={product.name}
                        href={`/products/${product.id}`}
                        background={{
                          backgroundImage: `url(${product.image})`,
                        }}
                        method={product.title}
                        description={truncatedDesc}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : product?.id == "20" ? (
              <>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4 mt-9 mb-9 relative">
                  {productsPress.map((product) => (
                    <div>
                      <Product_comp
                        key={product.id}
                        title={product.name}
                        href={`/products/${product.id}`}
                        background={{
                          backgroundImage: `url(${product.image})`,
                        }}
                        method={product.title}
                        description={truncatedDesc}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : product?.id == "21" ? (
              <>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4 mt-9 mb-9 relative">
                  {productsShearing.map((product) => (
                    <div>
                      <Product_comp
                        key={product.id}
                        title={product.name}
                        href={`/products/${product.id}`}
                        background={{
                          backgroundImage: `url(${product.image})`,
                        }}
                        method={product.title}
                        description={truncatedDesc}
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          <>
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
                      3015S Model Economic {product?.name}
                    </h3>

                    <h3 className="text-[#1c1c1c] text-xl mt-5">Model</h3>
                    <p className="text-[#8d8e99] text-xl mt-2">SG-3015S</p>

                    <h3 className="text-[#1c1c1c] text-xl mt-5">
                      Working Area
                    </h3>
                    <p className="text-[#8d8e99] text-xl mt-2">1530*3050mm</p>

                    <h3 className="text-[#1c1c1c] text-xl mt-5">Speed</h3>
                    <p className="text-[#8d8e99] text-xl mt-2">50m/min</p>
                  </div>
                  <div className="flex bg-[#23b85e] text-white rounded-2xl mt-5 p-5 text-xl">
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
                <h3 className="text-[#1c1c1c] text-3xl">Product Parameters</h3>
                <p className="mt-5 mb-5 text-lg text-[#54545f]">
                  {product?.desc}
                </p>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-1">
                  <h3 className="text-xl">Model</h3>
                  <p className="text-lg text-[#54545f]">1325, 2040, 2060</p>
                </div>
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
          </>
        )}

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

      {/* <div className="bg-[#f2f5fb] py-8">
        <div className="px-24 max-xl:px-10">
          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-9">
            <div className="mx-auto">
              <Image
                src="/../products/10.png"
                width={400}
                height={300}
                className="rounded-lg mx-auto"
              />
            </div>

            <div>
              <h3 className="text-2xl mt-5 mb-5">
                Laser Head--Swiss Laser Head--Raytools Brand
              </h3>
              <div className="flex items-center text-[#54545f]">
                <CaretRightOutlined />
                <p className="ml-3 text-xl">
                  Collimating Lens and Focal Lens Adopt Compound Lens,to Obtain
                  the Obtimal Optical Quality and the Cutting Effect.{" "}
                </p>
              </div>
              <div className="flex items-center mt-5 text-[#54545f]">
                <CaretRightOutlined />
                <p className="ml-3 text-xl">
                  Completely Sealed Internal Structure of Laser Head can Avoid
                  Optical Part Polluted by Dust.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-24 max-xl:px-10">
        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-9 mb-9">
          <div>
            <h3 className="text-2xl mt-5 mb-5">
              Aviation Aluminium Cross-Beam
            </h3>
            <div className="flex items-center">
              <CaretRightOutlined />
              <p className="ml-3 text-xl">High toughness and ductility</p>
            </div>
            <p className="text-lg mt-2 text-[#54545f]">
              The aerospace industry extrudes aluminum profiles and undergoes
              fine processing after extrusion molding and quenching heat aging
              to make the overall rigidity and surface quality of the beam very
              good.
            </p>

            <div className="flex items-center mt-5">
              <CaretRightOutlined />
              <p className="ml-3 text-xl">High speed and precise cutting</p>
            </div>
            <p className="text-lg mt-2 text-[#54545f]">
              The beam structure optimized by finite element analysis, based on
              the metal characteristics of aluminum alloy, is
              corrosion-resistant, lightweight, high rigidity, which guarantees
              the high-speed movement during laser processing, and high-speed
              cutting of various patterns can be achieved under the condition of
              satisfying accuracy.
            </p>

            <div className="flex items-center mt-5">
              <CaretRightOutlined />
              <p className="ml-3 text-xl">More efficient</p>
            </div>
            <p className="text-lg mt-2 text-[#54545f]">
              The aluminum profile beam of the aerospace industry allows the
              equipment to have efficient dynamic performance, greatly improving
              processing efficiency while ensuring processing quality.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              src="/../products/11.png"
              width={400}
              height={300}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#f2f5fb] py-8">
        <div className="px-24 max-xl:px-10">
          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-9">
            <div className="mx-auto">
              <Image
                src="/../products/12.png"
                width={400}
                height={300}
                className="rounded-lg mx-auto"
              />
            </div>

            <div>
              <h3 className="text-2xl mt-5 mb-5">
                Water Cooling System–Hanli Brand
              </h3>
              <div className="flex items-center text-[#54545f]">
                <CaretRightOutlined />
                <p className="ml-3 text-xl">
                  Dual Cooling Function:Laser Source Cooling, Laser Head
                  Cooling.
                </p>
              </div>
              <div className="flex items-center mt-5 text-[#54545f]">
                <CaretRightOutlined />
                <p className="ml-3 text-xl">
                  Multiple Protection Functions,Passive Alarm Terminals and
                  Remote Control Terminals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-24 max-xl:px-10">
        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-9 mb-9">
          <div>
            <p className="text-lg mt-9 text-[#54545f]">
              Ruijie fiber laser cutting machine adopts international famous
              brands, such as Taiwan HIWIN guide rail & YYC rack, Japanese
              YASKAWA servo motor motor & SHIMPO reducer, which guarantees high
              running speed, acceleration, accuracy and stability.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              src="/../products/13.png"
              width={400}
              height={300}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#f2f5fb] py-8">
        <div className="px-24 max-xl:px-10">
          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4 mt-9">
            <div className="mx-auto">
              <Image
                src="/../products/14.png"
                width={400}
                height={300}
                className="rounded-lg mx-auto"
              />
            </div>

            <div>
              <h3 className="text-2xl mt-5 mb-5">IPAD Designing Screen</h3>
              <div className="flex items-center text-[#54545f]">
                <CaretRightOutlined />
                <p className="ml-3 text-xl">
                  Use the high definition toughened glass screen, more exquisite
                  and delicate, the operation is smoother.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="px-24 max-xl:px-10">
        <h2 className="text-center text-4xl mt-9">Applications</h2>
        <hr className={`${styles.line} mx-auto text-center mt-3`} />

        <p className="mt-5 text-center">
          Widely used in advertising, high pressure / low voltage electrical
          cabinet production, textile machinery accessories, kitchen appliances,
          cars, machinery, elevators, electrical accessories, spring coil
          pieces, metro line parts and other industries.{" "}
        </p>
        <div className="grid grid-cols-3 max-xl:grid-cols-2 gap-4 mt-9">
          <div className="mx-auto">
            <Image
              src="/../products/15.jpg"
              width={imageWidthTwo}
              height={imageHight}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      </div>   */}

      <div className="px-24 max-xl:px-10">
        <h2 className="text-4xl mt-9">You Also Might Like</h2>
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
