import React from 'react'

const Info = () => {
  return (
    <div>
      <form action="" className='flex flex-col gap-2'>
        <input className='w-72 px-2 py-1 rounded-sm outline-none border-2 border-sky-400' placeholder='Write Something' type="text" />
        <input className='w-72 px-2 py-1 rounded-sm outline-none border-2 border-sky-400' placeholder='email' type="email" />
        <textarea name="" className='w-72 px-2 py-1 rounded-sm outline-none border-2 border-sky-400' placeholder='Address' id="">Enter Something</textarea>
        <button  className='bg-sky-400 px-2 py-1 rounded-sm'>Submit</button>
      </form>
    </div>
  )
}

export default Info
