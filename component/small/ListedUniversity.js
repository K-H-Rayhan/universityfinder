import { useRouter } from "next/router";
import { Switch, Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect, useState } from "react";
import { userContext } from "../filters/states";
function ls({ university, wish = false }) {
  let [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const router = useRouter();
  const [wishlists, setWishlists] = useState({});
  const { user } = useContext(userContext);
  const [dataUpdated, setdataUpdated] = useState();
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  useEffect(async () => {
    const email = await localStorage.getItem("email");
    const wishlistRes = await fetch(
      `https://limitless-taiga-11177.herokuapp.com/api/wishlist?user_mail=${email}`
    );
    const wishlist = await wishlistRes.json();
    setWishlists(wishlist);
  }, [dataUpdated]);

  const addWishlist = async (univeristy_id) => {
    const user_mail = user.user.email;
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    try {
      const universityRes = await fetch(
        `https://limitless-taiga-11177.herokuapp.com/api/wishlist?user_mail=${user_mail}&univeristy_id=${univeristy_id}`,
        settings
      );
      const university = await universityRes.json();
      setdataUpdated(Math.random());
      return data;
    } catch (e) {
      return e;
    }
  };
  const deleteWishlist = async (univeristy_id) => {
    const user_mail = user.user.email;
    const settings = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    try {
      const universityRes = await fetch(
        `https://limitless-taiga-11177.herokuapp.com/api/wishlist?user_mail=${user_mail}&univeristy_id=${univeristy_id}`,
        settings
      );
      const university = await universityRes.json();
      setdataUpdated(Math.random());
      return data;
    } catch (e) {
      return e;
    }
  };

  const found = (e) => {
    for (let i = 0; i < wishlists.length; i++)
      if (wishlists[i].univeristy_id == e.univeristy_id) {
        return true;
      }
  };

  return (
    <div className="flex flex-col">
      <div className=" overflow-x-auto">
        <div className="sm:py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                  >
                    Rank
                  </th>
                  <th
                    scope="col"
                    className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    wishlist
                  </th>
                  <th
                    scope="col"
                    className="hidden sm:table-cell  text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    location
                  </th>
                  <th
                    scope="col"
                    className="hidden sm:table-cell  text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    scholarship
                  </th>
                  <th
                    scope="col"
                    className=" text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    view
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-center">
                {university.length != undefined
                  ? university
                      .filter((e) => {
                        return wish ? (found(e) ? e : "") : e;
                      })
                      .map((e) => (
                        <tr key={e.univeristy_id}>
                          <td className=" py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {e.univeristy_qsranking}
                            </div>
                          </td>
                          <td className=" whitespace-nowrap">
                            <div
                              className="text-sm text-gray-900 text-ellipsis w-48 text-left cursor-pointer"
                              onClick={() => router.push(`/find/${e.slug}`)}
                            >
                              {e.university_name}
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            {wishlists.length > 0 ? (
                              found(e) ? (
                                <Switch
                                  onChange={() => {
                                    if (user) {
                                      deleteWishlist(e.univeristy_id);
                                    } else {
                                      openModal();
                                    }
                                  }}
                                  className={`${"bg-indigo-600"}
                    relative inline-flex flex-shrink-0 h-[26px] w-[46px] border-2 self-center border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                >
                                  <span className="sr-only">Use setting</span>
                                  <span
                                    aria-hidden="true"
                                    className={`${"translate-x-5"}
                    pointer-events-none inline-block h-[22px] w-[22px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                                  />
                                </Switch>
                              ) : (
                                <Switch
                                  onChange={() => {
                                    if (user) {
                                      addWishlist(e.univeristy_id);
                                    } else {
                                      openModal();
                                    }
                                  }}
                                  className={`${"bg-gray-200"}
                    relative inline-flex flex-shrink-0 h-[26px] w-[46px] border-2 self-center border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                >
                                  <span className="sr-only">Use setting</span>
                                  <span
                                    aria-hidden="true"
                                    className={`${"translate-x-0"}
                    pointer-events-none inline-block h-[22px] w-[22px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                                  />
                                </Switch>
                              )
                            ) : (
                              <Switch
                                key={e.univeristy_id}
                                onChange={() => {
                                  if (user) {
                                    addWishlist(e.univeristy_id);
                                  } else {
                                    openModal();
                                  }
                                }}
                                className={`${"bg-gray-200"}
relative inline-flex flex-shrink-0 h-[26px] w-[46px] border-2 self-center border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                              >
                                <span className="sr-only">Use setting</span>
                                <span
                                  aria-hidden="true"
                                  className={`${"translate-x-0"}
pointer-events-none inline-block h-[22px] w-[22px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                                />
                              </Switch>
                            )}
                          </td>
                          <td className="hidden sm:table-cell py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {e.university_location}
                            </div>
                          </td>
                          <td className="hidden sm:table-cell py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {e.scholarship}
                            </span>
                          </td>
                          <td className="whitespace-nowrap mx-auto">
                            <div
                              className="text-sm text-gray-900  flex justify-center"
                              onClick={() => router.push(`/find/${e.slug}`)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 hover:scale-125 cursor-pointer"
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
                      ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-sm "
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
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
              enterFrom="opacity-0  scale-50"
              enterTo="opacity-100  scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100  scale-100 "
              leaveTo="opacity-0 scale-95 "
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Login First
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
                    Login
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

export default ls;
