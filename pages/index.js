import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../component/Layout'
import { useState } from 'react'
export default function Home() {
  const [user, setUser] = useState(false)
  console.log(user);
  if(user)return<div>Login First</div>
  return (
  <Layout>
Home
  </Layout>
  )
}
