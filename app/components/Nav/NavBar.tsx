"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Logo } from "..";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { MenuIcon } from "../Icons/MenuIcon";
import { SideBar } from "./SideBar";

export const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, []);

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
    <header
      className={`bg-transparent px-6 py-4  dark:text-slate-100 text-slate-800  fixed top-0 w-full z-20 ${
        showNav ? "backdrop-blur-xl shadow-md" : ""
      }`}
    >
      <Transition
        as={Fragment}
        show={open}
        enter="transform transition duration-[200ms]"
        enterFrom="translate-x-full"
        enterTo="-translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="-translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className="fixed z-30 top-0 left-0 w-full h-screen overflow-y-auto bg-white-200">
          <SideBar toggle={toggleMenu} open={open} />
        </div>
      </Transition>

      <nav
        className="
    w-full
    flex justify-between
    items-center  text-white
    "
      >
        <Logo />

        <div className="flex items-center gap-4 font-medium font">
          <ul className="hidden lg:flex items-center gap-6">
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

          <button className="border-2 hidden sm:block border-white px-8 py-2 rounded-[0.375rem]">
            Connect
          </button>

          <button
            onClick={toggleMenu}
            className={`
              lg:hidden
              bg-transparent
              border-none
              cursor-pointer
              ease-in-out
              ml-4
              `}
          >
            <MenuIcon />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
