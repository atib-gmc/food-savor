import Image from 'next/image'
import React from 'react'

export default function Section1() {
  return (
    <div className="section1 space-y-5">
      <h2 className="text-xl uppercase text-primary text-center">what we do</h2>
      <h2 className="text-3xl  text-center font-extrabold">we help thousand of people <br /> reduce food waste</h2>

      <div className='w-full justify-between gap-8   md:[&>*]:h-[200px] flex space-y-3 md:flex-nowrap flex-wrap'>
        <div className="card max-w-[300px]  justify-between w-full translate-y-3 rounded-xl bg-[#c5d6c1] p-3">
          <Image src="/1.png" alt="1" width={800} height={400} />
          <h3 className="text-xl font-bold text-center">quality receipes</h3>
        </div>
        <div className="card max-w-[300px]  justify-between w-full rounded-xl bg-[#c5d6c1] p-3">
          <Image src="/2.png" alt="1" width={800} height={600} />
          <h3 className="text-xl font-bold text-center">Save food waste</h3>
        </div>

        <div className="card max-w-[300px]  justify-between w-full rounded-xl bg-[#c5d6c1] p-3">
          <Image src="/3.png" alt="1" width={800} height={600} />
          <h3 className="text-xl font-bold text-center">Save on grtoceries</h3>
        </div>
      </div>
    </div>
  )
}

