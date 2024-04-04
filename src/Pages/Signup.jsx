import React, { useState } from "react";
import s from "../images/s.png";
import { useNavigate } from "react-router-dom";
import { BiSolidHide } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

export const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [confirmation, setConfirmation] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all fields are filled
    for (const key in formData) {
      if (formData[key] === "") {
        alert("Please fill in all fields.");
        return;
      }
    }

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password must match.");
      return;
    }

    // Check if confirmation checkbox is checked
    if (!confirmation) {
      alert("Please confirm by checking the checkbox.");
      return;
    }
    console.log("Form data:", formData);
    navigate("/profile")
    setFormData({
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex">
      {/* left part */}
      <div className="bg-[#ecdf9b] w-[30vw] h-[100vh] ">
        <img src={s} className="w-[100%] h-[100%]" alt="Signup Image" />{" "}
        {/* corrected image source */}
      </div>
      {/* right part */}
      <div className="flex flex-col mt-5">
        <div className="flex flex-row-reverse gap-3">
          <div className="flex gap-3">
            <p>Already a member?</p>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              <span className="text-blue-600">Sign In</span>
            </button>
          </div>
        </div>

        <div className="flex justify-center w-[60vw] flex-col mt-5 1gap-y-10">
          <h2 className="font-bold text-2xl ml-[230px]">Sign up to Dribble</h2>
          <form className="flex flex-col mx-auto w-[30vw]" onSubmit={handleSubmit}>
            <div className="flex gap-x-2 mb-4 ">
              <div className="flex flex-col w-full">
                <label htmlFor="Name" className="mb-2 font-bold">
                  Name:
                </label>
                <input
                  type="text"
                  id="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  className="p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100 focus:bg-orange-100"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="userName" className="mb-2 font-bold">
                  UserName:
                </label>
                <input
                  type="text"
                  id="userName"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="User Name"
                  className="p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100 focus:bg-orange-100"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="mb-2 font-bold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mb-4 p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100 focus:bg-orange-100"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="password" className="mb-2 font-bold">
                Password:
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="mb-4 p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100 focus:bg-orange-100 relative w-full"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-3 right-2 text-gray-500 "
                >
                  {showPassword ? <BiSolidHide />: <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="confirmPassword" className="mb-2 font-bold">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="mb-2 p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-100 focus:bg-orange-100"
              />
            </div>

            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="confirmation"
                checked={confirmation}
                onChange={(e) => setConfirmation(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="confirmation" className="mt-4">
                Creating an account means you're okay with our{" "}
                <span className="text-blue-400 cursor-pointer">Term of Services Privacy Policy</span> and our default{" "}
                <span className="text-blue-400 cursor-pointer">Notification Setting.</span>
              </label>
            </div>
            <button
              
              type="submit"
              className="bg-pink-500 text-white font-semibold py-2 rounded hover:bg-pink-700 w-[200px] mt-4"
            >
              create account
            </button>
          </form>
          <p className="mt-4 ml-[230px] w-[500px]"> This site is protected by reCAPTCHA and the google <span className="text-blue-400 cursor-pointer">Privacy Policy</span> and<span className="text-blue-400 cursor-pointer">Term of Services </span></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
