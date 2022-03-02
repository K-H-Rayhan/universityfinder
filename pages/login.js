import React, { useContext, useState } from "react";
import Layout from "../component/Layout";
import { Tab } from "@headlessui/react";
import { userContext } from "../component/filters/states";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Login() {
  const [message, setMessage] = useState(null);
  const { user, setUser } = useContext(userContext);
  const router = useRouter();
  const [inputs, setInputs] = useState({});
  const register = (e) => {
    e.preventDefault();
    fetch("https://limitless-taiga-11177.herokuapp.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.msg == "Duplicate") setMessage("Email already used");
        else {
          localStorage.setItem("token", data.token);
          localStorage.setItem("name", data.user.name);
          localStorage.setItem("email", data.user.email);
          localStorage.setItem("phone", data.user.phone);
          localStorage.setItem("role", data.user.role);
          localStorage.setItem("school", data.user.school);
          setUser(data);
          router.push("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const login = (e) => {
    e.preventDefault();
    fetch("https://limitless-taiga-11177.herokuapp.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.msg == "Wrong") setMessage("Wrong Credentials");
        else {
          setUser(data);
          localStorage.setItem("token", data.token);
          localStorage.setItem("name", data.user.name);
          localStorage.setItem("email", data.user.email);
          localStorage.setItem("phone", data.user.phone);
          localStorage.setItem("role", data.user.role);
          localStorage.setItem("school", data.user.school);
          router.push("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  return (
    <Layout>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      >

      <div className=" bg-white flex justify-center items-center overflow-ellipsis mt-2 sm:mt-20">
        <div className="sm:py-6 py-3 sm:px-4 px-1 bg-white rounded-2xl border-2  z-20 border-gray-50 border-opacity-90 shadow-lg">
          <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 bg-indigo-600 rounded-xl">
              <Tab
                className={({ selected }) =>
                classNames(
                  "w-1/2 py-2.5 text-sm leading-5 font-medium text-white rounded-lg",
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
                  "w-1/2 py-2.5 text-sm leading-5 font-medium text-white rounded-lg text-center",
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
                <form>
                  <div>
                    <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                      Login to your account to enjoy all the features
                    </p>
                  </div>

                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Email"
                      className="block py-3 px-4 rounded-lg w-full border outline-none"
                      name="email"
                      value={inputs.email || ""}
                      onChange={handleChange}
                      />
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="block py-3 px-4 rounded-lg w-full border outline-none"
                      value={inputs.password || ""}
                      onChange={handleChange}
                      />
                  </div>
                  <p className=" text-center text-red-600 pt-3">{message}</p>
                  <div className="text-center mt-6">
                    <input
                      className="py-3 w-64 text-xl text-white bg-indigo-600 rounded-2xl"
                      type="submit"
                      value="submit"
                      onClick={login}
                      />
                  </div>
                </form>
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
                <form>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="block py-3 px-4 rounded-lg w-full border outline-none"
                      name="name"
                      value={inputs.name || ""}
                      onChange={handleChange}
                      />
                    <input
                      type="text"
                      placeholder="Email"
                      className="block py-3 px-4 rounded-lg w-full border outline-none"
                      name="email"
                      value={inputs.email || ""}
                      onChange={handleChange}
                      />
                    <input
                      type="text"
                      placeholder="School"
                      className="block py-3 px-4 rounded-lg w-full border outline-none"
                      name="school"
                      value={inputs.school || ""}
                      onChange={handleChange}
                      />
                    <input
                      type="text"
                      placeholder="Phone"
                      className="block py-3 px-4 rounded-lg w-full border outline-none"
                      name="phone"
                      value={inputs.phone || ""}
                      onChange={handleChange}
                      />
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="block py-3 px-4 rounded-lg w-full border outline-none"
                      value={inputs.password || ""}
                      onChange={handleChange}
                      />
                  </div>
                  <p className=" text-center text-red-600 pt-3">{message}</p>
                  <div className="text-center mt-6">
                    <input
                      className="py-3 w-64 text-xl text-white bg-indigo-600 rounded-2xl"
                      type="submit"
                      value="submit"
                      onClick={register}
                      />
                  </div>
                </form>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      <div className="w-full max-w-md px-2 py-16 sm:px-0"></div>
                      </motion.div>
    </Layout>
  );
}

export default Login;
