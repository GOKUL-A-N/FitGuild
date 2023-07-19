import React,{useState,useCallback} from 'react'
import {motion as m} from "framer-motion";
import Modal from '@netojose/react-modal'

const Bulking = () => {

  const [isOpen, setIsOpen] = useState(false)
  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])

 

  var [weight,setWeight]=useState();
  var [mc,setCal] = useState();
  var [bc,setBc] = useState();
  var [pi,setPi]= useState();
  function handleWeight(event){
    setWeight(event.target.value);
  }

  function calculate(event){
    let s=weight*2.2*14;
    let k=s+500;
    let p=weight*2;
    setCal(Math.floor(s));
    setBc(Math.floor(k));
    setPi(Math.floor(p));
    event.preventDefault();
  }
  return (
    <m.div className='flex p-10 flex-col overflow-x-hidden'
    // initial={{x:"100%"}}
    // animate={{x:"0%"}}
    transition={{duration:1.75, ease:"easeOut"}}
    exit={{opacity:1}}
    >
      <h1 className='heading1 font-extrabold p-3 text-[32px] flex justify-center'>Fit Guild Bulking</h1>
      <h2 className='heading3 text-[20px] font-bold pb-4 pt-4'>What is bulking</h2>
      <p>Bulking refers to the muscle-building phase of a traditional bodybuilding routine. It involves creating a calorie surplus to support muscle growth.

        There are two main phases of the bodybuilding cycle: bulking and cutting.

        During a bulking phase, bodybuilders typically consume additional carbohydrates and protein to maintain a calorie surplus.

        The goal is to use these additional calories to build muscle. A person must strength train during a bulking phase to stimulate muscle growth. Bulking increases muscle mass and body fat.</p>

       
        
        <form onSubmit={calculate} className="flex  flex-col p-0 m-0">
        <h2 className='pt-4 pb-4 font-bold text-[30px] font-bold heading3'>Calculate your  Calories</h2>
          <label className='pb-2 text-[19px] left-0'>Enter Your Weight</label>
          <input className='p-3 text-black w-full sm:w-[20%] h-10 input' type='text' placeholder='weight' onChange={handleWeight} value={weight} />
          <button type='submit' className='p-5 m-5 left-0 ml-0 w-full sm:w-[20%] btn third'>Calculate Calories</button>
          <h2 className='text-[20px] font-bold flex '>Your Maintanence Calories  : <span className='underline underline-offset-4 decoration-4 pl-4 '>{mc}cal</span></h2>
          <br /> 
          <h2 className='text-[20px] font-bold flex '>Your Bulking Calories  : <span className='underline underline-offset-4 decoration-4 pl-4 '>{bc}cal</span></h2>
          <br />
          <h2 className='text-[20px] font-bold flex '>Your  Protien Intake Must be  :<span className='underline underline-offset-4 decoration-4 pl-4 '>{pi}g</span> </h2>
          <h3 className='heading1 text-[18px] pt-4'>*Tip : Increase Your calorie intake according to your exercise</h3>
          <h3 className='heading1 text-[18px] pt-4'>*Tip : Do exercise atleast 4 times a week</h3>
        </form>
        <br />
        <h3 className='text-white text-[20px]'>For more informations subscribe now</h3>
        <div >
            <input className='btn third' type="button" value="Subscribe" onClick={openModal} />
            <div className="">
            <Modal  isOpen={isOpen} onRequestClose={closeModal} >
                <div className='background m-[-20px]   justify-center'>
                    <h3 className='text-center p-8 heading3 text-[28px] font-bold '>What's Inside</h3>
                    <ul className='flex flex-col items-center p-10'>
                      <li className='w-[80%] p-8 text-center bg-transparent border-white border text-[20px]'>1.Introdu<br className='sm:hidden'/>ction</li><br />
                      <li className='w-[80%] p-8 text-center bg-transparent border-white border text-[20px]'>2.Goal Setting</li><br />
                      <li className='w-[80%] p-8 text-center bg-transparent border-white border text-[20px]'>3.Science Behind</li><br />
                      <li className='w-[80%] p-8 text-center bg-transparent border-white border text-[20px]'>4.Diet Plans</li><br />
                      <li className='w-[80%] p-8 text-center bg-transparent border-white border text-[20px]'>5.Workout Plans</li><br />
                      <li className='w-[80%] p-8 text-center bg-transparent border-white border text-[20px]'>6.One on One Doubts session with trainers</li>
                    </ul>
                    <div className='flex justify-center p-4 rounded'>
                        <button className='btn third '>Subscribe $120</button>
                        <input className='btn third ml-4' type="button" value="Close" onClick={closeModal} />
                    </div>
                </div>
            </Modal>
            </div>
        </div>
        
    
    </m.div>
  )
}

export default Bulking