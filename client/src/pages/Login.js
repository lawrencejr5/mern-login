import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Login";
  }, []);

  const [person, setPerson] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = "http://localhost:5000/api/v1/login";
    try {
      const { data } = await axios.post(endpoint, { ...person });
      setPerson({ username: "", fullname: "", password: "" });
      const token = data.token;

      localStorage.setItem("token", token);
      localStorage.setItem("username", data.username);
      setTimeout(() => {
        navigate("/");
      }, 1000);
      console.log(data.msg);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <section className="register-section">
        <div className="regForm">
          <form action="" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="inp-handler">
              <label htmlFor="uname">Username:</label>
              <input
                type="text"
                value={person.username}
                placeholder="username"
                id="uname"
                name="username"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="inp-handler">
              <label htmlFor="pass">Password:</label>
              <input
                type="password"
                value={person.password}
                placeholder="password"
                id="pass"
                name="password"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="inp-handler">
              <button type="submit" onClick={clickBtn}>
                Login
              </button>
            </div>
            <span>
              Don't have an account?{" "}
              <Link to="/register" className="anchor">
                Register...
              </Link>
            </span>
          </form>
        </div>
        <div className="regBanner"></div>
      </section>
    </main>
  );
};

const clickBtn = (e) => {
  e.target.textContent = "Signing in...";
  setTimeout(() => {
    e.target.textContent = "Login";
  }, 2000);
};
export default Login;
