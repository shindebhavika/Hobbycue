import { useState } from "react";
import { RiArrowDropDownLine, RiMenu3Fill, RiCloseLine } from "react-icons/ri";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isHobbiesOpen, setIsHobbiesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
  };

  const toggleHobbies = () => {
    setIsHobbiesOpen(!isHobbiesOpen);
  };

  return (
    <div className="w-full h-20 bg-black">
      <header className="flex items-center justify-between p-2.5 bg-white shadow-md flex-wrap">
        <div className="flex items-center justify-center h-16 md:w-32 relative lg:w-[20rem]">
          <img className="w-full h-full object-contain" src="./images/Logo.png" alt="HobbyCue Logo" />
        </div>

        <div className="flex">
          <form className="relative" role="search">
            <input
              className="w-48 sm:w-72 h-10 p-2.5 border border-gray-300 rounded-lg shadow-md"
              placeholder="Search..."
              type="text"
            />
            <button type="submit" className="absolute top-0 right-0 bg-purple-500 text-white p-2 rounded-r-lg hover:bg-purple-600">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>

        <button onClick={toggleMenu} className="block lg:hidden p-2.5 text-gray-800">
          {isMenuOpen ? <RiCloseLine className="w-6 h-6" /> : <RiMenu3Fill className="w-6 h-6" />}
        </button>

        <nav className={`flex-col lg:flex-row flex ${isMenuOpen ? 'flex' : 'hidden'} lg:flex items-center lg:space-x-5 lg:mt-0 mt-4`}>
          <div className="relative">
            <button onClick={toggleExplore} className="flex items-center p-2.5 font-bold text-gray-800 border-2 border-transparent rounded-lg hover:border-purple-500">
              <span className="flex items-center space-x-2">
                <img src="./images/Explore.png" alt="Explore" />
                <span>Explore</span>
                <RiArrowDropDownLine className="text-purple-500 w-6 h-6" />
              </span>
            </button>
            {isExploreOpen && (
              <div className="absolute z-10 w-48 mt-1 bg-white border border-purple-500 rounded-b-lg shadow-lg">
                <a href="#" className="block px-3 py-2 text-black hover:bg-purple-500 hover:text-white">Option 1</a>
                <a href="#" className="block px-3 py-2 text-black hover:bg-purple-500 hover:text-white">Option 2</a>
                <a href="#" className="block px-3 py-2 text-black hover:bg-purple-500 hover:text-white">Option 3</a>
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={toggleHobbies} className="flex items-center p-2.5 font-bold text-gray-800 border-2 border-transparent rounded-lg hover:border-purple-500">
              <span className="flex items-center space-x-2">
                <img src="./images/Hobbies.png" alt="Hobbies" />
                <span>Hobbies</span>
                <RiArrowDropDownLine className="text-purple-500 w-6 h-6" />
              </span>
            </button>
            {isHobbiesOpen && (
              <div className="absolute z-10 w-48 mt-1 bg-white border border-purple-500 rounded-b-lg shadow-lg">
                <a href="#" className="block px-3 py-2 text-black hover:bg-purple-500 hover:text-white">Option 1</a>
                <a href="#" className="block px-3 py-2 text-black hover:bg-purple-500 hover:text-white">Option 2</a>
                <a href="#" className="block px-3 py-2 text-black hover:bg-purple-500 hover:text-white">Option 3</a>
              </div>
            )}
          </div>

          <a href="#" className="flex items-center space-x-2">
            <img src="./images/about.png" alt="About" />
          </a>
          <a href="#" className="flex items-center space-x-2">
            <img src="./images/notify.png" alt="Notifications" />
          </a>
          <a href="#" className="flex items-center space-x-2">
            <img src="./images/cart.png" alt="Cart" />
          </a>
          <button className="px-4 py-2 text-purple-500 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white">
            Sign in
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Header;
