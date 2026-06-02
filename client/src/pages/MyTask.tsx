import React from "react";
import { LuPlus } from "react-icons/lu";
import { LiaEditSolid } from "react-icons/lia";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const MyTask: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between px-42.5 py-10.5">
        <h2 className="font-medium text-[50px] text-[#292929]">MyTask</h2>
        <Link
          to="/newtask"
          className="flex items-center text-[#974FD0] font-medium text-[24px] gap-2"
        >
          <LuPlus />
          <p>Add New Task</p>
        </Link>
      </div>
      <div className="mx-42.5 mt-.25 border-[0.5px] rounded-md px-3 py-2 gap-3 flex flex-col mb-8">
        <div className="flex justify-between py-3 px-3">
          <p className="font-regular text-[24px] text-[#F38383]">urgent</p>
          <div className="flex gap-5 ">
            <Link to="/edittask">
              <button className="flex items-center bg-[#974FD0] gap-2 text-[#FAF9FB] rounded-md px-3.75 py-0.5 text-[24px] hover:bg-purple-800">
                <LiaEditSolid />
                <p>Edit</p>
              </button>
            </Link>
            <button className="flex items-center border-[#974FD0] gap-2 text-[#974FD0] rounded-md px-3.75 py-0.5 text-[24px] bg-[#FAF9FB] border">
              <MdOutlineDelete />
              <p>Delete</p>
            </button>
          </div>
        </div>

        <hr />

        <div className="flex flex-col text-start py-9 gap-2">
          <h3 className="font-regular text-[35px] text-[#292929]">
            FinTech Website Update
          </h3>
          <p className="text-[24px] font-normal text-[#737171] w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
            nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
            faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
            tellus suspendisse et viverra.
          </p>
        </div>
      </div>

      <Link
        to="/"
        className="text-[#974FD0] underline font-normal text-[26px] hover:text-purple-800"
      >
        Back to Top
      </Link>
    </div>
  );
};

export default MyTask;
