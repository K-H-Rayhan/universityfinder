import Layout from "../../component/Layout";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function EventPage({ university }) {
  const router = useRouter();
  university = university[0];
  return (
    <Layout>
      <div className="pt-6 p-4 sm:p-8  max-w-7xl mx-auto">
        <h1 className="text-2xl  font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          {university.university_name}
        </h1>
        <h3 className="sr-only">Description</h3>
        <p className="text-base text-gray-900 pt-6">
          {university.university_description}
        </p>
        <h3 className="text-md font-bold text-gray-900 pt-6">Location</h3>
        {university.university_location}, Bangladesh
        <h2 className="text-md font-bold text-gray-900 pt-6">Ranking</h2>
        <p className="text-sm text-gray-600">
          QS Ranking: {university.univeristy_qsranking}
        </p>
        <h2 className="text-md font-bold text-gray-900 pt-6">
          Admission Requirments
        </h2>
        <p className="text-sm text-gray-600">
          Combined GPA of {university.university_total} in both SSC and HSC with
          minimum GPA {university.university_hsc} in each
        </p>
      </div>
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
  const res = await fetch(`http://localhost:3001/api/find/${slug}`);
  const university = await res.json();
  return {
    props: {
      university: university,
    },
  };
}
