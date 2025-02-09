import { ArrowRight } from "lucide-react";
import Button from "./ui/button";
import Image from "next/image";
import appleIcon from "~/public/apple-icon.svg";
import microsoftIcon from "~/public/microsoft-icon.svg";
import androidIcon from "~/public/android-icon.svg";
const FreeTrialSection = () => {
  return (
    <section className=" bg-dark-blue pt-36 pb-8 px-8 w-full h-full ">
      <div className="flex flex-col max-w-xl justify-center md:items-center mx-auto text-left md:text-center">
        <h1 className="text-white text-5xl xl:text-7xl font-bold">
          Try Whitepace today
        </h1>
        <p className="text-white text-2xl font-normal mt-6">
          Get started for free.
          <br /> Add your whole team as your needs grow.
        </p>

        <Button
          title="Try Taskey free"
          className="my-10 lg:mt-16 bg-light-blue w-44 h-16 text-white"
        >
          <ArrowRight size={24} />
        </Button>
        <p className="text-white text-2xl font-normal">
          On a big team? Contact sales
        </p>
        <div className="flex w-full md:justify-center gap-10 mt-10">
          <Image src={appleIcon} alt="" width={50} height={50} />
          <Image src={microsoftIcon} alt="" width={50} height={50} />
          <Image src={androidIcon} alt="" width={50} height={50} />
        </div>
      </div>
    </section>
  );
};

export default FreeTrialSection;
