import type { FC } from "react";

interface PageWrapperProps {
  name?: string;
  children?: React.ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = function ({ name, children }) {
  return (
    <section className="section">
      {name && (
        <div className="col-span-full">
          <h1 className="text-4xl font-bold">{name}</h1>
        </div>
      )}
      {children}
    </section>
  );
};

export default PageWrapper;
