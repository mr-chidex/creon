import React from "react";
import { DiscordIcon, TelegramIcon, TwitterIcon } from "./Icons";
import { NiftableIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer className="flex items-center">
      <div className="flex items-center">
        <p>© Creon 2023. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <TelegramIcon />
          <DiscordIcon />
          <TwitterIcon />
        </div>
      </div>
      <div className="flex items-center">
        <span>Powered by</span> <NiftableIcon />
      </div>
    </footer>
  );
};
