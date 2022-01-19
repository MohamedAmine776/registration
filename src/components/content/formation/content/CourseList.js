import React from "react";
import { FaSearch } from "react-icons/fa";
import Card from "../helpers/Card";

export default function CourseList() {
  return (
    <div className="ml-16 p-4">
      <div className="flex flex-wrap justify-center items-center mb-1 space-x-4">
        <div className="p-2 ">
          <label
            for="categories"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Select Category
          </label>
          <select
            id="categories"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>

        <div className="p-2">
          <label
            for="sortBy"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            <span> Sort</span>
          </label>
          <select
            id="sortBy"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>

        <div className="p-2">
          <label
            for="search"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            <span>Search</span>
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <FaSearch />
            </span>
            <input
              type="text"
              id="search"
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
          </div>
        </div>
      </div>

      <div className="w-full gap-4 flex-wrap flex justify-center items-center mt-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
