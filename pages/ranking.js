import React from "react";
import Layout from "../component/Layout";
import ListedUniversity from "../component/small/ListedUniversity";

function Ranking({ universities }) {
 
  return (
    <Layout>
      <ListedUniversity university={universities} />
    </Layout>
  );
}

export default Ranking;

// export async function getServerSideProps() {
//   // Fetch events

//   const universityRes = await fetch(`https://limitless-taiga-11177.herokuapp.com/api/find/`);
//   const universities = await universityRes.json();
//   return {
//     props: { universities: universities},
//   };
// }
export async function getStaticProps() {
  const universityRes = await fetch(`https://limitless-taiga-11177.herokuapp.com/api/find/`);
  const universities = await universityRes.json();
  return {
    props: { universities: universities},
  }
}