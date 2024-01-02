"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const PassingThrough = () => {
  return (
    <section className="my-8  px-8 md:px-16">
      <motion.h2
        initial={{ opacity: 0, x: "-5%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="text-4xl md:text-5xl uppercase font-semibold mb-8"
      >
        Profiting Through
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, x: "-15%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="gradient bg-clip-text text-transparent uppercase text-xl md:text-3xl font-bold md:ml-16"
      >
        AI Innovation & Decentralization
      </motion.h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: "-10%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 relative"
        >
          <Image
            src="/assets/images/profiting.png"
            width={300}
            height={400}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            alt="passingthrough"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "15%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-8"
        >
          <h3 className="font-bold text-xl">
            The dynamic community driven business model of the future.
          </h3>
          <p>
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PassingThrough;
