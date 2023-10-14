"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../../hooks/baseUrl";

const AddProduct = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [sortselected, setSortSelected] = useState("");
  const [market_price, setMarketPrice] = useState(799);
  const [our_price, setOurPrice] = useState(599);
  const [stock, setStock] = useState(40);

  const handleInputChange = (e) => {};

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // dfxuti2nl
  const handleSave = async () => {
    console.log("hey");
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "gallery");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dfxuti2nl/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const newProduct = {
        ...info,
        image: url,
        
        // market_price: Number(market_price),
        // our_price: Number(our_price),
        // stock: Number(stock),

         category : sortselected,
      };

      console.log(url);
      await axios.post(`${base_url}/products/create`, newProduct);
      alert("Product Added Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(sortselected);

  const toggleSortMenu = () => {
    setSortOpen(!sortOpen);
    if (filterOpen) setFilterOpen(false);

    // selected items set to filterselected
  };

  const toggleFilterMenu = () => {
    setFilterOpen(!filterOpen);
    if (sortOpen) setSortOpen(false);
  };

  return (
    <>
      <div className="h-[100vh] mt-10 md:mt-0 w-full flex items-center justify-center">
        <div className="max-w-3xl md:h-[65vh] mx-auto p-4 bg-white overflow-y-auto">
          <h1 className="text-2xl font-semibold mb-4">Add New Product</h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium mb-2"food
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full p-2 border rounded-md"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium mb-2"
              >
                Market Price
              </label>
              <input
                type="number"
                name="market_price"
                id="name"
                className="w-full p-2 border rounded-md"
                required
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium mb-2"
              >
                Our Price
              </label>
              <input
                type="number"
                name="our_price"
                id="name"
                className="w-full p-2 border rounded-md"
                required
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium mb-2"
              >
                Stock
              </label>
              <input
                type="number"
                name="stock"
                id="name"
                className="w-full p-2 border rounded-md"
                required
                onChange={handleChange}
              />
            </div>
            <div className="relative mb-4">
              <button
                onClick={toggleSortMenu}
                className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                type="button"
              >
                Category{" "}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              {sortOpen && (
                <div className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 dark:divide-gray-600">
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDividerButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setSortSelected("Study Tools")}
                      >
                        Study Tools
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setSortSelected(" Personal Care")}
                      >
                        Personal Care
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setSortSelected("Office Supplies")}
                      >
                        Office Supplies
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setSortSelected(" Sports")}
                      >
                        Sports
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setSortSelected("Snacks")}
                      >
                        Snacks
                      </a>
                    </li>
                  </ul>
                  <div className="py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      onClick={() => setSortSelected("arts")}
                    >
                      Arts and Craft
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="photo"
                className="block text-gray-600 font-medium mb-2"
              >
                Add Photo
              </label>
              <input
                type="file"
                name="image"
                id="photo"
                accept="image/*"
                className="w-full p-2 border rounded-md"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <div className="mb-4">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt="Product Preview"
                className="w-32 h-32 object-cover rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-600 font-medium mb-2"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="w-full p-2 border rounded-md"
                onChange={handleChange}
              />
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="bg-blue-500 text-white rounded-md py-2 px-4 mr-2"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type="button"
                className="bg-gray-400 text-white rounded-md py-2 px-4"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
