import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ index, name, icon }) => (
  <Tilt className='xs:w-[100px] w-[15%]' options={{scale: 1, max: 8}}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full p-[1px] rounded-[20px]'
    >
      <div
        className='min-h-[100px] flex justify-center items-center flex-col'
      >
        <img
          src={icon}
          alt={name}
          className='w-16 h-16 object-contain'
        />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="text-center">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>AGAIN AGAIN AGAIN <span className="font-bold">GAIN</span></p>
        <h2 className={styles.sectionHeadText}>Always in Beta</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] leading-[30px]'
      >
        Web developer from Córdoba, Argentina,<br/>
        who loves challenging projects and wants to 
        <br/> keep leveling up his coding skills
      </motion.p>

      <div className='mt-12 mb-[-36px] flex flex-wrap gap-10 justify-center'>
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} index={index} {...tech} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");