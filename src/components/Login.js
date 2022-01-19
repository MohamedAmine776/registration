import React from "react";
import HeaderImage from "../assets/login-head.png";
import { FaEnvelope, FaUnlock } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div
      className="w-screen min-h-screen bg-gradient-to-tr 
    from-[#2193b0] to-[#6dd5ed] md:bg-login-image md:bg-login bg-no-repeat fixed bg-clip-content"
    >
      <div className="pt-20 md:pt-24 md:pl-52 xl:pt-12 xl:pl-[56rem]">
        <div className="w-96 bg-indigo-200 rounded-2xl ">
          <div className="flex flex-col justify-center items-center">
            <img
              src={HeaderImage}
              alt="Header"
              className="rounded-full bg-white w-20 h-20 my-4"
            />
            <form>
              <div className="-ml-4 my-4 py-4 w-80">
                <label
                  htmlFor="email-adress"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Email
                </label>
                <div className="relative mt-1">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <FaEnvelope color="#A8A8A8" />
                  </div>
                  <input
                    type="text"
                    id="email-adress"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="email@email.com"
                  />
                </div>
              </div>

              <div className="-ml-4 -mt-6 mb-4 py-4 w-80">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Password
                </label>
                <div className="relative mt-1">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <FaUnlock color="#A8A8A8" />
                  </div>
                  <input
                    type="text"
                    id="password"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your password"
                  />
                </div>
              </div>
              <div>
                <button
                  className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="space-x-6 mb-4">
              <Link
                className="text-indigo-700 hover:text-pink-700 text-sm "
                to={"/"}
              >
                Forgot Password?
              </Link>
              <Link
                className="text-indigo-700 hover:text-pink-700 text-sm "
                to={"/register"}
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
