import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router";
import { FaWpforms } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/MS-Logo.png";
function NavItem({ title, dropdownItems, isAdmission }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {isAdmission ? (
        <Link
          to={title.toLowerCase()}
          className="px-4 py-2 cta-text-color font-bold hover:primary-text-color/80 flex items-center cta-color rounded-lg"
        >
          <FaWpforms className="h-4 w-4 mr-2" />
          {title}
        </Link>
      ) : dropdownItems ? (
        <Link className="px-4 lg:px-1 xl:px-4 py-2 primary-text-color font-bold hover:primary-text-color/80 flex items-center">
          {title}
          {dropdownItems && <RiArrowDropDownLine className="h-6 w-6" />}
        </Link>
      ) : (
        <Link
          to={title.toLowerCase()}
          className="px-4 lg:px-1 xl:px-4 py-2 primary-text-color font-bold hover:primary-text-color/80 flex items-center"
        >
          {title}
          {/* {dropdownItems && <RiArrowDropDownLine className="h-6 w-6" />} */}
        </Link>
      )}

      {dropdownItems && (
        <div
          className={`absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="py-1" role="menu">
            {dropdownItems.map((item, index) => (
              <Link
                key={index}
                to={item.toLowerCase().split(" ").join("-")}
                className="block px-4 py-2 text-sm text-gray-700 font-semibold hover:bg-gray-100 hover:text-[#234297]"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileItem, setActiveMobileItem] = useState(null);

  const navItems = [
    {
      title: "About Us",
      dropdownItems: ["Overview", "Governing Body", "Chairman", "Faculty"],
    },
    { title: "Facilities" },
    { title: "Programme" },
    {
      title: "Event",
      dropdownItems: [
        "Science Event",
        "Independence Day",
        "Cultural Event",
        "Other School Event",
      ],
    },
    { title: "Award" },
    { title: "Hostel" },
    { title: "Admission", isAdmission: true },
  ];

  return (
    <nav className="bg-color shadow-lg shadow-black/50 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 xl:px-8">
        <div className="flex items-center justify-between lg:justify-around xl:justify-between h-16">
          <div className="flex-shrink-0 primary-text-color font-bold">
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                className="w-[183px] md:w-[200px] xl:w-[195px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavItem
                key={item.title}
                title={item.title}
                dropdownItems={item.dropdownItems}
                isAdmission={item.isAdmission}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.title} className="border-b last:border-0">
                  {item.isAdmission ? (
                    <Link
                      to={item.title.toLowerCase()}
                      className="w-full flex items-center px-3 py-3 cta-text-color font-semibold cta-color hover:cta-color/90"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <FaWpforms className="h-4 w-4 mr-2" />
                      {item.title}
                    </Link>
                  ) : item.dropdownItems ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveMobileItem(
                            activeMobileItem === item.title ? null : item.title
                          )
                        }
                        className="w-full flex justify-between items-center px-3 py-3 text-gray-700 hover:bg-gray-100"
                      >
                        <span className="font-semibold">{item.title}</span>
                        {activeMobileItem === item.title ? (
                          <RiArrowDropUpLine className="h-5 w-5" />
                        ) : (
                          <RiArrowDropDownLine className="h-5 w-5" />
                        )}
                      </button>
                      {activeMobileItem === item.title && (
                        <div className="ml-4">
                          {item.dropdownItems.map((subItem) => (
                            <Link
                              key={subItem}
                              to={subItem.toLowerCase().split(" ").join("-")}
                              className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.title.toLowerCase()}
                      className="block px-3 py-3 font-semibold text-gray-700 hover:bg-gray-100 hover:text-[#234297]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
