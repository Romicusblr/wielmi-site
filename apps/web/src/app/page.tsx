"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Carousel showArrows={false} showStatus={false} showThumbs={false} swipeable={false} animationHandler="fade">
        <div>
          <Image width={1792} height={1024} priority={true} src="/wielmi-1.png" alt="image-1" />
        </div>
        <div>
          <Image width={1792} height={1024} src="/wielmi-2.png" alt="image-2" />
        </div>
        <div>
          <Image width={1792} height={1024} src="/wielmi-3.png" alt="image-3" />
        </div>
      </Carousel>
    </main>
  );
}
