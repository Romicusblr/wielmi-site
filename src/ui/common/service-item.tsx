import classNames from "classnames";
import type { FC } from "react";
import { IconType } from "react-icons";

interface ServiceItemProps {
  icon: IconType;
  iconSize: number;
  title?: string;
  items?: React.ReactNode;
  className?: string;
}

const ServiceItem: FC<ServiceItemProps> = ({ icon: Icon, iconSize, title, items, className }) => {
  return (
    <div className={classNames("flex items-center py-4", className)}>
      <div className="p-6 flex-shrink-0 bg-grey text-white rounded-full flex items-center justify-center">
        <Icon size={iconSize} />
      </div>
      <div className="ml-6">
        <h3 className="text-xl font-bold text-grey">{title}</h3>
        <ul className="list-disc ml-5 mt-2 text-grey">{items}</ul>
      </div>
    </div>
  );
};

export default ServiceItem;
