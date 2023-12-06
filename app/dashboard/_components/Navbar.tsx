"use client";

import { Search } from "@/components/Search";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Bell, Globe2Icon, MessageSquare } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="flex flex-row items-center justify-between">
      <div>
        <h2 className="text-2xl capitalize">{pathName.split("/").pop()}</h2>
      </div>
      <div className="flex items-center justify-end space-x-3">
        <div>
          <Search placeholder="Search..." />
        </div>
        <MessageSquare />
        <Bell />
        <Globe2Icon />
      </div>
    </div>
  );
};

export default Navbar;
