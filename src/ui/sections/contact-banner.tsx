import ResponsiveImage from "@/ui/common/responsive-image";

const ContactBanner = () => {
  return (
    <section className="grid-layout">
      <ResponsiveImage
        src="/images/kontakt-bg.jpeg" // Replace with your image path
        alt="Background"
        className="col-span-full grid-layout"
      >
        <div className="sm:col-start-2 lg:col-start-3 lg:col-end-5 flex flex-col justify-center p-8 z-10">
          <h2 className="text-3xl font-bold text-white ">Skontaktuj się z nami</h2>
          <div className="w-16 h-1 bg-blue-500 mt-2 mb-4"></div>
          <p className="text-xl text-gray-300">
            BEZPOŚREDNIO <br />
            LUB TELEFONICZNIE
          </p>
        </div>
      </ResponsiveImage>
    </section>
  );
};

export default ContactBanner;
