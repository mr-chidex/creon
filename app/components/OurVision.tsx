"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  ProfitabilityIcon,
  DecentralisedIcon,
  InfinityIcon,
  LaunchIcon,
} from "./Icons";

const OurVision = () => {
  const visions = [
    {
      icon: <ProfitabilityIcon />,
      title: "Profitability and Growth",
    },
    {
      icon: <DecentralisedIcon />,
      title: "Transparent & Fair Decentralized Earnings",
    },
    {
      icon: <LaunchIcon />,
      title: "Launching the future",
    },
    {
      icon: <InfinityIcon />,
      title: "Limitless Possibilities of AI & Crypto",
    },
  ];

  return (
    <section className="my-16 grid lg:grid-cols-2 px-8 md:px-16 py-8 gap-8">
      <div className="grid gap-8">
        <motion.h2
          initial={{ opacity: 0, y: "30%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl leading-10"
        >
          Our vision is to support the innovation of AI blockchain projects
          &nbsp;
          <span className="gradient">
            while prioritizing communities and democratizing profits
          </span>
        </motion.h2>

        <Image
          src="/assets/images/vision.png"
          width={300}
          height={400}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          alt="vision"
        />
      </div>

      <div className="grid gap-8">
        {visions.map((vision, idx) => (
          <motion.div
            initial={{ opacity: 0, x: `${idx * 10 + 20}%` }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: idx / 10 + 0.8 }}
            key={idx}
            className="flex gap-8 items-center"
          >
            <> {vision.icon}</>
            <p className="font-semibold">{vision.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurVision;
