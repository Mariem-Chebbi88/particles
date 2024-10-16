"use client";
import {
  Checkbox,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrChannel } from "react-icons/gr";
import { IoTrashBinOutline } from "react-icons/io5";
import { PiCheckBold, PiTicket, PiUserSwitch } from "react-icons/pi";
import { TiArrowUnsorted } from "react-icons/ti";

// Function to apply styles based on status
const getStatusStyles = (status: string) => {
  switch (status.toLowerCase()) {
    case "success":
      return "text-green-600 bg-green-100";
    case "not answered":
      return "text-yellow-600 bg-yellow-100";
    case "action needed":
      return "text-[#E78AC5] bg-[#FFE2F4]";
    default:
      return "";
  }
};

const tableData = [
  {
    id: 106,
    status: "Success",
    ticketPreview: "We apologize for the delay...",
    channel: <GrChannel />,
    customer: "stevesmith@gmail.com",
  },
  {
    id: 108,
    status: "Success",
    ticketPreview: "Thank you for your patience...",
    channel: <GrChannel />,
    customer: "liambrown@gmail.com",
  },
  {
    id: 113,
    status: "Action needed",
    ticketPreview: "If your order has been lost...",
    channel: <GrChannel />,
    customer: "carlospaterson@gmail.com",
  },
  {
    id: 115,
    status: "Not answered",
    ticketPreview: "Please ensure that you have...",
    channel: <GrChannel />,
    customer: "benjaminlee@gmail.com",
  },
];

const totalTickets = tableData.length;

const TicketTable = () => {
  const [enabledStates, setEnabledStates] = useState<boolean[]>(
    tableData.map(() => false)
  );

  const handleCheckboxChange = (index: number) => {
    const newStates = [...enabledStates];
    newStates[index] = !newStates[index];
    setEnabledStates(newStates);
  };

  return (
    <div className="w-full font-light text-[#6F6F6F] text-[0.875rem] leading-[1.25rem] text-left border border-[#EDEDED] rounded-2xl p-5">
      <div className="p-4 font-medium text-[1rem] leading-6">
        <p>{totalTickets} Total tickets</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-[#454348] p-4 border-b font-medium">
              <th className="px-4 py-[1.375rem]">Select</th>
              <th className="px-4 py-[1.375rem] font-medium flex items-center gap-1">
                ID <TiArrowUnsorted />
              </th>
              <th className="px-4 py-[1.375rem]">Channel</th>
              <th className="px-4 py-[1.375rem]">Status</th>
              <th className="px-4 py-[1.375rem]">Ticket Preview</th>
              <th className="px-4 py-[1.375rem]">Customer</th>
              <th className="px-4 py-[1.375rem]"></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={row.id} className="hover:bg-gray-100 border-b">
                <td className="p-4">
                  <Checkbox
                    checked={enabledStates[index]} // Check if the current checkbox is enabled
                    onChange={() => handleCheckboxChange(index)} // Toggle state on change
                    className="relative flex items-center justify-center w-5 h-5 border border-[#EDEDED] rounded-sm bg-white transition-colors duration-200 cursor-pointer"
                  >
                    <span
                      className={`absolute inset-0 rounded-sm transition-colors duration-200 ${
                        enabledStates[index] ? "bg-[#5AC3DF]" : "bg-[#EDEDED]"
                      }`}
                    >
                      {enabledStates[index] && (
                        <PiCheckBold className="text-center size-4 text-white" />
                      )}
                    </span>
                  </Checkbox>
                </td>
                <td className="p-4">{row.id}</td>
                <td className="p-4">{row.channel}</td>
                <td>
                  <p
                    className={`max-w-[8rem] text-center p-2 whitespace-nowrap rounded-full ${getStatusStyles(
                      row.status
                    )}`}
                  >
                    {row.status}
                  </p>
                </td>
                <td className="p-4 whitespace-nowrap">{row.ticketPreview}</td>
                <td className="p-4">{row.customer}</td>
                <td className="relative p-4 flex gap-4 items-center">
                  {/*  */}
                  <Menu as="div" className="relative inline-block text-left">
                    <MenuButton className="text-gray-500">
                      <BsThreeDotsVertical />
                    </MenuButton>
                    <MenuItems className="absolute left-0 mt-2 whitespace-nowrap border border-[#EDEDED] bg-white shadow-sm rounded-md z-10">
                      <MenuItem>
                        {() => (
                          <button className="flex gap-1 items-center active:bg-gray-100 p-4 text-left">
                            <PiTicket /> Go to Ticket
                          </button>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {() => (
                          <button className="flex gap-1 items-center active:bg-gray-100 p-4 text-left">
                            <PiUserSwitch /> Assign to
                          </button>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                  <button>
                    <IoTrashBinOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketTable;
