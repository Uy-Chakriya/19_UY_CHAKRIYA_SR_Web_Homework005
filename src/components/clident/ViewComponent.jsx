"use client";
import { items } from "@/app/data/items";
import Image from "next/image";
import ProductCard from "../server/ProductCardComponent";
import MapModal from "../server/MapModalComponent";

export default function ViewComponent() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
      <div className="w-full">
        <div className="flex flex-row justify-between  w-full p-[10px] m-auto ">
          <button className="bg-white text-black font-medium p-[5px] w-20 rounded-lg">
            Back
          </button>

          <div className="flex flex-row gap-5">
            <div> Your Bookmark </div>
            <div>
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
                className="lucide lucide-book-marked-icon lucide-book-marked"
              >
                <path d="M10 2v8l3-3 3 3V2" />
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
              </svg>
            </div>
            <div>
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
                className="lucide lucide-arrow-down-za-icon lucide-arrow-down-z-a"
              >
                <path d="m3 16 4 4 4-4" />
                <path d="M7 4v16" />
                <path d="M15 4h5l-5 6h5" />
                <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
                <path d="M20 18h-5" />
              </svg>
            </div>
            <div>
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
                className="lucide lucide-arrow-down-za-icon lucide-arrow-down-z-a"
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

        {items.map((item, index) => {
          return (
            <div className="" key={index}>
              <div className="flex flex-row justify-between p-2 ">
                <div className="flex flex-row justify-evenly space-x-3 ">
                  {/*==> img */}
                  <div>
                    <Image
                      className="object-cover rounded-lg"
                      src={item.image}
                      width={100}
                      height={100}
                      alt="Picture of the author"
                    />
                  </div>

                  {/*==> content */}
                  <div className="flex flex-col gap-1 justify-center ">
                    <div className="flex flex-row space-x-2 ">
                      <div className="font-extrabold">{item.item_name}</div>
                      <div>${item.item_price}</div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-bookmark-icon lucide-bookmark"
                        >
                          <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
                        </svg>
                      </div>
                    </div>
                    <div>{item.item_description}</div>
                  </div>
                </div>

                <div>
                  <button className="bg-gray-700 px-5 py-2 m-4 rounded-xl text-white font-medium hover:bg-gray-600 transition duration-200 shadow-md">
                    View
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-10">
        <div className="grid grid-cols-3 gap-4">
          {items.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onView={(data) => setSelectedItem(data)}
            />
          ))}
        </div>

        <MapModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      </div>
    </div>
  );
}
