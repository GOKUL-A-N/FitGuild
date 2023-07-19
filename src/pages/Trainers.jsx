import React from 'react';
import TrainerCard from '../components/TrainerCard';
import { trainerCards } from '../constants';
import {motion as m} from "framer-motion"

const Trainers = () => {
  return (
    <div className='flex-1'>
      <h1 className='heading1 font-bold flex justify-center text-[32px] p-5'><span className='span'>TRA</span>INERS</h1>
      <div className='flex p-10 overflow-x-scroll xl:overflow-hidden flex-row sm:min-w-[192px] min-w-[120px] '>
          {trainerCards.map((tc,index) => (
              <m.div key={tc.id}
              initial={{x:"100%"}}
              animate={{x:"0%"}}
              transition={{duration:1.75, ease:"easeOut"}}
              exit={{opacity:1}}
              >
                <TrainerCard 
                  trainerName={tc.trainerName}
                  trainerAge={tc.age}
                  trainerExperience={tc.experience}
                  trainerRating={tc.rating}
                  trainerCost={tc.cost}
                  trainerImage={tc.img}
                />

              </m.div>
          ))}
      </div>
    </div>
  )
}

export default Trainers