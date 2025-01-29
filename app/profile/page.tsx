import { AddLink, Empty, Header } from "../../index";

import Image from "next/image";
import Link from "next/link";
import empty from "../assets/images/illustration-empty.svg";
import link from "../../assets/images/icon-link.svg";
import logoLarge from "../assets/images/logo-devlinks-large.svg";
import uploadImage from "../../assets/images/icon-upload-image.svg";

export default function Home() {
  return (
    <div className="bg-light-grey">
      <Header />

      <main className="mx-6 mt-8 rounded-2xl bg-white  shadow-md min-[768px]:mx-8 min-[768px]:mt-0 min-[768px]:pb-60">
        <div className="hidden"></div>

        <div className="px-6 py-12 min-[768px]:px-16">
          <p className="mb-4 text-[2rem] font-bold text-dark-grey min-[768px]:text-[3.2rem]">
            Profile Details
          </p>
          <p className="text-[1.2rem] text-grey min-[768px]:text-[1.8rem]">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>

          <div className="mt-16 rounded-xl bg-light-grey p-6 text-grey min-[768px]:flex min-[768px]:items-center min-[768px]:justify-between min-[768px]:rounded-2xl">
            <p className="text-lg min-[768px]:text-2xl">Profile picture</p>

            <div className="min-[768px]:flex min-[768px]:items-center min-[768px]:gap-8">
              <div className="my-8 flex h-[19rem] w-[19rem] items-center justify-center rounded-lg bg-light-purple">
                <div className=" text-center">
                  <Image
                    className="mx-auto mb-4"
                    src={uploadImage}
                    alt="upload image"
                  />
                  <p className="text-xl text-purple min-[768px]:text-2xl min-[768px]:font-medium">
                    + Upload Image
                  </p>
                </div>
              </div>
              <p className="text-lg min-[768px]:w-[20rem] min-[768px]:text-2xl">
                Image must be below 1024x1024px. Use PNG or JPG format.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-xl bg-light-grey p-6 text-grey min-[768px]:rounded-2xl">
            <div className=" min-[768px]:flex min-[768px]:items-center min-[768px]:justify-between">
              <label
                htmlFor="firstName"
                className=" mb-1 mt-4 block text-sm min-[768px]:text-2xl"
              >
                First name*
              </label>
              <div className="flex items-center justify-between gap-4 rounded-lg border bg-white p-6 min-[768px]:w-[65%]">
                <input
                  type="text"
                  id="firstName"
                  className="w-full text-lg outline-none min-[768px]:text-2xl"
                  placeholder="Ben"
                />
              </div>
            </div>

            <div className="mt-4  min-[768px]:flex min-[768px]:items-center min-[768px]:justify-between">
              <label
                htmlFor="lastName"
                className=" mb-1 mt-4 block text-sm min-[768px]:text-2xl"
              >
                Last name*
              </label>
              <div className="flex items-center justify-between gap-4 rounded-lg border bg-white p-6 min-[768px]:w-[65%]">
                <input
                  type="text"
                  id="lastName"
                  className="w-full text-lg outline-none min-[768px]:text-2xl"
                  placeholder="Wright"
                />
              </div>
            </div>

            <div className="mt-4  min-[768px]:flex min-[768px]:items-center min-[768px]:justify-between">
              <label
                htmlFor="email"
                className=" mb-1 mt-4 block text-sm min-[768px]:text-2xl"
              >
                Email
              </label>
              <div className="flex items-center justify-between gap-4 rounded-lg border bg-white p-6 min-[768px]:w-[65%]">
                <input
                  type="email"
                  id="email"
                  className="w-full text-lg outline-none min-[768px]:text-2xl"
                  placeholder="ben@example.com"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className=" min-[768px]:flex min-[768px]:items-center min-[768px]:justify-end min-[768px]:px-32">
        <button
          className="mx-auto my-6 block
       w-[80%] rounded-2xl border bg-purple py-6
        text-[1.4rem] font-semibold tracking-wider text-white
        min-[768px]:mx-0 min-[768px]:my-12 min-[768px]:w-fit min-[768px]:px-20"
        >
          Save
        </button>
      </div>
    </div>
  );
}
