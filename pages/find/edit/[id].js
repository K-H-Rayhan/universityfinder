import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../component/Layout";
import { useRouter } from "next/router";
import { userContext } from "../../../component/filters/states";

export default function EventPage({ university }) {
  const { user } = useContext(userContext);
  const router = useRouter();
  useEffect(() => {
    user == null ? router.push("/") : "";
    return () => {
      user;
    };
  }, []);
  university = university[0];
  const [inputs, setInputs] = useState({
    university_name: university.university_name,
    description: university.university_description,
    university_hsc: university.university_hsc,
    university_location: university.university_location,
    university_ssc: university.university_ssc,
    university_surname: university.university_surname,
    university_total: university.university_total,
    scholarship: university.scholarship,
    slug: university.slug,
    univeristy_qsranking: university.univeristy_qsranking,
  });

  const update = async (e) => {
    e.preventDefault();
    // fetch("http://localhost:3001/api/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(inputs),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.msg == "Duplicate") setMessage("Email already used");
    //     else {
    //       setUser(data);
    //       router.push("/");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  return user && user.user.role == "admin" ? (
    <Layout>
      <div>
        <p className="w-full text-5xl text-center  mb-8  text-black tracking-wide font-bold mt-3">
          Edit {university.university_name}
        </p>
      </div>
      <div className="space-y-3 flex flex-col items-center">
        <label>University Name</label>
        <input
          type="text"
          placeholder="University Name"
          className="block py-3 px-4 rounded-lg  w-9/12 border outline-none"
          name="university_name"
          value={inputs.university_name || ""}
          onChange={handleChange}
        />{" "}
        <label>Description</label>
        <textarea
       
          type="text"
          placeholder="Description"
          className="block py-3 px-4 rounded-lg w-9/12 border outline-none scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-thumb-rounded"
          name="description"
          value={inputs.description || ""}
          onChange={handleChange}
          cols="30" rows="4" 
        />{" "}
        <label>University Hsc</label>
        <input
          type="text"
          placeholder="University Hsc"
          className="block py-3 px-4 rounded-lg  w-9/12 border outline-none"
          name="university_hsc"
          value={inputs.university_hsc || ""}
          onChange={handleChange}
        />{" "}
        <label>University Location</label>
        <input
          type="text"
          placeholder="University Location"
          className="block py-3 px-4 rounded-lg  w-9/12 border outline-none"
          name="university_location"
          value={inputs.university_location || ""}
          onChange={handleChange}
        />{" "}
        <label>University Ssc</label>
        <input
          type="text"
          placeholder="University Ssc"
          name="university_ssc"
          className="block text-sm py-3 px-4 rounded-lg  w-9/12 border outline-none"
          value={inputs.university_ssc || ""}
          onChange={handleChange}
        />{" "}
        <label>University Surname</label>
        <input
          type="text"
          placeholder="University Surname"
          name="university_surname"
          className="block text-sm py-3 px-4 rounded-lg  w-9/12 border outline-none"
          value={inputs.university_surname || ""}
          onChange={handleChange}
        />{" "}
        <label>University Total</label>
        <input
          type="text"
          placeholder="University Total"
          name="university_total"
          className="block text-sm py-3 px-4 rounded-lg  w-9/12 border outline-none"
          value={inputs.university_total || ""}
          onChange={handleChange}
        />{" "}
        <label>Requirments</label>
        <input
          type="text"
          placeholder="Requirments"
          name="requirments"
          className="block text-sm py-3 px-4 rounded-lg  w-9/12 border outline-none"
          value={inputs.scholarship || ""}
          onChange={handleChange}
        />
        <label>Slug</label>
        <input
          type="text"
          placeholder="Slug"
          name="slug"
          className="block text-sm py-3 px-4 rounded-lg  w-9/12 border outline-none"
          value={inputs.slug || ""}
          onChange={handleChange}
        />
        <label>Univeristy Qsranking</label>
        <input
          type="text"
          placeholder="Univeristy Qsranking"
          name="univeristy_qsranking"
          className="block text-sm py-3 px-4 rounded-lg  w-9/12 border outline-none"
          value={inputs.univeristy_qsranking || ""}
          onChange={handleChange}
        />
      </div>
      <div className="text-center mt-6 mb-6">
        <button
          className="py-3 w-64 text-xl text-white bg-indigo-600 rounded-2xl"
          type="submit"
          onClick={update}
        >
          Update
        </button>
      </div>
    </Layout>
  ) : (
    ""
  );
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`http://localhost:3001/api/find/${id}`);
  const university = await res.json();
  return {
    props: {
      university: university,
    },
  };
}
