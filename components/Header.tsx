import Image from "next/image";
import Link from "next/link";
import React from "react";
import linksHeader from "../assets/images/icon-links-header.svg";
import logoLarge from "../assets/images/logo-devlinks-large.svg";
import logoSmall from "../assets/images/logo-devlinks-small.svg";
import preview from "../assets/images/icon-preview-header.svg";
import profileDetailsHeader from "../assets/images/icon-profile-details-header.svg";

const Header = () => {
  return (
    <div
      className="
     min-[768px]:px-8 min-[768px]:py-12"
    >
      <header className="flex items-center bg-white px-8 py-4 min-[768px]:rounded-3xl min-[768px]:py-8">
        <div className="">
          <Image className="min-[768px]:hidden" src={logoSmall} alt="logo" />
          <Image
            className="hidden min-[768px]:block"
            src={logoLarge}
            alt="logo"
          />
        </div>

        <div className="flex w-full items-center justify-center">
          <Link
            className="rounded-xl 
            border border-black px-8 py-4 hover:bg-purple-hover
             min-[768px]:flex min-[768px]:w-[18rem] min-[768px]:items-center
              min-[768px]:gap-4 min-[768px]:font-medium"
            href="/links"
          >
            <Image src={linksHeader} alt="logo" />

            <p className="hidden  min-[768px]:block min-[768px]:text-2xl min-[768px]:font-medium ">
              Links
            </p>
          </Link>
          <Link
            className="rounded-xl 
            border border-black px-8 
            py-4 min-[768px]:flex 
            min-[768px]:w-[18rem] min-[768px]:items-center
            min-[768px]:gap-4 min-[768px]:font-medium
            "
            href="/profile"
          >
            <Image src={profileDetailsHeader} alt="logo" />
            <p className="hidden  min-[768px]:block min-[768px]:text-2xl min-[768px]:font-medium ">
              Profile Details
            </p>
          </Link>
        </div>

        <div>
          <Link
            className="flex items-center justify-center rounded-xl border border-purple "
            href="/preview"
          >
            <Image
              className="mx-8 my-4 min-[768px]:hidden"
              src={preview}
              alt="logo"
            />
            <p className="hidden min-[768px]:mx-8 min-[768px]:my-4 min-[768px]:block min-[768px]:text-2xl min-[768px]:font-medium min-[768px]:text-purple">
              Preview
            </p>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
