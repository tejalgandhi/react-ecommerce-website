import React, { useRef, useState } from "react";

import "./LoginPage.css";
import { useForm } from "react-hook-form";
import { login } from "../../Service/UserService.js";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Please enter valid email address" })
    .min(3),
  password: z
    .string()
    .min(8, { message: "Password should be atleast 8 character." }),
});

const LoginPage = () => {
  const [formError, setFormError] = useState("");
  let navigate = useNavigate();
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

  const {
    register,
    handleSubmit,
    formState: { errors, ...formState },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = async (formData) => {
    try {
      const { data } = await login(formData);
      console.log(data.data.token);
      localStorage.setItem("token", data.data.token);
      navigate("/");
    } catch (err) {
      if (err.response) {
        setFormError(err.response.data.message);
      }
    }
  };
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
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              //   ref={nameRef}
              //   onChange={(e) => setUser({ ...user, name: e.target.value })}
              //   value={user.name}
              id="email"
              className="form_text_input"
              placeholder="Enter your Email"
              //   {...register("email", { required: true, minLength: 3 })}
              {...register("email")}
            ></input>
            {errors.email && (
              <em className="form_error">{errors.email.message}</em>
            )}
            {/* {errors.name?.type === "required" && (
              <em className="form_error">Please Enter Your Name</em>
            )}
            {errors.name?.type === "minLength" && (
              <em className="form_error">Name Should be 3 or more character</em>
            )} */}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              //   onChange={(e) =>
              //     setUser({ ...user, phone: parseInt(e.target.value) })
              //   }
              //   value={user.phone}
              //   ref={phoneRef}
              id="password"
              className="form_text_input"
              placeholder="Enter your password"
              //   {...register("password", { valueAsNumber: true })}
              {...register("password")}
            ></input>
            {errors.password && (
              <em className="form_error">{errors.password.message}</em>
            )}
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
          {formError && <em className="form_error">{formError}</em>}
          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
