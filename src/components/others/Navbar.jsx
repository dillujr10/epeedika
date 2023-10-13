import React from 'react'

const Navbar = () => {
    return (
        <>
            <>



                <div className='w-full min-h-[90px] bg-gray-900   flex justify-between items-center flex-col md:flex-row shadow-2xl z-50 '>
                    <div className="right flex w-full items-center justify-between  h-full md:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white ml-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <h3 className='font-mono font-bold text-white text-3xl mr-5'>Logo</h3>

                    </div>
                    <div className="left flex items-center justify-center h-full mr-5 flex-1 gap-5">
                        <h3 className='hidden md:block font-mono font-bold text-white text-5xl '>Logo</h3>
                        <input type="text" placeholder='  search products here' className=" text-center bg-white rounded-md md:rounded-3xl round py-1 md:py-3 px-9  " />
                    </div>



                    {/* desktop */}

                    <div className="flex-1 flex items-center justify-center">
                        <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                            <li><a class="text-white" href="#">Home</a></li>
                            <li><a class="text-white" href="#">Catagory</a></li>
                            <li><a class="text-white" href="#">Collections</a></li>
                            <li><a class="text-white" href="#">Contact Us</a></li>
                        </ul>
                    </div>


                    <div className='hidden  flex-1 md:flex items-center justify-center gap-5'>
                        <a class="text-white" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </a>
                        <a class="flex items-center text-white" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span class="flex absolute -mt-5 ml-4">
                                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                </span>
                            </span>
                        </a>
                    </div>


                </div>
            </>

        </>
    )
}

export default Navbar