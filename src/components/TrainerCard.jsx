import React from 'react';


const TrainerCard = (props) => {
  return (
    <div className=''>
  
     <section class="m-2 font-sans leading-normal flex contain">



     <div class="max-w-lg shadow-lg rounded overflow-hidden m-4 sm:flex">
    <div class="h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden"  style={{ backgroundImage: `url(${props.trainerImage})`  }}>
    </div>
    
    
     <div class="px-6 py-4">
      <h2 class="mb-2 font-black heading3 mt-4 text-[28px]">{props.trainerName}</h2>
      <p class="mb-4 text-grey-dark text-sm">
        <h3 className='text-[16px] flex mb-7'>Age:{props.trainerAge}</h3>
        <h3 className='text-[16px] flex mb-7'>Experience:{props.trainerExperience}</h3>
        <h3 className='text-[16px] flex mb-7'>Rating:{props.trainerRating}</h3>
       </p>
      

      <button class="py-3 px-6 bg-purple hover:bg-purple-light text-white font-bold rounded btn third mt-1 mb-2">
        {props.trainerCost} / Month
       </button>
       
    </div>

  </div>
  
  
    </section>
    </div>
  )
}

export default TrainerCard