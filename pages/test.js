import { useState } from "react";
import { useRouter } from "next/router";
export default function contact() {
  const inputDesign =
    " text-lg font-semibold focus:ring-1 focus:ring-green-400 outline-none rounded-md h-12 border-2 border-gray-300 focus:border-green-400 p-2 md:mb-0 mb-3";
  const [inputs, setInputs] = useState({});
  const [msg, setMsg] = useState("");
  const done = async (e) => {
    const data = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const res = await data.json();
    setMsg(res.token)
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full h-screen grid grid-rows-5 md:grid-cols-2 mt-16 md:mt-0 items-center justify-center justify-items-center">
      <div className="md:text-6xl text-4xl font-extrabold flex-wrap text-green-400 mx-5 md:row-start-2 ">
        Contact Me{msg}
        <hr className="mt-3 w-16 h-2 bg-green-400 rounded-full " />
        <div className=" bg-fixed bg-contactBg w-full"></div>
      </div>

      <div className="flex items-center justify-center w-full row-span-3 row-start-2">
        <form
          className=" flex flex-col w-full p-2 md:p-10 md:gap-5"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            className={inputDesign}
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            className={inputDesign}
            placeholder="Email"
            required
          />
          <div className="self-center mt-6">
            <button
              type="submit"
              className="bg-green-400 hover:bg-green-500 text-sm text-white font-bold py-6 px-12 rounded-full tracking-widest transform duration-500 hover:-translate-y-4 mt-3 mb-10"
              onClick={done}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = fetch("https://khrayhan.me/api/contact");
  return {
    props: {}, // will be passed to the page component as props
  };
}
