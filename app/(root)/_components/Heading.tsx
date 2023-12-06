"use client";

import { ModeToggle } from "@/components/mode.toggle";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const Heading = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className=" flex flex-row items-center justify-between gap-3 py-4 px-6 mx-auto md:max-w-[1020px]  ">
      <Link href={"/"}>
        <Image alt="stort2listen" src="/s2l.png" width={150} height={40} />
      </Link>
      <div className="flex flex-row items-center justify-center gap-3 h-4 200">
        {/* <select data-choose-theme>
          <option value="dark">Dark</option>
          <option value="light">light</option>
          <option value="sunset">Sunset</option>
        </select> */}

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Theme
            <svg
              width="12px"
              height="12px"
              className="h-2 w-2 fill-current opacity-60 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Sunset"
                value="sunset"
              />
            </li>

            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="light"
                value="light"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Dark"
                value="dark"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Retro"
                value="retro"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Forest"
                value="forest"
              />
            </li>
          </ul>
        </div>

        <Link href="/signup" className="">
          <h3>Sign Up</h3>
        </Link>
        <Separator orientation="vertical" />
        <Link href="/login">
          <h3>Sign in</h3>
        </Link>
      </div>
      {/*       <ModeToggle/>
       */}{" "}
    </div>
  );
};

export default Heading;
