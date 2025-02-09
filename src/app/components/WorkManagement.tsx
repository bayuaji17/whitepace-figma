import Image from "next/image";
import productManagement from "~/public/element-work.svg";
import workManagement from "~/public/images/Group-81600.png";
import Button from "./ui/button";
import { ArrowRight } from "lucide-react";
import CircleSVGAnimation from "./ui/circleSVGAnimation";
import TextElement from "./ui/text-element";

const WorkManagement = () => {
  return (
    <div className="pt-5 flex flex-col h-full w-full relative">
      <Image
        src={productManagement}
        alt="hero"
        quality={100}
        priority
        className="-z-10 absolute -left-80 top-2"
      />
      <div className="flex flex-col lg:flex-row w-full px-8 md:flex-start">
        {/* Left */}
        <div className="flex flex-col lg:w-1/2 z-0 mt-28 items-center lg:items-start text-center lg:text-left">
          <TextElement firstText="Project" secondText="Management" />
          <p className="mt-10">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <Button
            title="Get Started"
            className="mt-8 bg-light-blue w-44 h-16 text-white"
          >
            <ArrowRight className="w-5" />
          </Button>
        </div>

        {/* Left */}
        <div className="w-full lg:w-1/2 z-0 flex justify-center lg:justify-end md:items-start">
          <Image src={workManagement} alt="" width={600} />
        </div>
      </div>
      {/* Kanan */}
      <div className="flex flex-col-reverse lg:flex-row lg:gap-2 px-8 mt-24">
        {/* kiri */}
        <div className="flex flex-col lg:w-1/2 ">
          <CircleSVGAnimation className="w-full aspect-square" />
        </div>
        {/* Kanan */}
        <div className="flex flex-col lg:w-1/2">
          <div className="flex flex-col z-0 md:mb-20 lg:mb-0 lg:mt-28 justify-center items-center lg:items-start">
            <TextElement firstText="Work" secondText="Together" />
            <p className="mt-10 text-center lg:text-start">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            <Button
              title="Try it now"
              className="mt-8 bg-light-blue w-52 h-16 text-white"
            >
              <ArrowRight className="w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkManagement;
