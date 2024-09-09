import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HT Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full justify-center overflow-y-scroll">
      <div className="flex flex-col h-screen w-[14%] p-1 md:p-3.5 sm:w-[16%] md:w-[22%] lg:w-[18%] xl:w-[14%]">
        <Menu />
      </div>
      <div className="flex flex-col overflow-y-scroll overflow-x-hidden h-screen w-[86%] bg-gray-100 p-4 sm:w-[84%] md:w-[78%] lg:w-[82%] xl:w-[86%]">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
