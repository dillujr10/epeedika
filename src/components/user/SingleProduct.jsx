import React from 'react'

const SingleProduct = () => {
  return (
    <>
    <div className="bg-gray-100 py-8 h-[calc(100vh-90px)]">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div className="h-[460px] rounded-lg bg-slate-50 mb-4 flex items-center justify-center">
          <img
            className="w-[80%] h-[80%] object-cover"
            src="/img/slide4.png"
            alt="Product Image"
          />
        </div>
        <div className="flex -mx-2 mb-4">
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="text-2xl font-bold mb-2">Product Name</h2>
        <p className="text-gray-600 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante
          justo. Integer euismod libero id mauris malesuada tincidunt.
        </p>
        <div className="flex mb-4">
          <div className="mr-4">
            <span className="font-bold text-gray-700">Price:</span>
            <span className="text-gray-600">$29.99</span>
          </div>
          <div>
            <span className="font-bold text-gray-700">Special Price</span>
            <span className="text-gray-600">$25.99</span>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-gray-700">Availability:</span>
          <span className="text-gray-600">In Stock</span>
        </div>
      
        <div>
          <span className="font-bold text-gray-700">Product Description:</span>
          <p className="text-gray-600 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            ante justo. Integer euismod libero id mauris malesuada tincidunt.
            Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue
            vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae
            nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum
            lacinia, non sagittis mauris blandit. Morbi fermentum libero vel
            nisl suscipit, nec tincidunt mi consectetur.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default SingleProduct