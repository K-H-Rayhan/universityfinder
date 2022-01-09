import React from "react";
import Layout from "../component/Layout";
import ListedUniversity from "../component/small/ListedUniversity";

function Ranking({ universities }) {
  return (
    <Layout>
      <ListedUniversity university={universities} wish={true}/>
    </Layout>
  );
}

export default Ranking;

export async function getServerSideProps() {
  // // Calculate start page
  // const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

  // // Fetch total/count
  // const totalRes = await fetch(`${API_URL}/events/count`)
  // const total = await totalRes.json()

  // Fetch events
  const universityRes = await fetch(`http://192.168.0.126:3001/api/find/`);
  const universities = await universityRes.json();
  return {
    props: { universities: universities },
  };
}
