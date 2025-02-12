import { Bars3Icon } from "@heroicons/react/24/outline";
import SideBar from './sideBar';
import SearchService from './searchBar';
const Header = () => {
    return (
      <header className="bg-blue-800 text-white p-4 lg:fixed lg:top-0 lg:w-full z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {}
          <div className="flex items-center space-x-2 text-2xl font-semibold">
            Yotech
          </div>
  
          {}
          <div className="flex-1 max-w-lg mx-4 hidden md:block">
            <SearchService />
          </div>
  
          {}
          <div className="hidden md:block">
            <SideBar />
          </div>
  
          {}
          <div className="md:hidden">
            <button className="p-2 rounded-md hover:bg-blue-700 transition">
              <Bars3Icon className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
