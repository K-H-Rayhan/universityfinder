import "../styles/globals.css";
import { userContext } from "../component/filters/states";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={{user, setUser}}>
      <Component {...pageProps} />
    </userContext.Provider>
  );
}

export default MyApp;
