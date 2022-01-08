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
  const Add = async (e) => {
    e.preventDefault();
    console.log("nice");
    // fetch("http://localhost:3001/api/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(inputs),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.msg == "Duplicate") setMessage("Email already used");
    //     else {
    //       setUser(data);
    //       router.push("/");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name + value);
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
                    Delete
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUniversity;
