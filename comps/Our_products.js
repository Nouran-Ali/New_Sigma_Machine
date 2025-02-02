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
      image: "/../products/20.webp",
      title: "Production Process Of ATC CNC Router",
      desc: "The ATC CNC router is designed for complex woodworking processes by utilizing automatic tool changes. With options like linear and carousel tool magazines, it supports efficient cutting, carving, engraving, and drilling for materials such as wood, MDF, acrylic, plastic, and even soft metals. Ideal for precision and time-saving operations, it can be customized with additional axes for more advanced functionalities.",
    },
    {
      id: 2,
      name: "4 Axis CNC Router Machine",
      image: "/../products/21.webp",
      title: "Production Process Of 4 Axis CNC Router Machine",
      desc: "The 4-axis CNC router introduces a rotating spindle that enhances its ability to perform 3D machining, such as arc milling and cutting. It is perfect for intricate designs on cylindrical or curved surfaces and excels in producing detailed carvings and reliefs. Its versatility makes it suitable for various industries requiring precision and efficiency.",
    },
    {
      id: 17,
      name: "2023 Top Affordable JNP1530 CNC Plasma Cutting Table for Sale",
      image: "/../products/33.webp",
      title: "JNP1530 CNC Plasma Cutting Machine",
      desc: "JNP1530 CNC plasma cutting table is an automatic power tool with CNC plasma cutting system,CNC plasma table is mainly used for full sheet metal cutting in home shop, small shop, school education, or industrial manufacturing, suitable for sheet metal cutting, kitchenware, components, decorations industry, ship building, construction equipment, transport equipment, transport equipment, bridge building, wind power, structural steel, agriculture machinery, environmental protection equipment, etc.",
    },
    {
      id: 18,
      name: "JNP1530R Sheet Metal & Tube Plasma Cutter on Sale",
      image: "/../products/34.webp",
      title: "JNP1530R Sheet Metal&Tube Plasma Machine",
      desc: "JNP1530R CNC plasma cutting machine can do All kinds of metal sheet and tube materials such as steel, copper,aluminum and stainless steel can be processed.Applies to iron plate, aluminum plate galvanized sheet, White Steel plate, Titanium plates, and so on like the sheet metal. Ship Building, Construction Equipment, Transport Equipment, Aerospace Industry, Bridge Building, military industrial, wind power,Structural Steel, Boiler containers, Agriculture Machinery, Chassis electrical cabinets, Elevator manufacturers, Textile Machinery, Environmental protection equipment,ect.",
    },
    {
      id: 19,
      name: "JNP2040 CNC Plasma Cutting Machine Gantry Model",
      image: "/../products/35.webp",
      title: "CNC Plasma Cutting Machine Gantry",
      desc: "All kinds of metal materials such as steel, copper,aluminum and stainless steel can be processed.Applies to iron plate, aluminum plate galvanized sheet, White Steel plate, Titanium plates, and so on like the sheet metal. Ship Building, Construction Equipment, Transport Equipment, Aerospace Industry, Bridge Building, military industrial, wind power,Structural Steel, Boiler containers, Agriculture Machinery, Chassis electrical cabinets, Elevator manufacturers, Textile Machinery, Environmental protection equipment,ect.",
    },
    {
      id: 4,
      name: "CNC Wood Router",
      image: "/../products/23.webp",
      title: "Production Process Of CNC Wood Router",
      desc: "The CNC wood router is a versatile tool for creating intricate designs and precise cuts on materials like wood, MDF, plastics, and acrylic. It is commonly used in woodworking projects such as furniture making, sign creation, and decorative carving. Customization options ensure it meets various processing requirements efficiently.",
    },
    {
      id: 5,
      name: "5 Axis CNC Router Machine",
      image: "/../products/24.webp",
      title: "Production Process Of 5 Axis CNC Router Machine",
      desc: "The 5-axis CNC router offers unmatched flexibility by enabling simultaneous movement along five axes. This allows it to handle complex geometries and reduce project time by machining multiple surfaces in one setup. It is ideal for high-precision tasks in industries like aerospace and advanced manufacturing.",
    },
    {
      id: 6,
      name: "Fiber Laser Cutting Machine",
      image: "/../products/25.webp",
      title: "Production Details Of Fiber Laser Cutting Machine",
      desc: "The fiber laser cutting machine provides a powerful solution for cutting metals with precision and speed. Its high energy efficiency and ability to handle intricate designs make it a go-to choice for industries like automotive, shipbuilding, and aerospace. Cleaner cuts and minimal thermal deformation are its key advantages.",
    },
    {
      id: 28,
      name: "QC11K E21S 8x6000mm Hydraulic Guillotine Shearing Machine",
      image: "/../products/48.webp",
      title: "QC11K E21S 8x6000mm Hydraulic Guillotine Shearing Machine",
      desc: "Optional Numeric Control System Nanjing Estun E21S E200PS Back gauge controlling, General motors control, Intelligent positioning, Two programmable digital output; Work piece counting 40 program memory 25 steps for each program; Unilateral positioning, Concession function One key to parameter backup and recovery, Metric system, Chinese/English.",
    },
    {
      id: 29,
      name: "Swing beam shears",
      image: "/../products/49.webp",
      title: "Swing Beam shearing Machine",
      desc: "1.rack,knife,vibration to eliminate stress, welding machine, durable. 2.advanced integrated hydraulic system, good reliiability. 3.three-point support rolling guide to eliminate the bearing clearance, to ensure the quality of shear. 4.electric blade gap adjustment, quick and accurate. 5.on the full used of the blade edge on all sides,the increased use of time. 6.shear angle can be electrically adjusted,reducing the amout of shear deformation plate. 7.after the block, rv reducer electric adjudtment, electronic digital display, accurate ang reliable.",
    },
    {
      id: 30,
      name: "QC11K DAC360 16x3200 Servo Guillotine Shearing Machine",
      image: "/../products/50.webp",
      title: "QC11K DAC360 16x3200 Servo Guillotine Shearing Machine",
      desc: "Optional Numeric Control System Nanjing Estun E21S E200PS Back gauge controlling, General motors control, Intelligent positioning, Two programmable digital output; Work piece counting 40 program memory 25 steps for each program; Unilateral positioning; Concession function One key to parameter backup and recovery, Metric system, Chinese/English.",
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

      <img
        src="../home/abstract_shape.png"
        width={130}
        height={130}
        className="absolute right-1 bottom-1 max-lg:w-[100px]"
      />
    </div>
  );
};

export default Our_products;
