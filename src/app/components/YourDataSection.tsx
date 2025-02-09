import Image from "next/image";
import TextElement from "./ui/text-element";
import yourData from "~/public/images/your-data.png";
import Button from "./ui/button";
import { ArrowRight } from "lucide-react";
const YourDataSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row px-8 w-full my-10 md:my-36 items-center gap-8">
      <div className="flex flex-col basis-1/2 gap-6 text-center lg:text-left items-center lg:items-start ">
        <TextElement firstText="100%" secondText="Your Data" />
        <p>
          The app is open source and your notes are saved to an open format, so
          you&apos;ll always have access to them. Uses End-To-End Encryption
          (E2EE) to secure your notes and ensure no-one but yourself can access
          them.
        </p>
        <Button
          title="Read More"
          className="mt-16 bg-light-blue w-44 h-16 text-white"
        >
          <ArrowRight size={24} />
        </Button>
      </div>
      <div className="basis-1/2">
        <Image src={yourData} alt="" />
      </div>
    </section>
  );
};

export default YourDataSection;
