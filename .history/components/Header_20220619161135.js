import Image from "next/image";
import {
  SearchIcon,
  HomeIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky">
      <div className="flex justify-between mx-5 lg:mx-auto">
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* middle search*/}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out">
            <PaperAirplaneIcon className="hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out rotate-45" />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
          <UserGroupIcon className="hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
          <HeartIcon className="hidden h-6 md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
          <img
            src="https://avatars.githubusercontent.com/u/19921533?v=4"
            alt="profile pic"
            className="h-10 rounded-full cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
}

export default Header;