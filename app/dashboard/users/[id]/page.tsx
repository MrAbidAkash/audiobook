import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  return (
    <div className="flex space-x-5 xl:w-[70%]">
      <div>profile pic</div>
      <div className="flex-grow">
        <form action="" className="flex flex-col gap-y-5">
          <Input type="text" placeholder="username" name="username" className="" required />
          <Input type="email" placeholder="email" name="email" required />
          <Input
            type="password"
            placeholder="password"
            name="password"
            required
          />
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
            className=" border-blue-gray-700"
          />

          <Button
            type="submit"
            className=" p-5 bg-deep-purple-600 hover:bg-deep-purple-400"
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default page;
