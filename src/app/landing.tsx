import type { FC } from "react";
import BrandedButton from "../ui/button";
import GridLineH from "@/ui/line-horizontal";
import { FaBook, FaPhone, FaRegClock, FaRegComments, FaRegEye } from "react-icons/fa6";
import { IconType } from "react-icons";
import ResponsiveImage from "@/ui/responsive-image";
import Image from "next/image";
import Testimonials from "@/ui/testimonials";
import SocialMedia from "@/ui/social-media";
import Hero from "@/ui/landing/hero";
import AboutSection from "@/ui/landing/about";

const cards = [
  {
    heading: "Opracowanie koncepcji „Inteligentnego domu”",
    text: "Przed podpisaniem umowy tworzymy koncepcję przyszłego systemu, uwzględniając Państwa styl życia, układ pomieszczeń i cechy architektoniczne domu.",
  },
  {
    heading: "Wykonanie projektu",
    text: "Opracowujemy indywidualny projekt w ścisłej współpracy z projektantem, architektem oraz innymi wykonawcami.",
  },
  {
    heading: "Dobór i dostawa sprzętu",
    text: "Kompletujemy sprzęt zgodnie z wymaganiami technicznymi i projektem wnętrz. Bezpośrednia współpraca z producentami pozwala nam na precyzyjne dopasowanie komponentów do Państwa potrzeb.",
  },
  {
    heading: "Wykonanie instalacji",
    text: "Realizujemy instalację systemu zgodnie ze wszystkimi regulacjami technicznymi i wymaganiami projektu. Jest to istotne, ponieważ niektóre rozwiązania konstrukcyjne są niemożliwe do zmiany po zakończeniu prac budowlanych.",
  },
  {
    heading: "Programowanie i uruchomienieProgramowanie i uruchomienie",
    text: "Zajmujemy się programowaniem i testowaniem sprzętu, opracowujemy scenariusze jego działania oraz szkolimy użytkowników w obsłudze systemu.",
  },
  {
    heading: "Gwarancyjne i serwisowe usługi",
    text: "Oferujemy kontrolę i aktualizację oprogramowania, modernizację systemu w razie potrzeby, a także wyjazdy na miejsce na życzenie klienta w celu wykonania prac serwisowych.",
  },
];

const blackCards = [
  {
    heading: "Bezpłatna konsultacja",
    text: `Na etapie bezpłatnej konsultacji określamy Państwa potrzeby i oczekiwania. 
    Opowiadają nam Państwo o swoim domu marzeń i planach, które chcą zrealizować. 
    My proponujemy najlepsze rozwiązania dla inteligentnego domu.`,
  },
  {
    heading: "Indywidualna kalkulacja kosztów",
    text: `Przygotowujemy wstępną wycenę, która obejmuje koszt sprzętu, montażu 
    oraz automatyzacji domu. Używamy terminu „wstępna”, ponieważ na etapie uzgadniania 
    można dodać dodatkowe funkcje według Państwa życzeń. Gdy wszystkie szczegóły są 
    uzgodnione i przeliczone, podpisujemy umowę.`,
  },
  {
    heading: "Realizacja projektu",
    text: `Po podpisaniu umowy rozpoczynamy pracę. Proces projektowania może zająć od 
    kilku dni do kilku tygodni, w zależności od skomplikowania projektu. Następnie, 
    zgodnie z ustalonym harmonogramem i w koordynacji z innymi wykonawcami, przystępujemy
    do realizacji instalacji elektrycznej oraz montażu sprzętu. Po zakończeniu tych prac
    programujemy system i szkolimy Państwa z jego obsługi. 
    Gratulacje - Inteligentny Dom jest już Państwa!`,
  },
];

const iconCards1 = [
  {
    icon: FaPhone,
    text: `BEZPŁATNA KONSULTACJA`,
  },
  {
    icon: FaRegClock,
    text: `24/7`,
  },
  {
    icon: FaRegEye,
    text: `NADZÓR AUTORSKI`,
  },
];

const iconCards2 = [
  {
    icon: FaRegComments,
    text: `MENEDŻER OSOBISTY`,
  },
  {
    icon: FaBook,
    text: `PEŁNA DOKUMENTACJA TECHNICZNA PROJEKTU`,
  },
];

interface CardProps {
  num: string;
  heading: string;
  text: string;
}

const Card: FC<CardProps> = function ({ num, heading, text }) {
  return (
    <article className="p-4 pt-12 w-1/6 bg-brand-light text-sm shadow-lg relative transition-transform duration-200 hover:-translate-y-2 transform">
      <p className="absolute left-1 top-1 text-3xl text-muted-grey font-bold">{num}</p>
      <h3 className="font-semibold mb-4">{heading}</h3>
      <p>{text}</p>
    </article>
  );
};

interface BlackCardProps {
  heading: string;
  text: string;
}

const BlackCard: FC<BlackCardProps> = function ({ heading, text }) {
  return (
    <article className="p-8 pt-12 flex-1 bg-grey text-sm text-dark-grey">
      <h3 className="font-semibold mb-4 text-xl text-center">{heading}</h3>
      <p>{text}</p>
    </article>
  );
};

interface IconCardProps {
  Icon: IconType;
  text: string;
}

const IconCard: FC<IconCardProps> = ({ Icon, text }) => {
  return (
    <article className="w-64 h-24 p-4 bg-brand-light text-sm shadow-lg shadow-brand rounded-lg flex items-center">
      <Icon className="h-8 w-8 mr-3" />
      <p className="font-bold text-left">{text}</p>
    </article>
  );
};

const Landing: FC = function () {
  return (
    <>
      <Hero />
      <GridLineH />
      <AboutSection />
      {/*
      <section className="grid-layout bg-[#F6FAFF]">
        <div className="col-start-3 p-12">
          <h2 className="text-2xl font-bold underline underline-offset-8 decoration-brand decoration-4">ETAPY PRACY</h2>
        </div>
        <div className="col-span-full py-12 flex gap-4 justify-around px-4">
          {cards.map(({ heading, text }, i) => {
            const num = "0" + (i + 1);
            return <Card num={num} key={heading} heading={heading} text={text} />;
          })}
        </div>
      </section>
      <GridLineH />
      <section className="w-full py-12 flex gap-24 px-36 justify-center">
        {blackCards.map(({ heading, text }, i) => {
          return <BlackCard key={heading} heading={heading} text={text} />;
        })}
      </section>
      <section className="w-full py-8 flex gap-24 justify-center">
        {iconCards1.map(({ icon, text }, i) => {
          return <IconCard key={text} Icon={icon} text={text} />;
        })}
      </section>
      <section className="w-full py-8 flex gap-24 justify-center">
        {iconCards2.map(({ icon, text }, i) => {
          return <IconCard key={text} Icon={icon} text={text} />;
        })}
      </section>
      <section className="w-full pt-8 bg-grey text-dark-grey grid-layout">
        <GridLineH className="mt-24 col-span-full" />
        <GridLineH className="mt-12 col-span-full" />
        <ResponsiveImage className="h-[48rem] col-span-2" src="/landing_id.jpeg" alt="intelegentny dom" />
        <article className="px-12 pt-16">
          <h2 className="text-3xl font-bold underline underline-offset-8 decoration-brand decoration-4 mb-8">
            INTELIGENTNY DOM
          </h2>
          <p className="text-3xl mb-8">ZARZĄDZANIE DOMEM Z DOWOLNEGO MIEJSCA NA ŚWIECIE</p>
          <p className="mb-8">
            Inteligentny dom to system, który łączy różne urządzenia elektroniczne i systemy w domu pod jednym
            zarządzaniem. Może to obejmować kontrolę oświetlenia, ogrzewania, klimatyzacji, bezpieczeństwa, systemów
            multimedialnych i wielu innych.
          </p>
          <p>
            Działanie wszystkich systemów w harmonii między sobą pozwala poczuć, czym jest komfort i wyrobić w sobie
            nawyk jego odczuwania - poczucie spokoju i pewności, że wszystko jest pod kontrolą.{" "}
          </p>
        </article>
        <GridLineH className="col-span-full" />
        <article className="px-12 pt-16 col-start-2">
          <h2 className="text-2xl font-bold underline underline-offset-8 decoration-brand decoration-4 mb-8">
            INSTALACJE ELEKTRYCZNE
          </h2>
          <p className="mb-4">
            Nasze podejście do instalacji elektrycznych to połączenie profesjonalizmu z elastycznością, aby sprostać
            Twoim oczekiwaniom. Rozumiemy, że technologia jest w ciągłym ruchu i nasza praca powinna wspierać ten
            rozwój.
          </p>
          <ol className="list-inside list-decimal mb-4">
            Nasze Zalety:
            <li>Wysoka Jakość Wykonania;</li>
            <li>Profesjonalizm i Doświadczenie;</li>
            <li>Bezpieczeństwo;</li>
            <li>Terminowość;</li>
            <li>Innowacyjność;</li>
            <li>Transparentność.</li>
          </ol>
          <p>
            Wybierając naszą firmę, masz pewność, że otrzymasz kompleksowe, nowoczesne i niezawodne rozwiązania
            dostosowane do Twoich potrzeb.
          </p>
        </article>
        <ResponsiveImage
          className="h-[48rem] col-span-2 col-start-3"
          src="/landing_electric.png"
          alt="intelegentny dom"
        />
        <GridLineH className="col-span-full" />
        <ResponsiveImage className="h-[48rem] col-span-2" src="/landing_lan.png" alt="intelegentny dom" />
        <article className="px-12 pt-16">
          <h2 className="text-3xl font-bold underline underline-offset-8 decoration-brand decoration-4 mb-8">
            SIECI LOKALNE
          </h2>
          <p className="text-3xl mb-8">ZINTEGROWANE ROZWIĄZANIA TECHOLOGICZNNE</p>
          <p className="mb-8">
            Specjalizujemy się w tworzeniu kompleksowych rozwiązań zapewniających ciągłą i wysokiej jakości pracę
            systemów w Twoim domu.
          </p>
          <p>
            Otrzymujesz komfort i technologię bez konieczności zagłębiania się w zawiłości szczegółów technicznych.
            Wyobraź sobie na przykład, że możesz stworzyć atmosferę w swoim domu na imprezę, romantyczną kolację lub
            rodzinny wieczór filmowy, nie ruszając się z kanapy.
          </p>
        </article>
        <GridLineH className="col-span-full" />
        <GridLineH className="mt-12 col-span-full" />
      </section>
      <section className="w-full py-8 bg-grey text-dark-grey grid-layout">
        <div className="text-3xl col-start-2 p-8">
          <h2 className="font-bold underline underline-offset-8 decoration-brand decoration-4 mb-8">NASZ ZESPÓŁ</h2>
          <p className="mb-8">Odpowiadamy za każdy projekt</p>
        </div>
        <div className="col-start-2 col-span-2 p-8 flex justify-center">
          <div className="p-4">
            <Image className="" src="/zespol_man.jpeg" alt="Aleks" width={300} height={300} />
            <h3 className="text-2xl ">Aleks</h3>
            <p className="">Electrical Team Leader</p>
          </div>
          <div className="p-4">
            <Image className="" src="/zespol_man.jpeg" alt="Aleks" width={300} height={300} />
            <h3 className="text-2xl ">Andrzej</h3>
            <p className="">Inżynier</p>
          </div>
          <div className="p-4">
            <Image className="" src="/zespol_man.jpeg" alt="Aleks" width={300} height={300} />
            <h3 className="text-2xl ">Roman</h3>
            <p className="">Programista</p>
          </div>
        </div>
      </section>
      <section className="grid-layout w-full bg-[url('/kontakt-bg.jpeg')] bg-cover bg-center">
        <div className="col-start-2 py-16 px-8">
          <h2 className="text-dark-grey text-3xl">Czy masz jakiś pomysł?</h2>
          <div className="shadow-lg rounded-lg mt-8">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Podaj imię..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Podaj email..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Podaj numer telefonu..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Informacje dla nas..."
                  className="w-full px-4 py-2 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div className="flex justify-center text-dark-grey">
                <BrandedButton className="px-12 bg-brand">Wysłać</BrandedButton>
              </div>
            </form>
          </div>
        </div>
        <ResponsiveImage className="h-full col-start-3 object-bottom" src="/kontakt-image.jpeg" alt="macbook" />
        <GridLineH className="col-span-full" />
        <div className="text-grey col-start-3 px-8 py-16">
          <h3 className="text-2xl">Współpraca</h3>
          <p className="mt-4">Zapraszamy architektów do kontaktu z nami.</p>
          <p className="mt-4">
            Zawsze jesteśmy gotowi udzielić kompetentnej porady i pomocy tam, gdzie nie ma prostych rozwiązań.{" "}
          </p>
          <p>Z naszymi specjalistami możesz skonsultować się w każdej sprawie.</p>
          <div className="mt-8">
            <SocialMedia />
          </div>
        </div>
      </section>
      <section className="w-full py-8 text-dark-grey">
        <Testimonials />
      </section> */}
    </>
  );
};

export default Landing;
