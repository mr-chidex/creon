import Image from "next/image";
import React from "react";

export const ComingSoon = () => {
  const incoming = [
    {
      title: "token",
      subTitle: "The Gateway token to the world of AI",
      content:
        "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
      image: "/assets/images/token.png",
    },
    {
      title: "revenue",
      subTitle: "Driving income and growth through decentralization",
      content:
        "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
      image: "/assets/images/revenue.png",
    },
    {
      title: "launchpad",
      subTitle: "Driving the future of AI Innovation",
      content:
        "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
      image: "/assets/images/launchpad.png",
    },
    // {
    //   title: "income",
    //   subTitle: "Harnessing AI for Profit Generation",
    //   content:
    //     "As an integral part of our project, AI Income offers the opportunity to benefit from a genuine, profit-generating AI-based business. This facet of our initiative leverages the power of selected exclusive AI tools to create a profit stream.",
    //   image: "/assets/images/income.png",
    // },
  ];

  return (
    <section className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 my-8 px-8 md:px-16 ">
      {incoming.map((item, idx) => (
        <div key={idx} className="bg-dark-200 py-8 flex flex-col gap-4">
          <h2 className="font-bold uppercase text-3xl md:text-4xl px-8">
            {item.title}
          </h2>

          <h3 className="px-8 gradient font-semibold text-xl h-20">
            {item.subTitle}
          </h3>

          <Image
            src={item.image}
            width={300}
            height={400}
            sizes="100vw"
            style={{
              width: "100%",
              // height: "auto",
            }}
            alt={item.title}
          />

          <p className="px-8">{item.content}</p>
        </div>
      ))}
    </section>
  );
};
