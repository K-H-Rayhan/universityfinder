/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import navigationOptions from "./filters/navigationOptions";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const loggedIn = false;
  const router = useRouter();
  return (
    <Disclosure as="nav" className=" bg-white z-50 border-b-2 border-gray-100">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 z-50">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center cursor-pointer">
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 bg-indigo-600 p-1 rounded-lg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigationOptions.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classNames(
                            router.pathname == "/" + item.name.toLowerCase()
                              ? " text-indigo-600"
                              : "text-black ",
                            "px-3 py-2 rounded-3xl text-sm font-bold tracking-tight flex flex-row"
                          )}
                        >
                          {item.svg}
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {loggedIn ? (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <span className="flex h-8 w-8">
                    <button
                      type="button"
                      className="bg-gray-50 p-1 rounded-full text-black hover:text-black focus:outline-none "
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="absolute inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
                  </span>
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-offset-gray-800 ">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className=" z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          <Link href="/profile">
                            <span
                              className={
                                "hover:bg-gray-100 px-4 py-2 text-sm text-black flex flex-row cursor-pointer"
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mt-3px"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                  stroke={4}
                                  clipRule="evenodd"
                                />
                              </svg>
                              &nbsp;{" "}
                              <span className={`font-bold`}>Your Profile</span>
                            </span>
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <a
                            href="#"
                            className={
                              "hover:bg-gray-100 px-4 py-2 text-sm text-black flex flex-row cursor-pointer"
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mt-3px"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                              />
                            </svg>
                            &nbsp;<span className={`font-bold`}>Sign Out</span>
                          </a>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : (
                <Link key={"login"} href={"/login"}>
                  <a
                    className={classNames(
                      router.pathname == "/login"
                        ? " text-indigo-600"
                        : "text-black ",
                      " text-sm font-bold tracking-tight flex flex-row absolute right-1"
                    )}
                  >
                    Login&nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                  </a>
                </Link>
              )}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 h-full">
              {navigationOptions.map((item) => (
                <Disclosure.Button
                  as="a"
                  className={classNames(
                    item.current
                      ? "bg-indigo-600 text-white"
                      : "text-black hover:bg-indigo-600 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  key={item.name}
                >
                  <Link href={item.href}>
                    <a>
                      {item.name}
                      {"/" + item.name.toLowerCase() == router.pathname
                        ? (item.current = true)
                        : (item.current = false)}
                    </a>
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
