"use client";

import Image from "next/image";
import TypeformButton from "./TypeformButton";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl">Community Leaders</h1>
        <div className="my-10 mx-5">
          <p className="2xl:px-80 xl:px-80 lg:px-44 md:px-24 mb-4">
            Join us at our exclusive event for Community Leaders! A place for
            those who are at the heart of their communities, building and
            shaping them every day.
          </p>
          <div className="flex flex-row justify-center space-x-6">
            <div className="flex items-center">
              <Image
                className="mr-2"
                src="/icons/calendar.png"
                alt=""
                width={20}
                height={20}
              />
              <p className="m-0">2024</p>
            </div>
            <div className="flex items-center ">
              <Image
                className="mr-2"
                src="/icons/location.png"
                alt=""
                width={20}
                height={20}
              />
              <p className="m-0">Berlin</p>
            </div>
          </div>
        </div>
        <TypeformButton />
      </div>
    </div>
  );
}
