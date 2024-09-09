import { IoIosSearch } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { BsSortDown } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

export default function TableSearch() {
  return (
    <div className="flex items-center justify-end gap-2">
      <div className="hidden md:flex items-center justify-between rounded-full border-gray-300 border-[1px] bg-transparent min-w-56 p-2">
        <IoIosSearch
          size={20}
          style={{ color: "gray", marginRight: "0.8rem" }}
        />
        <input
          type="text"
          placeholder="Search..."
          className="bg-white outline-none text-[0.8rem] w-full"
        />
      </div>
      <button className="bg-HTYellow h-full p-2 rounded-full hover:opacity-80">
        <IoFilterSharp size={20} />
      </button>
      <button className="bg-HTYellow h-full p-2 rounded-full hover:opacity-80">
        <BsSortDown size={20} />
      </button>
      <button className="bg-HTYellow h-full p-2 rounded-full hover:opacity-80">
        <AiOutlinePlus size={20} />
      </button>
    </div>
  );
}
