"use client";

import Image from "next/image";

export function RecentCards() {
  return (
    <div className="min-w-[150px] max-w-[250px] min-h-[200px] max-h-[300px]  ">
      <div className="h-[150px]">
        <Image
          src="/s2k.png"
          alt="card-image"
          className="h-full w-full object-cover"
          width={1000}
          height={1000}
        />
      </div>
      <div>
        <p className="text-sm font-medium ">The woman in me</p>
        <p className="text-sm opacity-75">By: Bitney Spear</p>
      </div>
    </div>
  );
}
