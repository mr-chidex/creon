import React from "react";
import { DiscordIcon, TelegramIcon, TwitterIcon } from "./Icons";
import { NiftableIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer className="flex md:items-center justify-between my-8 px-16 py-4 flex-col md:flex-row gap-8">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 justify-between">
        <p>© Creon 2023. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <TelegramIcon />
          <DiscordIcon />
          <TwitterIcon />
        </div>
      </div>
      <div className="flex items-center self-center">
        <span>Powered by</span> &nbsp;&nbsp; <NiftableIcon />
      </div>
    </footer>
  );
};
