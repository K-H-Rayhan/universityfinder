import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../component/Layout";
function index() {
  const [asdasd, setX] = useState({});
  useEffect(async () => {
    const csdf = await fetch("https://api.github.com/repos/zeit/next.js").then(
      (res) => res.json()
    );
    setX(csdf);
  }, []);
  return (
    <Layout>
      <div className="relative bg-white overflow-hidden z-auto">
        <div className="sm:pt-24 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                University Finder Bangladesh
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Struggling to find a university ?<br />
                Search for top universities in BD
              </p>
            </div>
            <div>
              <Link href="/find">
                <span className=" mt-10 inline-block text-center bg-indigo-600 border border-transparent rounded-3xl py-3 px-8 font-medium text-white hover:bg-indigo-700 cursor-pointer">
                  Find University
                  {asdasd.id}
                </span>
              </Link>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className=" relative transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <Image
                      src="/images/undraw_education_f8ru.svg"
                      alt="University Finder"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
