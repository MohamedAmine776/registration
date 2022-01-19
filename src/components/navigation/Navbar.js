/* eslint-disable jsx-a11y/anchor-is-valid */
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import DefaultImage from "../../assets/default-user.png";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800">
      <div className="max-w-8xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className=" flex space-x-4">
            <div className=" shrink-0">
              <Link
                to={"/"}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span> Virtual Trading </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4 ml-10">
                <Link
                  to="/"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span>Home</span>
                </Link>
                <Link
                  to="/trading"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                  <span> Trading</span>
                </Link>
                <Link
                  to="/course"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  <span> Learn to trade</span>
                </Link>
                <Link
                  to="/"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <span> Forum</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              to="/register"
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
            >
              Sing-up
            </Link>
            <Link
              to="/login"
              className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
            >
              Login
            </Link>
          </div>
          <div className="flex items-center md:block">
            <Menu>
              <Menu.Button
                type="button"
                className="flex items-center mr-3 text-sm rounded-full md:mr-0 "
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
              >
                <span className="sr-only"> open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src={DefaultImage}
                  alt="user profil menu"
                />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 w-56 md:mt-2 mt-32  bg-gray-700 divide-y divide-gray-500 rounded-md shadow-lg ring-1 ring-gray-600 ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        className="bg-gray-800 group flex rounded-md items-center w-full px-2 py-2 text-sm text-white hover:bg-gray-600"
                        to="/"
                      >
                        Account settings
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        className="bg-gray-800 group flex rounded-md items-center w-full px-2 py-2 text-sm text-white hover:bg-gray-600"
                        to="/"
                      >
                        Account settings
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        className="bg-gray-800 group flex rounded-md items-center w-full px-2 py-2 text-sm text-white hover:bg-gray-600"
                        to="/"
                      >
                        Account settings
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
              >
                <span> Home </span>
              </Link>
              <Link
                to="/"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
              >
                <span> Trading</span>
              </Link>
              <Link
                to="/"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
              >
                <span> Courses</span>
              </Link>
              <Link
                to="/"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
              >
                <span> Forum</span>
              </Link>

              <Link
                to="/register"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
              >
                <span>Sing-up</span>
              </Link>
              <Link
                to="/login"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
              >
                <span>Login</span>
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}
