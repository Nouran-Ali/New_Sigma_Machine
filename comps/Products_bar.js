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

  const allProducts = [
    ...products,
    ...productsWelding,
    ...productsPlasma,
    ...productsPress,
    ...productsShearing,
  ];

  const images = allProducts.map(item => item.image);

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
