import Layout from "../../component/Layout";
import { useRouter } from "next/router";
import { Switch } from "@headlessui/react";
import React from "react";

export default function EventPage({ post }) {
  const router = useRouter();

  const [enabled, setEnabled] = React.useState(false);
  post = post[0];
  return (
    <Layout>
      <div className="sm:pt-6 px-4 sm:p-8  max-w-7xl mx-auto">
        <h1 className="text-2xl  font-extrabold tracking-tight text-gray-900 sm:text-3xl mt-6">
          {post.university_name}
        </h1>
        <p className="text-base text-gray-900 pt-6">
          {post.university_description}
        </p>
        <div>
          <h1>Comments</h1>
        </div>
      </div>
    </Layout>
  );
}

// export async function getStaticProps({ query: { slug } }) {
//   const res = await fetch(`https://limitless-taiga-11177.herokuapp.com/api/find/${slug}`);
//   const post = await res.json();
//   return {
//     props: {
//       post: post,
//     },
//   };
// }
export async function getStaticProps({ query: { slug } }) {
  const res = await fetch(
    `https://limitless-taiga-11177.herokuapp.com/api/find/${slug}`
  );
  const post = await res.json();
  return {
    props: { post: post },
  };
}
