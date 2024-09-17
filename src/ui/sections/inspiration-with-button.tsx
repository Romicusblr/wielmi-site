import type { FC } from "react";
import BrandedButton from "@/ui/common/button";
import { CONTACT_HASH } from "@/constants";
import Link from "next/link";
import Heading from "@/ui/common/heading";

const InspirationWithButton: FC = function () {
  return (
    <section className="section">
      <div className="content-left-half">
        <Heading
          title={
            <span>
              NASZA <br /> INSPIRACJA
            </span>
          }
        />
      </div>
      <div className="content-right-half">
        <p>
          Inspirują nas oryginalne projekty designerów, którzy nie trzymają się standardowych rozwiązań, a w swojej
          pracy wykorzystują kreatywność i niestandardowe podejście.
        </p>
        <p className="mt-4">Jesteśmy otwarci na nowe projekty i gotowi do współpracy!</p>
        <div className="mt-8">
          <Link className="w-full" href={CONTACT_HASH}>
            <BrandedButton className="px-12 w-full max-w">Czy masz jakiś pomysł?</BrandedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InspirationWithButton;
