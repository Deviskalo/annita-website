"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <div className="dark:text-white text-gray-600 hover:text-vibrant-yellow flex items-center gap-1 cursor-pointer">
          {children}
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-vibrant-orange">
        <DropdownMenuItem>
          <Link
            href="/marketplace"
            className="text-white hover:text-vibrant-yellow"
          >
            Marketplace
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/community"
            className="text-white hover:text-vibrant-yellow"
          >
            Community Hub
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
