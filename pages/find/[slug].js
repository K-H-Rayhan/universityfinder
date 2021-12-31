
import Layout from '../../component/Layout'
import { useRouter } from 'next/router';

export default function EventPage({ evt }) {
    const router = useRouter()

  return (
    <Layout>
     Nice
    </Layout>
  )
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

export async function getServerSideProps({query:{asd}}) {
//   const res = await fetch(`${API_URL}/events?slug=${slug}`)
//   const events = await res.json()
console.log(asd);
  return {
    props: {
    //   evt: events[0],
    },
  }
}