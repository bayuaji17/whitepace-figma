import Image, { StaticImageData } from "next/image";
const ClientCard = ({
  avatar,
  testimonial,
  name,
  role,
}: {
  avatar: StaticImageData;
  testimonial: string;
  name: string;
  role: string;
}) => {
  return (
    <div className="flex flex-col rounded-xl h-[35rem] w-[21.5rem] md:w-[27.5rem] py-8 md:py-16 px-6 shadow-[0px_0px_20px_5px_rgba(0,_0,_0,_0.1)] bg-white">
      <div>
        <svg
          viewBox="0 0 86 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-20"
        >
          <path
            d="M85.9999 12.686L83.2409 0C63.3755 0.910025 49.605 9.17535 49.605 33.4821V61.4603H84.3104V26.2958H71.1666C71.1668 18.4966 76.0603 13.9093 85.9999 12.686Z"
            fill="#043873"
          />
          <path
            d="M36.3949 12.6862L33.6359 0.000244141C13.7705 0.910269 0 9.17582 0 33.4825V61.4607H34.7068V26.2961H21.5548C21.5548 18.4968 26.4483 13.9096 36.3949 12.6862Z"
            fill="#043873"
          />
        </svg>
      </div>
      <p className="mb-10 mt-8 text-lg font-normal">{testimonial}</p>
      <div className="flex flex-col md:flex-row border-t-2 border-black pt-8 md:pt-16 gap-x-10">
        <Image
          src={avatar}
          alt=""
          width={40}
          height={40}
          className="w-24 h-24"
        />
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mt-3">{name}</h4>
          <p className="pt-4 text-base font-normal">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
