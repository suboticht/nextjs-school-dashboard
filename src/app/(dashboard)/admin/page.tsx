import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import FinanceChart from "@/components/FinanceChart";
import StudentsChart from "@/components/StudentsChart";
import UserCard from "@/components/UserCard";
import dynamic from "next/dynamic";
import { MdOutlineMoreHoriz } from "react-icons/md";

const EventCalender = dynamic(
  () => import('@/components/HTCalendar'),
  { ssr: false, loading: () => <p>Calendar Loading...</p>, }
)

export default function page() {
  return (
    <div className="flex flex-col justify-between items-start gap-4 md:flex-row">
      <div className="flex flex-col gap-7 w-full md:w-2/3">
        <div className="flex flex-wrap justify-between items-center w-full gap-2">
          <UserCard type="Students" />
          <UserCard type="Teachers" />
          <UserCard type="Parents" />
          <UserCard type="Staffs" />
        </div>
        <div className="flex flex-col justify-between items-start gap-4 md:flex-row">
          <div className="bg-white w-full h-[450px] rounded-xl p-4 md:w-1/3">
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg">Students</p>
              <MdOutlineMoreHoriz size={30} style={{color: "gray"}} />
            </div>
            <StudentsChart />
          </div>
          <div className="bg-white w-full h-[450px] rounded-xl p-4 md:w-2/3">
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg">Attendance</p>
              <MdOutlineMoreHoriz size={30} style={{color: "gray"}} />
            </div>
            <AttendanceChart />
          </div>
        </div>
        <div className="w-full h-[600px] bg-white rounded-xl p-4">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg">Finance</p>
            <MdOutlineMoreHoriz size={30} style={{color: "gray"}} />
          </div>
          <FinanceChart />
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-sm w-full md:w-1/3">
        <EventCalender />
        <Announcements />
      </div>
    </div>
  )
}
