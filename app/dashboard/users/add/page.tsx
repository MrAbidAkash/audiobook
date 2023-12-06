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
      <div>
        <form action="" className="grid grid-cols-2 gap-10">
          <Input type="text" placeholder="username" name="username" required/>
          <Input type="email" placeholder="email" name="email" required/>
          <Input type="password" placeholder="password" name="password" required/>
          <Input type="number" placeholder="number" name="number" />
          <Select>
            <SelectTrigger className=" w-full h-full border-blue-gray-700">
              <SelectValue placeholder="Is Admin?" />
            </SelectTrigger>
            <SelectContent className="bg-blue-gray-100">
              <SelectGroup>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Textarea
            placeholder="Address"
            name="address"
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
