import Image from "next/image";
import hello from "./hello.jpg";

export default function Home(items) {
  console.log(items);
  return (
    <div>
      <nav className="flex justify-between items-center sticky top-0 px-10 bg-gray-900 font-semibold h-[60px] text-white shadow-md">
        <div className="flex flex-row items-center gap-3">
          <div className="flex items-center">
            <Image
              className="object-cover rounded-full"
              src={hello}
              alt="hello image"
              width={50}
              height={50}
            />
          </div>

          <div className="text-lg font-bold tracking-wide">짝리야 씨</div>
        </div>

        {/* Search */}
        <div className="bg-gray-800 px-4 py-2 rounded-md text-gray-300 hover:bg-gray-700 transition">
          Search By Items Name
        </div>

        {/* Profile */}
      </nav>
    </div>
  );
}
