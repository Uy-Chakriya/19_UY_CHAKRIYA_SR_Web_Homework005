"use client";
import { useState } from "react";
import { items } from "@/app/data/items";
import Image from "next/image";

export default function ViewComponent() {
  const [viewData, setviewData] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [showBookmark, setshowBookmark] = useState(false);

  const clickBookmark = (itemName) => {
    setBookmarks((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName],
    );
  };

  const hasAnyBookmarks = bookmarks.length > 0;

  const displayItems = [...items]
    .filter((item) => !showBookmark || bookmarks.includes(item.item_name))
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.item_name.localeCompare(b.item_name);
      } else if (sortOrder === "desc") {
        return b.item_name.localeCompare(a.item_name);
      }
      return 0;
    });

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="flex flex-row justify-between w-full p-[10px] m-auto">
          <button className="bg-white text-black font-medium p-[5px] w-20 rounded-lg">
            Back
          </button>

          <div className="flex flex-row gap-5 items-center">
            <div
              className={`cursor-pointer transition-colors ${showBookmark ? "text-yellow-400 underline" : "text-white"}`}
              onClick={() => setshowBookmark(!showBookmark)}
            >
              Your Bookmark({bookmarks.length})
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setshowBookmark(!showBookmark)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill={hasAnyBookmarks ? "yellow" : "none"}
                stroke={hasAnyBookmarks ? "yellow" : "currentColor"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-marked"
              >
                <path d="M10 2v8l3-3 3 3V2" />
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
              </svg>
            </div>

            <div
              className={`cursor-pointer transition-colors ${sortOrder === "asc" ? "text-yellow-400" : "text-white"}`}
              onClick={() => setSortOrder("asc")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 16 4 4 4-4" />
                <path d="M7 20V4" />
                <path d="M20 8h-5" />
                <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
                <path d="M15 14h5l-5 6h5" />
              </svg>
            </div>

            <div
              className={`cursor-pointer transition-colors ${sortOrder === "desc" ? "text-yellow-400" : "text-white"}`}
              onClick={() => setSortOrder("desc")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 16 4 4 4-4" />
                <path d="M7 4v16" />
                <path d="M15 4h5l-5 6h5" />
                <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
                <path d="M20 18h-5" />
              </svg>
            </div>
          </div>
        </div>

        {displayItems.length > 0 &&
          displayItems.map((item, index) => {
            const isBookmarked = bookmarks.includes(item.item_name);

            return (
              <div className="border-b border-gray-900" key={index}>
                <div className="flex flex-row justify-between p-2">
                  <div className="flex flex-row justify-evenly space-x-3">
                    <div>
                      <Image
                        className="object-cover rounded-lg"
                        src={item.image}
                        width={100}
                        height={100}
                        alt={item.item_name}
                      />
                    </div>

                    <div className="flex flex-col gap-1 justify-center">
                      <div className="flex flex-row space-x-2 items-center">
                        <div className="font-extrabold text-white">
                          {item.item_name}
                        </div>
                        <div className="text-white">${item.item_price}</div>

                        <div
                          className="cursor-pointer transition"
                          onClick={() => clickBookmark(item.item_name)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill={isBookmarked ? "yellow" : "none"}
                            stroke={isBookmarked ? "yellow" : "currentColor"}
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
                          </svg>
                        </div>
                      </div>

                      <div className="text-sm text-gray-500">
                        {item.item_description}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <button
                      onClick={() => setviewData(item)}
                      className="bg-gray-700 px-5 py-2 rounded-xl text-white font-medium"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {viewData && (
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative p-6">
            <button
              onClick={() => setviewData(null)}
              className="absolute top-3 right-3 p-1 text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            <h2 className="text-black font-bold text-lg mb-2">
              Name: <span className="font-normal">{viewData.item_name}</span>
            </h2>
            <div className="text-black font-bold mb-2">
              Price: <span className="font-normal">${viewData.item_price}</span>
            </div>
            <p className="text-black font-bold mb-6">
              Description:{" "}
              <span className="font-normal text-gray-700">
                {viewData.item_description}
              </span>
            </p>

            <button
              onClick={() => setviewData(null)}
              className="w-full py-3 rounded-xl text-white bg-gray-900"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
