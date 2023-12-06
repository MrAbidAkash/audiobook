import { Button } from "@/components/ui/button";
import {
  BookAudio,
  BookAudioIcon,
  LucideBookAudio,
  Percent,
  PercentIcon,
  PlusCircle,
  PlusIcon,
} from "lucide-react";

const ProMembers = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-7">
      <h2 className="text-3xl mb-10">Members get even more</h2>
      <div className="grid grid-cols-3 justify-between space-x-5  ">
        <div className="items-center text-center flex flex-col space-y-5  max-h-[200px]">
          <BookAudio
            strokeWidth={2.5}
            size={40}
            className=" rounded-full p-2 bg-primary-foreground text-black  "
          />
          <h4 className="text-xl font-semibold">Pick 1 audiobook a month</h4>
          <p className="text-sm font-semibold ">
            Choose any title you want from our unmatched collection—including
            bestsellers and new releases. This is yours to keep.
          </p>
        </div>
        <div className="items-center text-center flex flex-col space-y-5">
          <PlusIcon
            strokeWidth={3}
            size={40}
            className=" rounded-full p-2 bg-secondary text-black  "
          />
          <h4 className="text-xl font-semibold">
            Thousands of included titles
          </h4>
          <p className="text-sm font-semibold ">
            Thousands of included titles Listen all you want to thousands of
            included audiobooks and Originals with celebs you love and emerging
            talent.
          </p>
        </div>
        <div className="items-center text-center flex flex-col space-y-5">
          <PercentIcon
            strokeWidth={2.5}
            size={40}
            className=" rounded-full p-2 bg-primary-foreground text-black  "
          />
          <h4 className="text-xl font-semibold">Deals & discounts</h4>
          <p className="text-sm font-semibold ">
            Get in on exclusive sales and deals, and use your special member
            discount on any title, anytime.
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <button className="px-100% w-full btn btn-primary  ">
          Try for $0.00
        </button>
        <p className="text-sm font-semibold ">
          $14.95 a month after 30 days. Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default ProMembers;
