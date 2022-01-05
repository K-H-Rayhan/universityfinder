import React, { useContext, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
function Layout({ title, description, keywords, children }) {
  return (
    <div className="select-none h-screen overflow-scroll scrollbar scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-white scrollbar-thumb-rounded-full">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
Layout.defaultProps = {
  title: "Find University",
  description: "Find the best universities",
  keywords: "university, qs, qsranking, topuniversity",
};
