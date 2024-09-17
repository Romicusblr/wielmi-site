import classNames from "classnames";
import type { FC } from "react";
import { IconType } from "react-icons";

interface ServiceItemProps {
  icon: IconType;
  iconSize: number;
  title?: React.ReactNode;
  items?: React.ReactNode;
  className?: string;
}

const ServiceItem: FC<ServiceItemProps> = ({ icon: Icon, iconSize, title, items, className }) => {
  return (
    <div className={classNames("flex items-start py-4", className)}>
      <div className="p-4 sm:p-5 flex-shrink-0 bg-grey text-white rounded-full flex items-center justify-center">
        <Icon size={iconSize} />
      </div>
      <div className="ml-6">
        <h3 className="text-xl font-bold text-grey">{title}</h3>
        <ul className="list-disc mt-2 text-grey">{items}</ul>
      </div>
    </div>
  );
};

export default ServiceItem;
