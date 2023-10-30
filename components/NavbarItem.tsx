import Link from "next/link";
import React from "react";

interface NavbarItemProps {
  label: string;
  active?: boolean;
  url: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active, url }) => {
  return (
    <div
      className={
        active
          ? "text-white cursor-default"
          : "text-gray-200 hover:text-gray-300 cursor-pointer transition"
      }
    >
      <Link href={url}>{label}</Link>
    </div>
  );
};

export default NavbarItem;
