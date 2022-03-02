import { motion } from "framer-motion";
import React from "react";
import Layout from "../component/Layout";
import ListedUniversity from "../component/small/ListedUniversity";

function Ranking({ universities }) {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{opacity: 0 }}
      >
        <ListedUniversity university={universities} />
      </motion.div>
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
  const universityRes = await fetch(
    `https://limitless-taiga-11177.herokuapp.com/api/find/`
  );
  const universities = await universityRes.json();
  return {
    props: { universities: universities },
  };
}
