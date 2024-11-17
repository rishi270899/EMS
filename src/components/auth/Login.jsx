// import React from "react";

// const Login = () => {

//     const submitHandler = ()=> {
// console.log("hello");

//     }

//   return (
//     <>
//       <div className="flex h-screen w-screen items-center justify-center">
//         <div className="border-2 border-emerald-600 rounded-md p-20">
          
//           <form 
//           onSubmit={submitHandler}
//           action="" className="flex flex-col items-center justify-center">
//             <input required className="border-2 outline-none bg-transparent border-emerald-600 text-xl  py-4 px-6 rounded-full placeholder:text-gray-500" type="email" placeholder="Enter your email" />
//             <input required className="border-2 outline-none bg-transparent border-emerald-600 text-xl  py-4 px-6 rounded-full placeholder:text-gray-500 mt-3" type="password" placeholder="Enter your password" />
//             <button className=" bg-emerald-600 text-white px-6 py-2 mt-3 rounded-full">Login</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;



import React from "react";

const Login = () => {
  const submitHandler = () => {
    console.log("hello");
  };

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
        <div className="border-2 border-emerald-600 rounded-md p-8 md:p-12 lg:p-16 bg-white shadow-lg">
          <form
            onSubmit={submitHandler}
            className="flex flex-col items-center justify-center space-y-4"
          >
            <input
              required
              className="border-2 outline-none bg-transparent border-emerald-600 text-base md:text-lg lg:text-xl py-3 px-4 md:py-4 md:px-6 rounded-full placeholder:text-gray-500 w-full max-w-sm"
              type="email"
              placeholder="Enter your email"
            />
            <input
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
