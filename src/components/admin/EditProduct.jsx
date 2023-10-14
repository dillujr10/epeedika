"use client";
import React, { useState } from "react";

const EditProduct = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    offerPercentage: '',
    originalPrice: '',
    ourPrice: '',
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, photo: file });
  };

  const handleSave = () => {
    // Handle saving the product data (e.g., send it to an API or perform an action).
    // You can use product.name, product.description, etc., to access the form values.
  };

  const handleCancel = () => {
    // Handle canceling the form or resetting the input values.
    // You can set the product state back to initial values if needed.
  };

  
  const toggleSortMenu = () => {
    setSortOpen(!sortOpen);
    if (filterOpen) setFilterOpen(false);
  };

  const toggleFilterMenu = () => {
    setFilterOpen(!filterOpen);
    if (sortOpen) setSortOpen(false);
  };


  return (
    <>
    <div className="h-[100vh] mt-10 md:mt-0 w-full flex items-center justify-center">
    <div className="max-w-3xl md:h-[65vh] mx-auto p-4 bg-white overflow-y-auto">
      <h1 className="text-2xl font-semibold mb-4">Edit/Upgrade Product</h1>
      <form>
  
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full p-2 border rounded-md"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
            Market Price
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full p-2 border rounded-md"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
            Our Price
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full p-2 border rounded-md"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
            Stock
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full p-2 border rounded-md"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="relative mb-4">
        <button
          onClick={toggleSortMenu}
          className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
          type="button"
        >
          Category{' '}
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
                >
                 Study Tools
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sports
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                 Food
                </a>
              </li>
            </ul>
            <div className="py-2">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
               Arts
              </a>
            </div>
          </div>
        )}
      </div>

        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-600 font-medium mb-2">
            Change Photo
          </label>
          <input
            type="file"
            name="photo"
            id="photo"
            accept="image/*"
            className="w-full p-2 border rounded-md"
            onChange={handlePhotoChange}
          />
        </div>

        { product.photo && (
          <div className="mb-4">
            <img
              src={URL.createObjectURL(product.photo)}
              alt="Product Preview"
              className="w-32 h-32 object-cover rounded-md"
            />
          </div>
        )
        }

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-600 font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="w-full p-2 border rounded-md"
            value={product.description}
            onChange={handleInputChange}
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
            onClick={handleCancel}
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

export default EditProduct;
