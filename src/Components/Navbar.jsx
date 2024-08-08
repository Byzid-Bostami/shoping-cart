import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <div className='bg-black'>
      <div className='container mx-auto px-10 flex flex-row items-center p-5 lg:justify-end md:justify-end justify-center space-x-5 text-2xl'>
      <NavLink className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} hover:text-white`} exact to="/"> <MdHome /> </NavLink>
      <NavLink className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} hover:text-white`} to="/Cart"> <FaShoppingCart /> </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
