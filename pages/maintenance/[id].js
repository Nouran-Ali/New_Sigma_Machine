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
      desc: "any",
    },
    {
      id: 2,
      name: "Router machines",
      image: "/4.jpeg",
      desc: "any",
    },
    {
      id: 3,
      name: "Plasma machine maintenance",
      image: "/5.jpeg",
      desc: "any",
    },
    {
      id: 4,
      name: "Fiber laser cutting rotary",
      image: "/6.jpeg",
      desc: "any",
    },
    {
      id: 6,
      name: "Marker",
      image: "/8.jpeg",
      desc: "any",
    },
    {
      id: 7,
      name: "Welding yag",
      image: "/9.jpeg",
      desc: "any",
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
