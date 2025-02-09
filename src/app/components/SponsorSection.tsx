import Image from "next/image";
import TextElement from "./ui/text-element";
import Apple from "~/public/images/Apple.png";
import Google from "~/public/images/Google.png";
import Microsoft from "~/public/images/Microsoft.png";
import Slack from "~/public/images/Slack.png";
const SponsorSection = () => {
  return (
    <section className="flex flex-col items-center px-8 my-36">
      <TextElement firstText="Our" secondText="sponsors" />
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-2 mt-24 w-full">
        <Image src={Apple} alt="Apple Logo" quality={100} />
        <Image src={Microsoft} alt="Microsoft Logo" quality={100} />
        <Image src={Slack} alt="Slack Logo" quality={100} />
        <Image src={Google} alt="Google Logo" quality={100} />
      </div>
    </section>
  );
};

export default SponsorSection;
