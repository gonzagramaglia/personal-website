import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


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
        I am a web developer from Argentina, currently living in Córdoba, 
        who loves <br/>challenging projects and wants to keep 
        leveling up his coding skills
      </motion.p>
    </div>
  );
};

export default SectionWrapper(About, "about");