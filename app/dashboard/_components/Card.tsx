import { Users2Icon } from "lucide-react";

const Card = () => {
  return (
    <div className="flex space-x-3 p-5 hover:bg-blue-gray-800 hover:bg-opacity-50 cursor-pointer">
      <div>
        <Users2Icon />
      </div>
      <div className="flex flex-col space-y-3">
        <h4 className="text-lg font-semibold">Total Users</h4>
        <h2 className="text-xl font-medium">10.928</h2>
        <p>
          <span className="text-green-600">12%</span> more than previous week
        </p>
      </div>
    </div>
  );
};

export default Card;
 