import Image from "next/image";
import React from "react";
import VidaSnap from "../images/vidasnaplogo.png";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
//import { useSession } from "next-auth/react";

export default function Header() {
  //   const { data: session } = useSession();
  //   console.log(session);
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white p-5 z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/*Left*/}
        <div className="cursor-pointer h-3 w-24 relative hidden lg:inline-grid">
          <Image
            width="200"
            height="80"
            src={VidaSnap}
            className="object-contain"
            alt=""
          />
        </div>

        <div className="cursor-pointer h-10 w-24 relative lg:hidden">
          <Image
            width="80"
            height="80"
            src="https://play-lh.googleusercontent.com/dmyJVZ5BKcOFM6XaZmTgZjtsHnvj3PqCaxTnuOSwu6HN7a7J3k_aR-023K01L_RTcsI=w600-h300-pc0xffffff-pd"
            className="object-contain"
            alt=""
          />
        </div>
        {/*Middle*/}
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <SearchIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Procurar..."
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>
        {/*Right*/}
        <div className="flex space-x-4 items-center">
          <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <img
            src="https://s2.glbimg.com/bidN4ro-uEHAEJABM4Jx2bRO31w=/0x0:600x900/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ba3db981e6d14e54bb84be31c923b00c/internal_photos/bs/2021/s/E/X5IaJTRRS3AcI1TFPYSw/2019-11-06-gettyimages-501312488.jpg"
            alt="Richar Gere"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
