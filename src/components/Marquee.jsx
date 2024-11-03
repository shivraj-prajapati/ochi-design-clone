import React from "react";
import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <div className="w-full py-10 bg-[#004D43] text-white rounded-tl-3xl rounded-tr-3xl">
      <div className="text border-t-2 border-b-2 border-[#4C827B] flex whitespace-nowrap overflow-hidden gap-10">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[17vw] leading-none font-HeadingPro font-semibold"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[17vw] leading-none font-HeadingPro font-semibold"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}
