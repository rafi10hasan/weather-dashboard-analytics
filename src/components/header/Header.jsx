import { useState } from "react";
import Favourite from "./Favourite.jsx";
import FavouriteModal from "./FavouriteModal";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <>
      <header className="pb-4">
        <nav className="flex flex-col md:flex-row  justify-between p-4 w-[92vw] mx-auto">
          <Logo />
          <div className="flex flex-col md:flex-row mt-6 md:mt-0 gap-4 relative">
            <Search />
            <Favourite
              onShow={()=>setIsOpen(!isOpen)}
            />
            {isOpen && <FavouriteModal className="absolute z-50"/>}
            
          </div>
        </nav>
      </header>
    </>
  );
}
