import { IoIosSearch } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { BsSortDown } from "react-icons/bs";
import { BsSortUp } from "react-icons/bs";

interface TableSearchProps {
  onSort: () => void;
  isAscending: boolean;
}

export default function TableSearch({onSort, isAscending} : TableSearchProps) {
  return (
    <div className="flex flex-col w-full items-center justify-end gap-2 md:flex-row md:w-auto">
      <div className="w-full md:w-auto">
        <div className="flex items-center justify-between rounded-full border-gray-300 border-[1px] bg-transparent min-w-56 p-2">
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
      </div>
      <div className="flex gap-1">
        <button className="bg-HTYellow h-full p-2 rounded-full hover:opacity-80">
          <IoFilterSharp size={20} />
        </button>
        <button className="bg-HTYellow h-full p-2 rounded-full hover:opacity-80">
          {isAscending ? <BsSortDown size={20} onClick={onSort} /> : <BsSortUp size={20} onClick={onSort} />}
        </button>
      </div>
    </div>
  );
}
