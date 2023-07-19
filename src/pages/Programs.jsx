import React from 'react'
import {Link,  Outlet} from "react-router-dom";
import bulkingImg from "../assets/bulkingImg.png";
import cuttingImg from "../assets/cuttingImg.png";
import { motion } from 'framer-motion';



const Programs = () => {
  return (
    <div><h1 className=' text-center p-5 font-bold text-[32px]'><span className='span'>PRO</span>GRAMS</h1>
    {/* <Link></Link> */}
    <div className='flex flex-col'>
      <div className='flex flex-col sm:flex-row'>
        <motion.div whileHover={{scale:1.1}} className='flex items-center justify-center  w-full sm:w-[50%]'>
          <img className='w-[50%] h-[70%]  '  src={bulkingImg} alt="" />
        </motion.div>
        <div className='w-full sm:w-[50%] justify-center flex flex-col p-10'>
          <h1 className='heading3 text-[32px] font-bold'>Fit Guild Bulking</h1>
          <p className='text-[22px]'>Choose this program if you'd want to gain quality mass and build a muscular, strong and ripped body. In this online course, I have created a step by step practical plan for people who are tired of being small and want to bulk up with expert help and tested methods.</p>
          <button className='btn third mt-10 w-[230px]'><Link to="bulking">Start Bulking</Link></button>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row'>
      <div className='flex items-center justify-center  w-full sm:w-[50%]'>
        <motion.img whileHover={{scale:1.1}} className='w-[50%] h-[70%] '  src={cuttingImg} alt="" />
        </div>
      <div className='flex  flex-col justify-center w-full sm:w-[50%] p-10'>
          <h1 className='heading3 text-[32px] font-bold'>Fit Guild Fat Loss</h1>
          <p className='text-[22px]'>Choose this program if you’d want to shed excess fat from your body and improve your physique. In this 16 weeks online course, I created a step by step practical plan for people who are ready to lose fat with expert help and tested methods.</p>
          <button className='btn third mt-10 w-[230px]'><Link to="fatloss">Start Cutting</Link></button>
        </div>
      </div>
    </div>
    <Outlet />
    </div>
  )
}

export default Programs
