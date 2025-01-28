import React from "react";
import styles from "../../styles/Resources.module.css";
import { Carousel } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

const contentStyle = {
  height: "260px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Maintenance = () => {
  const router = useRouter();

  const { id } = router.query;

  const items = [
    {
      id: 1,
      name: "Fiber laser cutting machine",
      image: "/3.jpeg",
      desc: "The JNTECH fiber laser cutting machine is a high-performance metal processing solution with up to 60kW power and a maximum cutting thickness of 200mm. It is ideal for industries such as automotive, aerospace, metal fabrication and shipbuilding, providing precision, speed and versatility for cutting a wide range of metals. Compared to traditional methods such as flame and plasma cutting, it provides cleaner cuts, smooth edges and minimal thermal deformation, which is ideal for complex shapes and intricate designs. Fiber lasers also ensure faster cutting speeds, consistent quality and lower operating costs, providing businesses with excellent results and higher productivity.",
    },
    {
      id: 2,
      name: "Router machines",
      image: "/4.jpeg",
      desc: "ATC CNC router machine has two types of tool magazines: linear and carousel. Both of them can be installed beside the spindle or on the side of the machine bed. By changing different tools automatically, the ATC CNC machine can complete multiple and complex woodworking processes at one operation. In order to complete multiple processing procedures in one clamping of the workpiece, shorten the auxiliary time, and reduce the error caused by multiple installations of the workpiece. It can realize cutting, carving, engraving, drilling, routing, grooving, and pocketing of wood, MDF, acrylic, PVC, plastic, foam, stone, soft metal and other materials. It is also called ATC CNC wood carving machine, wood engraving machine. Basic type 3 Axis ATC CNC can be upgraded to be 4 Axis, 5 Axis, Rotary type, etc.",
    },
    {
      id: 3,
      name: "Plasma machine maintenance",
      image: "/5.jpeg",
      desc: "What is CNC Plasma Cutting Machine? CNC plasma cutting refers to the cutting of metals using a plasma torch controlled from a computer. Plasma cutters operate by forcing a gas or compressed air at high speeds through a nozzle. Once an electric arc is introduced to the gas, ionized gas or plasma is created, the fourth state of matter. It, in turn, cuts through the metal. CNC Plasma cutter or CNC Plasma cutting machine is mainly used for carbon steel, metal, steel and steel tube cutting with 0-50mm thickness and stainless steel 0-20mm cutting. It is a cost-effective machine for metal cutting and the price is lower than the Fiber laser or YAG laser machines but it can cut very thick of steel and with very good cutting performance.",
    },
    {
      id: 4,
      name: "Fiber laser cutting rotary",
      image: "/6.jpeg",
      desc: "No have description",
    },
    {
      id: 6,
      name: "Marker",
      image: "/8.jpeg",
      desc: "CO2 laser marking & engraving machines deliver superior code quality along with reliability across a wide array of material including non-metallic materials, such as paper, leather, cloth, plexiglass, resin, acrylic, wood, rubber, ceramic, crystal, jade non-metallic materials and partial metal materials.",
    },
    {
      id: 7,
      name: "Welding yag",
      image: "/9.jpeg",
      desc: "The fiber transmission current feedback laser welding machine is widely used in the precision welding of optical communication devices, IT, medical treatment, electronics, batteries, fiber couplers, picture tube electron guns, metal parts, mobile phone vibration motors, precision parts of clocks and watches, car lights and so on.",
    },
  ];

  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <div className="px-24 max-xl:px-10 mt-20 max-xl:mt-10 mb-24 text-center">
        <h2 className="text-2xl text-[#212529]">Item not found</h2>
        <p className="mt-4 text-[#677289]">
          Please check the URL and try again.
        </p>
      </div>
    );
  }

  return (
    <div className="px-24 max-xl:px-10 mt-14 max-xl:mt-10 mb-24">
      <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-4 max-xl:flex max-xl:flex-wrap-reverse">
        <div className={styles.bg}>
          <Carousel autoplay className="text-center">
            <div>
              <Image
                src={item.image}
                width={300}
                height={90}
                className="rounded-xl mx-auto mt-8"
              />
            </div>
            <div>
              <Image
                src={item.image}
                width={300}
                height={90}
                className="rounded-xl mx-auto mt-8"
              />
            </div>
          </Carousel>
        </div>
        <div className="text-lg text-[#677289]">
          <h3 className="text-3xl text-[#212529]">{item.name}</h3>
          <p className="mt-4">{item.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
