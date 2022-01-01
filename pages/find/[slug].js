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
      <div className="pt-6">
        <div className="max-w-2xl mx-auto sm:pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl  lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-3  lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {university.university_name}
            </h1>
          </div>
          <div className="py-4 sm:py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-3 lg:pr-8">
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {university.university_description}
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-md font-bold text-gray-900">Location</h3>

              <div className="mt-4">
                {university.university_location}, Bangladesh
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-md font-bold text-gray-900">Ranking</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  QS Ranking: {university.univeristy_qsranking}
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-md font-bold text-gray-900">Admission Requirments</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                Combined GPA of {university.university_total} in both SSC and HSC with minimum GPA {university.university_hsc} in each

                </p>
              </div>
            </div>
          </div>
        </div>
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
