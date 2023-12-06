"use client";

import CButton from "@/components/Button";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  return (
    <div className="p-5 w-full xl:w-[60%]">
      <p>add</p>
      <div>
        <form action="" className="grid grid-cols-2 gap-10">
          <Input type="text" placeholder="title" name="title" />
          <Select>
            <SelectTrigger className=" w-full h-full border-blue-gray-700">
              <SelectValue placeholder="Choose a Category" />
            </SelectTrigger>
            <SelectContent className="bg-blue-gray-100">
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input type="number" placeholder="price" name="price" />
          <Input type="number" placeholder="stock" name="stock" />
          <Input type="text" placeholder="color" name="color" />
          <Input type="text" placeholder="size" name="size" />
          <Textarea
            placeholder="description"
            name="price"
            className="col-span-2 border-blue-gray-700"
          />

          <Button
            type="submit"
            className="col-span-2 p-5 bg-deep-purple-600 hover:bg-deep-purple-400"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default page;
