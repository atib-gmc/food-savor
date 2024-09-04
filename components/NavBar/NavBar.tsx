import Link from 'next/link'
import React from 'react'
import { FaBowlFood } from 'react-icons/fa6'

export default function NavBar() {
  return (
    <nav className='w-full p-6 flex justify-between px-8' >
      <div className="Logo flex items-center "><span>  <FaBowlFood /> </span><span className='text-primary ml-2'>Food</span> <span className='text-black'>Savor</span> </div>

      <ul className="flex space-x-3 bg-[#4c7242] items-center text-white px-6 rounded-full divide-x-2 [&>*]:pl-2">
        <li><Link href="#">Home</Link> </li>
        <li><Link href="#">Product</Link> </li>
        <li><Link href="#">About</Link> </li>
      </ul>
      <button className="setting px-6 py-3 rounded-full bg-primary  text-white">SignUp</button>
    </nav>
  )
}

