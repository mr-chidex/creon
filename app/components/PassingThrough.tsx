import Image from "next/image";
import React from "react";

const PassingThrough = () => {
  return (
    <section className="my-8  px-16  gap-8">
      <h2 className="text-5xl uppercase font-semibold mb-8">
        Profiting Through
      </h2>

      <h3 className="gradient bg-clip-text text-transparent text-3xl font-bold ml-16">
        AI Innovation & Decentralization
      </h3>

      <div className="grid grid-cols-3 gap-8 my-8 items-center">
        <div className="col-span-2 relative">
          <Image
            src="/assets/images/passingthrough.png"
            width={300}
            height={400}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            alt="passingthrough"
          />

          <div className="w-full h-full absolute top-0 left-0 z-10 passing-through"></div>
        </div>

        <div className="p-8 flex flex-col gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default PassingThrough;
