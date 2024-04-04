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
    <div className="flex">

      <div className="bg-[#ecdf9b] w-[30vw] h-[100vh] ">
        <img src={s} className="w-[100%] h-[100%]" alt="Signup Image" />{" "}
      </div>
      <div className="flex flex-col mt-5">
        <div className="flex flex-row-reverse gap-3">
          <div className="flex gap-3">
            <p>Not a member?</p>
            <button onClick={() => navigate("/")}>
              <span className="text-blue-600">Sign Up</span>
            </button>
          </div>
        </div>

        <div className="flex justify-center w-[60vw] flex-col mt-5">
          <h2 className=" font-bold text-2xl ml-[230px] mb-10 mt-10">Log in to Dribble</h2>
          <form className="flex flex-col mx-auto w-[30vw]" onSubmit={handleSubmit}>
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
                  {showPassword ? <BiSolidHide /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="bg-pink-500 text-white font-semibold py-2 rounded hover:bg-pink-700 w-[200px]"
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
