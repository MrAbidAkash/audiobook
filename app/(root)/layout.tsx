"use client";

import Footer from "../../components/Footer";
import Heading from "./_components/Heading";
import Menu from "./_components/Menu";
import { cn } from "@/lib/utils";

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bgdarkish  w-full md:w-[1020px] mx-auto ">{children}</div>
  );
};

export default Rootlayout;
