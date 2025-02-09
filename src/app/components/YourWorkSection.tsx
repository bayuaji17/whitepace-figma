import Image from "next/image";
import React from "react";
import elementWork from "~/public/element-work.svg";
import TextElement from "./ui/text-element";
import Button from "./ui/button";
import { ArrowRight } from "lucide-react";
const YourWorkSection = () => {
  return (
    <div className="flex flex-col bg-dark-blue relative mt-52">
      <Image src={elementWork} alt="" className="absolute -left-96 top-0 z-0" />
      <div className="px-8 py-20 sm:py-28">
        <div className="flex flex-col z-10 justify-center items-center gap-4">
          <TextElement
            firstText="Your work, everywhere"
            secondText="you are"
            variant="blue"
            className="text-white text-center justify-center items-center lg:flex-nowrap flex sm:flex-col xl:flex-row md:text-6xl lg:text-7xl"
          />
          <p className="text-center text-white mt-12">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
          <Button
            title="Try Taskey"
            className="mt-16 bg-light-blue w-44 h-16 text-white"
          >
            <ArrowRight size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default YourWorkSection;
