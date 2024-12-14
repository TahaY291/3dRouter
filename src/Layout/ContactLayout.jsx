import React from 'react'
import Contact from '../pages/Contact'
import { Outlet } from 'react-router-dom'

const ContactLayout = () => {
  return (
    <div>
        <div >
            <Contact/>
        </div>
         <div className='h-[100vh] flex flex-col items-center justify-center'>
            <Outlet/>
         </div>
    </div>
  )
}

export default ContactLayout
