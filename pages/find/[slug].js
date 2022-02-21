import Layout from "../../component/Layout";
import { useRouter } from "next/router";
import { Switch } from "@headlessui/react";
import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../component/filters/states";

export default function EventPage({ university }) {
  const [wishlists, setWishlists] = useState({});
  const router = useRouter();
  const [dataUpdated, setdataUpdated] = useState();
  const { user } = useContext(userContext);
  useEffect(async () => {
    const email = await localStorage.getItem("email");
    const wishlistRes = await fetch(
      `https://limitless-taiga-11177.herokuapp.com/api/wishlist?user_mail=${email}`
    );
    const wishlist = await wishlistRes.json();
    setWishlists(wishlist);
  }, []);
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

  const found = () => {
    for (let i = 0; i < wishlists.length; i++)
      if (wishlists[i].univeristy_id == university.univeristy_id) {
        return true;
      }
  };

  return (
    <Layout>
      <div className="sm:pt-6 px-4 sm:p-8  max-w-7xl mx-auto">
        <h1 className="text-2xl  font-extrabold tracking-tight text-gray-900 sm:text-3xl mt-6">
          {university.university_name}
        </h1>
        <p className="text-base text-gray-900 pt-6">
          {university.description}
        </p>
        <div className="flex flex-row justify-between py-4 mt-5">
          <h2 className="text-md font-bold text-gray-900  flex tracking-tight self-center">
            Exam Notificaiton&nbsp;
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
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </h2>
          {found() ? (
            <Switch
              onChange={() => {
                if (user) {
                  deleteWishlist(university.univeristy_id);
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
                  addWishlist(university.univeristy_id);
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
        </div>
        <div className="flex flex-row justify-between  py-4">
          <h3 className="text-md font-bold text-gray-900 flex tracking-tight">
            Location&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </h3>
          <p className="text-sm text-gray-600 self-center">
            {university.university_location}, Bangladesh
          </p>
        </div>
        <div className="flex flex-row justify-between py-4">
          <h2 className="text-md font-bold text-gray-900 flex tracking-tight">
            Ranking&nbsp;
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
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </h2>
          <p className="text-sm text-gray-600 self-center">
            QS Ranking: {university.univeristy_qsranking}
          </p>
        </div>
        <div className="flex flex-row justify-between  py-4">
          <p className="text-md font-bold text-gray-900 flex tracking-tight  self-center">
            Admission Requirments&nbsp;
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
                strokeWidth={2}
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
          </p>
          <p className="text-sm text-gray-600 self-center">
            Combined GPA of {university.university_total} in both SSC and HSC
            with minimum GPA {university.university_hsc} in each
          </p>
        </div>
      </div>
      <div className="py-16"></div>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/events`)
//   const events = await res.json()

//   const paths = events.map((evt) => ({
//     params: { slug: evt.slug },
//   }))

//   return {
//     paths,
//     fallback: true,
//   }
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/events?slug=${slug}`)
//   const events = await res.json()

//   return {
//     props: {
//       evt: events[0],
//     },
//     revalidate: 1,
//   }
// }

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`https://limitless-taiga-11177.herokuapp.com/api/find/${slug}`);
  const university = await res.json();
  return {
    props: {
      university: university,
    },
  };
}
