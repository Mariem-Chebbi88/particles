'use client'
import React, { useMemo } from "react";
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

// Example data
const categoryData = [
  {
    category: "Delivery and shipping problems",
    success: 20,
    notAnswered: 80,
    actionNeeded: 20,
    total: 120,
    lastUpdate: "Mar 16, 2024",
  },
  {
    category: "Technical issues on the website",
    success: 41,
    notAnswered: 57,
    actionNeeded: 61,
    total: 159,
    lastUpdate: "Mar 16, 2024",
  },
  {
    category: "Insufficient product information",
    success: 13,
    notAnswered: 58,
    actionNeeded: 28,
    total: 99,
    lastUpdate: "Mar 14, 2024",
  },
  {
    category: "Payment issues",
    success: 19,
    notAnswered: 78,
    actionNeeded: 47,
    total: 144,
    lastUpdate: "Mar 13, 2024",
  },
  {
    category: "Unsatisfaction product quality",
    success: 16,
    notAnswered: 50,
    actionNeeded: 20,
    total: 86,
    lastUpdate: "Mar 12, 2024",
  },
  {
    category: "Inadequate or slow customers support",
    success: 10,
    notAnswered: 3,
    actionNeeded: 10,
    total: 23,
    lastUpdate: "Mar 11, 2024",
  },
  {
    category: "Return and refund issues",
    success: 6,
    notAnswered: 14,
    actionNeeded: 25,
    total: 45,
    lastUpdate: "Mar 10, 2024",
  },
  {
    category: "Billing and invoicing errors",
    success: 9,
    notAnswered: 90,
    actionNeeded: 12,
    total: 111,
    lastUpdate: "Mar 10, 2024",
  },
];

// Create column helper for defining columns
const columnHelper = createColumnHelper<typeof categoryData[0]>();

const CategoryTable = () => {
  // Define columns
  const columns = useMemo(() => [
    columnHelper.accessor("category", {
      header: "Category",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("success", {
      header: "Success",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("notAnswered", {
      header: "Not Answered",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("actionNeeded", {
      header: "Action Needed",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("total", {
      header: "Total",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("lastUpdate", {
      header: "Last Update",
      cell: (info) => info.getValue(),
    }),
  ], []);

  // Initialize the table instance
  const table = useReactTable({
    data: categoryData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full text-[#6F6F6F] text-[0.875rem] leading-[1.25rem] text-left p-5">
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-[#454348] p-4 border-b font-medium">
              {table.getHeaderGroups().map(headerGroup => (
                headerGroup.headers.map(header => (
                  <th key={header.id} className="px-4 py-[1.375rem]">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))
              ))}
            </tr>
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-100 border-b">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="p-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryTable;
