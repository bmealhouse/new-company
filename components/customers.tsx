import DiagonalSectionWrapper from "./diagonal-section-wrapper";

export default function Customers() {
  return (
    <DiagonalSectionWrapper>
      <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
        Trusted by well know brands and small businesses
      </p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:mt-8">
        <div className="col-span-1 flex justify-center items-center p-6">
          <img
            className="max-h-12 opacity-25"
            src="securian.svg"
            alt="Securian"
          />
        </div>
        <div className="col-span-1 flex justify-center items-center p-6">
          <img
            className="max-h-20 opacity-25"
            src="bestbuy.svg"
            alt="Best Buy"
          />
        </div>
        <div className="col-span-1 flex justify-center items-center p-6">
          <img
            className="max-h-20 opacity-25"
            src="mnwild.svg"
            alt="Minnesota Wild"
          />
        </div>
        <div className="col-span-1 flex justify-center items-center p-6">
          <img
            className="max-h-12 opacity-25"
            src="landolakes.svg"
            alt="Land O' Lakes"
          />
        </div>
        <div className="col-span-1 flex justify-center items-center p-6">
          <img
            className="max-h-20 opacity-25"
            src="hillcitymnag.svg"
            alt="Hill City Assembly of God"
          />
        </div>
        <div className="col-span-1 flex justify-center items-center p-6">
          <img
            className="max-h-12 opacity-25"
            src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
            alt="Tuple"
          />
        </div>
      </div>
    </DiagonalSectionWrapper>
  );
}
