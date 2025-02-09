import { FC } from "react";
import { CircleCheckBig } from "lucide-react";
import Button from "./button";

interface CardProps {
  title: string;
  price: string;
  description: string;
  listItems: { title: string }[];
  buttonTitle: string;
  onButtonClick?: () => void;
}

const Card: FC<CardProps> = ({
  title,
  price,
  description,
  listItems,
  buttonTitle,
  onButtonClick,
}) => {
  return (
    <div className="border-2 rounded-xl bg-white border-secondary-yellow w-[23rem] xl:w-[27.5rem]  xl:h-[41rem] py-10 px-11 hover:scale-110 transition-transform hover:bg-dark-blue hover:text-white duration-500 group cursor-pointer">
      <h4 className="font-semibold text-2xl">{title}</h4>
      <h2 className="font-bold text-4xl my-6 group-hover:text-secondary-yellow">
        {price}
      </h2>
      <p className="font-medium text-lg">{description}</p>
      <ul>
        {listItems.map((item, index) => (
          <li key={index} className="flex gap-4 mt-6 items-center">
            <span>
              <CircleCheckBig className="group-hover:text-secondary-yellow" />
            </span>
            {item.title}
          </li>
        ))}
      </ul>
      <Button
        title={buttonTitle}
        className="bg-none border-2 border-secondary-yellow w-44 h-[3.75rem] text-black group-hover:bg-light-blue group-hover:text-white hover:border-none mt-6 font-medium text-base"
        onClick={onButtonClick}
      />
    </div>
  );
};

export default Card;
