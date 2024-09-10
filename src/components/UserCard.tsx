import { MdOutlineMoreHoriz } from "react-icons/md";

const UserCard = ({ type, size } : { type : string, size: "sm" | "lg" }) => {
  return (
    <div className={`flex ${size === "lg" ? "w-[100%] md:w-full lg:w-[49%]" : "flex-1"} flex-col justify-between items-start gap-4 rounded-2xl odd:bg-HTPurple even:bg-HTYellow min-w-[130px] p-4`}>
        <div className="flex justify-between items-center w-full">
            <p className="bg-white text-green-600 text-[0.6rem] rounded-full px-1.5 py-1">2024/25</p>
            <MdOutlineMoreHoriz size={30} style={{color: "white"}} />
        </div>
        <p className="font-bold text-2xl">2,423</p>
        <p className="text-black text-sm">{type}</p>
    </div>
  )
}

export default UserCard;
