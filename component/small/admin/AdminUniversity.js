import { useRouter } from "next/router";
import React from "react";
import { Switch, Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useContext } from "react";
import { userContext } from "../../filters/states";
function AdminUniversity({ university }) {
  let [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const { user } = useContext(userContext);
  const [inputs, setInputs] = useState({});
  const Delete = (e) => {
    
    fetch("https://universityfinderbackend-mongo-db.vercel.app/api/admin/universities", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    })
    .then((data) => {
        router.push("/");
    }).catch((error) => {
      console.error("Error:", error);
    });
  };
  const add = (e) => {
    e.preventDefault();
   
    fetch("https://universityfinderbackend-mongo-db.vercel.app/api/admin/universities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    }).then((data) => {
      router.push("/");
  }).catch((error) => {
      console.error("Error:", error);
    });
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

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
                  <tr key={e._id}>
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
                        onClick={() => router.push(`/find/edit/${e.slug}`)}
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
                        onClick={() => Delete(e)}
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
                  className="text-xl font-bold leading-6 text-gray-900 text-center mb-4"
                >
                  Add Univeristy
                </Dialog.Title>
                <div className="space-y-3 flex flex-col items-center text-sm">
                  <label>University Name</label>
                  <input
                    type="text"
                    placeholder="University Name"
                    className="block py-3 px-4 rounded-lg  w-9/12 border outline-none"
                    name="university_name"
                    value={inputs.university_name || ""}
                    onChange={handleChange}
                  />{" "}
                  <label>Description</label>
                  <textarea
                    type="text"
                    placeholder="Description"
                    className="block py-3 px-4 rounded-lg w-9/12 border outline-none scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-thumb-rounded"
                    name="description"
                    value={inputs.description || ""}
                    onChange={handleChange}
                    cols="30"
                    rows="4"
                  />{" "}
                  <label>University Hsc</label>
                  <input
                    type="text"
                    placeholder="University Hsc"
                    className="block py-3 px-4 rounded-lg  w-9/12 border outline-none"
                    name="university_hsc"
                    value={inputs.university_hsc || ""}
                    onChange={handleChange}
                  />{" "}
                  <label>University Location</label>
                  <input
                    type="text"
                    placeholder="University Location"
                    className="block py-3 px-4 rounded-lg  w-9/12 border outline-none"
                    name="university_location"
                    value={inputs.university_location || ""}
                    onChange={handleChange}
                  />{" "}
                  <label>University Ssc</label>
                  <input
                    type="text"
                    placeholder="University Ssc"
                    name="university_ssc"
                    className="block text-sm py-3 px-4 rounded-lg  w-9/12 border outline-none"
                    value={inputs.university_ssc || ""}
                    onChange={handleChange}
                  />{" "}
                  <label>University Surname</label>
                  <input
                    type="text"
                    placeholder="University Surname"
                    name="university_surname"
                    className="block text-sm py-3 px-4 rounded-lg  w-9/12 border outline-none"
                    value={inputs.university_surname || ""}
                    onChange={handleChange}
                  />{" "}
                  <label>University Total</label>
                  <input
                    type="text"
                    placeholder="University Total"
                    name="university_total"
                    className="block text-sm py-3 px-4 rounded-lg  w-9/12 border outline-none"
                    value={inputs.university_total || ""}
                    onChange={handleChange}
                  />{" "}
                  <label>Scholarship</label>
                  <input
                    type="text"
                    placeholder="Scholarship"
                    name="scholarship"
                    className="block text-sm py-3 px-4 rounded-lg  w-9/12 border outline-none"
                    value={inputs.scholarship || ""}
                    onChange={handleChange}
                  />
                  <label>Slug</label>
                  <input
                    type="text"
                    placeholder="Slug"
                    name="slug"
                    className="block text-sm py-3 px-4 rounded-lg  w-9/12 border outline-none"
                    value={inputs.slug || ""}
                    onChange={handleChange}
                  />
                  <label>Univeristy Qsranking</label>
                  <input
                    type="text"
                    placeholder="Univeristy Qsranking"
                    name="univeristy_qsranking"
                    className="block text-sm py-3 px-4 rounded-lg  w-9/12 border outline-none"
                    value={inputs.univeristy_qsranking || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="text-center mt-6 mb-6">
                  <button
                    className="py-3 w-64 text-xl text-white bg-indigo-600 rounded-2xl"
                    type="submit"
                    onClick={add}
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
