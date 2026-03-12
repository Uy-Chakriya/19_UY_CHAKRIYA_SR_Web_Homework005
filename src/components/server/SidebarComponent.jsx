import React from "react";

export const SidebarComponent = () => {
  return (
    <div>
      <aside className="bg-gray-900 top-0 left-0 w-64 h-full pt-2">
        <div className="pl-2">MENU</div>
        <div className="h-full px-3 py-4  ">
          <ul className="space-y-2 font-medium flex flex-col items-center">
            <li className="bg-gray-800 w-full h-full p-2 rounded-md  ">
              Overview
            </li>
            <li className="bg-gray-800 w-full h-full  p-2 rounded-md  ">
              Items
            </li>
            <li className="bg-gray-800 w-full h-full  p-2 rounded-md ">
              Orders
            </li>
            <li className="bg-gray-800 w-full h-full  p-2 rounded-md ">
              Customers
            </li>
            <li className="bg-gray-800 w-full h-full  p-2 rounded-md ">
              Setting
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
