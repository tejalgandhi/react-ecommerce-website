import React, { useRef } from "react";

import "./LoginPage.css";

const LoginPage = () => {
  const phoneRef = useRef(null);
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: "",
      phone: 0,
    };
    user.name = nameRef.current.value;
    user.phone = parseInt(phoneRef.current.value);
    console.log(user);
  };

  return (
    <section className="align_center form_page">
      <form action="" className="authentication_form" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              ref={nameRef}
              id="name"
              className="form_text_input"
              placeholder="Enter your Name"
            ></input>
          </div>
          <div>
            <label htmlFor="phone_number">Phone Number:</label>
            <input
              type="number"
              ref={phoneRef}
              id="phone_number"
              className="form_text_input"
              placeholder="Enter your Phone Number"
            ></input>
            {/* <button
              type="button"
              onClick={() => (passwordRef.current.type = "password")}
            >
              Hide Button
            </button>
            <button
              type="button"
              onClick={() => (passwordRef.current.type = "text")}
            >
              Show Button
            </button> */}
          </div>
          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
