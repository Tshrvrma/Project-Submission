import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidHide } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import s from "../images/s.png";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Form data:", formData);
    navigate("/home");
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
    <div className="flex flex-col md:flex-row bg-orange-100 md:bg-white h-screen">
      {/* Left part - Login Image */}
      <div className="bg-[#ecdf9b] w-full md:w-[30vw] h-[50vh] md:h-[100vh] hidden md:block">
        <img src={s} className="w-full h-full" alt="Signup Image" />
      </div>

      {/* Right part - Login Form */}
      <div className="flex flex-col w-full md:w-[70vw] mt-5 md:mt-0">
        <div className="flex flex-row-reverse gap-3">
          <button onClick={() => navigate("/")}>
            <span className="text-blue-600 mr-2">Sign Up</span>
          </button>
          <p>Not a member?</p>
        </div>

        <div className="flex justify-center w-full flex-col mt-5">
          <h2 className="font-bold text-2xl text-center md:ml-[230px] mb-10 mt-10">
            Log in to Dribble
          </h2>
          <form
            className="flex flex-col mx-auto w-[70%] md:w-[30vw]"
            onSubmit={handleSubmit}
          >
            {/* Email */}
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
                className="mb-4 p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 md:focus:ring-orange-100  md:focus:bg-orange-100"
              />
            </div>

            {/* Password */}
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
                  className="mb-4 p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 md:focus:ring-orange-100 md:focus:bg-orange-100 relative w-full"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-3 right-2 text-gray-500 "
                >
                  {showPassword ? <BiSolidHide /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-pink-500 text-white font-semibold py-2 rounded hover:bg-pink-700 w-[200px] mx-auto"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
