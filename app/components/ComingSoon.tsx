import Image from "next/image";
import React from "react";

export const ComingSoon = () => {
  const incoming = [
    {
      title: "token",
      subTitle: "The Gateway token to the world of AI",
      content:
        "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
      image: "/assets/images/",
    },
    {
      title: "revenue",
      subTitle: "Driving income and growth through decentralization",
      content:
        "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
      image: "/assets/images/",
    },
    {
      title: "launchpad",
      subTitle: "Driving the future of AI Innovation",
      content:
        "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
      image: "/assets/images/",
    },
  ];

  return (
    <section className="grid grid-cols-3 gap-8">
      {incoming.map((item, idx) => (
        <div key={idx}>
          <h2>{item.title}</h2>

          <h3>{item.subTitle}</h3>

          <Image
            src="/assets/images/vision.png"
            width={300}
            height={400}
            // sizes="100vw"
            // style={{
            //   width: "100%",
            //   height: "auto",
            // }}
            alt={item.title}
          />

          <p>{item.content}</p>
        </div>
      ))}
    </section>
  );
};
