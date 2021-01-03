import Scene from "./scene";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-t from-gray-800 to-gray-900">
      <div className="relative pt-6 pb-24 lg:pb-28">
        <Scene />
        {/* <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a> */}
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-300 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block">Customer focused</span>{" "}
              <span className="inline text-green-300">web sites</span>{" "}
              <span className="inline">and</span>{" "}
              <span className="inline text-green-300 whitespace-nowrap">
                mobile apps
              </span>{" "}
              <span className="inline sm:block">that just simply work</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              We keep things simple and build only what you need to save you
              time and money.
              {/* We want to make a website that works. */}
              {/* We care deeply about the software we build for our customers.
              Let's team up to build products and tools of the future that will
              help your business grow. */}
              {/* Let's team up to grow your business and build products of the
              future. */}
              {/* Using simple design and MVP solutions we have proven track
              record of deliving reliable software that helps businesses of all
              sizes grow. */}
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#web-sites"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-300 hover:bg-green-400 md:py-4 md:text-lg md:px-10"
                >
                  Learn more
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#contact-us"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-500 bg-gray-900 hover:opacity-80 md:py-4 md:text-lg md:px-10"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
