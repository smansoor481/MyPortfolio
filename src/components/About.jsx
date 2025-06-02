import React, { lazy } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Card =lazy(() => import("./Card"));

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="about">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] w-full leading-[30px]'
      >
      Certified Java FullStack Professional with 6 months internship experience in core and advanced Java,and
      Spring Boot. Proven communicator, committed to surpassing project goals and client expectations.
      Successfully orchestrated projects like Payment Integration to e-commerce projects and e-commerce web
      applications leveraging Spring Boot, microservices, and Java frameworks. Enhanced efficiency and
      elevated customer experiences, driving a 30% conversion rate increase. Ready to deliver impactful
      solutions for your organization's success.<br />
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <Card key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
