import React from 'react'

const items = () => {
  const numberOfDivs = 8;
  const phone = 4;

  return (
    <>
   <div className="relative hidden md:flex min-h-[45vh] justify-center flex-wrap overflow-hidden bg-gray-50 py-6 sm:py-12">
  {Array.from({ length: numberOfDivs }, (_, index) => (
    <div
      key={index}
      className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 mt-3"
    >
      <span className="wrapper absolute top-10 z-0 h-20 w-20 rounded-full bg-gray-900 transition-all duration-700 group-hover:scale-[20]">
        <p className="text-center text-white mt-5 transition-all duration-300 group-hover:opacity-0">60% <br />off</p>
      </span>
      <div className="relative z-10 mx-auto max-w-md flex flex-col items-center justify-center">
        <span className="grid h-[60%] w-[70%] place-items-center rounded-full bg-gray-900 transition-all duration-500 group-hover:bg-gray-400">
          <img src="img/slide4.png" alt="" />
        </span>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-500 group-hover:text-white/90">
          <p>
            Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.
          </p>
        </div>
        <div className="pt-5 text-base font-semibold leading-7">
          <p>
            <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">
              Checkout →
            </a>
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

<div className="relative md:hidden  min-h-[40vh] bg-gray-50 py-6 sm:py-12 overflow-x-auto">
  <div className="flex flex-wrap justify-center gap-1 px-1">
    {Array.from({ length: phone }, (_, index) => (
      <div
        key={index}
        className="group relative cursor-pointer overflow-hidden bg-white px-5 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:w-1/2 sm:max-w-sm sm:rounded-lg sm:px-10 mt-3"
      >
        <span className="wrapper absolute top-6 z-50 h-12 w-12 rounded-full bg-gray-900 transition-all duration-700 group-hover:scale-[20]">
          <p className="text-center text-sm text-white mt-1 transition-all duration-300 group-hover:opacity-0">60% <br />off</p>
        </span>
        <div className="relative z-10 mx-auto max-w-md flex flex-col items-center justify-center">
          <span className="grid h-[28vh] w-[36vw] place-items-center rounded-full bg-gray-900 transition-all duration-500 group-hover:bg-gray-400">
            <img src="img/slide4.png" alt="" className="h-[18vh] w-[28vw] object-cover" />
          </span>
          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-500 group-hover:text-white/90"></div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Checkout →</a>
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


    </>
  )
}

export default items