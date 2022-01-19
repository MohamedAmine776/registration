import { Switch } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaUnlock } from "react-icons/fa";
import Stepper from "./Stepper";

const emailRegex =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export default function TermsRegister({
  nextStep,
  handleChange,
  values,
  setUser,
  step,
}) {
  const [accept, setAccept] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    // TODO: Verify if email exist in database
    setUser((user) => ({
      ...user,
      email: data.email,
      password: data.password,
    }));
    nextStep();
  };

  return (
    <Fragment>
      <div className="flex flex-col justify-center items-center">
        <div className="my-6 mx-auto">
          <h1 className="font-mono text-2xl font-semibold">
            Create your account in minutes
          </h1>
        </div>
        <div className="p-5">
          <Stepper step={step} />
          <div className="p-4">
            <div className="block p-6 rounded-2xl shadow-2xl bg-white max-w-md">
              {/* Form goes here */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <div className="-ml-4 my-4 py-4 max-w-sm ">
                    <label
                      htmlFor="email"
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
                        id="email"
                        defaultValue={values.email}
                        {...register("email", {
                          required: true,
                          pattern: emailRegex,
                        })}
                        className={`${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } bg-gray-50 border  text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder="email@email.com"
                      />
                    </div>
                    {errors.email?.type === "required" && (
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        Email is required !
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        please enter a valid email !
                      </span>
                    )}
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
                        type="password"
                        id="password"
                        defaultValue={values.password}
                        {...register("password", {
                          required: true,
                          minLength: 8,
                        })}
                        className={`${
                          errors.password ? "border-red-500" : "border-gray-300"
                        } bg-gray-50 border text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder="your password"
                      />
                    </div>
                    {errors.password?.type === "required" && (
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        Password is required !
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        password must be minimum 8 caracters !
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-row ">
                  <Switch
                    checked={accept}
                    onChange={setAccept}
                    className={`${
                      accept ? "bg-blue-600" : "bg-gray-500"
                    } relative inline-flex items-center h-6 rounded-full w-11`}
                  >
                    <span className="sr-only">Accept conditions and terms</span>
                    <span
                      className={`${
                        accept ? "translate-x-6" : "translate-x-1"
                      } inline-block w-4 h-4 transform bg-white rounded-full`}
                    />
                  </Switch>
                  <div className="block mb-2 text-sm font-medium px-2 text-gray-900 dark:text-gray-300">
                    <span className="font-mono">
                      Accept terms and conditions
                    </span>
                  </div>
                </div>
                <div className="flex p-2 mt-4">
                  <div className="flex-auto flex flex-row-reverse">
                    <button
                      className={
                        accept
                          ? `text-base  
                      ml-2  
                      hover:scale-110 
                      focus:outline-none 
                      flex justify-center 
                      px-4 py-2 
                      rounded 
                      font-bold 
                      cursor-pointer 
                      hover:bg-teal-600  
                      bg-teal-600 
                      text-teal-100 
                      border duration-200 ease-in-out 
                      border-teal-600 transition`
                          : `text-white
                    bg-gray-500
                      text-base  
                      ml-2  
                      hover:scale-110 
                      focus:outline-none 
                      flex justify-center 
                      px-4 py-2 
                      rounded 
                      font-bold 
                      cursor-pointer `
                      }
                      type="submit"
                      disabled={!accept}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
