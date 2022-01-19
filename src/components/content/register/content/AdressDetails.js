import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { FaBuilding, FaCity, FaHome } from "react-icons/fa";
import Stepper from "./Stepper";

export default function AdressDetails({
  step,
  nextStep,
  prevStep,
  handleChange,
  setUser,
  values,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const saveUser = (data) => {
    setUser((user) => ({
      ...user,
      fullAdress: data.fullAdress,
      building: data.building,
      flat: data.flat,
      city: data.city,
    }));
  };
  const onSubmit = (data) => {
    saveUser(data);
    nextStep();
  };

  const saveAndPrevious = (data) => {
    saveUser(data);
    prevStep();
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
          <div className="mt-8 p-4">
            <div className="block p-6 rounded-2xl shadow-2xl bg-white max-w-md">
              {/* Form goes here */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" flex flex-col justify-items-start">
                  <div className="py-2 max-w-sm">
                    <label
                      htmlFor="fullAdress"
                      className="block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      your full adress
                    </label>
                    <div className="relative mx-4">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <FaBuilding color="#A8A8A8" />
                      </div>
                      <input
                        type="text"
                        id="fullAdress"
                        defaultValue={values.fullAdress}
                        {...register("fullAdress", {
                          required: true,
                          minLength: 5,
                        })}
                        className={`${
                          errors.fullAdress
                            ? "border-red-500"
                            : "border-gray-300"
                        } bg-gray-50 border text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder="your full adress"
                      />
                    </div>
                    {errors.fullAdress?.type === "required" && (
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        Full adress is required !
                      </span>
                    )}
                    {errors.fullAdress?.type === "minLength" && (
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        Full adress is at least 5 caracters !
                      </span>
                    )}
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="p-2 max-w-sm">
                      <label
                        htmlFor="building"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Building
                      </label>
                      <div className="relative mt-1">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <FaHome color="#A8A8A8" />
                        </div>
                        <input
                          type="text"
                          id="building"
                          defaultValue={values.building}
                          {...register("building")}
                          className=" bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Building name"
                        />
                      </div>
                    </div>
                    <div className="py-2 max-w-sm">
                      <label
                        htmlFor="flat"
                        className="block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Flat
                      </label>
                      <div className="relative mx-4">
                        <input
                          type="text"
                          id="flat"
                          defaultValue={values.flat}
                          {...register("flat")}
                          className=" bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="flat number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="py-2 max-w-sm">
                    <label
                      htmlFor="city"
                      className="block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      your city
                    </label>
                    <div className="relative mx-4">
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <FaCity color="#A8A8A8" />
                      </div>
                      <input
                        type="text"
                        id="city"
                        defaultValue={values.city}
                        {...register("city", {
                          required: true,
                          minLength: 3,
                        })}
                        className={`${
                          errors.city ? "border-red-500" : "border-gray-300"
                        } bg-gray-50 border text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder="your city"
                      />
                    </div>
                    {errors.city?.type === "minLength" && (
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        Full adress is at least 3 caracters !
                      </span>
                    )}
                    {errors.city?.type === "required" && (
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        City is required !
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex p-2 mt-4">
                  <button
                    className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200 bg-gray-100 text-gray-700 border duration-200 ease-in-out border-gray-600 transition"
                    onClick={handleSubmit(saveAndPrevious)}
                  >
                    Previous
                  </button>
                  <div className="flex-auto flex flex-row-reverse">
                    <button
                      className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointerhover:bg-teal-600 bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition"
                      //onClick={() => nextStep()}
                      type="submit"
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
