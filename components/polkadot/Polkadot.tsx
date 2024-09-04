import React from 'react'

export default function Polkadot() {
  return (
    <div className="grid gap-3 max-w-md grid-cols-6 auto-rows-[15px]">
      {[...Array(36)].map((_, i) => (
        <div className="w-full bg-[#9bacdb] rounded-xl max-w-[15px] "></div>
      ))}
    </div>
  )
}

