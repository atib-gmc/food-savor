import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import Polkadot from '../polkadot/Polkadot'

export default function Hero() {
  return (
    <div className="main mt-8 flex md:flex-row justify-between w-full">
      <div className="rows flex-1">
        <h1 className="text-4xl font-bold">Reduce Food <br /> Waste and Save Money</h1>
        <p>we want to tackle food waste by recomending receipe based on leftover  ingredients on the fridge at home</p>
        <button style={{ background: "#4c7242" }} className="mt-10 setting px-6 py-3 rounded-full  text-white">SignUp</button>
        <div className="flex review justify-start gap-2 gap-2 mt-2">
          <div className="rows">
            <Image width={180} height={100} className="scale-110" src="/review.png" alt="hero" />
          </div>
          <div className="rows flex-col flex justify-center -translate-x-14 gap-2">
            <p className="text-dm font-bold">our happy customer</p>
            <span className='flex gap-2 items-center'>
              <FaStar color='#b9660f' /> 4.8 (450+ reviews)
            </span>
          </div>
        </div>
      </div>
      <div className="rows flex-1 relative ">
        <Image width={600} height={400} className="scale-110" src="/veg.png" alt="hero" />
        <div className="polkadot scale-[0.8] absolute w-full top-32 -right-[290px] z-[-1] rotate-45 ">
          <Polkadot />
        </div>
      </div>
    </div>
  )
}

