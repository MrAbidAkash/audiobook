"use client";

import Image from "next/image";

export function Onlys2kCards(props:any) {

  return (
    <div className="snap-start h-[350px] min-w-[285px] max-w-[450px]  min-h-[300px] max-h-[400px] cursor-pointer ">
      <Image
        src={`/${props.imgSrc}`}
        alt="card-image"
        className="h-full w-full object-cover"
        width={1000}
        height={1000}
      />
    </div>
  );
}
