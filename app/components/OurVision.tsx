import Image from "next/image";
import React from "react";
import {
  ProfitabilityIcon,
  DecentralisedIcon,
  InfinityIcon,
  LaunchIcon,
} from "./Icons";

const OurVision = () => {
  return (
    <section className="my-8 grid grid-cols-2 px-16 py-8 gap-8 ">
      <div className="grid gap-8">
        <h2 className="text-3xl">
          Our vision is to support the innovation of AI blockchain projects
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
        <div className="flex gap-8 items-center">
          <ProfitabilityIcon />
          <p>Profitability and Growth</p>
        </div>

        <div className="flex gap-8 items-center">
          <DecentralisedIcon />
          <p>Transparent & Fair Decentralized Earnings</p>
        </div>

        <div className="flex gap-8 items-center">
          <LaunchIcon />
          <p>Launching the future</p>
        </div>

        <div className="flex gap-8">
          <div>
            <InfinityIcon />
          </div>
          <div>
            <p>Limitless Possibilities of AI & Crypto</p>

            <p>
              The possibilities offered by the integration of AI and
              cryptocurrencies are limitless, and we&apos;re just beginning to
              explore them. As pioneers, our journey into uncharted territory is
              fraught with challenges, but the rewards promise to be equally
              extraordinary. Creon isn’t just about profiting from technological
              innovation; it&apos;s about being part of the process that brings
              these innovations to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
