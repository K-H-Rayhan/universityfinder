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

export async function getServerSideProps() {
  // Fetch events

  const universityRes = await fetch(`http://192.168.0.126:3001/api/find/`);
  const universities = await universityRes.json();
  return {
    props: { universities: universities},
  };
}