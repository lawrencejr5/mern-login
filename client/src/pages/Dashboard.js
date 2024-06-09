import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
const Dashboard = () => {
  useEffect(() => {
    document.title = "Mern - Dashboard";
  }, []);
  return (
    <main className="dashboard-container">
      <Header />
      <div className="center">
        <h1>
          User is logged in{" "}
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
