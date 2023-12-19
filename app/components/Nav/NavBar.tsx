import React from "react";
import { Logo } from "..";
import Link from "next/link";

export const NavBar = () => {
  const links = [
    {
      title: "Creon Pass",
    },
    {
      title: "Token",
      badge: "soon",
    },
    {
      title: "AI Revenue",
      badge: "soon",
    },
    {
      title: "AI Launchpad",
      badge: "soon",
    },
  ];

  return (
    <nav
      className="bg-gradient-to-r bg-transparent 
    w-full
    flex justify-between
    items-center px-6 py-4 text-white
    fixed top-0 z-10
    "
    >
      <Logo />

      <div className="flex items-center gap-8 font-medium font">
        <ul className="flex items-center gap-10">
          {links.map((link, idx) => (
            <li key={idx} className="flex ">
              <Link href="/">{link.title}</Link>
              {link.badge && (
                <span
                  className="uppercase 
                  text-[0.625rem] bg-black
                 text-primary-100 p-1 px-2 text-center rounded-2xl
                  relative -top-2
                 "
                >
                  {link.badge}
                </span>
              )}
            </li>
          ))}
        </ul>

        <button className="border-2 border-white px-8 py-2 rounded-[0.375rem]">
          Connect
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
