import React from 'react';
import {ReviewContent} from "../constants";
// import { motion } from "framer-motion"

const Reviews = () => {
  return (
    <div className='p-4 '>
      <h1 className='flex  justify-center items-center heading1 font-bold text-[32px]'><span className='span'>REV</span>IEWS</h1>
        <div className='flex flex-col md:flex-row  '>
        {ReviewContent.map((rev,index) => (
            <div key={rev.id} class="p-3 max-w-10 overflow-x-auto mr-5 rounded overflow-hidden shadow shadow-indigo-500/50 mt-10 contain">
            <div class="px-6 py-4">
              
              <p class="text-white-700 text-base">
                {rev.description}
              </p>
              <div class="font-bold text-xl flex-1 flex items-center justify-center mt-3 heading3 mb-2">-{rev.title}</div>
            </div>
            
          </div>
        ))}
        </div>
    </div>
  )
}

export default Reviews