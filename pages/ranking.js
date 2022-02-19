import React from "react";
import Layout from "../component/Layout";
import ListedUniversity from "../component/small/ListedUniversity";

function Ranking({ universities,count }) {
  console.log(count);
  const { [count]: arrayToPrint } = count
  return (
    <Layout>
      <span className="w-screen text-center font-semibold hidden"> Totol Results = {count.count}</span>
      <ListedUniversity university={universities} />
    </Layout>
  );
}

export default Ranking;

export async function getServerSideProps() {
  // Fetch events
  const universityRes = await fetch(`http://192.168.0.126:3001/api/find/`);
  const universities = await universityRes.json();
  const universityRess = await fetch(`http://192.168.0.126:3001/api/count`);
  const universities1 = await universityRess.json();
  return {
    props: { universities: universities, count:universities1 },
  };
}