import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useContext } from "react/cjs/react.development";
import { userContext } from "../../component/filters/states";
import Layout from "../../component/Layout";
const forums = [
  {
    Subject: "IDK YET",
    Details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
        doloremque. Quaerat provident commodi consectetur veniam similique ad 
        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
        quasi aliquam eligendi, placeat qui corporis!`,
    Solved: true,
  },
];
export default function Forum() {
  const { user } = useContext(userContext);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <Layout>
      {user ? (
        <div className="flex justify-between px-6 sm:px-14 py-5 items-center">
          <div className="xl:text-7xl lg:text-6xl text-4xl font-extrabold flex-wrap text-center text-gray-700">
            Forum
          </div>
          <input
            className="w-20 h-12 font-semibold text-white bg-indigo-600 rounded-full cursor-pointer"
            type="submit"
            value="Post"
            onClick={openModal}
          />
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={closeModal}
            >
              <div className="min-h-screen px-4 text-center backdrop-blur-sm">
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
                  enterFrom="opacity-0 scale-50"
                  enterTo="opacity-100 rotate-0 scale-100"
                  leave="transform duration-200 transition ease-in-out"
                  leaveFrom="opacity-100 rotate-0 scale-100 "
                  leaveTo="opacity-0 scale-95 "
                >
                  <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Payment successful
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </div>
      ) : (
        <div className="xl:text-7xl lg:text-6xl text-4xl font-extrabold flex-wrap text-center text-gray-700 py-3 ">
          Forum
        </div>
      )}
      <div className="flex flex-col self-auto items-center w-full justify-items-center sm:px-10 px-2 mb-10">
        <div className="  w-full  shadow-lg rounded-xl flex flex-col self-auto ">
          <div>
            <div className=" p-6 space-y-2">
              <div className="text-4xl font-extrabold flex-wrap text-left text-gray-700">
                {forums[0].Subject}
              </div>
              <div className="truncate">{forums[0].Details}</div>
              <div className="flex justify-between">
                <div className=" text-indigo-600 after:content-['_↗'] cursor-pointer">
                  Read More
                </div>
                <div className="text-md text-gray-700 font-extrabold flex">
                  Answered: &nbsp;
                  {forums[0].Solved ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="red"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <hr />
            <div className=" p-6 space-y-2">
              <div className="text-4xl font-extrabold flex-wrap text-left text-gray-700">
                {forums[0].Subject}
              </div>
              <div className="truncate">{forums[0].Details}</div>
              <div className="flex justify-between">
                <div className=" text-blue-600 after:content-['_↗'] cursor-pointer">
                  Read More
                </div>
                <div className="text-md text-gray-700 font-extrabold flex">
                  Answered: &nbsp;
                  {forums[0].Solved ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="red"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <hr />
            <div className=" p-6 space-y-2">
              <div className="text-4xl font-extrabold flex-wrap text-left text-gray-700">
                {forums[0].Subject}
              </div>
              <div className="truncate">{forums[0].Details}</div>
              <div className="flex justify-between">
                <div className=" text-blue-600 after:content-['_↗'] cursor-pointer">
                  Read More
                </div>
                <div className="text-md text-gray-700 font-extrabold flex">
                  Answered: &nbsp;
                  {forums[0].Solved ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="red"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <hr />
            <div className=" p-6 space-y-2">
              <div className="text-4xl font-extrabold flex-wrap text-left text-gray-700">
                {forums[0].Subject}
              </div>
              <div className="truncate">{forums[0].Details}</div>
              <div className="flex justify-between">
                <div className=" text-blue-600 after:content-['_↗'] cursor-pointer">
                  Read More
                </div>
                <div className="text-md text-gray-700 font-extrabold flex">
                  Answered: &nbsp;
                  {forums[0].Solved ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="red"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <hr />
            <div className=" p-6 space-y-2">
              <div className="text-4xl font-extrabold flex-wrap text-left text-gray-700">
                {forums[0].Subject}
              </div>
              <div className="truncate">{forums[0].Details}</div>
              <div className="flex justify-between">
                <div className=" text-blue-600 after:content-['_↗'] cursor-pointer">
                  Read More
                </div>
                <div className="text-md text-gray-700 font-extrabold flex">
                  Answered: &nbsp;
                  {forums[0].Solved ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="red"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <hr />
            <div className=" p-6 space-y-2">
              <div className="text-4xl font-extrabold flex-wrap text-left text-gray-700">
                {forums[0].Subject}
              </div>
              <div className="truncate">{forums[0].Details}</div>
              <div className="flex justify-between">
                <div className=" text-blue-600 after:content-['_↗'] cursor-pointer">
                  Read More
                </div>
                <div className="text-md text-gray-700 font-extrabold flex">
                  Answered: &nbsp;
                  {forums[0].Solved ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="red"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <hr />

            <div className=" p-6 space-y-2">
              <div className="text-4xl font-extrabold flex-wrap text-left text-gray-700">
                {forums[0].Subject}
              </div>
              <div className="truncate">{forums[0].Details}</div>
              <div className="flex justify-between">
                <div className=" text-blue-600 after:content-['_↗'] cursor-pointer">
                  Read More
                </div>
                <div className="text-md text-gray-700 font-extrabold flex">
                  Answered: &nbsp;
                  {forums[0].Solved ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="red"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </Layout>
  );
}
