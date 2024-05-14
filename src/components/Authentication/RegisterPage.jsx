import React, { useRef, useState } from "react";

import "./RegisterPage.css";
import user from "../../assets/user.jpeg";
import { signup } from "../../Service/UserService.js";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    name: z.string().min(3, { message: "name should be atleast 3 character." }),
    delivery_address: z
      .string()
      .min(10, { message: "Delivery address should be atleast 10 character." }),
    email: z
      .string()
      .email({ message: "Please enter valid email address" })
      .min(3),
    password: z
      .string()
      .min(8, { message: "Password should be atleast 8 character." }),
    confirm_password: z
      .string()
      .min(8, { message: "Password should be atleast 8 character." }),
  })
  .refine(
    (data) => {
      return data.password === data.confirm_password;
    },
    {
      message: "Passwords must match!",
      path: ["confirm_password"],
    }
  );
const LoginPage = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [formError, setFormError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, ...formState },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = async (formData) => {
    try {
      await signup(formData, profilePic);
    } catch (error) {
      if (error.response) {
        setFormError(error.response.data.message);
      }
    }
  };
  console.log(profilePic);
  return (
    <section className="align_center form_page">
      <form
        action=""
        className="authentication_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Register Form</h2>
        <div className="form_input">
          <div>
            <div className="image_input_section">
              <div className="image_preview">
                <img
                  src={profilePic ? URL.createObjectURL(profilePic) : user}
                  className="file_in1_preview"
                />
              </div>
              <div className="image-upload">
                <input
                  htmlFor="file-ip-1"
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  onChange={(e) => setProfilePic(e.target.files[0])}
                />
                <label htmlFor="fileInput" className="upload-button">
                  Choose Image
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="email"> Name: </label>
              <input
                type="text"
                id="name"
                className="form_text_input"
                placeholder="Enter your Name"
                {...register("name")}
              ></input>
              {errors.name && (
                <em className="form_error">{errors.name.message}</em>
              )}
            </div>
            <div>
              <label htmlFor="email"> Email: </label>
              <input
                type="email"
                id="email"
                className="form_text_input"
                placeholder="Enter your Email"
                {...register("email")}
              ></input>
              {errors.email && (
                <em className="form_error">{errors.email.message}</em>
              )}
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="form_text_input"
                placeholder="Enter your password"
                {...register("password")}
              ></input>
              {errors.password && (
                <em className="form_error">{errors.password.message}</em>
              )}
            </div>
            <div>
              <label htmlFor="confirm_password">Confirm Password:</label>
              <input
                type="password"
                id="confirm_password"
                className="form_text_input"
                placeholder="Enter your confirm password"
                {...register("confirm_password")}
              ></input>
              {errors.confirm_password && (
                <em className="form_error">
                  {errors.confirm_password.message}
                </em>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="delivery_address">Delivery Address:</label>
            <textarea
              id="delivery_address"
              className="form_text_input textarea"
              placeholder="Enter your delivery address"
              {...register("delivery_address")}
            />
            {errors.delivery_address && (
              <em className="form_error">{errors.delivery_address.message}</em>
            )}
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
