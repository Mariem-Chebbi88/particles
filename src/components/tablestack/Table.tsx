"use client";
import * as React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { GoPersonAdd } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface User {
  name: string;
  email: string;
  status: "active" | "pending" | "disabled";
  role: string;
  lastLogin: string;
}

const defaultData: User[] = [
  {
    name: "Alice Smith",
    email: "alice@example.com",
    status: "active",
    role: "Admin",
    lastLogin: "2023-10-01",
  },
  {
    name: "Bob Jones",
    email: "bob@example.com",
    status: "pending",
    role: "Editor",
    lastLogin: "2023-09-29",
  },
  {
    name: "Charlie Johnson",
    email: "charlie@example.com",
    status: "disabled",
    role: "Viewer",
    lastLogin: "2023-09-22",
  },
  {
    name: "Diana Prince",
    email: "diana@example.com",
    status: "active",
    role: "Admin",
    lastLogin: "2023-09-30",
  },
  {
    name: "Eve Adams",
    email: "eve@example.com",
    status: "pending",
    role: "Editor",
    lastLogin: "2023-09-20",
  },
  {
    name: "Frank White",
    email: "frank@example.com",
    status: "disabled",
    role: "Viewer",
    lastLogin: "2023-09-15",
  },
  {
    name: "George Martin",
    email: "george@example.com",
    status: "active",
    role: "Admin",
    lastLogin: "2023-09-18",
  },
  {
    name: "Harry Potter",
    email: "harry@example.com",
    status: "pending",
    role: "Editor",
    lastLogin: "2023-09-10",
  },
  {
    name: "Ivy Carter",
    email: "ivy@example.com",
    status: "disabled",
    role: "Viewer",
    lastLogin: "2023-09-11",
  },
  {
    name: "John Doe",
    email: "john@example.com",
    status: "active",
    role: "Admin",
    lastLogin: "2023-09-05",
  },
  {
    name: "Katherine Johnson",
    email: "katherine@example.com",
    status: "pending",
    role: "Editor",
    lastLogin: "2023-09-03",
  },
];

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("name", {
    header: () => "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    header: () => "Email",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: () => "Status",
    cell: (info) => (
      <span
        className={`px-2 py-1 rounded-full text-sm ${getStatusStyles(
          info.getValue() as User["status"]
        )}`}
      >
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor("role", {
    header: () => "Role",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastLogin", {
    header: () => "Last Login",
    cell: (info) => info.getValue(),
  }),
];

const getStatusStyles = (status: User["status"]) => {
  switch (status) {
    case "active":
      return "text-green-600 bg-green-100";
    case "pending":
      return "text-yellow-600 bg-yellow-100";
    case "disabled":
      return "text-gray-600 bg-gray-100";
    default:
      return "";
  }
};

const UserTable: React.FC = () => {
  const [data] = React.useState([...defaultData]);
  const [openMenu, setOpenMenu] = React.useState<number | null>(null); // State to manage open menu
  const handleMenuClick = (index: number) => {
    setOpenMenu(openMenu === index ? null : index);
  };
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
  });

  return (
    <div className="w-full font-light text-[#6F6F6F] text-[0.875rem] leading-[1.25rem] text-left border border-[#EDEDED] rounded-2xl p-5">
      <div className="flex w-full justify-end mb-6">
        <button className="text-white bg-[#5AC3DF] px-4 py-3 flex gap-[0.625rem] rounded-full items-center">
          <GoPersonAdd className="size-4" /> Invite Teammate
        </button>
      </div>

      <table className="min-w-full table-auto border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-4 border-b font-medium">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, rowIndex) => (
            <tr
              key={row.id}
              className={`hover:bg-gray-100 ${
                rowIndex === table.getRowModel().rows.length - 1
                  ? ""
                  : "border-b"
              }`}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td className="relative p-4">
                <button
                  onClick={() => handleMenuClick(row.index)}
                  className="text-gray-500"
                >
                  <BsThreeDotsVertical />
                </button>
                {openMenu === row.index && (
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                    <button className="block w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100 transition-all duration-200">
                      Disable Person
                    </button>
                    <button className="block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100 transition-all duration-200">
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-4 text-center">
        {/* Previous Page Button */}
        <button
          onClick={() =>
            table.setPageIndex(table.getState().pagination.pageIndex - 1)
          }
          disabled={!table.getCanPreviousPage()}
          className={`flex items-center justify-center p-2 border-2 border-[#EDEDED] rounded-full bg-white text-gray-400 size-10 ${
            !table.getCanPreviousPage() && "cursor-not-allowed"
          }`}
        >
          <IoIosArrowBack />
        </button>

        {/* Previous Page Number */}
        {/* Only show if we are on page > 1 */}
        {table.getState().pagination.pageIndex > 0 && (
          <span
            onClick={() =>
              table.setPageIndex(table.getState().pagination.pageIndex - 1)
            }
            className={`p-2 border-2 border-[#EDEDED] rounded-full cursor-pointer size-10 bg-white text-[#5AC3DF] ${
              !table.getCanPreviousPage() && "text-gray-400"
            }`}
          >
            {table.getState().pagination.pageIndex}
          </span>
        )}

        {/* Current Page */}
        <span className="p-2 border-2 border-[#EDEDED] rounded-full bg-[#5AC3DF] text-white size-10">
          {table.getState().pagination.pageIndex + 1}
        </span>

        {/* Next Page Number */}
        {/* Only show if there's a next page */}
        {table.getCanNextPage() && (
          <span
            onClick={() =>
              table.setPageIndex(table.getState().pagination.pageIndex + 1)
            }
            className={`p-2 border-2 border-[#EDEDED] rounded-full cursor-pointer bg-white size-10 text-[#5AC3DF] ${
              !table.getCanNextPage() && "text-gray-400"
            }`}
          >
            {table.getState().pagination.pageIndex + 2}
          </span>
        )}

        {/* Next Page Button */}
        <button
          onClick={() =>
            table.setPageIndex(table.getState().pagination.pageIndex + 1)
          }
          disabled={!table.getCanNextPage()}
          className={`flex items-center justify-center p-2 border-2 border-[#EDEDED] rounded-full bg-white text-gray-400 size-10 ${
            !table.getCanNextPage() && "cursor-not-allowed"
          }`}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default UserTable;
