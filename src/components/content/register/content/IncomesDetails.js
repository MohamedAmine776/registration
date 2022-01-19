import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import Stepper from "./Stepper";
import {
  incomeAnnual,
  incomeSource,
  plannedInvestement,
} from "./helpers/dataForSelect";

export default function IncomesDetails({
  prevStep,
  handleChange,
  values,
  setUser,
  step,
}) {
  const [selectedAnnual, setSelectedAnnual] = useState(
    values.annualIncome === "" ? incomeAnnual[0] : values.annualIncome
  );
  const [selectedSource, setSelectedSource] = useState(
    values.incomeSource === "" ? incomeSource[0] : values.incomeSource
  );
  const [selectedInvest, setselectedInvest] = useState(
    values.plannedInvestement === ""
      ? plannedInvestement[0]
      : values.plannedInvestement
  );

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const saveUser = (data) => {
    setUser((user) => ({
      ...user,
      incomeSource: data.selectedSource,
      annualIncome: data.selectedAnnual,
      plannedInvestement: data.selectedInvest,
    }));
  };

  const onSubmit = (data) => {
    // TODO: submit with axios
    saveUser(data);
    let newUser = {
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.Phone,
      birthday: values.birthday,
      nationality: values.nationality,
      email: values.email,
      password: values.password,
      fullAdress: values.fullAdress,
      building: values.building,
      flat: values.flat,
      city: values.city,
      incomeSource: data.selectedSource,
      annualIncome: data.selectedAnnual,
      plannedInvestement: data.selectedInvest,
      registred: new Date().toUTCString(),
    };
    console.log(newUser);
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
          <div className="my-4 p-4">
            <div className="block p-6 rounded-2xl shadow-2xl bg-white max-w-md">
              <p className="pl-2 pb-3 font-mono text-sm">
                Please make sure all the information you provide is correct.
              </p>
              {/* Form goes here */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col justify-items-start">
                  <div className="w-full max-w-xs pb-7">
                    <Controller
                      name="selectedAnnual"
                      control={control}
                      rules={{ validate: (v) => v.value !== "default" }}
                      defaultValue={selectedAnnual}
                      render={({ field: { onChange } }) => (
                        <Listbox
                          value={selectedAnnual}
                          onChange={(e) => {
                            onChange(e);
                            setSelectedAnnual(e);
                          }}
                        >
                          {({ open }) => (
                            <>
                              <Listbox.Label className="block text-sm leading-5 font-medium text-gray-700">
                                Your net annual income
                              </Listbox.Label>
                              <div className="relative mt-1">
                                <Listbox.Button
                                  className={`${
                                    errors.selectedAnnual
                                      ? "border border-red-500"
                                      : ""
                                  } relative w-full py-2 pl-3 pr-10 text-left  bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm`}
                                >
                                  <span className="block truncate">
                                    {selectedAnnual.label}
                                  </span>
                                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <FaChevronDown
                                      className="w-5 h-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Listbox.Button>
                                <Transition
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute z-[1] w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {incomeAnnual.map((income, incomeIdx) => (
                                      <Listbox.Option
                                        key={incomeIdx}
                                        className={({ active }) =>
                                          `${
                                            active
                                              ? "text-amber-900 bg-amber-100"
                                              : "text-gray-900"
                                          }
                        cursor-default select-none relative py-2 pl-10 pr-4`
                                        }
                                        value={income}
                                      >
                                        {({ selected, active }) => (
                                          <>
                                            <span
                                              className={`${
                                                selected
                                                  ? "font-medium"
                                                  : "font-normal"
                                              } block truncate`}
                                            >
                                              {income.label}
                                            </span>
                                            {selected ? (
                                              <span
                                                className={`${
                                                  active
                                                    ? "text-amber-600"
                                                    : "text-amber-600"
                                                }
                              absolute inset-y-0 left-0 flex items-center pl-3`}
                                              >
                                                <FaCheck
                                                  className="w-5 h-5"
                                                  aria-hidden="true"
                                                />
                                              </span>
                                            ) : null}
                                          </>
                                        )}
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </>
                          )}
                        </Listbox>
                      )}
                    />
                  </div>
                  {/*-------------------------------------------------------------------------*/}
                  <div className="w-full max-w-xs pb-7">
                    <Controller
                      name="selectedInvest"
                      control={control}
                      rules={{ validate: (v) => v.value !== "default" }}
                      defaultValue={selectedInvest}
                      render={({ field: { onChange } }) => (
                        <Listbox
                          value={selectedInvest}
                          onChange={(e) => {
                            onChange(e);
                            setselectedInvest(e);
                          }}
                        >
                          {({ open }) => (
                            <>
                              <Listbox.Label className="block text-sm leading-5 font-medium text-gray-700">
                                Your annaual planned investement
                              </Listbox.Label>
                              <div className="relative mt-1">
                                <Listbox.Button
                                  className={`${
                                    errors.selectedInvest
                                      ? "border border-red-500"
                                      : ""
                                  } relative w-full py-2 pl-3 pr-10 text-left  bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm`}
                                >
                                  <span className="block truncate">
                                    {selectedInvest.label}
                                  </span>
                                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <FaChevronDown
                                      className="w-5 h-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Listbox.Button>
                                <Transition
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute z-[1] w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {plannedInvestement.map(
                                      (investement, investementIdx) => (
                                        <Listbox.Option
                                          key={investementIdx}
                                          className={({ active }) =>
                                            `${
                                              active
                                                ? "text-amber-900 bg-amber-100"
                                                : "text-gray-900"
                                            }
                        cursor-default select-none relative py-2 pl-10 pr-4`
                                          }
                                          value={investement}
                                        >
                                          {({ selected, active }) => (
                                            <>
                                              <span
                                                className={`${
                                                  selected
                                                    ? "font-medium"
                                                    : "font-normal"
                                                } block truncate`}
                                              >
                                                {investement.label}
                                              </span>
                                              {selected ? (
                                                <span
                                                  className={`${
                                                    active
                                                      ? "text-amber-600"
                                                      : "text-amber-600"
                                                  }
                              absolute inset-y-0 left-0 flex items-center pl-3`}
                                                >
                                                  <FaCheck
                                                    className="w-5 h-5"
                                                    aria-hidden="true"
                                                  />
                                                </span>
                                              ) : null}
                                            </>
                                          )}
                                        </Listbox.Option>
                                      )
                                    )}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </>
                          )}
                        </Listbox>
                      )}
                    />
                  </div>
                  {/*-------------------------------------------------------------------------*/}
                  <div className="w-full max-w-xs pb-7">
                    <Controller
                      name="selectedSource"
                      control={control}
                      rules={{ validate: (v) => v.value !== "default" }}
                      defaultValue={selectedSource}
                      render={({ field: { onChange } }) => (
                        <Listbox
                          value={selectedSource}
                          onChange={(e) => {
                            onChange(e);
                            setSelectedSource(e);
                          }}
                        >
                          {({ open }) => (
                            <>
                              <Listbox.Label className="block text-sm leading-5 font-medium text-gray-700">
                                Your main source of income and savings
                              </Listbox.Label>
                              <div className="relative mt-1">
                                <Listbox.Button
                                  className={`${
                                    errors.selectedSource
                                      ? "border border-red-500"
                                      : ""
                                  } relative w-full py-2 pl-3 pr-10 text-left  bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm`}
                                >
                                  <span className="block truncate">
                                    {selectedSource.label}
                                  </span>
                                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <FaChevronDown
                                      className="w-5 h-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Listbox.Button>
                                <Transition
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute z-[1] w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {incomeSource.map((income, incomeIdx) => (
                                      <Listbox.Option
                                        key={incomeIdx}
                                        className={({ active }) =>
                                          `${
                                            active
                                              ? "text-amber-900 bg-amber-100"
                                              : "text-gray-900"
                                          }
                        cursor-default select-none relative py-2 pl-10 pr-4`
                                        }
                                        value={income}
                                      >
                                        {({ selected, active }) => (
                                          <>
                                            <span
                                              className={`${
                                                selected
                                                  ? "font-medium"
                                                  : "font-normal"
                                              } block truncate`}
                                            >
                                              {income.label}
                                            </span>
                                            {selected ? (
                                              <span
                                                className={`${
                                                  active
                                                    ? "text-amber-600"
                                                    : "text-amber-600"
                                                }
                              absolute inset-y-0 left-0 flex items-center pl-3`}
                                              >
                                                <FaCheck
                                                  className="w-5 h-5"
                                                  aria-hidden="true"
                                                />
                                              </span>
                                            ) : null}
                                          </>
                                        )}
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </>
                          )}
                        </Listbox>
                      )}
                    />
                  </div>

                  {/*-------------------------------------------------------------------------*/}
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
                      //onClick={onSubmit}
                      type="submit"
                      className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointerhover:bg-teal-600 bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition"
                    >
                      Validate
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
