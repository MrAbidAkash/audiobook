import Card from "./_components/Card";
import GraphChart from "./_components/GraphChart";
import RightBar from "./_components/RightBar";
import RightBar2nd from "./_components/RightBar2nd";
import { Transactions } from "./_components/Transactions";



const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 space-x-14 ">
      <div className="col-span-2 flex flex-col  space-y-5">
        <div className="grid grid-cols-3 gap-x-4">
          <div className="bg-blue-gray-700 min-h-[100px]  bg-opacity-20 rounded-md ">
            <Card />
          </div>
          <div className="bg-blue-gray-700 min-h-[100px]  bg-opacity-20 rounded-md ">
            <Card />
          </div>
          <div className="bg-blue-gray-700 min-h-[100px]  bg-opacity-20 rounded-md ">
            <Card />
          </div>
        </div>
        <div className="bg-blue-gray-700 min-h-[150px]  bg-opacity-20 rounded-md">
          <Transactions />
        </div>
        <div className="bg-blue-gray-700 max-h-[450px] p-5 space-y-5 bg-opacity-20 rounded-md">
          <div>
            <h2>Weekly Recap</h2>
          </div>
          <GraphChart />
        </div>
      </div>
      <div className="space-y-3">
        <div className=" sticky top-0">
          <div className="bg-blue-gray-700 min-h-[150px]  bg-opacity-20 rounded-md">
            <RightBar />
          </div>
          <div className="bg-blue-gray-700 min-h-[150px]  bg-opacity-20 rounded-md ">
            <RightBar2nd />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
