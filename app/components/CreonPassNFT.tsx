"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const CreonPassNFT = () => {
  const lists = [
    "Pre-launch investment opportunities for upcoming AI projects",
    "Free and early access to Creon built AI projects",
    "Higher allocation limits on the Creon AI Launchpad",
    "Revenue share distribution from Creon built AI projects",
  ];

  return (
    <section className="my-8 grid lg:grid-cols-2 px-8 md:px-16 py-8 gap-8 items-center">
      <div className="grid gap-8">
        <h2 className="text-white uppercase font-semibold text-4xl md:text-5xl">
          creon pass nft
        </h2>

        <p
          className="linear-gradient
        inline-block text-transparent bg-clip-text h-full"
        >
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools
        </p>

        <ul className="grid gap-4">
          {lists.map((list, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: `${idx * 10 + 50}%` }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: idx / 10 + 0.7 }}
              className="p-4 border border-dark-100 rounded-md"
            >
              {list}
            </motion.li>
          ))}
        </ul>

        <button
          className=" bg-gradient-to-r from-[#3D8BFF]
          to-[#AB23FF] md:w-2/3 rounded-md
          px-16 py-4 font-bold
           text-center"
        >
          Buy Creon Pass
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: "30%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=""
      >
        <Image
          src="/assets/images/creonpassnft.png"
          width={300}
          height={400}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          alt="creonpassnft"
        />
      </motion.div>
    </section>
  );
};

export default CreonPassNFT;
