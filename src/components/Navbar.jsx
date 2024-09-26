import { LogOut, Menu, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authUser";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const { user, logout } = useAuthStore();

  return (
    <header className="max-w-6xl mx-auto flex items-center justify-between p-4 flex-wrap p-4 h-20">
      <div className="flex items-center gap-10 z-50">
        <Link to={"/"}>
          <img
            src="/netflix-logo.png"
            alt="netflix logo"
            className="w-32 sm:w-40"
          />{" "}
        </Link>
        {/* desktop Navbar items */}
        <div className="hidden sm:flex gap-2 items-center">
          <Link to={"/"} className="hover:underline">
            Movies
          </Link>
          <Link to={"/tv"} className="hover:underline">
            TV Shows
          </Link>

          <Link to={"/history"} className="hover:underline">
            Search History
          </Link>
        </div>
      </div>
      <div className="flex gap-2  items-center z-50">
        <Link to={"/search"}>
          <Search className="size-6 cursor-pointer" />
        </Link>
        <img
          src={user.image}
          alt="avatar"
          className=" h-8 rounded cursor-pointer"
        />
        <LogOut className="cursor-pointer" onClick={logout} />
        <div className="sm:hidden">
          <Menu className="size-6 cursor-pointer" onClick={toggleMobileMenu} />
        </div>
      </div>
      {/* mobile Navbar items */}
      {isMobileMenuOpen && (
        <div className="w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800">
          <Link
            to={"/"}
            className="block p-2 hover:underline"
            onClick={toggleMobileMenu}
          >
            Movies
          </Link>
          <Link
            to={"/tv"}
            className="block p-2 hover:underline"
            onClick={toggleMobileMenu}
          >
            TV Shows
          </Link>
          <Link
            to={"/history"}
            className="block p-2 hover:underline"
            onClick={toggleMobileMenu}
          >
            Search History
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
