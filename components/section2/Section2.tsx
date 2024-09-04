
import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

export default function Section2() {
  return (
    <div className="section2 mt-6 space-y-5">
      <h2 className="text-xl uppercase text-primary text-center">What they say</h2>
      <h2 className="text-3xl  text-center font-extrabold">what our customer say about us</h2>

      <div className='w-full justify-center gap-2 items-center flex space-y-3'>
        <div className="card relative flex flex-col items-betweeen max-w-[300px] space-y-3 translate-y-1  justify-between w-full rounded-xl bg-secondary p-6">
          <div className="absolute -top-[20px] left-4">
            <FaQuoteLeft size={40} color='#1f3719' />
          </div>
          <p style={{ lineHeight: "normal" }} className="text-xl font-normal text-center ">"i use to throw veggies, but not anymore thanks to this service"</p>
          <div className="review">
            <div className="starts text-orange-400 justify-center flex gap-3 mx-auto">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-xl font-bold text-center">~edward</p>

          </div>
        </div>
        <div className="card max-w-[300px] relative  justify-between w-full rounded-xl bg-secondary p-6">
          <div className="absolute -top-[20px] left-4">
            <FaQuoteLeft size={40} color='#1f3719' />
          </div>
          <p className="text-xl font-normal text-center">"i fell that i can be better at cooking thakns to this wonderfull website"</p>
          <div className="review">
            <div className="starts text-orange-400 justify-center flex gap-3 mx-auto">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-xl font-bold text-center">~erina</p>

          </div>
        </div>

        <div className="card max-w-[300px]  justify-between relative w-full rounded-xl bg-secondary p-6">
          <div className="absolute -top-[20px] left-4">
            <FaQuoteLeft size={40} color='#1f3719' />
          </div>
          <p className="text-xl font-normal text-center">"it's easy to use i love this website, thanks for improving my skills"</p>
          <div className="review">
            <div className="starts text-orange-400 justify-center flex gap-3 mx-auto">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-xl font-bold text-center">~ahmed</p>

          </div>
        </div>
      </div>
    </div>
  )
}

