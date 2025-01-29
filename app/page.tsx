import { AddLink, Empty, Header } from "../index";

import Image from "next/image";
import Link from "next/link";
import empty from "../assets/images/illustration-empty.svg";
import logoLarge from "../assets/images/logo-devlinks-large.svg";
import phone from "../assets/images/illustration-phone-mockup.svg";

export default function Home() {
  return (
    <div className=" bg-light-grey ">
      <div className=" min-[768px]:relative">
        <Header />

        <main className="mx-6 mt-8 overflow-y-scroll rounded-2xl shadow-md  min-[768px]:mb-[15rem] min-[1440px]:flex min-[1440px]:gap-16 min-[1440px]:overflow-hidden min-[1440px]:shadow-none ">
          <div className="hidden bg-white min-[1440px]:flex min-[1440px]:w-[80%] min-[1440px]:items-center  min-[1440px]:justify-center min-[1440px]:rounded-3xl min-[1440px]:bg-white min-[1440px]:py-[15rem]">
            <Image className="" src={phone} alt="phone illustration" />
          </div>

          <div className="border border-black bg-white px-6 py-12 min-[768px]:px-16 min-[1440px]:rounded-3xl">
            <p className="mb-4 text-[2rem] font-bold text-dark-grey min-[768px]:text-[3rem]">
              Customize your links
            </p>
            <p className="text-[1.2rem] text-grey min-[768px]:text-2xl">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
            <button className="mt-14 block w-full rounded-lg border border-purple py-4 text-[1.4rem] font-semibold text-purple min-[768px]:text-[1.6rem]">
              + Add new link
            </button>

            <Empty />
            {/* <div>
              <AddLink />
              <AddLink />
              <AddLink />
            </div> */}
          </div>
          <div className="bg-white min-[768px]:fixed min-[768px]:bottom-0 min-[768px]:left-0 min-[768px]:right-0 min-[768px]:flex min-[768px]:items-center min-[768px]:justify-end min-[768px]:px-32 min-[1440px]:hidden">
            <button
              className="mx-auto my-6 hidden w-[80%]
 rounded-2xl border bg-purple 
  py-6 text-[1.4rem]
  font-semibold tracking-wider text-white min-[768px]:mx-0 min-[768px]:my-12 min-[768px]:w-fit min-[768px]:px-20 min-[1440px]:block"
            >
              Save
            </button>
          </div>
        </main>
        <div className="bg-white min-[768px]:fixed min-[768px]:bottom-0 min-[768px]:left-0 min-[768px]:right-0 min-[768px]:flex min-[768px]:items-center min-[768px]:justify-end min-[768px]:px-32 min-[1440px]:hidden">
          <button
            className="mx-auto my-6 block
 w-[80%] rounded-2xl border 
  bg-purple py-6
  text-[1.4rem] font-semibold tracking-wider text-white min-[768px]:mx-0 min-[768px]:my-12 min-[768px]:w-fit min-[768px]:px-20"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
