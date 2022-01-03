import { useRouter } from "next/router";
import React, { useEffect } from "react";

function Admin() {
  const router = useRouter();
  const userAdmin = true;
  useEffect(() => {
    userAdmin ? router.push("/") : "";
    return () => {
      userAdmin;
    };
  }, []);
  return userAdmin ? "" : "";
}

export default Admin;
