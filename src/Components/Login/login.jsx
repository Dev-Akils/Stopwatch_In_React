import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [pattern, setPattern] = useState([]);
   const [isDrawing, setIsDrawing] = useState(false);
   const [correctPattern, setCorrectPattern] = useState([]);
  const navigate = useNavigate();

   

   const handleMouseDown = (index) => {
     setIsDrawing(true);
     setPattern([index]);
   };

   const handleMouseOver = (index) => {
     if (isDrawing && !pattern.includes(index)) {
       setPattern((prevPattern) => [...prevPattern, index]);
     }
   };
console.log("Email"+email);
console.log("PAssword"+password);
 console.log("Pattern"+pattern);
   const handleMouseUp = () => {
     setIsDrawing(false);
     if (JSON.stringify(pattern) === JSON.stringify(correctPattern)) {
       toast.success("Pattern is correct!");
     } else {
       toast.error("Incorrect pattern. Try again!");
     }
     setPattern([]);
   };

  const handleLogin = async (e) => {
    e.preventDefault();

     if (JSON.stringify(pattern) !== JSON.stringify(correctPattern)) {
       toast.error('Incorrect pattern. Try again!');
       setPattern([]);
       return;
     }

    try {

      const headers = {
        "Content-Type": "application/json",
         "Tag": "admin",
      };
      const res = await axios.post(
        "http:103.181.21.93:8099/api/v1/admin/login",
        { email, password},
        {headers}
      );
      const token = res.data.token;
      setToken(token);
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);

      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      console.error("Login error", error);
      toast.error(
        error.response?.data?.message || "An error occurred during login."
      );
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        onSubmit={handleLogin}
        className="bg-blue-900 justify-center items-center flex-col p-3"
      >
        <div className="justify-center items-center">
          <h2 className="text-white text-2xl font-bold p-3">Login</h2>
          <input
            placeholder="Enter email"
            className="py-3 mb-2 px-4 rounded-lg border w-full border-gray-300"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder="Enter password"
            className="py-3 mb-2 px-4 rounded-lg border w-full border-gray-300"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Pattern Lock 
        <div className="justify-center items-center flex bg-blue-100">
          <div className="container flex justify-center items-center">
            <div className="pattern-lock">
              {[...Array(9)].map((_, index) => (
                <div
                  key={index}
                  className={`point ${pattern.includes(index) ? "active" : ""}`}
                  onMouseDown={() => handleMouseDown(index)}
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseUp={handleMouseUp}
                />
              ))}
            </div>
          </div>
        </div>*/}
        <div className="items-center justify-center flex">
          <button
            type="submit"
            className="p-3 m-2 bg-white rounded-2xl text-center"
          >
            Login
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
