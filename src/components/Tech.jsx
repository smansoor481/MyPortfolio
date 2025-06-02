import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion"

const Tech = () => {
  return (
    <div className="flex-items justify-center flex-col">
      <h2 className={`${styles.sectionHeadText} pb-12`}>Skills.</h2>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map(({icon, name}, index) => (
          <Tilt className='w-28 h-28' key={name}>
            <p className="text-white mt-5 text-lg font-semibold">{name}</p>
          <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className='bg-tertiary rounded-[20px] p-4 h-28  flex justify-evenly items-center flex-col'
            >
              <img
                src={icon}
                alt={name}
                
                className={`w-full h-full object-contain ${name==="Next.js"&& "grayscale-0 invert"}`}
              />
            </div>
          </motion.div>
        </Tilt>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
