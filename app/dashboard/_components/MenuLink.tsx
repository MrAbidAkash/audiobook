import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }: any) => {
  const pathName = usePathname();

  return (
    <div
      className={`${
        pathName == item.path &&
        "bg-blue-gray-800 rounded-sm bg-opacity-80  hover:bg-opacity-100"
      }    flex flex-col pl-5  hover:bg-blue-gray-800 hover:bg-opacity-50 rounded-sm cursor-pointer
                    `}
    >
      <Link
        href={item.path}
        className="flex flex-row gap-x-2 p-3 items-center "
      >
        {item.icon}
        {item.title}
      </Link>
    </div>
  );
};

export default MenuLink;
