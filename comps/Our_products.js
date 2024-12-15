import React from "react";
import Product from "./Product_comp";
import styles from "../styles/Product.module.css";
import Link from "next/link";
import { RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import Image from "next/image";

const Our_products = () => {
  const products = [
    {
      id: 1,
      name: "ATC CNC Router",
      image: "/../products/20.png",
      title: "Production Process Of ATC CNC Router",
      desc: "The ATC CNC router is designed for complex woodworking processes by utilizing automatic tool changes. With options like linear and carousel tool magazines, it supports efficient cutting, carving, engraving, and drilling for materials such as wood, MDF, acrylic, plastic, and even soft metals. Ideal for precision and time-saving operations, it can be customized with additional axes for more advanced functionalities.",
    },
    {
      id: 2,
      name: "4 Axis CNC Router Machine",
      image: "/../products/21.png",
      title: "Production Process Of 4 Axis CNC Router Machine",
      desc: "The 4-axis CNC router introduces a rotating spindle that enhances its ability to perform 3D machining, such as arc milling and cutting. It is perfect for intricate designs on cylindrical or curved surfaces and excels in producing detailed carvings and reliefs. Its versatility makes it suitable for various industries requiring precision and efficiency.",
    },
    {
      id: 3,
      name: "CNC Aluminum Milling Machine",
      image: "/../products/22.png",
      title: "Production Process Of CNC Aluminum Milling Machine",
      desc: "Specialized for aluminum, the CNC aluminum milling machine delivers high precision and durability for applications in the automotive, aerospace, and marine industries. With advanced mechanisms like ball screw transmission and servo motors, this machine ensures accurate cutting, carving, and engraving for lightweight yet robust designs.",
    },
    {
      id: 4,
      name: "CNC Wood Router",
      image: "/../products/23.png",
      title: "Production Process Of CNC Wood Router",
      desc: "The CNC wood router is a versatile tool for creating intricate designs and precise cuts on materials like wood, MDF, plastics, and acrylic. It is commonly used in woodworking projects such as furniture making, sign creation, and decorative carving. Customization options ensure it meets various processing requirements efficiently.",
    },
    {
      id: 5,
      name: "5 Axis CNC Router Machine",
      image: "/../products/24.png",
      title: "Production Process Of 5 Axis CNC Router Machine",
      desc: "The 5-axis CNC router offers unmatched flexibility by enabling simultaneous movement along five axes. This allows it to handle complex geometries and reduce project time by machining multiple surfaces in one setup. It is ideal for high-precision tasks in industries like aerospace and advanced manufacturing.",
    },
    {
      id: 6,
      name: "Fiber Laser Cutting Machine",
      image: "/../products/25.png",
      title: "Production Details Of Fiber Laser Cutting Machine",
      desc: "The fiber laser cutting machine provides a powerful solution for cutting metals with precision and speed. Its high energy efficiency and ability to handle intricate designs make it a go-to choice for industries like automotive, shipbuilding, and aerospace. Cleaner cuts and minimal thermal deformation are its key advantages.",
    },
    {
      id: 7,
      name: "Co2 Laser Cutting Machine",
      image: "/../products/26.png",
      title: "Production Process Of Co2 Laser Cutting Machine",
      desc: "The CO2 laser cutter is a versatile machine ideal for engraving and cutting materials like wood, acrylic, leather, and thin metals. Popular for both industrial and small business applications, it delivers high-quality results with precision and ease of use, making it a reliable choice for detailed projects.",
    },
    {
      id: 8,
      name: "Fiber Laser Marking Machine",
      image: "/../products/27.png",
      title: "Production Process Of Fiber Laser Marking Machine",
      desc: "The fiber laser marking machine offers high-precision engraving for metals, plastics, and other surfaces. With its ability to create permanent and detailed marks, it is widely used in industries like manufacturing, jewelry, and education. Advanced options like rotary attachments enable versatile applications, including cylindrical engraving.",
    },
    {
      id: 9,
      name: "UV Laser Marking Machine",
      image: "/../products/27.png",
      title: "Production Process Of UV Laser Marking Machine",
      desc: "The UV laser marking machine specializes in ultra-fine engraving and marking, making it ideal for sensitive materials. With minimal thermal impact, it is perfect for applications like food packaging, electronics, and glassware. Its precision and adaptability cater to high-end processing needs.",
    },
    {
      id: 10,
      name: "Laser Welding Machine",
      image: "",
      title: "Laser Welding Machine",
      desc: "The laser welding machine provides advanced solutions for joining various metals like stainless steel, aluminum, and titanium. With high precision and speed, it is widely used in industries such as electronics, medical equipment, and automotive manufacturing. Customizable options ensure it meets diverse welding requirements.",
    },
    {
      id: 11,
      name: "CNC Plasma Cutting Machine",
      image: "",
      title: "CNC Plasma Cutting Machine",
      desc: "The CNC plasma cutting machine is designed for cutting conductive metals like steel, aluminum, and copper. With its high-speed performance and precision, it is perfect for sheet metal fabrication and industrial projects. Its energy-efficient design ensures consistent and cost-effective results.",
    },
  ];

  return (
    <div className="bg-[#ebeb1914] pt-14 pb-9 relative">
      <div className="px-24 max-xl:px-10">
        <div className="">
          <div className="relative">
            <div className="bg-[#f3ec5e24] p-6 rounded-full absolute -left-3 -top-3"></div>
            <p className="text-[#d9d640] text-lg tracking-widest uppercase font-medium">
              OUR PRODUCTS
            </p>
          </div>
          <h1 className="text-[#1c1c1c] text-xl mt-4">
            We offer a suitable laser machine for virtually any application. The
            range includes laser engravers, laser cutters, large-format laser
            cutting machines, and industrial marking lasers.
          </h1>
        </div>
        <Carousel autoplay>
          <div>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 mt-10">
              {products.slice(0, 3).map((product) => {
                const truncatedDesc =
                  product.desc.length > 100
                    ? product.desc.substring(0, 100) + "..."
                    : product.desc;

                return (
                  <Product
                    key={product.id}
                    title={product.name}
                    href={`/products/${product.id}`}
                    background={{ backgroundImage: `url(${product.image})` }}
                    method={product.title}
                    description={truncatedDesc}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 mt-10">
              {products.slice(4, 7).map((product) => {
                const truncatedDesc =
                  product.desc.length > 100
                    ? product.desc.substring(0, 100) + "..."
                    : product.desc;

                return (
                  <Product
                    key={product.id}
                    title={product.name}
                    href={`/products/${product.id}`}
                    background={{ backgroundImage: `url(${product.image})` }}
                    method={product.title}
                    description={truncatedDesc}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 mt-10">
              {products.slice(7, 10).map((product) => {
                const truncatedDesc =
                  product.desc.length > 100
                    ? product.desc.substring(0, 100) + "..."
                    : product.desc;

                return (
                  <Product
                    key={product.id}
                    title={product.name}
                    href={`/products/${product.id}`}
                    background={{ backgroundImage: `url(${product.image})` }}
                    method={product.title}
                    description={truncatedDesc}
                  />
                );
              })}
            </div>
          </div>
        </Carousel>
        <div className="mx-auto flex justify-center mt-14">
          <Link href="/" className={`${styles.btn_more} flex items-center`}>
            More
            <RightOutlined className={`ml-5 ${styles.arrow}`} />
          </Link>
        </div>
      </div>

      <Image
        src="/../home/abstract_shape.png"
        width={130}
        height={130}
        className="absolute right-1 bottom-1"
      />
    </div>
  );
};

export default Our_products;
