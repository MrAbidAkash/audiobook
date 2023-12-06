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
import CButton from "@/components/Button";

const invoices = [
  {
    profilePic: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    name: "Iphone",
    desc: "hello this is our latest Android",
    price: 999,
    createdAt: "12.01.2022",

    stock: 50,
    
  },
  {
    profilePic: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    name: "Samsung",
    desc: "hello this is our latest Android",
    price: 999,
    createdAt: "12.01.2022",

    stock: 50,
    
  },
  {
    profilePic: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    name: "Samsung",
    desc: "hello this is our latest Android",
    price: 999,
    createdAt: "12.01.2022",
    stock: 50,
    
  },
  {
    profilePic: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    name: "Samsung",
    desc: "hello this is our latest Android",

    createdAt: "12.01.22",
    price: 399,
    stock: 60,
    
  },
  {
    profilePic: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>ST</AvatarFallback>
      </Avatar>
    ),
    name: "Samsung",
    desc: "hello this is our latest Android",

    createdAt: "12.01.22",
    price:99,
    stock: 60,
    
  },
  {
    profilePic: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    name: "Samsung",
    desc: "hello this is our latest Android",
    price: 999,
    createdAt: "12.01.2022",

    stock: 50,
    
  },
  {
    profilePic: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    name: "Samsung",
    desc: "hello this is our latest Android",
    createdAt: "12.01.22",
    price: 399,
    stock: 60,
    
  },
];

const page = () => {
  return (
    <div className="bg-blue-gray-700 min-h-[150px]  bg-opacity-20 rounded-md p-5 space-y-5">
      <div className="flex justify-between items-center">
        <Search placeholder="Search for a product..." />
        <Link href={`/dashboard/products/add`}>
          <CButton>
            Add New
         </CButton>
        </Link>
      </div>
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Title</TableHead>
              <TableHead>Description </TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="text-right">Stock</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.name}>
                <TableCell className="font-medium flex items-center gap-x-2 ">
                  {invoice.profilePic}
                  {invoice.name}
                </TableCell>
                <TableCell>
                  <span
                  
                  >
                    {invoice.desc}
                  </span>
                </TableCell>
                <TableCell>${invoice.price}</TableCell>
                <TableCell className="text-right">{invoice.createdAt}</TableCell>
                <TableCell className="text-right">{invoice.stock}</TableCell>
                <TableCell className="text-center space-x-2">
                  <Link href="/">
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
