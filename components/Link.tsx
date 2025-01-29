import Image from "next/image";
import React from "react";
import arrowRight from "../assets/images/icon-arrow-right.svg";
import github from "../assets/images/icon-github.svg";
import profileHeader from "../assets/images/icon-profile-details-header.svg";

const Link = () => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-[#1a1a1a] p-8">
      <div className="flex items-center gap-4">
        <Image className="" src={github} alt="github" />
        <p className="text-lg leading-normal text-white min-[768px]:text-2xl">
          GitHub
        </p>
      </div>
      <Image src={arrowRight} alt="arrow right" />
    </div>
  );
};

export default Link;
