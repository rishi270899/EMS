import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is", email);
    console.log("password is", password);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center ">
        <div className="border-2 border-emerald-600 rounded-md p-8 md:p-12 lg:p-16 bg-white shadow-lg">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col items-center justify-center space-y-4"
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="border-2 outline-none bg-transparent border-emerald-600 text-base md:text-lg lg:text-xl py-3 px-4 md:py-4 md:px-6 rounded-full placeholder:text-gray-500 w-full max-w-sm"
              type="email"
              placeholder="Enter your email"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="border-2 outline-none bg-transparent border-emerald-600 text-base md:text-lg lg:text-xl py-3 px-4 md:py-4 md:px-6 rounded-full placeholder:text-gray-500 w-full max-w-sm"
              type="password"
              placeholder="Enter your password"
            />
            <button
              className="bg-emerald-600 text-white px-4 py-2 md:px-6 md:py-3 mt-2 rounded-full hover:bg-emerald-700 transition-all w-full max-w-sm"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
