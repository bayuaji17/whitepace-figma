import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import elementHero from "~/public/element-hero.svg";
import productDevelopment from "~/public/images/Group-81500.png";
import Button from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-dark-blue relative sm:h-[58rem] md:h-[68rem] lg:h-[45rem] ">
      {/* Background Image */}
      <Image
        src={elementHero}
        alt="Background element"
        fill
        style={{
          objectFit: "contain",
          objectPosition: "center",
        }}
        priority
        className="z-0"
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col ">
        <Navbar />
        <div className="flex flex-col lg:flex-row px-4 sm:px-8 font-inter">
          <div className="flex flex-col lg:w-1/2 mt-36 lg:mt-56 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center lg:text-left">
              Get More Done with Whitepace
            </h1>
            <p className="text-xl lg:max-w-2xl mb-16 text-center lg:text-left">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
            <Button
              title="Try Whitepace Free"
              className="mx-auto lg:mx-0 w-56 bg-light-blue h-16 p-2"
            >
              <ArrowRight className="w-5" />
            </Button>
          </div>
          <div className="lg:w-1/2 lg:mt-28 lg:mr-10 flex flex-col lg:justify-end lg:items-end ">
            <Image
              src={productDevelopment}
              alt="hero"
              width={800}
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
