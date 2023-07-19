import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row mt-32 pb-10'>
      <h1 className='heading1 flex  justify-center items-center heading1 font-bold text-[32px] p-10'>HOW & WHERE TO FIND US ?</h1>
      <div className='ml-10 w-[164px] '>
      <h2 className='font-bold text-[18px] heading3'>Location</h2>
      <h2>India</h2>
      <br />
      <h2 className='font-bold text-[18px] heading3'>EMail</h2>
      <h2>fitguild@gmail.com</h2>
      <br />
      <h2 className='font-bold text-[18px] heading3'>Phone number</h2>
      <h2>+91 9876543210</h2>
      </div>
      <div className='ml-10 mt-10 sm:mt-0'>
        <h2 className='font-bold text-[18px] heading3'>Programs</h2>
        <br />
        <h2><Link to="fatloss">Fit Guild Fat Loss Program</Link></h2>
        <br />
        <h2><Link to="bulking">Fit Guild Bulking Program</Link></h2>
      </div>
      <div className='ml-10 mt-10 sm:mt-0'>
        <span><Link to="termsandconditions">terms&conditions</Link></span>
        <span> | </span>
        <span><Link to="refundpolicy">refund policy</Link></span>
      </div>
    </div>

  )
}

export default Footer