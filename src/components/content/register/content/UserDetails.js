import React, { Fragment, useState } from "react";
import { FaBirthdayCake, FaPhone, FaUser } from "react-icons/fa";
import Stepper from "./Stepper";
import CountrySelector from "./CountrySelector";
import { useForm } from "react-hook-form";
import moment from "moment";

const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
export default function UserDetails({
  step,
  nextStep,
  prevStep,
  handleChange,
  setUser,
  values,
}) {
  const [country, setCountry] = useState(values.nationality);
  const getCountry = (country) => {
    setCountry(country);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const saveUser = (data) => {
    setUser((user) => ({
      ...user,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      birthday: data.birthday,
      nationality: country,
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
          <div className="p-4">
            <div className="block p-6 rounded-2xl shadow-2xl bg-white max-w-md">
              {/* Form goes here */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" flex flex-col justify-items-start">
                  <div className="flex flex-row justify-between items-center">
                    <div className="p-2 max-w-sm">
                      <label
                        htmlFor="firstName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        First Name
                      </label>
                      <div className="relative mt-1">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <FaUser color="#A8A8A8" />
                        </div>
                        <input
                          type="text"
                          id="firstName"
                          defaultValue={values.firstName}
                          {...register("firstName", {
                            required: true,
                            minLength: 3,
                          })}
                          className={`${
                            errors.firstName
                              ? "border-red-500"
                              : "border-gray-300"
                          } bg-gray-50 border text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                          placeholder="First Name"
                        />
                      </div>
                      {errors.firstName?.type === "required" && (
                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                          First name is required !
                        </span>
                      )}
                      {errors.firstName?.type === "minLength" && (
                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                          First name must be at least 3 caracters !
                        </span>
                      )}
                    </div>
                    <div className="py-2 max-w-sm">
                      <label
                        htmlFor="lastName"
                        className="block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Last Name
                      </label>
                      <div className="relative mx-4">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <FaUser color="#A8A8A8" />
                        </div>
                        <input
                          type="text"
                          id="lastName"
                          defaultValue={values.lastName}
                          {...register("lastName", {
                            required: true,
                            minLength: 3,
                          })}
                          className={`${
                            errors.lastName
                              ? "border-red-500"
                              : "border-gray-300"
                          } bg-gray-50 border text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                          placeholder="Last Name"
                        />
                      </div>
                      {errors.lastName?.type === "required" && (
                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                          Last name is required !
                        </span>
                      )}
                      {errors.lastName?.type === "minLength" && (
                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                          Last name must be at least 3 caracters !
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="py-2 max-w-sm">
                      <label
                        htmlFor="birthday"
                        className="block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your Birthday
                      </label>
                      <div className="relative mx-4">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <FaBirthdayCake color="#A8A8A8" />
                        </div>
                        <input
                          type="date"
                          id="birthday"
                          defaultValue={moment(values.birthday).format(
                            "YYYY-MM-DD"
                          )}
                          {...register("birthday", {
                            valueAsDate: true,
                            required: true,
                            validate: {
                              require: (v) => moment(v).isValid(),
                              valid: (v) => moment().diff(v, "years") < 100,
                              age: (v) => moment().diff(v, "years") > 18,
                            },
                          })}
                          className={`${
                            errors.birthday
                              ? "border-red-500"
                              : "border-gray-300"
                          } bg-gray-50 border text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        />
                      </div>
                      {errors.birthday?.type === "require" && (
                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                          Birthday is required !
                        </span>
                      )}
                      {errors.birthday?.type === "age" && (
                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                          you must be 18 + years !
                        </span>
                      )}
                      {errors.birthday?.type === "valid" && (
                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                          enter a valid date !
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="py-2 max-w-sm">
                      <label
                        htmlFor="phone"
                        className="block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your Phone number
                      </label>
                      <div className="relative mx-4">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <FaPhone color="#A8A8A8" />
                        </div>
                        <input
                          type="text"
                          id="phone"
                          defaultValue={values.phone}
                          {...register("phone", {
                            required: true,
                            minLength: 6,
                            maxLength: 14,
                            pattern: phoneRegex,
                          })}
                          className={`${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          } bg-gray-50 border text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                          placeholder="+xxx(country indice)- xxx-xxx-xxx"
                        />
                      </div>
                      {errors.phone?.type === "required" && (
                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                          Phone number is required !
                        </span>
                      )}
                      {errors.phone?.type === "maxLength" && (
                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                          incorrect phone number (greater than 14 caracters)
                        </span>
                      )}
                      {errors.phone?.type === "minLength" && (
                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                          incorrect phone number (less than 6 caracters)
                        </span>
                      )}
                      {errors.phone?.type === "pattern" && (
                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                          incorrect phone number
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <CountrySelector
                      getCountry={getCountry}
                      country={values.nationality}
                    />
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
