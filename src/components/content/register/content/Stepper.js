import React, { Fragment } from "react";

export default function Stepper({ step }) {
  return (
    <Fragment>
      <div className="mx-4 p-4">
        <div className="flex items-center">
          <div className="flex items-center text-white relative">
            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  bg-teal-600 border-teal-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-file-text"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
              Terms
            </div>
          </div>
          {step > 0 ? (
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
          ) : (
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
          )}
          <div
            className={`${
              step > 0 ? "text-white" : "text-gray-500"
            } flex items-center  relative
            `}
          >
            <div
              className={`${
                step > 0 ? "bg-teal-600 border-teal-600" : "border-gray-300"
              } rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-user"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
              Personal
            </div>
          </div>
          {step > 1 ? (
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
          ) : (
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
          )}
          <div
            className={`${
              step > 1 ? "text-white" : "text-gray-500"
            } flex items-center  relative
            `}
          >
            <div
              className={`${
                step > 1 ? "bg-teal-600 border-teal-600" : "border-gray-300"
              } rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 100.353 100.352"
                width="100%"
                height="100%"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g>
                  <path
                    d="M58.23,69.992l14.993-24.108c0.049-0.078,0.09-0.16,0.122-0.245c2.589-4.222,3.956-9.045,3.956-13.969
                          c0-14.772-12.018-26.79-26.79-26.79S23.72,16.898,23.72,31.67c0,4.925,1.369,9.75,3.96,13.975c0.03,0.074,0.065,0.146,0.107,0.216
                          l14.455,24.191c-11.221,1.586-18.6,6.2-18.6,11.797c0,6.935,11.785,12.366,26.829,12.366S77.3,88.783,77.3,81.849
                          C77.301,76.226,69.578,71.509,58.23,69.992z M30.373,44.294c-2.39-3.804-3.653-8.169-3.653-12.624
                          c0-13.118,10.672-23.79,23.791-23.79c13.118,0,23.79,10.672,23.79,23.79c0,4.457-1.263,8.822-3.652,12.624
                          c-0.05,0.08-0.091,0.163-0.124,0.249L54.685,70.01c-0.238,0.365-0.285,0.448-0.576,0.926l-4,6.432L30.507,44.564
                          C30.472,44.471,30.427,44.38,30.373,44.294z M50.472,91.215c-14.043,0-23.829-4.937-23.829-9.366c0-4.02,7.37-7.808,17.283-8.981
                          l4.87,8.151c0.269,0.449,0.751,0.726,1.274,0.73c0.004,0,0.009,0,0.013,0c0.518,0,1-0.268,1.274-0.708l5.12-8.232
                          C66.548,73.9,74.3,77.784,74.3,81.849C74.301,86.279,64.515,91.215,50.472,91.215z"
                  />
                  <path
                    d="M60.213,31.67c0-5.371-4.37-9.741-9.741-9.741s-9.741,4.37-9.741,9.741s4.37,9.741,9.741,9.741
                          C55.843,41.411,60.213,37.041,60.213,31.67z M43.731,31.67c0-3.717,3.024-6.741,6.741-6.741s6.741,3.024,6.741,6.741
                          s-3.023,6.741-6.741,6.741S43.731,35.387,43.731,31.67z"
                  />
                </g>
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
              Adress
            </div>
          </div>
          {step > 2 ? (
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
          ) : (
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
          )}
          <div
            className={`${
              step > 2 ? "text-white" : "text-gray-500"
            } flex items-center  relative
            `}
          >
            <div
              className={`${
                step > 2 ? "bg-teal-600 border-teal-600" : "border-gray-300"
              } rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2`}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 14 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>dollar [#1189]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  stroke="currentColor"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-63.000000, -2917.000000)"
                    fill={step > 2 ? "#FFF" : "#64748b"}
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M13.0000978,2768 C10.3390978,2768 9.00009781,2766.371 9.00009781,2764.5 C9.00009781,2762.691 10.2710978,2761 13.0000978,2761 L13.0000978,2768 Z M19.0000978,2773.5 L19.0000978,2773.5 C19.0000978,2775.309 17.7290978,2777 15.0000978,2777 L15.0000978,2770 C17.6610978,2770 19.0000978,2771.629 19.0000978,2773.5 L19.0000978,2773.5 Z M21.0000978,2773.5 L21.0000978,2773.5 C21.0000978,2770.732 18.9750978,2768 15.0000978,2768 L15.0000978,2761 L17.0000978,2761 C18.1050978,2761 19.0000978,2761.895 19.0000978,2763 L21.0000978,2763 C21.0000978,2760.791 19.2090978,2759 17.0000978,2759 L15.0000978,2759 L15.0000978,2757 L13.0000978,2757 L13.0000978,2759 C9.04209781,2759 7.00009781,2761.722 7.00009781,2764.5 C7.00009781,2767.268 9.02509781,2770 13.0000978,2770 L13.0000978,2777 L11.0000978,2777 C9.89509781,2777 9.00009781,2776.105 9.00009781,2775 L7.00009781,2775 C7.00009781,2777.209 8.79109781,2779 11.0000978,2779 L13.0000978,2779 L13.0000978,2781 L15.0000978,2781 L15.0000978,2779 C18.9580978,2779 21.0000978,2776.278 21.0000978,2773.5 L21.0000978,2773.5 Z"
                        id="dollar-[#1189]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
              Income
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
