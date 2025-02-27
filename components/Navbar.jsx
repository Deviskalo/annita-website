"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import {
  Home,
  ShoppingCart,
  Users,
  Settings,
  Info,
  Mail,
  FileText,
  HelpCircle,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    // Apply the theme class to the body
    document.body.classList.toggle("dark", isDarkMode);
    // Save the theme preference to local storage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <nav className="bg-vibrant-orange p-4 shadow-md w-full z-20 fixed top-0 right-0 left-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Annita Logo"
            className="mr-2"
            width={50}
            height={50}
          />
          <h1 className="text-white text-xl font-bold">Annita</h1>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="text-white hover:text-vibrant-yellow flex items-center text-sm"
          >
            <Home className="mr-2" /> Home
          </Link>
          <Dropdown>Explore</Dropdown>
          <Link
            href="/thrive-toolkit"
            className="text-white hover:text-vibrant-yellow flex items-center text-sm"
          >
            <Settings className="mr-2" /> Thrive Toolkit
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-vibrant-yellow flex items-center text-sm"
          >
            <Info className="mr-2" /> About Us
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-vibrant-yellow flex items-center text-sm"
          >
            <Mail className="mr-2" /> Contact Us
          </Link>
          <Link
            href="/blog"
            className="text-white hover:text-vibrant-yellow flex items-center text-sm"
          >
            <FileText className="mr-2" /> Blog
          </Link>
          <Link
            href="/faq"
            className="text-white hover:text-vibrant-yellow flex items-center text-sm"
          >
            <HelpCircle className="mr-2" /> FAQ
          </Link>
        </div>
        <div className="flex items-center">
          <Button
            onClick={toggleTheme}
            className="text-white ml-4 dark:bg-black"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </Button>
          <div className="md:hidden ml-2">
            <button onClick={toggleMenu} className="text-white text-2xl p-2">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-vibrant-orange p-4 z-10">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                href="/"
                className="text-white hover:text-vibrant-yellow flex items-center text-sm"
              >
                <Home className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Dropdown>Explore</Dropdown>
            </li>
            <li>
              <Link
                href="/thrive-toolkit"
                className="text-white hover:text-vibrant-yellow flex items-center text-sm"
              >
                <Settings className="mr-2" /> Thrive Toolkit
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white hover:text-vibrant-yellow flex items-center text-sm"
              >
                <Info className="mr-2" /> About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white hover:text-vibrant-yellow flex items-center text-sm"
              >
                <Mail className="mr-2" /> Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-white hover:text-vibrant-yellow flex items-center text-sm"
              >
                <FileText className="mr-2" /> Blog
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-white hover:text-vibrant-yellow flex items-center text-sm"
              >
                <HelpCircle className="mr-2" /> FAQ
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
