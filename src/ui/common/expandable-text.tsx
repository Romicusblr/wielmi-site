"use client";

import { ReactNode, useState } from "react";

interface ExpandableTextProps {
  shortText: ReactNode;
  moreText: ReactNode;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ shortText, moreText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {isExpanded ? (
        <>
          {shortText} {moreText}
        </>
      ) : (
        <>{shortText}</>
      )}

      <button onClick={toggleExpansion} className="mt-2 text-brand font-semibold flex items-center hover:underline">
        {isExpanded ? "zwiń tekst <<" : "rozwiń tekst >>"}
      </button>
    </>
  );
};

export default ExpandableText;
