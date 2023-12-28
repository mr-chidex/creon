import { links } from "@/app/utils";
import Link from "next/link";
import React from "react";
import { CloseIcon } from "../Icons/CloseIcon";

interface Props {
  toggle: () => void;
  open: Boolean;
}

export const SideBar = ({ toggle, open }: Props) => {
  return (
    <div>
      {open && (
        <div
          onClick={toggle}
          className="bg-dark-rgba fixed top-0 left-0 w-screen h-screen z-10"
        ></div>
      )}

      <aside
        className={`
    w-fit
  bg-black
  h-screen 
  z-30 
  fixed 
  top-0 
  transition-[width]
  duration-500
  ease-in-out
  right-0
  px-12 py-8
  `}
      >
        <nav>
          <div className="flex items-center gap-8 justify-between">
            <button className="border-2 border-white px-8 py-1 rounded-[0.375rem]">
              Connect
            </button>

            <button onClick={toggle}>
              <CloseIcon />
            </button>
          </div>

          <ul className="grid gap-y-12 my-12">
            {links.map((link, idx) => (
              <li key={idx} className="flex ">
                <Link href="/">{link.title}</Link>
                {link.badge && (
                  <span
                    className="uppercase 
                  text-[0.625rem] bg-black
                 text-primary-100 p-1 text-center rounded-2xl
                  relative top-0
                 "
                  >
                    {link.badge}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};
