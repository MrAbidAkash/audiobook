import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Search } from "@/components/Search";
import { TableUi } from "@/components/TableUi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Pagination from "../_components/Pagination";
import { fetchUsers } from "@/app/lib/data";
import Image from "next/image";

const invoices = [
  {
    profilePic: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    name: "John Doe",
    email: "mrabidakash@gmail.com",
    createdAt: "12.01.2022",
    role: "Admin",
    status: "Active",
    action: "Credit Card",
  },
  {
    profilePic: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    name: "John Doe",
    email: "mrabidakash@gmail.com",
    createdAt: "12.01.2022",
    role: "Admin",
    status: "Active",
    action: "Credit Card",
  },
  {
    profilePic: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    name: "John Doe",
    email: "mrabidakash@gmail.com",
    createdAt: "12.01.2022",
    role: "Admin",
    status: "Active",
    action: "Credit Card",
  },
  {
    profilePic: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    name: "John Doe",
    email: "mrabidakash@gmail.com",

    createdAt: "12.01.22",
    role: "Credit Card",
    status: "Credit Card",
    action: "Credit Card",
  },
  {
    profilePic: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    name: "John Doe",
    email: "mrabidakash@gmail.com",

    createdAt: "12.01.22",
    role: "PayPal",
    status: "Credit Card",
    action: "Credit Card",
  },
  {
    profilePic: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    name: "John Doe",
    email: "mrabidakash@gmail.com",
    createdAt: "12.01.2022",
    role: "Admin",
    status: "Active",
    action: "Credit Card",
  },
  {
    profilePic: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    name: "John Doe",
    email: "mrabidakash@gmail.com",
    createdAt: "12.01.22",
    role: "Credit Card",
    status: "Credit Card",
    action: "Credit Card",
  },
];

const page = async () => {
  const users = await fetchUsers();

  console.log(users);

  return (
    <div className="bg-blue-gray-700 min-h-[150px]  bg-opacity-20 rounded-md p-5 space-y-5">
      <div className="flex justify-between items-center">
        <Search placeholder="Search for a user..." />
        <Link href={`/dashboard/users/add`}>
          <Button className="bg-deep-purple-600 hover:bg-deep-purple-400">
            Add New
          </Button>
        </Link>
      </div>
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="text-right">Role</TableHead>
              <TableHead className="text-right">Status</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium flex items-center gap-x-2 ">
                  <Image src={user.img} alt="" width={30} height={30} />
                  {user.username}
                </TableCell>
                <TableCell>
                  <span
                    className={`${
                      user.email === "Paid"
                        ? "bg-green-800"
                        : user.email === "Pending"
                        ? "bg-yellow-900"
                        : user.email === "Cancel"
                        ? "bg-red-900"
                        : "bg-gray-700"
                    } p-1 px-2 rounded-sm  `}
                  >
                    {user.email}
                  </span>
                </TableCell>
                <TableCell>{user.createdAt}</TableCell>
                <TableCell className="text-right">{user.role}</TableCell>
                <TableCell className="text-right">{user.status}</TableCell>
                <TableCell className="text-center space-x-2">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <Button className="bg-green-700 hover:bg-green-400">
                      View
                    </Button>
                  </Link>
                  <Button className="bg-red-700 hover:bg-red-400">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default page;
