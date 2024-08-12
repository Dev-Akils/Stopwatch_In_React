import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PatternLock from "react-pattern-lock";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pattern, setPattern] = useState([]);
  const [isPatternLocked, setIsPatternLocked] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!isPatternLocked) {
      toast.error("Please set a pattern first!");
      return;
    }

    try {
      const headers = {
        "Content-Type": "application/json",
        "Tag": "admin",
        "Authorization": "Token",
      };
      const res = await axios.post(
        "http://103.181.21.93:8099/api/v1/admin/register",
        { email, password, pattern }, 
        { headers }
      );

      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      console.error("Registration error", error);
      toast.error(
        error.response?.data?.message || "An error occurred during registration."
      );
    }
  };

  const handlePatternChange = (newPattern) => {
    setPattern(newPattern);
  };

  const handlePatternFinish = () => {
    toast.success("Pattern set!");
    setIsPatternLocked(true);
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        onSubmit={handleRegister}
        className="bg-blue-900 justify-center items-center flex-col p-3"
      >
        <div className="justify-center items-center">
          <h2 className="text-white text-2xl font-bold p-3">Register</h2>
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

        {/* Pattern Lock */}
        <div className="justify-center items-center flex bg-blue-100 mb-4">
          <PatternLock
            width={300}
            pointSize={15}
            size={3}
            path={pattern}
            onChange={handlePatternChange}
            onFinish={handlePatternFinish}
            disabled={isPatternLocked}
          />
        </div>

        <div className="items-center justify-center flex">
          <button
            type="submit"
            className="p-3 m-2 bg-white rounded-2xl text-center"
            disabled={!isPatternLocked}
          >
           Login
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
