import React from "react";
import { LuFolderLock } from "react-icons/lu";
import { PiClockCountdown, PiSigma } from "react-icons/pi";
import { VscFolderOpened } from "react-icons/vsc";

const Tickets = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-5 mb-[3.9375rem]">
      <div className="flex gap-2.5 flex-1 bg-[#3BD377] rounded-2xl text-white p-4">
        <div className="bg-[#4FD785] p-[0.78125rem] rounded-full">
          <VscFolderOpened className="size-[1.5625rem]" />
        </div>
        <div>
          <p className="text-[0.875rem] leading-5 mb-0.5">Success Tickets</p>
          <p className="text-[1.5rem] leading-7 font-medium">24</p>
        </div>
      </div>

      <div className="flex gap-2.5 flex-1 bg-[#EE952D] rounded-2xl text-white p-4">
        <div className="bg-[#F0A042] p-[0.78125rem] rounded-full">
          <LuFolderLock className="size-[1.5625rem]" />
        </div>
        <div>
          <p className="text-[0.875rem] leading-5 mb-0.5">Not Answered Tickets</p>
          <p className="text-[1.5rem] leading-7 font-medium">41</p>
        </div>
      </div>

      <div className="flex gap-2.5 flex-1 bg-[#E78AC5] rounded-2xl text-white p-4">
        <div className="bg-[#E996CB] p-[0.78125rem] rounded-full">
          <PiClockCountdown className="size-[1.5625rem]" />
        </div>
        <div>
          <p className="text-[0.875rem] leading-5 mb-0.5">Action Needed Tickets</p>
          <p className="text-[1.5rem] leading-7 font-medium">19</p>
        </div>
      </div>

      <div className="flex gap-2.5 flex-1 bg-[#1FD2EB] rounded-2xl text-white p-4">
        <div className="bg-[#35D6ED] p-[0.78125rem] rounded-full">
          <PiSigma className="size-[1.5625rem]" />
        </div>
        <div>
          <p className="text-[0.875rem] leading-5 mb-0.5">Total Tickets</p>
          <p className="text-[1.5rem] leading-7 font-medium">122</p>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
