import React from "react";
import AddProduct from "./AddProduct";

function ProductList() {
  return (
    <>
      <div className="mx-auto h-[calc(100vh-48px)] overflow-y-auto  w-screen-lg px-4 py-8 sm:px-8">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="font-semibold text-gray-700 text-2xl">
              All Products
            </h2>
            <span className="text-xl text-gray-500">View All Products</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="ml-10 space-x-8 lg:ml-40">
              <button className="flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-y-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <div className="h-[70vh] overflow-y-auto">
              <table className="w-full">
                <thead className="sticky top-0">
                  <tr className="bg-gray-900 text-left text-xs font-semibold uppercase tracking-widest text-white ">
                    <th className="px-5 py-3">ID</th>
                    <th className="px-5 py-3">Product Name</th>
                    <th className="hidden md:table-cell px-5 py-3 ">
                      Category
                    </th>
                    <th className="hidden md:table-cell px-5 py-3">Price</th>
                    <th className="px-5 py-3">Edit</th>
                  </tr>
                </thead>
                <tbody className="text-gray-500    ">
                  <tr>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap">3</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-full w-full rounded-full"
                            src="/img/slide4.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="whitespace-no-wrap">Besique Monroe</p>
                        </div>
                      </div>
                    </td>
                    <td className="hidden md:table-cell border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className=" whitespace-no-wrap ">Administrator</p>
                    </td>
                    <td className="hidden md:table-cell border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p className="whitespace-no-wrap ">Sep 28, 2022</p>
                    </td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm  ">
                      <button className="rounded-full bg-blue-700 px-2 py-1 text-xs font-semibold text-black ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3 h-3 md:w-6 md:h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                        </svg>
                      </button>
                      <button className=" md:ml-1 mt-1 md:mt-0 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-black">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3 h-3 md:w-6 md:h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
            <span className="text-xs text-gray-600 sm:text-sm">
              {" "}
              Total Number of Users{" "}
            </span>
            <div className="mt-2 inline-flex sm:mt-0"></div>
          </div>
        </div>
      </div>
   
    </>
  );
}

export default ProductList;
