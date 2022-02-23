/* This example requires Tailwind CSS v2.0+ */
import {
  Fragment,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Disclosure, Menu, Transition, Popover } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import navigationOptions from "./filters/navigationOptions";
import { userContext } from "./filters/states";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Header() {
  const [solutions, setSolutions] = useState();
  useEffect(() => {
    fetch("https://limitless-taiga-11177.herokuapp.com/api/notice")
      .then((response) => response.json())
      .then((data) => setSolutions(data))
      .catch((err) => console.error(err));
  }, []);
  const router = useRouter();
  const { user, setUser } = useContext(userContext);
  const signOut = () => {
    localStorage.clear();
    setUser(null);
    router.push("/login");
  };

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
                    {user ? (
                      <Link href="/wishlist">
                        <a
                          className={classNames(
                            router.pathname == "/wishlist"
                              ? " text-indigo-600"
                              : "text-black ",
                            "px-3 py-2 rounded-3xl text-sm font-bold tracking-tight flex flex-row"
                          )}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mt-3px"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Wishlist
                        </a>
                      </Link>
                    ) : (
                      ""
                    )}
                    {user != null && user.user.role == "admin" ? (
                      <Link href="/admin">
                        <a
                          className={classNames(
                            router.pathname == "/admin"
                              ? " text-indigo-600"
                              : "text-black ",
                            "px-3 py-2 rounded-3xl text-sm font-bold tracking-tight hidden"
                          )}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                            />
                          </svg>
                          Admin
                        </a>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              {user ? (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div as="div" className="ml-3 relative">
                    <div></div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <div className=" z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div>Span Scholarship Notice</div>
                      </div>
                    </Transition>
                  </div>
                  <Popover className="relative z-40">
                    {({ open }) => (
                      <>
                        <Popover.Button>
                          <div className=" flex text-sm rounded-full focus:outline-none px-2">
                            <span className="flex h-8 w-8 mt-4 md:mt-2 ">
                              <span
                                type="button"
                                className="md:bg-gray-50 p-1 rounded-full text-black hover:text-black focus:outline-none"
                              >
                                <span className="sr-only">
                                  View notifications
                                </span>
                                <BellIcon
                                  className="h-6 w-6 md:pt-0 -ml-1 md:m-0"
                                  aria-hidden="true"
                                />
                              </span>
                              <span className="animate-ping absolute h-3 w-3 rounded-full bg-indigo-400 opacity-75 inline-flex"></span>
                              <span className="absolute  rounded-full h-3 w-3 bg-indigo-600 inline-flex"></span>
                            </span>
                          </div>
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-3/4 ">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-1">
                                <h1 className=" text-center">
                                  Scholarship Notice
                                </h1>
                                {solutions
                                  ? solutions.slice(0, 3).map((item) => (
                                      <a
                                        href={item.notice_url}
                                        key={item.notice_name}
                                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                      >
                                        <div className="ml-4">
                                          <p className="text-sm font-medium text-gray-900">
                                            {item.notice_name}
                                          </p>
                                          <p className="text-sm text-gray-500">
                                            {item.notice_description}
                                          </p>
                                        </div>
                                      </a>
                                    ))
                                  : ""}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className=" flex text-sm rounded-full focus:outline-none ">
                        <span className="sr-only">Open user menu</span>
                        <img
                          src="/images/undraw_profile_pic_ic-5-t.svg"
                          alt="Kamrul Hasan Rayhan"
                          className="rounded-full  w-7 h-7"
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
                            onClick={signOut}
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
                            &nbsp;
                            <button className={`font-bold`}>Sign Out</button>
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
                    <span>
                      {item.name}
                      {"/" + item.name.toLowerCase() == router.pathname
                        ? (item.current = true)
                        : (item.current = false)}
                    </span>
                  </Link>
                </Disclosure.Button>
              ))}
              {user ? (
                <Link href="/wishlist">
                  <a
                    className={classNames(
                      router.pathname == "/wishlist"
                        ? " text-indigo-600"
                        : "text-black ",
                      "px-3 py-2 rounded-3xl text-sm font-bold tracking-tight flex flex-row"
                    )}
                  >
                    Wishlist
                  </a>
                </Link>
              ) : (
                ""
              )}
              {user != null && user.user.role == "admin" ? (
                <Link href="/admin">
                  <a
                    className={classNames(
                      router.pathname == "/admin"
                        ? " text-indigo-600"
                        : "text-black ",
                      "px-3 py-2 rounded-3xl text-sm font-bold tracking-tight hidden"
                    )}
                  >
                    Admin
                  </a>
                </Link>
              ) : (
                ""
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
