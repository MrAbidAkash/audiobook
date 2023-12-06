import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserCircle2Icon } from "lucide-react";

const invoices = [
  {
    profilePic: <UserCircle2Icon />,
    invoice: "John Doe",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    profilePic: <UserCircle2Icon />,
    invoice: "John Doe",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    profilePic: <UserCircle2Icon />,
    invoice: "John Doe",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    profilePic: <UserCircle2Icon />,
    invoice: "John Doe",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    profilePic: <UserCircle2Icon />,
    invoice: "John Doe",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    profilePic: <UserCircle2Icon />,
    invoice: "John Doe",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    profilePic: <UserCircle2Icon />,
    invoice: "John Doe",
    paymentStatus: "Cancel",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function Transactions() {
  return (
    <div className="p-5">
      <h2 className="text-xl">Latest Transactions</h2>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium flex items-center gap-x-2 ">
                {invoice.profilePic}
                {invoice.invoice}
              </TableCell>
              <TableCell>
                <span
                  className={`${
                    invoice.paymentStatus === "Paid"
                      ? "bg-green-800"
                      : invoice.paymentStatus === "Pending"
                      ? "bg-yellow-900"
                      : invoice.paymentStatus === "Cancel"
                      ? "bg-red-900"
                      : "bg-gray-700"
                  } p-1 px-2 rounded-sm  `}
                >
                  {invoice.paymentStatus}
                </span>
              </TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
