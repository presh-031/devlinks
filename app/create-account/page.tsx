import Image from "next/image";
import Link from "next/link";
import React from "react";
import email from "../../assets/images/icon-email.svg";
import logoLarge from "../../assets/images/logo-devlinks-large.svg";
import password from "../../assets/images/icon-password.svg";

const page = () => {
  return (
    <div
      className="flex h-full items-center 
    justify-center min-[768px]:h-screen min-[768px]:flex-col"
    >
      <Image
        className="hidden min-[768px]:mb-[4rem] min-[768px]:block"
        src={logoLarge}
        alt="logo"
      />
      <div className="mt-[4rem] bg-white px-[3.2rem] min-[768px]:mt-[1rem] min-[768px]:px-[5rem]">
        <Image className="min-[768px]:hidden" src={logoLarge} alt="logo" />
        <div className="mb-[24rem] mt-[6rem] min-[768px]:my-[4rem]">
          <p className="text-[2.4rem] font-bold text-dark-grey min-[768px]:text-[3rem]">
            Create account
          </p>
          <p className="mt-4 text-[1.5rem] text-grey min-[768px]:text-[2rem]">
            Let’s get you started sharing your links!
          </p>

          <form className="mt-12 text-dark-grey">
            <div className="mb-8">
              <label
                className="text-dark-grey min-[768px]:text-xl"
                htmlFor="email"
              >
                Email address
              </label>
              <div
                className="mt-2 flex items-center rounded-2xl 
              border border-borders-color p-6 "
              >
                <Image src={email} alt="email" className="mr-4 " />
                <input
                  type="text"
                  placeholder="e.g. alex@gmail.com"
                  className="text-[1.2rem] min-[768px]:text-[1.6rem]"
                />
              </div>
            </div>

            <div className="mb-8">
              <label
                className="text-dark-grey min-[768px]:text-xl"
                htmlFor="create-password"
              >
                Create password
              </label>
              <div
                className="mt-2 flex items-center rounded-2xl
               border border-borders-color p-6"
              >
                <Image src={password} alt="email" className="mr-4" />
                <input
                  type="text"
                  id="create-password"
                  placeholder="At least 8 characters"
                  className="text-[1.2rem] text-dark-grey outline-none min-[768px]:text-[1.6rem]"
                />
              </div>
            </div>

            <div className="mb-8">
              <label
                className="text-dark-grey min-[768px]:text-xl"
                htmlFor="email"
              >
                Confirm password
              </label>
              <div
                className="mt-2 flex items-center rounded-2xl
               border border-borders-color p-6"
              >
                <Image src={password} alt="email" className="mr-4" />
                <input
                  type="text"
                  placeholder="At least 8 characters"
                  className="text-[1.2rem] min-[768px]:text-[1.6rem]"
                />
              </div>
            </div>

            <p className="mb-8 text-grey min-[768px]:text-xl">
              Password must contain at least 8 characters
            </p>

            <input
              className="w-full rounded-2xl border border-purple bg-purple py-6 text-[1.4rem] font-medium tracking-wider text-white min-[768px]:text-[1.6rem]"
              type="submit"
              value="Create new account"
            />
          </form>

          <p className="mt-[3rem] text-center text-[1.3rem] text-grey min-[768px]:text-[1.6rem]">
            Already have an account?
            <Link
              href="/login"
              className=" mt-2 block text-purple min-[768px]:inline"
            >
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
