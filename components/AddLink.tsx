import Image from "next/image";
import React from "react";
import down from "../assets/images/icon-chevron-down.svg";
import dragMenu from "../assets/images/icon-drag-and-drop.svg";
import github from "../assets/images/icon-github.svg";
import link from "../assets/images/icon-link.svg";

const AddLink = () => {
  return (
    <form className="my-8 rounded-xl bg-light-grey p-6 text-dark-grey">
      <div className="mb-4 flex items-center justify-between text-grey">
        <div className="flex  items-center gap-2 min-[768px]:gap-6">
          <Image src={dragMenu} alt="menu drag and drop" />
          <p className="text-lg font-bold min-[768px]:text-xl">Link #1</p>
        </div>
        <p className="min-[768px]:text-xl">Remove</p>
      </div>

      <p className="mb-1 text-sm min-[768px]:text-base">Platform</p>
      <div className="flex items-center justify-between rounded-lg border bg-white p-6">
        <div className="flex items-center justify-between gap-4">
          <Image src={github} alt="github" />
          <p className="text-lg min-[768px]:text-xl">GitHub</p>
        </div>
        <Image src={down} alt="down" />
      </div>

      <p className="mb-1 mt-4 text-sm min-[768px]:text-base">Link</p>
      <div className="flex items-center justify-between gap-4 rounded-lg border bg-white p-6">
        <Image src={link} alt="link" />
        <input
          type="text"
          className="w-full text-lg outline-none min-[768px]:text-xl"
          placeholder="e.g. https://www.github.com/johnappleseed"
        />
      </div>
    </form>
  );
};

export default AddLink;
