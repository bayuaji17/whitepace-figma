import Image from "next/image";
import logoWhitepace from "~/public/images/Logo-whitepace.png";
import Button from "./ui/button";
import { ArrowRight } from "lucide-react";
import facebookIcon from "~/public/facebook-icon.svg";
import twitterIcon from "~/public/twitter-icon.svg";
import linkedinIcon from "~/public/linkedin-icon.svg";
const FooterSection = () => {
  return (
    <footer className="pt-36 pb-8 px-8 bg-dark-blue w-full flex flex-col items-center">
      <div className="lg:flex w-full gap-4">
        <div className="flex flex-col items-center xl:items-start flex-1">
          <Image src={logoWhitepace} alt="" width={350} className="lg:pr-6" />
          <p className="text-center lg:text-left px-5 lg:px-0 pt-6 text-lg text-white max-w-md lg:max-w-full">
            whitepace was created for the new ways we live and work. We make
            beautyfully designed around the world
          </p>
        </div>
        <div className="flex flex-col mt-20 lg:mt-0 xl:ml-24 flex-initial">
          <ul className="text-white cursor-pointer text-lg text-center lg:text-left">
            <li className="font-bold hover:text-secondary-yellow ">Product</li>
            <li className="hover:text-secondary-yellow py-4">Overview</li>
            <li className="hover:text-secondary-yellow pb-4 ">Pricing</li>
            <li className="hover:text-secondary-yellow">Customer Stories</li>
          </ul>
        </div>
        <div className="flex flex-col my-20 lg:my-0 xl:mx-24 flex-initial">
          <ul className="text-white cursor-pointer text-lg text-center lg:text-left">
            <li className="font-bold hover:text-secondary-yellow">Resources</li>
            <li className="hover:text-secondary-yellow py-4">Blog</li>
            <li className="hover:text-secondary-yellow pb-4">
              Guides &amp; tutorials
            </li>
            <li className="hover:text-secondary-yellow">Help Center</li>
          </ul>
        </div>
        <div className="flex flex-col mb-20 lg:my-0 xl:mr-24 flex-initial ">
          <ul className="text-white cursor-pointer text-lg text-center lg:text-left">
            <li className="font-bold hover:text-secondary-yellow">Company</li>
            <li className="hover:text-secondary-yellow py-4">About us</li>
            <li className="hover:text-secondary-yellow pb-4">Careers</li>
            <li className="hover:text-secondary-yellow">Media Kit</li>
          </ul>
        </div>
        <div className="flex flex-col text-white items-center justify-center lg:justify-start lg:items-start w-full lg:max-w-full text-center lg:text-left flex-1">
          <h1 className="capitalize font-bold text-3xl">Try it Today</h1>
          <p className="text-lg my-6 max-w-72">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <Button
            title="Start today"
            className="bg-light-blue w-44 h-16 text-white"
          >
            <ArrowRight size={24} />
          </Button>
        </div>
      </div>
      <div className="flex flex-col mt-20 lg:hidden">
        <ul className="text-white cursor-pointer text-lg text-center pb-5">
          <li className="hover:text-secondary-yellow ">Terms &amp; Privacy</li>
          <li className="hover:text-secondary-yellow py-4">Security</li>
          <li className="hover:text-secondary-yellow pb-4 ">Status</li>
          <li className="hover:text-secondary-yellow">
            &#169; 2021 Whitepace LLC.
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex gap-4 w-full h-full items-center pt-5 border-t-2 border-[#2E4E73] mt-16 ">
        <div className="flex-none">
          <ul className="flex flex-row justify-center items-center text-white cursor-pointer text-lg text-center gap-4">
            <li className="hover:text-secondary-yellow ">
              Terms &amp; Privacy
            </li>
            <li className="hover:text-secondary-yellow">Security</li>
            <li className="hover:text-secondary-yellow">Status</li>
            <li className="hover:text-secondary-yellow">
              &#169; 2021 Whitepace LLC.
            </li>
          </ul>
        </div>
        <div className="flex gap-2 ml-auto">
          <Image src={facebookIcon} alt="" width={20} />
          <Image src={twitterIcon} alt="" width={30} />
          <Image src={linkedinIcon} alt="" width={30} />
        </div>
      </div>
      <div className="flex gap-4 w-full h-full justify-center items-center pt-5 border-t-2 border-[#2E4E73] mt-16 lg:hidden">
        <Image src={facebookIcon} alt="" width={20} />
        <Image src={twitterIcon} alt="" width={30} />
        <Image src={linkedinIcon} alt="" width={30} />
      </div>
    </footer>
  );
};

export default FooterSection;
