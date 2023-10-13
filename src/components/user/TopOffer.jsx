import React from 'react'

const TopOffer = () => {
  return (
    <>
<div className="w-full min-h-[20vh] lg:min-h-[25vh] bg-red-500 flex items-center justify-center overflow-x-auto">
  <div className="w-full flex items-center justify-center lg:gap-7  px-2">
    {[...Array(20)].map((_, index) => (
      <div key={index} className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full mx-2">{index}</div>
    ))}
  </div>
</div>



    
    </>
  )
}

export default TopOffer