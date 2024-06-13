import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";
const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    document.title = "Mern - Dashboard";

    const lsToken = localStorage.getItem("token");
    const getData = async () => {
      const url = "http://localhost:5000/api/v1/dashboard";
      try {
        const { data } = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${lsToken}`,
          },
        });
        setUsername(data.username);
        setAdmin(data.isAdmin);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <main className="dashboard-container">
      <Header admin={admin}/>
      <div className="center">
        <h1>
          Welcome {username}
          <Link
            style={{
              color: "white",
              fontWeight: "600",
              textDecoration: "none",
            }}
            to="/login"
          >
            Login &rarr;
          </Link>
        </h1>
      </div>
    </main>
  );
};

export default Dashboard;
