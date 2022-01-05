import { useRouter } from "next/router";
import React from "react";
import { Switch, Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
function AdminUniversity({ university }) {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpen2, setIsOpen2] = useState(false);
  const router = useRouter();
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal2() {
    setIsOpen2(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  return (
    <div className="flex flex-col">
      <div className=" overflow-x-auto">
        <div className="sm:py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg ">
            <table className="divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr className="">
                  <th
                    scope="col"
                    className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-4 px-8"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className=" text-center text-xs font-medium text-gray-500 uppercase tracking-wider px-8"
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className=" text-center text-xs font-medium text-gray-500 uppercase tracking-wider px-8"
                  >
                    Delete
                  </th>
                  <th
                    scope="col"
                    className=" text-center text-xs font-medium text-gray-500 uppercase tracking-wider px-8"
                  >
                    view
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-center">
                {university.map((e) => (
                  <tr key={e.univeristy_id}>
                    <td className=" whitespace-nowrap py-2">
                      <div className="text-sm text-gray-900 text-ellipsis text-left px-8">
                        {e.university_name}
                      </div>
                    </td>
                    <td className="whitespace-nowrap ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 hover:scale-125 cursor-pointer mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={()=> router.push(`/find/edit/${e.slug}`)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </td>
                    <td className="whitespace-nowrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 hover:scale-125 cursor-pointer mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="red"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </td>
                    <td className="whitespace-nowrap">
                      <div
                        className="text-sm text-gray-900  flex justify-center"
                        onClick={() => router.push(`/find/${e.slug}`)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 hover:scale-125 cursor-pointer mx-auto"
                          viewBox="0 0 20 20"
                          fill="#4f46e5"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mx-auto cursor-pointer bg-indigo-600 rounded-full p-1 mt-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          onClick={() => {
            openModal();
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-30 overflow-y-auto backdrop-blur-sm"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center  backdrop-blur-sm">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-[400ms]"
              enterFrom="opacity-0 scale-50"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    You need to login first in order to get notification for
                    university exams
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="ml-4 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-700 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => router.push(`/login`)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default AdminUniversity;
