import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <ul className='flex items-center gap-4 justify-center'>
        <NavLink to='/contact/info'><li>Info </li> </NavLink>
        <NavLink to='/contact/more'><li>More </li> </NavLink>
      </ul>
      <h1 className='text-7xl  text-sky-400  px-12 py-4 '>Contact</h1>
    </div>
   
  )
}

export default Contact
