import React from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import {
  products,
  productsWelding,
  productsPlasma,
  productsPress,
  productsShearing,
} from "@/data/products";

const Products_bar = () => {

  const [isPaused, setIsPaused] = useState(false)

  const x = useMotionValue(0)

  const containerRef = useRef(null)

  // const images = products.map(item => item.image);
  // const images = products
  //   .filter(item => typeof item.image === "string" && item.image.trim())
  //   .map(item => item.image);

  const images = [
    "../products/20.webp",
    "../products/21.webp",
    "../products/23.webp",
    "../products/24.webp",
    "../products/25.webp",
    "../products/26.webp",
    "../products/27.webp",
    "../products/28.webp",
    "../products/29.webp",
    "../products/30.webp",
    "../products/31.webp",
    "../products/32.webp",
    "../products/33.webp",
    "../products/34.webp",
    "../products/35.webp",
    "../products/40.webp",
    "../products/41.webp",
    "../products/42.webp",
    "../products/co2-550x750.png",
    "../products/fiber-laser-550x750.png",
    "../products/Letter-Bending-550x750.png",
    "../products/marker-portable-350x370.png",
    "../products/marker-350x370.png",
    "../products/press-brake-550x750.png",
    "../products/router-550x750.png",
    "../products/welding-550x750.png",
  ]

  useAnimationFrame((t, delta) => {
    if (!isPaused && containerRef.current) {
      const currentX = x.get()
      const itemWidth = 290 + 16
      const totalWidth = images.length * itemWidth

      const newX = currentX - (delta / 500) * 30

      if (Math.abs(newX) >= totalWidth) {
        x.set(newX + totalWidth)
      } else {
        x.set(newX)
      }
    }
  })

  useAnimationFrame((time, delta) => {
    if (!isPaused) {
      const itemWidth = 290 + 16
      const totalWidth = images.length * itemWidth

      const currentX = x.get()
      const newX = currentX - (delta / 500) * 50

      if (Math.abs(newX) >= totalWidth) {
        x.set(newX + totalWidth)
      } else {
        x.set(newX)
      }
    }
  })

  return (
    <div dir="ltr" className="w-full px-3 overflow-hidden ">
      <motion.div
        ref={containerRef}
        className="flex gap-4 cursor-grab active:cursor-grabbing "
        drag="x"
        dragConstraints={{ left: -6120, right: 0 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
        style={{ x }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...images, ...images].map((img, i) => (
          <motion.div
            key={i}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 w-[255px] h-[253px] max-lg:w-[185px] max-lg:h-[183px] rounded-4xl max-lg:rounded-3xl overflow-hidden bg-black"
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover rounded-3xl p-2 select-none pointer-events-none"
              draggable={false}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Products_bar;
