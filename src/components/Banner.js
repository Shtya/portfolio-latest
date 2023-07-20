import React from 'react';
import Image from '../assets/profile.jpg'
import {FaGithub , FaWhatsapp , FaDribbble , FaFacebook , FaLinkedin } from "react-icons/fa"
// type animation 
import { TypeAnimation} from "react-type-animation"
// motion
import {motion} from "framer-motion"
// variants
import {fadeIn} from "../variants"

const Banner = () => {
  return( 
  <section className='home all:top-[10px] relative' id="home ">
    <div className='container mx-auto min-h-[100vh] all:justify-center  relative flex  items-center    ' >
      <div className='flex justify-center  items-center   all:flex-col all:gap-4'>
        <div className='flex-1' >
          <motion.div variants={fadeIn("up",0.3)} initial="hidden" whileInView={'show'} viewport={{once:false , amount:0.7}}  className='text-[30px] font-semibold uppercase leading-[1] smd:text-[25px] whitespace-nowrap ' >Ahmed abdelrhman ,</motion.div>
          <motion.div variants={fadeIn("up",0.4)} initial="hidden" whileInView={'show'} viewport={{once:false , amount:0.7}}  className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] motion smd:text-[25px] sm:text-[35px] whitespace-nowrap'> <span className='text-white mr-4 '>I am a </span> <TypeAnimation speed={50} className='text-accent' wrapper='span' repeat={Infinity} sequence={["Designer",2000 , "Developer" , 2000]}/> </motion.div>
          <motion.div variants={fadeIn("up",0.5)} initial="hidden" whileInView={'show'} viewport={{once:false , amount:0.7}}  className='max-w-[600px] text-zinc-400 italic pr  '>
            I like building Web Applications that leverage my skills in web development. Check out some of my work in the Projects section. I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
          </motion.div>
          <br/>
          <motion.h3 variants={fadeIn("up",0.6)} initial="hidden" whileInView={'show'} viewport={{once:false , amount:0.7}}  className='max-w-[600px]  text-zinc-400 italic pr  '>  I'm a Freelance Fullstack Developer with over 3 years of  experience.</motion.h3>
          <ul className='content social all:justify-center'>
            <motion.a  target="_blank" href="https://github.com/Shtya" variants={fadeIn("up",0.6)} initial="hidden" whileInView={'show'} viewport={{once:false , amount:0.7}} ><FaGithub/> </motion.a>
            <motion.a  target="_blank" href="https://www.facebook.com/profile.php?id=100008364883535" variants={fadeIn("up",0.7)} initial="hidden" whileInView={'show'} viewport={{once:false , amount:0.7}} ><FaFacebook/> </motion.a>
            <motion.a  target="_blank" href="https://www.linkedin.com/in/ahmed-abdelrhman-78bb18230/" variants={fadeIn("up",0.8)} initial="hidden" whileInView={'show'} viewport={{once:false , amount:0.7}} ><FaLinkedin/> </motion.a>
            <motion.a  target="_blank" href="https://wa.me/01551495772"        variants={fadeIn("up",0.9)} initial="hidden" whileInView={'show'} viewport={{once:false , amount:0.7}} ><FaWhatsapp/> </motion.a>
          </ul>
        </div>
        <motion.img variants={fadeIn("down",0.6)} initial="hidden" whileInView={'show'} viewport={{once:false , amount:0.7}}  className='one all:mb-[40px] smd:w-[300px] smd:h-[300px] profile' src={Image} />
        <br/>
      </div>

    </div>
  </section>
  )
};

export default Banner;
