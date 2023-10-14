import React from "react";

const RelatedProduct = () => {
  return (
    <>
<div className="w-full h-[60vh] md:h-[55vh]">
    <h3 className="text-2xl pl-5 mt-3 font-semibold">Related to items you viewed</h3>
  <div className="flex items-center justify-start space-x-5 p-5 overflow-x-auto">
    {[...Array(9).keys()].map((index) => (
      <div key={index} className="newcard relative w-[13rem] md:w-[13rem] min-w-[13rem] md:min-w-[16rem] overflow-hidden rounded-lg bg-white shadow-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <a href="#">
          <div className="flex flex-wrap justify-center">
            <img className="h-32 rounded-t-lg object-cover" src="img/slide4.png" alt="product image" />
          </div>
        </a>
        <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
          Sale
        </span>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="font-semibold tracking-tight text-slate-900">Nike Air MX Super 5000</h5>
          </a>
          <div className="mt-2.5 mb-5 flex items-center">
            <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              5.0
            </span>
            {[1, 2, 3, 4, 5].map((item, starIndex) => (
              <svg
                key={starIndex}
                xmlns="http://www.w3.org/2000/svg"
                fill="yellow"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                {/* SVG path for the star */}
              </svg>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <p>
              <span className="text-xl font-bold text-slate-900">$249</span>
              <span className="text-xs text-slate-900 line-through">$299</span>
            </p>
            <a
              href="#"
              className="flex items-center rounded-md bg-slate-900 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
             
              Add to cart
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

<hr />
    </>
  );
};

export default RelatedProduct;
