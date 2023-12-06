"use client";

import {
  AlignVerticalJustifyStartIcon,
  DollarSignIcon,
  FileQuestionIcon,
  LayoutDashboardIcon,
  LogOut,
  PanelTopClose,
  SettingsIcon,
  ShoppingBagIcon,
  UserCircle2Icon,
  Users2Icon,
  WorkflowIcon,
} from "lucide-react";
import MenuLink from "./MenuLink";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <LayoutDashboardIcon />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <Users2Icon />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <ShoppingBagIcon />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <DollarSignIcon />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <WorkflowIcon />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <AlignVerticalJustifyStartIcon />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <PanelTopClose />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <SettingsIcon />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <FileQuestionIcon />,
      },
    ],
  },
];

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="space-y-5  ">
      <div className="flex flex-row space-x-3 items-center ">
        <UserCircle2Icon />
        <div className="">
          <p>Abid Akash</p>
          <p>Administrator</p>
        </div>
      </div>
      <ul className="space-y-8">
        {menuItems.map((cat) => {
          return (
            <li key={cat.title} className="space-y-3 flex flex-col">
              <h2 className="text-xl font-semibold "> {cat.title}</h2>

              <div className="space-y-1">
                {cat.list.map((item) => {
                  return <MenuLink key={item.title} item={item} />;
                })}
              </div>
            </li>
          );
        })}{" "}
        <Button className="flex space-x-2 items-center bg-black p-5">
          <LogOut />
          <h4 className="text-base"> Log out</h4>
        </Button>
      </ul>
    </div>
  ); 
};

export default Sidebar;
