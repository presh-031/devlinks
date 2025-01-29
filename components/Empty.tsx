import Image from "next/image";
import Link from "next/link";
import React from "react";
import empty from "../assets/images/illustration-empty.svg";
import logoLarge from "../assets/images/logo-devlinks-large.svg";

const Empty = () => {
  return (
    <div
      className="mt-12 rounded-3xl border border-black bg-light-grey py-24 
    "
    >
      <div className=" text-center">
        <Image className="mx-auto  " src={empty} alt="empty" />
        <p className="my-4 text-[1.8rem] font-bold text-dark-grey min-[768px]:text-[3rem]">
          Let’s get you started
        </p>
        <p className="mx-auto w-[80%] text-[1.4rem] text-grey min-[768px]:text-[1.8rem]">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </div>
    </div>
  );
};

export default Empty;
