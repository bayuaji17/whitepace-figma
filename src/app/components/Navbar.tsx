"use client";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import brandLogo from "~/public/images/Logo-whitepace.png";
import { useEffect, useState } from "react";
import SideBarNav from "./SideBarNav";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdownMobile, setActiveDropdownMobile] = useState<
    string | null
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: {
    title: string;
    url?: string | null;
    hasDropdown: boolean;
    dropdownItems?: { title: string; url: string }[];
  }[] = [
    {
      title: "Products",
      url: null,
      hasDropdown: true,
      dropdownItems: [
        { title: "Feature 1", url: "/feature1" },
        { title: "Feature 2", url: "/feature2" },
        { title: "Feature 3", url: "/feature3" },
      ],
    },
    {
      title: "Solutions",
      url: null,
      hasDropdown: true,
      dropdownItems: [
        { title: "Solution 1", url: "/solution1" },
        { title: "Solution 2", url: "/solution2" },
      ],
    },
    {
      title: "Resources",
      url: null,
      hasDropdown: true,
      dropdownItems: [
        { title: "Documentation", url: "/docs" },
        { title: "Blog", url: "/blog" },
        { title: "Support", url: "/support" },
      ],
    },
    {
      title: "Pricing",
      url: "/pricing",
      hasDropdown: false,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-dark-blue ${
        isScrolled
          ? "bg-dark-blue/80 backdrop-blur-lg shadow-lg"
          : "bg-dark-blue"
      }`}
    >
      <nav className="mx-auto h-[92px] flex items-center justify-between px-8">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src={brandLogo}
            alt="Whitespace logo"
            priority
            className="h-auto w-[191px]"
          />
        </Link>
        <div className="flex items-center gap-12">
          {/* Desktop Nav version */}
          <ul className="hidden xl:flex gap-8 text-lg font-inter">
            {navLinks.map((nav) => (
              <li
                key={nav.title}
                className="relative"
                onMouseEnter={() =>
                  nav.hasDropdown && setActiveDropdown(nav.title)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {nav.url ? (
                  <Link
                    href={nav.url}
                    className="text-white flex items-center justify-center gap-1 group transition-colors hover:text-light-blue font-bold"
                  >
                    {nav.title}
                    {nav.hasDropdown && (
                      <ChevronDown
                        className={`w-4 transition-transform duration-300 ${
                          activeDropdown === nav.title ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                ) : (
                  <span className="text-white flex items-center justify-center gap-1 group transition-colors hover:text-light-blue font-bold cursor-pointer">
                    {nav.title}
                    {nav.hasDropdown && (
                      <ChevronDown
                        className={`w-4 transition-transform duration-300 ${
                          activeDropdown === nav.title ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </span>
                )}

                {nav.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl transition-all duration-300 ${
                      activeDropdown === nav.title
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="p-2">
                      {nav.dropdownItems?.map((item) => (
                        <Link
                          key={item.title}
                          href={item.url}
                          className="block px-4 py-3 text-dark-800 hover:bg-gray-100 rounded-md transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="hidden md:flex gap-6 font-inter font-medium">
            <button className="h-[60px] w-32 rounded-lg bg-secondary-yellow text-dark-blue hover:bg-opacity-90 transition-all">
              Login
            </button>
            <button className="h-[60px] w-56 rounded-lg bg-light-blue text-white hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
              Try Whitepace Free <ArrowRight className="w-5" />
            </button>
          </div>
          {/* Mobile Navigation Button */}
          <button
            className="xl:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-10 h-10" />
          </button>
          {/* Mobile Navigation Version */}
          <SideBarNav
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            navLinks={navLinks}
            activeDropdownMobile={activeDropdownMobile}
            setActiveDropdownMobile={setActiveDropdownMobile}
          />
          {/* Mobile Navigation Version */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
