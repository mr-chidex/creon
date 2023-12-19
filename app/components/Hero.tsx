import React from "react";

export const Hero = () => {
  return (
    <section className="h-screen w-screen bg-gradient-to-r from-[#0000003f] to-[#0000003f]">
      <div className="relative">
        <video autoPlay loop muted width="auto" height="100">
          <source src="/assets/hero.mov" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute bottom-16 bg-transparent grid gap-8 left-20">
          <h1 className="hidden xl:block uppercase font-normal md:text-2xl xl:text-5xl  text-white leading-normal">
            The world&apos;s first <br />
            platform for Tokenizing <br />
            AI blockchain projects
          </h1>

          <h1
            className="xl:hidden font-normal md:text-2xl xl:text-5xl 
           text-white leading-normal"
          >
            Empowering AI-Crypto Innovations and Integrating AI Tools into
            crypto.
          </h1>

          <h3
            className="
            linear-gradient
        inline-block text-transparent bg-clip-text h-full 
        border-t border-b border-primary-200 w-fit py-3 text-md
        "
          >
            Hold the Creon Pass NFT and earn passive income from AI Tools
          </h3>
        </div>
      </div>
    </section>
  );
};
