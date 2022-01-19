import React, { Fragment, useState } from "react";
import countries from "i18n-iso-countries";

import enLocale from "i18n-iso-countries/langs/en.json";

import { Listbox, Transition } from "@headlessui/react";
import { FaCheck, FaChevronDown } from "react-icons/fa";

export default function CountrySelector({ getCountry, country }) {
  countries.registerLocale(enLocale);
  const countriesObj = countries.getNames("en", { select: "official" });
  const coutriesArr = Object.entries(countriesObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });
  const [selectedCountry, setSelectedCountry] = useState(country === "" ? coutriesArr[0]: country);

  return (
    <Fragment>
      <div className=" max-w-sm">
        <label
          htmlFor="country"
          className="block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your Country
        </label>
        <Listbox
          value={selectedCountry}
          onChange={(value) => {
            setSelectedCountry(value);
            getCountry(value);
          }}
        >
          <div className="relative mx-4 mt-1">
            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <span className="block truncate">{selectedCountry.label}</span>
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
              <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {coutriesArr.map((country, countryIdx) => (
                  <Listbox.Option
                    key={countryIdx}
                    className={({ active }) =>
                      `${
                        active ? "text-amber-900 bg-amber-100" : "text-gray-900"
                      }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                    }
                    value={country}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? "font-medium" : "font-normal"
                          } block truncate`}
                        >
                          {country.label}
                        </span>
                        {selected ? (
                          <span
                            className={`${
                              active ? "text-amber-600" : "text-amber-600"
                            }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <FaCheck className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </Fragment>
  );
}
