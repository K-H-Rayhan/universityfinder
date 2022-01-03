import React from "react";
import Layout from "../component/Layout";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Login() {
  return (
    <Layout>
      <div className=" bg-white flex justify-center items-center overflow-ellipsis mt-2 sm:mt-20">
        <div className="sm:py-6 py-3 sm:px-4 px-1 bg-white rounded-2xl border-2  z-20 border-gray-50 border-opacity-90 shadow-lg">
          <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 bg-indigo-600 rounded-xl">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg",
                    "focus:outline-none",
                    selected
                      ? "bg-white shadow text-black"
                      : "text-white hover:bg-indigo-600 hover:text-white"
                  )
                }
              >
                Login
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg",
                    "focus:outline-none ",
                    selected
                      ? "bg-white shadow text-black"
                      : "text-white hover:bg-indigo-600 hover:text-white"
                  )
                }
              >
                Register
              </Tab>
            </Tab.List>

            <Tab.Panels className="mt-2">
              <Tab.Panel
                className={classNames(
                  "bg-white rounded-xl p-3",
                  "focus:outline-none "
                )}
              >
                <div>
                  <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                    Login to your account to enjoy all the features
                  </p>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Email Addres"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                  />
                </div>
                <div className="text-center mt-6">
                  <button className="py-3 w-64 text-xl text-white bg-indigo-600 rounded-2xl">
                    Login
                  </button>
                </div>
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "bg-white rounded-xl p-3",
                  "focus:outline-none "
                )}
              >
                <div>
                  <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                    Create an account to enjoy all the features
                  </p>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" required
                  />
                  <input
                    type="text"
                    placeholder="ID"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Email Addres"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                  />
                  <input
                    type="text"
                    placeholder="High School"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                  />
                </div>
                <div className="text-center mt-6">
                  <button className="py-3 w-64 text-xl text-white bg-indigo-600 rounded-2xl" type="submit">
                    Register
                  </button>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      <div className="w-full max-w-md px-2 py-16 sm:px-0"></div>
    </Layout>
  );
}

export default Login;
