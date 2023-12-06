import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-row  space-x-5 text-blue-gray-100   ">
      <div className="flex-[1] bg-blue-gray-700  bg-opacity-20 p-5 rounded-md h-[98vh] sticky top-0">
        <Sidebar />
      </div>
      <div className="flex-[4] flex-col p-5 py-3 space-y-3">
        <div className="  bg-blue-gray-700  bg-opacity-20 rounded-md p-5 ">
          <Navbar />
        </div>
        <div className=" ">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboardlayout;
