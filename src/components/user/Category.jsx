import React from 'react'

const Category = () => {
    return (
        <>
            <div className="Container w-full h-[60vh] md:h-[55vh] bg-base-200 p-3 md:p-10 xl:py-25">

                <div className="wrapper w-full flex flex-col  gap-5">
                    <div className="div flex  flex-col gap-10 w-[100%] md:w-[50%]">
                        <h3 className='text-3xl text-bg-900 font-bold md:text-5xl '>Categories</h3>
                        <div>

                            <p  className='text-xl text-bg-900  '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum qui fuga minus obcaecati facilis explicabo itaque aut voluptatibus, quae sint numquam iure sim</p> <br />
                        </div>
                    </div>

                    <div className="w-[100%] md:w-[50%] grid grid-cols-3 md:grid-cols-4 gap-5 text-center">
                     
                        <div className="div rounded-md hover:text-white bg-slate-300 hover:bg-gray-900 text-black transition-all duration-300 py-4 px-4">Sports</div>
                        <div className="div rounded-md hover:text-white bg-slate-300 hover:bg-gray-900 text-black transition-all duration-300 py-4 px-4">Sports</div>
                        <div className="div rounded-md hover:text-white bg-slate-300 hover:bg-gray-900 text-black transition-all duration-300 py-4 px-4">Sports</div>
                        <div className="div rounded-md hover:text-white bg-slate-300 hover:bg-gray-900 text-black transition-all duration-300 py-4 px-4">Sports</div>
                        <div className="div rounded-md hover:text-white bg-slate-300 hover:bg-gray-900 text-black transition-all duration-300 py-4 px-4">Sports</div>
                        <div className="div rounded-md hover:text-white bg-slate-300 hover:bg-gray-900 text-black transition-all duration-300 py-4 px-4">Sports</div>
                        <div className="div rounded-md hover:text-white bg-slate-300 hover:bg-gray-900 text-black transition-all duration-300 py-4 px-4">Sports</div>
                        <div className="div rounded-md hover:text-white bg-slate-300 hover:bg-gray-900 text-black transition-all duration-300 py-4 px-4">Sports</div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Category