import type { FC, ReactNode } from "react";
import { FaUser } from "react-icons/fa6";
import Heading from "@/ui/common/heading";

const persons = [
  {
    name: "Aleks",
    role: "Electrical Team Leader",
    image: "/images/zespol_man.jpeg",
    description: (
      <>
        <p className="mt-8">
          Doświadczony inżynier w automatyce domowej oraz w projektowaniu i instalacji szaf automatyki.
        </p>
        <p className="mt-8">Doświadczenie zawodowe 10 lat</p>
      </>
    ),
  },
  {
    name: "Andrzej",
    role: "Inżynier",
    image: "/images/zespol_man.jpeg",
    description: (
      <>
        <p className="mt-8">
          Doświadczony inżynier w instalacji systemów okablowania i energetyki z wysokim napięciem.
        </p>
        <p className="mt-8">Doświadczenie zawodowe 10 lat</p>
      </>
    ),
  },
  {
    name: "Roman",
    role: "Programista",
    image: "/images/zespol_man.jpeg",
    description: (
      <>
        <p className="mt-8">Doświadczony programista serwerów i interfejsów inteligentnego domu. </p>
        <p className="mt-8">Doświadczenie zawodowe 10 lat</p>
      </>
    ),
  },
];

interface PersonProps {
  name: string;
  description?: ReactNode;
  image: string;
  role: string;
}

const Person: FC<PersonProps> = function ({ name, description, role, image }) {
  return (
    <div className="flex flex-col text-xl">
      <div className="flex-none">
        <div className="p-8 grid place-items-center border">
          <FaUser size={150} />
        </div>
        <h3 className="mt-4">{name}</h3>
        <p className="text-red text-[#9F9F9F] ">{role}</p>
      </div>
      <div className="text-[#F5F5F5] flex-1 flex flex-col justify-between">{description}</div>
    </div>
  );
};

const TeamSection: FC = function () {
  return (
    <section className="w-full py-20 bg-grey text-dark-grey section z-10">
      <div className="text-3xl sm:col-start-2 lg:col-end-4 px-12">
        <Heading
          title={
            <span>
              NASZ <br /> ZESPÓŁ
            </span>
          }
        />
        <p className="mb-8 font-light">ODPOWIADAMY ZA KAŻDY PROJEKT</p>
      </div>
      <div className="sm:col-start-2 lg:col-end-4 px-12 mt-12 grid lg:grid-cols-3 gap-x-8 gap-y-16">
        {persons.map((p) => {
          return <Person {...p} key={p.name} />;
        })}
      </div>
    </section>
  );
};

export default TeamSection;
