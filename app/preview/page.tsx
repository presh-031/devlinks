import Image from "next/image";
import { Link } from "../../index";
import React from "react";
import arrowRight from "../../assets/images/icon-arrow-right.svg";
import github from "../../assets/images/icon-github.svg";
import profileHeader from "../../assets/images/icon-profile-details-header.svg";

const page = () => {
  return (
    <div>
      <div className="min-[768px]:h-[37.5rem] min-[768px]:rounded-b-[4rem] min-[768px]:bg-purple min-[768px]:p-12">
        <div className="flex items-center justify-center gap-8 p-8 min-[768px]:justify-between min-[768px]:rounded-3xl min-[768px]:bg-white min-[768px]:py-6">
          <button className="w-full rounded-lg border border-purple py-4 text-lg font-medium text-purple min-[768px]:w-[20rem] min-[768px]:rounded-2xl min-[768px]:font-semibold">
            Back to Editor
          </button>
          <button className="w-full rounded-lg border border-purple bg-purple py-4 text-lg font-medium text-white min-[768px]:w-[20rem] min-[768px]:rounded-2xl min-[768px]:font-semibold">
            Share Link
          </button>
        </div>
      </div>

      <div className="mt-24 min-[768px]:mx-auto min-[768px]:mt-[-14rem] min-[768px]:w-[50%] min-[768px]:rounded-[3rem] min-[768px]:bg-white min-[768px]:pt-20 min-[768px]:shadow-md">
        <div className="mx-auto h-[10.4rem] w-[10.4rem] rounded-full border-4 border-purple">
          {/* <Image src={profileHeader} alt="header image" /> */}
        </div>
        <p className="my-8 text-center text-[2.4rem] font-bold text-dark-grey min-[768px]:text-[3.4rem]">
          Ben Wright
        </p>
        <p className="text-center text-xl text-grey min-[768px]:text-2xl">
          ben@example.com
        </p>

        <div className="mx-auto mt-16 flex w-[60%] flex-col gap-8 pb-32 min-[768px]:mt-24 min-[768px]:w-[70%] min-[768px]:pb-20">
          <Link />
          <Link />
          <Link />
        </div>
      </div>
    </div>
  );
};

export default page;
