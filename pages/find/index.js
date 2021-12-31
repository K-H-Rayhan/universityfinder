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
function Index() {
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
                className=" text-sm font-medium text-gray-700 hidden sm:block"
              >
                Select GPA
              </label>
              <div className="mt-1 relative rounded-md shadow-md m-1">
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm pl-2">GPA</span>
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="w-full border-0 block pl-10 pr-12 sm:text-sm  rounded-md outline-none h-10"
                  placeholder="0.00"
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
          {console.log(selected)}
          {console.log(selected2)}
          <ListedUniversity people1={rankings} />
        </Layout>
      </locationContext.Provider>
    </departmentContext.Provider>
  );
}

export default Index;
