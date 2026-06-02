import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const NewTask: React.FC = () => {
  return (
    <section className="mt-10 px-35">
      <Link to="/mytask">
        <div className="mb-12 flex items-center gap-3 text-[30px] font-medium text-[#292929]">
          <IoChevronBack />
          <p className="">New Task</p>
        </div>
      </Link>

      <form action="" className="flex flex-col gap-8">
        <div className="relative border border-gray-300 rounded px-5 pt-6 pb-4">
          <div className="absolute -top-5 left-4 bg-white px-1 text-gray-400  text-[30px] font-normal">
            Task Title
          </div>

          <input
            type="text"
            placeholder="E.g Project Defense, Assignment..."
            className="w-full outline-none"
          />
        </div>
        <div className="relative border border-gray-300 rounded px-5 pt-6 pb-4">
          <div className="absolute -top-5 left-4 bg-white px-1 text-[#9C9C9C] text-[30px] font-normal">
            Description
          </div>

          <input
            type="text"
            placeholder="Briefly describe your task..."
            className="h-30 w-full resize-none outline-none pb-18"
          />
        </div>

        <div className="relative border border-gray-300 rounded px-5 pt-6 pb-4">
          <p className="absolute -top-6 left-4 bg-white px-1 text-[#9C9C9C] text-[30px] font-normal">
            Tags
          </p>

          <details className="relative group">
            {/* Dropdown Button */}
            <summary className="list-none flex items-center justify-between border border-gray-300 rounded-md px-4 py-3 cursor-pointer bg-white">
              <span className="text-gray-500">Select Tag</span>

              {/* Arrow */}
              <IoMdArrowDropdown className="text-[#CCCCCC] text-2xl transition-transform group-open:rotate-180" />
            </summary>

            {/* Dropdown Content */}
            <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-md z-10">
              <label className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
                <input type="radio" name="tag" className="accent-purple-600" />
                <span>Urgent</span>
              </label>

              <label className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer">
                <input type="radio" name="tag" className="accent-purple-600" />
                <span>Important</span>
              </label>
            </div>
          </details>
        </div>
        <Link to="/mytask">
          <button
            type="submit"
            className="w-full rounded bg-[#974FD0] py-4 text-xl font-bold text-white hover:bg-purple-800"
          >
            Done
          </button>
        </Link>
      </form>
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="text-[#974FD0] underline font-normal text-[26px] hover:text-purple-800"
        >
          Back to Top
        </Link>
      </div>
    </section>
  );
};

export default NewTask;
