import React, { useRef, useState } from "react";

import "./LoginPage.css";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  //using ref
  //   const phoneRef = useRef(null);
  //   const nameRef = useRef(null);
  //using state
  //   const [user, setUser] = useState({
  //     name: "",
  //     phone: "",
  //   });
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // const user = {
  //     //   name: "",
  //     //   phone: 0,
  //     // };
  //     // user.name = nameRef.current.value;
  //     // user.phone = parseInt(phoneRef.current.value);
  //     console.log(user);
  //   };

  const { register, handleSubmit } = useForm({});
  console.log(register("name"));
  const onSubmit = (formData) => console.log(formData);
  //
  return (
    <section className="align_center form_page">
      <form
        action=""
        className="authentication_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Login Form</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              //   ref={nameRef}
              //   onChange={(e) => setUser({ ...user, name: e.target.value })}
              //   value={user.name}
              id="name"
              className="form_text_input"
              placeholder="Enter your Name"
              {...register("name")}
            ></input>
          </div>
          <div>
            <label htmlFor="phone_number">Phone Number:</label>
            <input
              type="number"
              //   onChange={(e) =>
              //     setUser({ ...user, phone: parseInt(e.target.value) })
              //   }
              //   value={user.phone}
              //   ref={phoneRef}
              id="phone_number"
              className="form_text_input"
              placeholder="Enter your Phone Number"
              {...register("phone", { valueAsNumber: true })}
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
