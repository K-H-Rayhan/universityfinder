import { useRouter } from "next/router";
import React from "react";
import { Switch, Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
function AdminUser({ university }) {
  let [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const router = useRouter();
  const user = false;
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
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
                    Roles
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

                    <td className="whitespace-nowrap focus:outline-none">
                      <select>
                        {/* value={optionsState} */}
                        <option value="A">Admin</option>
                        <option value="B">Teacher</option>
                        <option value="C">Student</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className=" w-full  text-center  my-2">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium rounded-2xl bg-indigo-600 text-white"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUser;
