"use client";

import {
  Carousel,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { RecentCards } from "./RecentCards";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const FamousPod = () => {
  return (
    <div className="items-center justify-center relative space-y-5 flex flex-col my-5">
      <div>
        <h2 className="text-2xl">The listening never has to stop</h2>
        <p className="text-sm font-semibold  ">
          Thousands of included titles. No cap on listening time.
        </p>
      </div>
      <Carousel
        className="rounded-xl overflow-hidden "
        loop={true}
        autoplay={true}
        nextArrow={({ handleNext }) => (
          <ChevronRightIcon
            color="black"
            onClick={handleNext}
            className="!absolute top-[40%] !right-0 -translate-y-2/4 w-8 h-16 bg-blue-gray-100 bg-opacity-40 hover:bg-opacity-90   hover:bg-blue-gray-100 cursor-pointer 
             "
          />
        )}
        prevArrow={({ handlePrev }) => (
          <ChevronLeftIcon
            onClick={handlePrev}
            className="!absolute top-[40%] left-0 -translate-y-2/4 w-8 h-16 cursor-pointer bg-blue-gray-100 bg-opacity-40 hover:bg-opacity-90  hover:bg-blue-gray-100  "
          />
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-0 left-2/4 z-[99] flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="flex flex-row  items-center space-x-4  my-5  ">
          <RecentCards />
          <RecentCards />
          <RecentCards />
          <RecentCards />
          <RecentCards />
        </div>
        <div className="flex flex-row  items-center space-x-4  my-5    ">
          <RecentCards />
          <RecentCards />
          <RecentCards />
          <RecentCards />
          <RecentCards />
        </div>
        <div className="flex flex-row  items-center space-x-4  my-5    ">
          <RecentCards />
          <RecentCards />
          <RecentCards />
          <RecentCards />
          <RecentCards />
        </div>
      </Carousel>
    </div>
  );
};

export default FamousPod;
