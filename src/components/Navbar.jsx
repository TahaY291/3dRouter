import React from 'react'
import logo from '../assets/react.svg' 
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='flex items-center justify-around  h-16'>
        <img className='w-12 ' src={logo} alt="" />
        <ul className='flex items-center justify-center gap-4 bg-white rounded-full shadow-lg px-6 py-2 text-sky-400'>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/products'><li>Products</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
        </ul>
            <button onClick={()=> navigate('/about',{replace:true})} className='bg-sky-400 text-white px-4 py-2 rounded-full shadow-lg'>Get Started</button>
    </div>
  )
}

export default Navbar
