"use client";

import Image from "next/image";
import TypeformButton from "./TypeformButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen bg-white dark:bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl text-black dark:text-white">Community 𝕏</h1>
        <div className="text-center my-10 mx-5">
          <p className="text-black dark:text-white">
            the go-to event for community builders! happening 2024 in berlin.
          </p>
        </div>
        <TypeformButton />
      </div>
    </div>
  );
}
