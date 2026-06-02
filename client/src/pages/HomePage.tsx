import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/home img.png";

const HomePage: React.FC = () => {
  return (
    <header className="flex mt-25 px-42.5 justify-between">
      <div className="flex flex-col text-start gap-5">
        <h2 className="font-medium text-[50px] text-[#292929] w-120 leading-[120%]">
          Manage Your Tasks On <span className="text-[#974FD0]">TaskDuty</span>
        </h2>
        <p className="font-regular text-[24px] text-[#737171] w-133.75 leading-[120%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
          sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
          tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
          semper porttitor. Nec accumsan.
        </p>
        <Link to="/mytask">
          <button className="bg-[#974FD0] text-medium text-[24px] rounded-2xl px-4 py-2 text-[#FAF9FB] hover:bg-purple-800">
            Go to my tasks
          </button>
        </Link>
      </div>
      <img src={home} alt="" />
    </header>
  );
};

export default HomePage;
