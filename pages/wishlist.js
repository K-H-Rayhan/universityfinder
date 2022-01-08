import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import { userContext } from '../component/filters/states';
import Layout from  '../component/Layout'

function Wishlist() {
    const { user } = useContext(userContext);
    const router = useRouter();
    useEffect(() => {
      localStorage.getItem("role") == null ?  router.push("/") : '';
  }, []);
    return user ? <Layout>Wishlist</Layout> : "";
}

export default Wishlist
