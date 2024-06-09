import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  useEffect(() => {
    document.title = "Register";
  }, []);
  const myform = useRef(null);

  const [person, setPerson] = useState({
    fullname: "",
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

  return (
    <main>
      <section className="register-section">
        <div className="regForm">
          <form action="" ref={myform}>
            <h1>Register</h1>
            <div className="inp-handler">
              <label htmlFor="fname">Fullname:</label>
              <input
                type="text"
                value={person.fullname}
                placeholder="Fullname"
                id="fname"
                name="fullname"
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
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
              <button type="submit">Register</button>
            </div>
            <span>
              Don't have an account?{" "}
              <Link to="/login" className="anchor">
                Signin...
              </Link>
            </span>
          </form>
        </div>
        <div className="regBanner"></div>
      </section>
    </main>
  );
};

export default Register;
