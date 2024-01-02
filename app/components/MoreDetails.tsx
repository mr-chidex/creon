"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const MoreDetails = () => {
  const features = [
    {
      title: "AI Prospects, Market Size, and Development Pace",
      content:
        "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
      image: "/assets/images/marketsize.png",
    },
    {
      title: "AI Tools and Market",
      content:
        "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
      image: "/assets/images/tools.png",
    },
    {
      title: "AI, Crypto, and NFT Market",
      content:
        "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
      image: "/assets/images/crypto.png",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: "10%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="my-16 px-8 md:px-16 grid gap-16 "
    >
      {features.map((feature, idx) => (
        <div key={idx} className="grid lg:grid-cols-12 gap-4 items-center">
          <div className="flex flex-col gap-4 lg:col-span-8">
            <h2 className="text-3xl md:text-4xl font-semibold">
              {feature.title}
            </h2>
            <p>{feature.content}</p>
          </div>

          <div className="lg:col-span-4">
            <Image
              src={feature.image}
              width={800}
              height={700}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              alt={feature.title}
            />
          </div>
        </div>
      ))}
    </motion.section>
  );
};
