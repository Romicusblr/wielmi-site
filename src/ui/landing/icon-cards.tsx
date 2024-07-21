import type { FC } from "react";
import { FaBook, FaPhone, FaRegClock, FaRegComments, FaRegEye } from "react-icons/fa6";
import { IconType } from "react-icons";
import classNames from "classnames";

const iconCards = [
  {
    className: "lg:col-start-1",
    icon: FaPhone,
    text: `BEZPŁATNA KONSULTACJA`,
  },
  {
    className: "lg:col-start-3",
    icon: FaRegClock,
    text: `24/7`,
  },
  {
    className: "lg:col-start-5",
    icon: FaRegEye,
    text: `NADZÓR AUTORSKI`,
  },
  {
    className: "lg:col-start-2",
    icon: FaRegComments,
    text: `MENEDŻER OSOBISTY`,
  },
  {
    className: "lg:col-start-4",
    icon: FaBook,
    text: `PEŁNA DOKUMENTACJA TECHNICZNA PROJEKTU`,
  },
];

function getColByIndex(index: number) {
  const mapping = [1, 3, 5, 2, 4];
  return mapping[index];
}

interface IconCardProps {
  Icon: IconType;
  text: string;
  className: string;
}

const IconCard: FC<IconCardProps> = ({ Icon, text, className }) => {
  return (
    <div className={classNames("grid place-content-center col-span-2", className)}>
      <article className="w-64 h-24 p-4 bg-brand-light text-sm shadow-lg shadow-brand rounded-lg flex items-center">
        <Icon className="h-8 w-8 mr-3" />
        <p className="font-bold text-left">{text}</p>
      </article>
    </div>
  );
};

const IconCardSection: FC = function () {
  return (
    <section className="container w-full py-8 grid lg:grid-cols-6 lg:gap-24 gap-8 justify-center">
      {iconCards.map(({ icon, text, className }) => {
        return <IconCard key={text} Icon={icon} text={text} className={className} />;
      })}
    </section>
  );
};

export default IconCardSection;
