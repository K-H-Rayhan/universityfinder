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
function Index({count}) {
  const x = count
  const [selected, setSelected] = useState(location[0]);
  const [selected2, setSelected2] = useState(departments[0]);
  const [universities, setUniversities] = useState({});
  const [gpa, setGpa] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGpa((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const universityRes = await fetch(
      `https://limitless-taiga-11177.herokuapp.com/api/filter?sscgpa=${gpa.sscgpa}&hscgpa=${gpa.hscgpa}&location=${selected.name}&department=${selected2.name}`
    );
    const university = await universityRes.json();
    setUniversities(university);
  };
  return (
    <departmentContext.Provider value={{ selected2, setSelected2 }}>
      <locationContext.Provider value={{ selected, setSelected }}>
        <Layout className=" text-9xl">
          <form onSubmit={handleSubmit}>
            <div className="m-5 place-content-between gap-y-2 grid grid-cols-2 lg:grid-cols-4 gap-x-2">
              <div className=" flex flex-col items-center">
                <label
                  htmlFor="gpa"
                  className=" text-sm font-medium text-gray-700 "
                >
                  GPA
                </label>

                <div className="mt-1 relative rounded-md  m-1 flex flex-row">
                  <input
                    type="text"
                    name="sscgpa"
                    id="sscgpa"
                    className="border-0 pl-7 sm:text-sm  shadow-md rounded-tl-md rounded-bl-md outline-none h-10 flex w-20 items-center inset-y-0"
                    placeholder="SSC"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="hscgpa"
                    id="hscgpa"
                    className=" border-0 pl-7 sm:text-sm rounded-tr-md rounded-br-md shadow-md outline-none h-10 flex w-20 items-center inset-y-0"
                    placeholder="HSC"
                    onChange={handleChange}
                    required
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
                <input
                  type="submit"
                  className="inline-block text-center bg-indigo-600 border border-transparent rounded-3xl py-3 px-8 font-medium text-white hover:bg-indigo-700 cursor-pointer"
                ></input>
              </div>
            </div>
          </form>
          <ListedUniversity university={universities} />
        </Layout>
      </locationContext.Provider>
    </departmentContext.Provider>
  );
}

export default Index;


