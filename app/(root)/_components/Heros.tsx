import { Button } from "@/components/ui/button";
import Image from "next/image";

const Heros = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-x-5">
      <div className=" space-y-4">
        <div className="space-y-2">
          <div>
            <h2 className="text-2xl font-extrabold">Get your <br /> imagination going</h2>
          </div>
          <div>
            <p className="text-sm font-semibold   ">
              The best audiobooks and Originals. The most entertainment. The
              podcasts you want to hear.
            </p>
          </div>
        </div>
        <button className="px-100% w-full btn btn-primary  ">
          Try for $0.00
        </button>
        <p className="text-sm font-semibold ">
          $14.95 a month after 30 days. Cancel anytime
        </p>
      </div>
      <Image alt="s2k" src="/s2k.png" width={500} height={500} />
    </div>
  );
};

export default Heros;
