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
    <nav className="bg-red-400 w-full">
      <Logo />

      <div>
        <ul>
          {links.map((link, idx) => (
            <li key={idx}>
              <Link href="/">{link.title}</Link>
            </li>
          ))}
        </ul>

        <button>Connect</button>
      </div>
    </nav>
  );
};

export default NavBar;
