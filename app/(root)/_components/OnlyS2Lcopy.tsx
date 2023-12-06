"use client";

import { Carousel } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Onlys2kCards } from "./Onlys2kCards";

const OnlyS2Lcopy = () => {
  const imgForDemos: string[] = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "1.png",
    "2.png",
    "3.png",
    "3.png",
  ];

  const img3: number = Math.ceil(imgForDemos.length / 3 - 1);
  console.log(img3);

  function createArray(img3: number) {
    return [...Array(img3).keys()].map((i) => i + 1);
  }

  let arr = createArray(img3);
  console.log(arr);

  /*   let divi = ''
   */
  /*   for (let i = 0; (i = img3); i++) {
    return divi =' <div></div>'
    
  } */

  /*  {arr.map((i == img3) => {
          return (
            <div key={1}>
            </div>
          );
        })} */

  /*   for (let i = 0; (i = img3); i++) {
      <div className="flex flex-row  items-center space-x-4  my-5  ">
        {imgForDemos.map((img: string) => {
          return (
            <div key={img.length}>
              <Onlys2kCards imgSrc={img} />
            </div>
          );
        })}
      </div>;
    } */

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
        <h2 className="text-2xl">Onlycopy from Audible</h2>
        <p className="text-sm font-semibold  ">
          Groundbreaking Originals and exclusives from A-list celebs and
          emerging talent.
        </p>
      </div>
      <Carousel
        className="rounded-xl overflow-hidden snap-x"
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
            className="!absolute top-[40%] left-0 -translate-y-2/4 w-8 h-16 cursor-pointer bg-blue-gray-100 bg-opacity-40 hover:bg-opacity-90  hover:bg-blue-gray-100 text-black "
          />
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-0 left-2/4 z-[50px] flex -translate-x-2/4 gap-2">
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
        {}

        <div className="flex flex-row  items-center space-x-4  my-5 snap-x ">
          {imgForDemos.map((img: string) => {
            return (
              <div key={img} className="snap-x">
                <Onlys2kCards imgSrc={img} />
              </div>
            );
          })}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Carousel>
    </div>
  );
};

export default OnlyS2Lcopy;
