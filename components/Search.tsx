import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

export function Search({ placeholder }: any) {
  return (
    <div className="flex flex-row items-center bg-gray-700 bg-opacity-40 rounded-lg 300 opacity-80 py-2 px-2 w-max">
      <MagnifyingGlassIcon className="h-5 w-5 cursor-pointer  " />

      <input
        type="text"
        name=""
        id=""
        className=" bg-transparent placeholder-white w-96 max-w-xs outline-none px-2"
        placeholder={placeholder}
      />
    </div>
  );
}
