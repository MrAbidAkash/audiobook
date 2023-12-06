"use client";

import {
  ArrowBottomLeftIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  DropdownMenuIcon,
  MagnifyingGlassIcon,
  ThickArrowDownIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { MenuSeed } from "./MenuSeed";

const Menu = () => {
  return (
    <div className="flex flex-row items-center justify-between  text-center">
      <div className="flex flex-row items-center justify-center text-center py-2 ">
        <MenuSeed />
      </div>
      <div className="flex flex-row gap-3">
        <div className="flex flex-row items-center  opacity-50 rounded-sm  py-2 px-2 ">
          <input
            className="input input-bordered w-96 max-w-xs outline- px-2"
            placeholder="Find your great listen"
          />
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">new</span>
            <button className="btn ">
              <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
