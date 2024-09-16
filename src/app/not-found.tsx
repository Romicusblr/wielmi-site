import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Custom404: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full items-center justify-center p-10 z-10 bg-[#F5F5F5]">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl mt-4">Oops! Strona, której szukasz, nie istnieje.</h2>
      <p className="text-lg mt-4 mb-8">Wygląda na to, że nie możemy znaleźć strony, której szukasz.</p>
      <Link
        className="flex items-center bg-brand text-white px-6 py-3 rounded-lg hover:bg-brand-dark transition-all duration-300"
        href="/"
      >
        <FaHome className="mr-2" />
        Wróć na stronę główną
      </Link>
    </div>
  );
};

export default Custom404;
