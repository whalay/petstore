import React from 'react'
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as Hamburger } from '../assets/images/hamburger.svg';
import { ReactComponent as Cart } from '../assets/images/cart.svg';



const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-5 bg-[#FCEED5]'>
        <Hamburger />
        <Logo />
        <Cart />
    </div>
  )
}

export default Navbar