import React from 'react'
import {Link } from "react-scroll"

const Navbar = () => {
  return (
    <div>
      <nav class="navbar flex flex-row ">
        
        <div class="navbar-container container ">
        
            <input type="checkbox" name="" id="" />
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
           <ul className='menu-items cursor-pointer'>
           <li>
              <Link className='Link' activeClass="active" smooth spy to="home">
                Home
              </Link>
            </li>
            <li>
              <Link className='Link' activeClass="active" smooth spy to="bmicalculator">
                Bmi Calculator
              </Link>
            </li>
            <li>
              <Link className='Link' activeClass="active" smooth spy to="programs">
                Programs
              </Link>
            </li>
            <li>
              <Link className='Link' activeClass="active" smooth spy to="trainer">
                Trainers
              </Link>
            </li>
            <li>
              <Link className='Link' activeClass="active" smooth spy to="reviews">
                Reviews
              </Link>
            </li>
            <li>
              <Link className='Link' activeClass="active" smooth spy to="footer">
                Footer
              </Link>
            </li>
           </ul>
           
           </div>
           <button className='m-1 mr-5 font-bold text-[23px] flex justify-center items-center'><Link className='Link' activeClass="active" smooth spy to="home">FitGuild</Link></button>
    </nav>
    
        {/* <Outlet /> */}
    </div>
  )
}

export default Navbar