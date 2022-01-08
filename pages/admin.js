import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { userContext } from "../component/filters/states";
import Layout from "../component/Layout";
import { Tab } from "@headlessui/react";
import AdminUniversity from "../component/small/admin/AdminUniversity";
import AdminUser from "../component/small/admin/AdminUser";
import AdminForum from "../component/small/admin/AdminForums";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Admin({ universities }) {
  const router = useRouter();
  const { user } = useContext(userContext);
  useEffect(() => {
    localStorage.getItem("role") != "admin" ? router.push("/") : "";
  }, []);
  return user && user.user.role == "admin" ? (
    <Layout>
      <div className=" bg-white  hidden sm:flex justify-center items-center overflow-ellipsis mt-3">
        <div className="sm:py-6 py-3 sm:px-4 px-1 bg-white rounded-2xl border-2  z-20 border-gray-50 border-opacity-90 shadow-lg">
          <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 bg-indigo-600 rounded-xl">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg px-4",
                    "focus:outline-none ",
                    selected
                      ? "bg-white shadow text-black"
                      : "text-white hover:bg-indigo-600 hover:text-white"
                  )
                }
              >
                Universities
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg px-4",
                    "focus:outline-none",
                    selected
                      ? "bg-white shadow text-black"
                      : "text-white hover:bg-indigo-600 hover:text-white"
                  )
                }
              >
                Forums
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg px-4",
                    "focus:outline-none",
                    selected
                      ? "bg-white shadow text-black"
                      : "text-white hover:bg-indigo-600 hover:text-white"
                  )
                }
              >
                Users
              </Tab>
            </Tab.List>

            <Tab.Panels className="mt-2">
              <Tab.Panel
                className={classNames(
                  "bg-white rounded-xl p-3",
                  "focus:outline-none "
                )}
              >
                <AdminUniversity university={universities} />
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "bg-white rounded-xl p-3",
                  "focus:outline-none "
                )}
              >
                <AdminForum university={universities} />
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "bg-white rounded-xl p-3",
                  "focus:outline-none "
                )}
              >
                <AdminUser university={universities} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      <div className="w-full max-w-md px-2 py-16 sm:px-0"></div>
      <div className="flex sm:hidden text-6xl font-extrabold self-center justify-self-center p-10">
        {" "}
        Not supported
      </div>
    </Layout>
  ) : (
    ""
  );
}

export default Admin;

export async function getServerSideProps() {
  // // Calculate start page
  // const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

  // // Fetch total/count
  // const totalRes = await fetch(`${API_URL}/events/count`)
  // const total = await totalRes.json()

  // Fetch events
  const universityRes = await fetch(`http://localhost:3001/api/find/`);
  const universities = await universityRes.json();
  return {
    props: { universities: universities },
  };
}
