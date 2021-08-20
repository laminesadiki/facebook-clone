import Image from "next/image";
import {BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from "@heroicons/react/solid"
import {FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline"
import HeaderIcon from "./HeaderIcon";

function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
           {/* Left */}
           <div className="flex items-center">
               <Image src="https://links.papareact.com/5me" width={40} 
                height={40} layout="fixed" />
           
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink " type="text" placeholder="Search Facebook" />
                </div>
           </div>

           {/* Center */}
           <div className="flex justify-center flex-grow">
               <div className="flex space-x-2 md:space-x-6">
               <HeaderIcon active={true} Icon={HomeIcon} />
                {
                   [FlagIcon,PlayIcon,ShoppingCartIcon,UserGroupIcon].map(el => (
                       <HeaderIcon Icon={el} />))
                }

               </div>
           </div>




           {/* Right */}
           <div className="flex items-center sm:space-x-2 justify-end">
               {/* Profile Pic */}
               <p className="whitespace-nowrap font-semibold pr-3">Ayoub Lamine Sadiki</p>
               <ViewGridIcon className="icon"/>
               <ChatIcon className="icon" />
               <BellIcon className="icon" />
               <ChevronDownIcon className="icon" />
           </div>    


        </div>
    )
}

export default Header
