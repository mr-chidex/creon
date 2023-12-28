import Image from "next/image";
import React from "react";
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
        <h2 className="text-3xl leading-10">
          Our vision is to support the innovation of AI blockchain projects
          &nbsp;
          <span className="gradient">
            while prioritizing communities and democratizing profits
          </span>
        </h2>

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
          <div key={idx} className="flex gap-8 items-center">
            <> {vision.icon}</>
            <p className="font-semibold">{vision.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurVision;
