"use client";

import { CarouselStylesType } from "@material-tailwind/react";
import { RecentCards } from "./RecentCards";
import { Carousel, slider } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Onlys2kCards } from "./Onlys2kCards";
import { stringify } from "querystring";

const OnlyS2L = () => {
  const imgForDemos: string[] = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
  ];

  const slideLeft = () => {
    let slider: any = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider: any = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="items-center justify-center text-center relative space-y-10">
      <div>
        <h2 className="text-2xl">Only1 from Audible</h2>
        <p className="text-sm font-semibold  ">
          Groundbreaking Originals and exclusives from A-list celebs and
          emerging talent.
        </p>
      </div>

      <div className="relative items-center">
        <ChevronLeftIcon
          onClick={slideLeft}
          className="w-10 h-20 absolute top-2/4 z-50 cursor-pointer left-[-20px]  bg-blue-gray-100 bg-opacity-40 -translate-y-2/4 hover:bg-opacity-90  hover:bg-blue-gray-100 text-black "
        />
        <div
          id="slider"
          className="snap-x flex my-5 z-10 overflow-x-scroll whitespace-nowrap scroll-smooth example items-center hover:logo-slide-pause "
        >
          <div className="logo-slide  flex flex-row  space-x-4 mr-4  ">
            {imgForDemos.map((img: string) => {
              return <Onlys2kCards key={img.length} imgSrc={img} />;
            })}
          </div>
          <div className="logo-slide  flex flex-row space-x-4 ">
            {imgForDemos.map((img: string) => {
              return <Onlys2kCards key={img.length} imgSrc={img} />;
            })}
          </div>
        </div>
        <ChevronRightIcon
          onClick={slideRight}
          className="w-10 h-20  absolute right-[-20px] top-[50%] -translate-y-2/4 z-50 cursor-pointer bg-blue-gray-100 bg-opacity-40 hover:bg-opacity-90  hover:bg-blue-gray-100 text-black "
        />
      </div>
    </div>
  );
};

export default OnlyS2L;
