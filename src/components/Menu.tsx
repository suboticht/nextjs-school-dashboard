import Image from "next/image";
import Link from "next/link";
import { FaHome, FaUserFriends, FaBook, FaCalendarAlt } from "react-icons/fa";
import { PiStudentBold, PiExam } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { MdOutlineSubject, MdAssignment } from "react-icons/md";
import { GiClassicalKnowledge } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { FaUsersRays } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings, IoIosLogOut } from "react-icons/io";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <FaHome size={20} />,
        label: "Home",
        href: "/admin",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <PiStudentBold size={20} />,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FaUserFriends size={20} />,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: <RiParentFill size={20} />,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: <MdOutlineSubject size={20} />,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: <GrAnnounce size={20} />,
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <CgProfile size={20} />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      // {
      //   icon: <IoMdSettings size={20} />,
      //   label: "Settings",
      //   href: "/settings",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      {
        icon: <IoIosLogOut size={20} />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

export default function Menu() {
  return (
    <>
      {/* {Logo} */}
      <div className="flex justify-center items-start mb-2 md:justify-start">
        <Link 
          href={"/admin"}
          className="flex items-center justify-center gap-2 font-bold hover:opacity-80"
        >
          <span className="hidden md:block text-3xl text-HTPurple">HT</span>
        </Link>
      </div>
      {/* Menu item */}
      <div className="p-1">
        {menuItems.map(item => (
          <div key={item.title}>
            <span className="hidden my-5 text-gray-400 text-center md:text-left lg:block">{item.title}</span>
            <div className="flex flex-col justify-start items-start gap-2 text-[0.9rem] text-gray-500">
              {item.items.map(i => (
                  <Link
                    href={i.href}
                    className="flex justify-center items-center gap-4 rounded-sm w-full p-1.5 hover:bg-HTSkyLight md:justify-start"
                    key={i.label}
                  >
                    {i.icon}
                    <span className="hidden md:block md:text-[0.7rem] lg:text-[0.9rem]">{i.label}</span>
                  </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
