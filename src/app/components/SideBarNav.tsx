import { ArrowRight, ChevronDown, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import brandLogo from "~/public/images/Logo-whitepace.png";

interface NavLink {
  title: string;
  url?: string | null;
  hasDropdown?: boolean;
  dropdownItems?: { title: string; url: string }[];
}

interface SideBarNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  navLinks: NavLink[];
  activeDropdownMobile: string | null;
  setActiveDropdownMobile: (activeDropdownMobile: string | null) => void;
}

const SideBarNav = ({
  isMenuOpen,
  setIsMenuOpen,
  navLinks,
  activeDropdownMobile,
  setActiveDropdownMobile,
}: SideBarNavProps) => {
  return (
    <div
      className={`flex flex-col h-screen w-full fixed top-0 left-0 transition-transform duration-500 bg-light-blue font-inter ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header with Logo and Close Button */}
      <div className="flex justify-between items-center p-6 ">
        <Image
          src={brandLogo}
          alt="Brand Logo"
          width={160}
          priority
          className="w-auto h-auto"
        />
        <button onClick={() => setIsMenuOpen(false)}>
          <X className="w-8 h-8 text-white" />
        </button>
      </div>

      {/* Navigation Links */}
      <ul className="px-6 py-4 space-y-6">
        {navLinks.map((nav) => (
          <li key={nav.title} className="border-b border-dark-blue py-1">
            <div className="flex flex-col">
              {nav.url ? (
                <Link
                  href={nav.url}
                  className="text-white font-bold flex items-center justify-between py-3 px-4 hover:bg-dark-blue hover:rounded-lg"
                  onClick={() => {
                    if (!nav.hasDropdown) setIsMenuOpen(false);
                    setActiveDropdownMobile(
                      activeDropdownMobile === nav.title ? null : nav.title
                    );
                  }}
                >
                  {nav.title}
                  {nav.hasDropdown && (
                    <ChevronDown
                      className={`w-5 transition-transform duration-300 ${
                        activeDropdownMobile === nav.title ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
              ) : (
                <span
                  className="text-white font-bold flex items-center justify-between py-3 px-4 hover:bg-dark-blue hover:rounded-lg cursor-pointer"
                  onClick={() => {
                    if (!nav.hasDropdown) setIsMenuOpen(false);
                    setActiveDropdownMobile(
                      activeDropdownMobile === nav.title ? null : nav.title
                    );
                  }}
                >
                  {nav.title}
                  {nav.hasDropdown && (
                    <ChevronDown
                      className={`w-5 transition-transform duration-300 ${
                        activeDropdownMobile === nav.title ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </span>
              )}

              {/* Dropdown Items */}
              {nav.hasDropdown && (
                <div
                  className={`pl-4 overflow-hidden transition-all duration-300 ${
                    activeDropdownMobile === nav.title
                      ? "max-h-96 py-2"
                      : "max-h-0"
                  }`}
                >
                  {nav.dropdownItems?.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className="block py-2 px-4 text-white hover:bg-dark-blue hover:rounded-lg "
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="px-6 py-4 border-t border-gray-700/50">
        <button className="h-12 w-full rounded-lg bg-secondary-yellow text-dark-blue hover:bg-opacity-90 transition-all">
          Login
        </button>
        <button className="h-12 w-full mt-4 rounded-lg bg-dark-blue text-white hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
          Try Whitepace Free
          <ArrowRight className="w-4" />
        </button>
      </div>
    </div>
  );
};

export default SideBarNav;
