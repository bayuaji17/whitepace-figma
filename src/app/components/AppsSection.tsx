import { ArrowRight } from "lucide-react";
import Button from "./ui/button";
import Image from "next/image";
import appsImage from "~/public/apps-section.svg";
import appsElement from "~/public/apps-element.svg";
const AppsSection = () => {
  return (
    <section className="-z-10 bg-dark-blue">
      <div className="relative flex flex-col-reverse items-center lg:flex-row-reverse lg:gap-2 px-8 py-16 sm:py-36 z-0">
        <Image
          src={appsElement}
          alt=""
          className="z-0 absolute inset-0 h-full w-full hidden sm:block"
        />
        <div className="flex flex-col w-full justify-center items-center basis-1/2 text-white z-10 mt-10 lg:items-start">
          <h1 className="text-5xl/tight sm:text-6xl/snug md:text-5xl/tight lg:text-6xl/tight font-bold text-center lg:text-left ">
            Work with Your Favorite Apps Using whitepace
          </h1>
          <p className="mt-6 mb-[3.8rem] text-lg text-center lg:text-left">
            Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.
          </p>
          <Button
            title="Read More"
            className="lg:mt-2 bg-light-blue w-44 h-16 text-white"
          >
            <ArrowRight size={24} />
          </Button>
        </div>
        <div className="basis-1/2 z-10 px-4">
          <Image src={appsImage} alt="" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
