


import React from "react";
import Header from "../other/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full bg-gray-100 p-10">
      <Header />
      <div className="flex items-center justify-center mt-8">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md border-emerald-600 border-2">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Task Title */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Task Title</h3>
              <input
                type="text"
                placeholder="Enter Task Title"
                className="border-2 border-emerald-600 outline-none bg-transparent text-base md:text-lg py-3 px-4 rounded-full placeholder:text-gray-500 w-full"
              />
            </div>

            {/* Date */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Date</h3>
              <input
                type="date"
                className="border-2 border-emerald-600 outline-none bg-transparent text-base md:text-lg py-3 px-4 rounded-full w-full"
              />
            </div>

            {/* Description */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-700">Description</h3>
              <textarea
                placeholder="Enter Task Description"
                className="border-2 border-emerald-600 outline-none bg-transparent text-base md:text-lg py-3 px-4 rounded-lg placeholder:text-gray-500 w-full resize-none"
                rows="4"
              ></textarea>
            </div>

            {/* Assign To */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Assign To</h3>
              <input
                type="text"
                placeholder="Employee Name"
                className="border-2 border-emerald-600 outline-none bg-transparent text-base md:text-lg py-3 px-4 rounded-full placeholder:text-gray-500 w-full"
              />
            </div>

            {/* Category */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Category</h3>
              <input
                type="text"
                placeholder="Design, Dev, etc."
                className="border-2 border-emerald-600 outline-none bg-transparent text-base md:text-lg py-3 px-4 rounded-full placeholder:text-gray-500 w-full"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-all w-full"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
