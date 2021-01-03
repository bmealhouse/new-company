export default function Cta() {
  return (
    <>
      <h2 className="text-3xl font-extrabold text-white text-center sm:text-4xl">
        <span className="block">
          Have a project <span className="whitespace-nowrap">in mind?</span>
        </span>
        <span className="block text-green-200">
          Reach out to <span className="whitespace-nowrap">us today.</span>
        </span>
      </h2>
      {/* <p className="mt-4 text-lg leading-6 text-green-200">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla nec.
        </p> */}
      <a
        href="#contact-us"
        className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-800 bg-white hover:bg-green-50 sm:w-auto"
      >
        Contact us
      </a>
    </>
  );
}
