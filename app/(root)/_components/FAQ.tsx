"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronDown, PlayIcon } from "lucide-react";

function Icon({ id, open }: any) {
  return (
    <ChevronDown
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform `}
    />
    /*     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg> */
  );
}

export function FAQ() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <div className="flex flex-col space-y-10">
      <h2 className="text-4xl font-bold ">Frequently asked questions</h2>
      <div>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader className="" onClick={() => handleOpen(1)}>
            <div className="flex flex-row items-center space-x-2">
              <PlayIcon size={16} />
              <p> at is Material Tailwind?</p>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <p className=" text-lg">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </p>
            <p className=" text-lg">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            className=" hover:"
            onClick={() => handleOpen(2)}
          >
            <div className="flex flex-row items-center space-x-2">
              <PlayIcon size={16} />
              <p> at is Material Tailwind?</p>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <p className=" text-lg">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </p>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            className=" hover:"
            onClick={() => handleOpen(3)}
          >
            <div className="flex flex-row items-center space-x-2">
              <PlayIcon size={16} />
              <p> at is Material Tailwind?</p>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <p className=" text-lg">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </p>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader
            className=" hover:"
            onClick={() => handleOpen(4)}
          >
            <div className="flex flex-row items-center space-x-2">
              <PlayIcon size={16} />
              <p> at is Material Tailwind?</p>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <p className=" text-lg">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </p>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader
            className=" hover:"
            onClick={() => handleOpen(5)}
          >
            <div className="flex flex-row items-center space-x-2">
              <PlayIcon size={16} />
              <p> at is Material Tailwind?</p>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <p className=" text-lg">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </p>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}
