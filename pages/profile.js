import React, { useContext } from "react";
import { PaperClipIcon } from "@heroicons/react/solid";
import Layout from "../component/Layout";
import { userContext } from "../component/filters/states";
function Profile() {
  const { user } = useContext(userContext);
  return (
    <Layout>
      {user ? (
        <div className="bg-[#fff] w-full py-10 px-10">
          <div className="grid md:grid-cols-3 md:grid-rows-none grid-rows-2 items-center justify-items-center w-full sm:my-20">
            <div className=" ">
              <img
                src="/images/undraw_profile_pic_ic-5-t.svg"
                alt="Kamrul Hasan Rayhan"
                className="rounded-full  md:w-80 w-52 "
              />
            </div>
            <div className="md:col-span-2 flex flex-col items-center text-center self-start md:self-center row-span-1 my-auto">
              <div className="xl:text-7xl lg:text-6xl text-4xl font-extrabold flex-wrap  md:py-10 my-4 text-black">
                {user.user.name}
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-br from-black to-blue-600  tracking-wider font-medium text-sm">
                Profile Information
              </div>
            </div>
          </div>
          <div className="sm:grid  xl:grid-cols-4 grid-cols-2 sm:gap-x-4">
            <div className="flex justify-between items-center bg-indigo-600 p-6 rounded-md mb-4">
              <div>
                <span className="text-md text-white">Email</span>
                <h1 className="sm:text-xl font-bold text-white">
                  {user.user.email}
                </h1>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-between items-center bg-indigo-600 p-6 rounded-md mb-4">
              <div>
                <span className="text-md text-white">Phone</span>
                <h1 className="sm:text-xl font-bold text-white">
                  {user.user.phone}
                </h1>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-between items-center bg-indigo-600 p-6 rounded-md mb-4">
              <div>
                <span className="text-md text-white">School</span>
                <h1 className="sm:text-xl font-bold text-white">
                  {user.user.school.toUpperCase()}
                </h1>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-between items-center bg-indigo-600 p-6 rounded-md mb-4">
              <div>
                <span className="text-md text-white">Role</span>
                <h1 className="sm:text-xl font-bold text-white">
                  {user.user.role.toUpperCase()}
                </h1>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
}

export default Profile;
