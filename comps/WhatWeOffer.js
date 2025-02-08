import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatWeOffer = () => {
  return (
    <div className="px-24 max-xl:px-10 mt-24 mb-24">
      <h1 className="text-center text-3xl text-[#1c1c1c] font-semibold">
        WHAT WE OFFER
      </h1>
      <div className="grid grid-cols-4 max-xl:grid-cols-1 gap-4 mt-12">
        <Link href="/products/6" className="flex items-center">
          <div className="bg-[#d6d64014] rounded-full mr-5 p-6 w-[110px] h-[100px] max-lg:w-[90px] max-lg:h-[80px] flex justify-center items-center">
            <img
              src="../home/laser-cutting-machine.webp"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-lg text-[#54545f]">
              Fiber laser cutting machine
            </h3>
          </div>
        </Link>
        <Link href="/products/7" className="flex items-center justify-center">
          <div className="bg-[#d6d64014] rounded-full mr-5 p-6 w-[140px] h-[100px] max-lg:w-[110px] max-lg:h-[80px] flex justify-center items-center">
            <img
              src="../home/CO2.webp"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-lg text-[#54545f]">
              CO2 laser cutting & engraving machine
            </h3>
          </div>
        </Link>
        <Link href="/products/11" className="flex items-center lg:justify-center">
          <div className="bg-[#d6d64014] rounded-full mr-5 p-6 w-[110px] h-[100px] max-lg:w-[90px] max-lg:h-[80px] flex justify-center items-center">
            <img
              src="../home/cnc.webp"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-lg text-[#54545f]">Cnc router</h3>
          </div>
        </Link>
        <Link href="/products/10" className="flex items-center justify-center">
          <div className="bg-[#d6d64014] rounded-full mr-5 p-6 w-[130px] h-[100px] max-lg:w-[100px] max-lg:h-[80px] flex justify-center items-center">
            <img
              src="../home/Welding_machine.webp"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-lg text-[#54545f]">
              Bending / Welding machine
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WhatWeOffer;
