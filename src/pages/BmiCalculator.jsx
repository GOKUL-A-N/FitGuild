import React,{useState} from 'react';
import {motion as m} from "framer-motion";

const BmiCalculator = () => {

  const [weight , setWeight] = useState();
  const [height, setHeight] = useState();
  var [bmi , setbmi] = useState();

  function handleWeight(event){
    setWeight(event.target.value);
  }
  function handleHeight(event){
    setHeight(event.target.value);
  }

  function calculate(event){
    let h=(height*0.01)**2;
    let s=weight/h;
    setbmi(Math.floor(s));
    event.preventDefault();
  }

  return (
    <div className=''
    >
      <h1 className=' text-center p-5 font-bold text-[32px]'><span className='span'>BMI CA</span>LCULATOR</h1>
      <div className='flex flex-col sm:flex-row'>
      <div  className='flex-1   justify-center sm:ml-40 mt-3  w-[100%] sm:w-[50%]'>
      <h1 className='heading3 text-[23px] font-bold flex items-center justify-around'>Calculate Your Bmi</h1>
        <form onSubmit={calculate} className="flex  flex-col p-0 m-10">
          <div className='flex flex-col'>
          <label className='p-3 text-[19px] left-0'>Enter Your Weight</label>
          <input className='p-3 text-black w-full sm:w-[50%] h-10 input' type='text' placeholder='weight' onChange={handleWeight} value={weight} />
          </div>
          <label className='p-3 text-[19px] left-0'>Enter Your Height</label>
          <input className='p-3 text-black w-full sm:w-[50%] h-10 input' type='text' placeholder='height' onChange={handleHeight} value={height} />
          <button type='submit' className='p-5 m-5 left-0 ml-0 w-full sm:w-[50%] btn third'>Calculate BMI</button>
          <h2 className='text-[20px] font-bold flex '>BMI is : <span className='underline underline-offset-4 decoration-4 pl-4 '>{bmi}</span></h2>
        </form>
      </div>
      <div className='flex  items-center justify-center w-[100%] sm:w-[50%]'>
        <table className='border-spacing-2'>
          <tr className=''>
            <th className='p-7 text-[20px] heading3 '>Classification</th>
            <th className='p-7 text-[20px] heading3 ml-10'>Range</th>
          </tr>
          <tr>
            <td className='text-[19px] pl-6'>Severe Underweight</td>
            <td className='p-7 text-[19px] ml-10'>BMI below  16</td>
          </tr>
          <tr>
            <td className='text-[19px] pl-6'>Underweight</td>
            <td className='p-7 text-[19px]  ml-10'>16 - 18.5</td>
          </tr>
          <tr>
            <td className='text-[19px] pl-6'>Normal</td>
            <td className='p-7 text-[19px]  ml-10'>18.5 - 25</td>
          </tr>
          <tr>
            <td className='text-[19px] pl-6'>Over Weight</td>
            <td className='text-[19px] p-7 ml-10'>25-30</td>
          </tr>
          <tr>
            <td className='text-[19px] pl-6'>Obese</td>
            <td className='text-[19px] p-7 ml-10'>BMI above 30</td>
          </tr>
        </table>
      </div>
     
      </div>
    </div>
  )
}

export default BmiCalculator