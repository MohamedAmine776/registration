import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaCheck, FaChevronDown } from "react-icons/fa";

const incomeAnnual = [
  {
    label: "Required to select an item",
    value: "default",
  },
  {
    label: "0 - 10000 USD ",
    value: "0-100000",
  },
  {
    label: "10000 - 30000 USD ",
    value: "10000 - 30000",
  },
  {
    label: "30000 -90000 USD ",
    value: "30000-90000",
  },
  {
    label: "90000 - 150000 USD ",
    value: "90000-150000",
  },
  {
    label: "+ 150000 USD ",
    value: "+150000",
  },
];

export default function Home() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [selectedAnnual, setSelectedAnnual] = useState(incomeAnnual[0]);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Fragment>
      <div className="top-16 fixed max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center justify-center p-12">
            <div className="w-full max-w-xs mx-auto">
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
                          Assigned to
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
           
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
