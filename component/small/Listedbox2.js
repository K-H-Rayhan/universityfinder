import { Fragment, useState, useContext } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { departmentContext } from "../filters/states";
/* This example requires Tailwind CSS v2.0+ */

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Listedbox({ location }) {
  const { selected2, setSelected2 } = useContext(departmentContext);
  return (
    <Listbox value={selected2} onChange={setSelected2}>
      {({ open }) => (
        <>
          <Listbox.Label className=" text-sm font-medium text-gray-700 hidden sm:block ">
            Select Department
          </Listbox.Label>
          <div className="mt-1 relative">
          <Listbox.Button className="relative bg-white rounded-md  shadow-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm w-40">
              <span className="flex items-center">
                <span className="ml-1 block truncate md:w-auto">
                  {selected2.name} 
                </span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none ">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute  z-10 mt-1 bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-thumb-rounded">
                {location.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected2, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected2 ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected2 ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
  );
}

export default Listedbox;
