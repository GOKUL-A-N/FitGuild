import React from 'react'
import {Link} from "react-scroll";
import {motion} from "framer-motion";
import home from "../assets/home.png"

const Home = () => {

  const subheading = "A complete fitness guide";
  const mainheading = "THE WEAK GET EATEN"

  const sentence={
    hidden: {opacity:1},
    visible:{
      opacity:1,
      transition: {
        delay:1.5,
        staggerChildren:0.08,
      },
    },
  }

  const letter= {
    hidden:{
      opacity:0,y:50
    },
    visible:{
      opacity:1,
      y:0,
    },
  }

  return (
    <div className=' h-screen flex justfiy-center ' style={{
      backgroundImage: `url(${home})`, backgroundRepeat: 'no-repeat', width: '100%', height: '100vh' , backgroundSize: 'cover'
  }}>
      <div className='flex-1 flex flex-col justify-center '>
        {/* <h1 className='block heading1 font-bold text-[60px] sm:ml-10 ml-5'>THE <br className='sm:hidden' /> WEAK <br className='sm:hidden' /> GET EATEN </h1> */}
        {/* <h4 className='block text-slate-50 text-[20px] ml-5 sm:ml-10 heading3 font-bold'>{subheading}</h4><br />*/}
        <motion.h1 className='load-screen--message block heading1 font-bold text-[60px] sm:ml-10 ml-5' variants={sentence} initial="hidden" animate="visible">
          {mainheading.split("").map((char,index) => {
            return(
              <motion.span key={char+"-"+index} variants={letter}>{char}</motion.span>
            )
          })}
        </motion.h1>
        <motion.h4 className='load-screen--message block text-slate-50 text-[20px] ml-5 sm:ml-10 heading3 font-bold' variants={sentence} initial="hidden" animate="visible">
          {subheading.split("").map((char,index) => {
            return(
              <motion.span key={char+"-"+index} variants={letter}>{char}</motion.span>
            )
          })}
        </motion.h4>
        <br />
        <Link className='Link' activeClass="active" smooth spy to="bmicalculator"><button className='ml-5 sm:ml-10 overflow-visible  w-[10%] md:w-[10%] sm:w-[10%] btn third block '>
                Get Started
              </button></Link>
      </div>
    </div>
  )
}

export default Home