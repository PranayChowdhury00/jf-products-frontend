import { useState } from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "#shop", label: "Shop" },
    { to: "#blogs", label: "Blogs" },
    { to: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "text-gray-500" : "hover:text-gray-700"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
  <Link
    to="/login"
    className="hidden md:flex items-center gap-1 text-lg font-medium"
  >
    Login <CiUser />
  </Link>
  <CiSearch className="text-2xl cursor-pointer hidden md:block" />

  {/* Cart Icon with badge */}
  <div className="relative hidden md:block">
    <FiShoppingCart className="text-2xl cursor-pointer" />
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      0
    </span>
  </div>

  {/* Hamburger (Mobile) */}
  <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
    {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
  </button>
</div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50 px-4 pb-4">
    <ul className="flex flex-col gap-4 text-base font-medium">
      {navLinks.map((link) => (
        <li key={link.label}>
          <NavLink
            to={link.to}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-gray-500" : "hover:text-gray-700"
            }
          >
            {link.label}
          </NavLink>
        </li>
      ))}
      <li>
        <Link
          to="/login"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-1"
        >
          Login <CiUser />
        </Link>
      </li>
      <li>
        <CiSearch className="text-xl cursor-pointer" />
      </li>
      <li className="relative">
        <FiShoppingCart className="text-xl cursor-pointer" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          0
        </span>
      </li>
    </ul>
  </div>
)}

    </nav>
  );
};

export default Navbar;
