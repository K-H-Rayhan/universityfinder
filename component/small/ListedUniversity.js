import { useRouter } from "next/router";
import React from "react";

function ls({ university }) {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className=" overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="pl-3 md:px-6 py-3 sm:text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                  >
                    Rank
                  </th>
                  <th
                    scope="col"
                    className="pl-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="pl-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    alert
                  </th>
                  <th
                    scope="col"
                    className="hidden sm:table-cell pl-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    location
                  </th>
                  <th
                    scope="col"
                    className="hidden sm:table-cell pl-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    scholarship
                  </th>
                  <th
                    scope="col"
                    className="pl-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    view
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {university.map((e) => (
                  <tr key={e.univeristy_id}>
                    <td className="pl-3 md:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 text-center sm:text-left">
                        {e.univeristy_qsranking}
                      </div>
                    </td>
                    <td className="pl-3 md:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 text-ellipsis w-52">
                        {e.university_name}
                      </div>
                    </td>
                    <td className="pl-3 md:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 cursor-pointer"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                      </div>
                    </td>
                    <td className="hidden sm:table-cell pl-3 md:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {e.university_location}
                      </div>
                    </td>
                    <td className="hidden sm:table-cell pl-3 md:px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {e.scholarship}
                      </span>
                    </td>
                    <td className="pl-3 md:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900" onClick={()=>router.push(`/find/${e.slug}`)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 cursor-pointer"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
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
    </div>
  );
}

export default ls;
