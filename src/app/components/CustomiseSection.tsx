import { ArrowRight } from "lucide-react";
import Button from "./ui/button";
import Image from "next/image";
import extensionImage from "~/public/images/Extension-image.png";
import customiseImage from "~/public/images/customise-image.png";
import TextElement from "./ui/text-element";
const CustomiseSection = () => {
  return (
    <section className="flex flex-col w-full sm:mt-10 lg:mt-28 ">
      <div className="lg:h-[47.5rem] py-24 bg-dark-blue  flex flex-col lg:flex-row justify-center xl:gap-20 px-8">
        <div className="flex lg:flex-1 flex-col text-white items-center lg:items-start">
          <TextElement firstText="Use as" secondText="Extension" />
          <p className="mt-10 lg:mt-6 text-center lg:text-left">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
          <Button
            title="Let's Go"
            className="mt-16 bg-light-blue w-44 h-16 text-white"
          >
            <ArrowRight size={24} />
          </Button>
        </div>
        <div className="flex-1 ">
          <div className="aspect-square w-full ">
            <Image
              src={extensionImage}
              alt="test"
              className="w-full h-full object-contain lg:object-top"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:h-[42.5rem] py-36 gap-4 w-full justify-between px-8 ">
        {/* Left */}
        <div className="w-full aspect-square basis-1/2">
          <Image
            src={customiseImage}
            alt=""
            className="object-contain w-full h-full lg:scale-110 xl:scale-125"
          />
        </div>
        {/* Left */}
        {/* Right */}
        <div className="basis-1/2 flex flex-col items-center lg:items-start">
          <TextElement
            firstText="Customise it to"
            secondText="your needs"
            className="lg:text-6xl xl:text-7xl"
          />
          <p className="w-full md:w-10/12 mt-10 text-center md:text-left">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
          <Button
            title="Let's Go"
            className="mt-16 bg-light-blue w-44 h-16 text-white"
          >
            <ArrowRight size={24} />
          </Button>
        </div>
        {/* Right */}
      </div>
    </section>
  );
};

export default CustomiseSection;
