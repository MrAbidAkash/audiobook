import { Button } from "@/components/ui/button";
import { PlayCircle, VideoIcon } from "lucide-react";

const RightBar = () => {
    return (
      <div className="p-5 flex flex-col space-y-5">
        <h2 className="text-xl font-bold">🔥 Available Now</h2>
        <h3 className="text-lg">
          How to use the new version of the admin dashboard?
        </h3>
        <p className="text-sm text-blue-gray-500">Takes 4 mins to learn</p>
        <p className="text-sm text-blue-gray-500">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is availabl
        </p>
        <Button className="flex space-x-2 bg-deep-purple-700 hover:bg-deep-purple-600 w-max">
          <PlayCircle size={20} />
          <span>Watch</span>
        </Button>
      </div>
    );
}

export default RightBar;