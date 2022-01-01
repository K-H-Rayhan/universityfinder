import { useState } from "react";
import Layout from "../../component/Layout";
import ListedUniversity from "../../component/small/ListedUniversity";
import {
  location,
  rankings,
  departments,
} from "../../component/filters/allFilters";
import Listedbox from "../../component/small/Listedbox";
import {
  locationContext,
  departmentContext,
} from "../../component/filters/states";
import Listedbox2 from "../../component/small/Listedbox2";
function Index({universities}) {
  const [selected, setSelected] = useState(location[0]);
  const [selected2, setSelected2] = useState(departments[0]);
  return (
    <departmentContext.Provider value={{ selected2, setSelected2 }}>
      <locationContext.Provider value={{ selected, setSelected }}>
        <Layout className=" text-9xl">
          <div className="m-5 place-content-between gap-y-2 grid grid-cols-2 lg:grid-cols-4 gap-x-2">
            <div className=" flex flex-col items-center">
              <label
                htmlFor="price"
                className=" text-sm font-medium text-gray-700 "
              >
                GPA
              </label>
              <div className="mt-1 relative rounded-md  m-1 flex flex-row">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="border-0 pl-7 sm:text-sm  shadow-md rounded-tl-md rounded-bl-md outline-none h-10 flex w-20 items-center inset-y-0"
                  placeholder="SSC"
                />
                <input
                  type="text"
                  name="price"
                  id="price"
                  className=" border-0 pl-7 sm:text-sm rounded-tr-md rounded-br-md shadow-md outline-none h-10 flex w-20 items-center inset-y-0"
                  placeholder="HSC"
                />
              </div>
            </div>
            <div className="col-span-1 flex flex-col items-center">
              <Listedbox location={location} />
            </div>
            <div className="col-span-1 flex flex-col items-center">
              <Listedbox2 location={departments} />
            </div>
            <div className=" flex items-center justify-center ">
              <span className="inline-block text-center bg-indigo-600 border border-transparent rounded-3xl py-3 px-8 font-medium text-white hover:bg-indigo-700 cursor-pointer">
                Filter
              </span>
            </div>
          </div>
          <ListedUniversity university={universities} />
        </Layout>
      </locationContext.Provider>
    </departmentContext.Provider>
  );
}

export default Index;

export async function getServerSideProps() {
  // // Calculate start page
  // const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

  // // Fetch total/count
  // const totalRes = await fetch(`${API_URL}/events/count`)
  // const total = await totalRes.json()

  // Fetch events
  const universityRes = await fetch(
    `http://localhost:3001/api/find/`
  )
  const universities = await universityRes.json()
    // console.log(universities);
  return {
    props: { universities: universities },
  }
}
