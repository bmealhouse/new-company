import SectionHeader from "../section-header";
import Service from "./service";

export default function Services() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Services" tagline="What we do well.">
          Hello world
        </SectionHeader>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <Service icon={<BrowserIcon />} name="Web development">
              TODO
            </Service>
            <Service icon={<MobileIcon />} name="Mobile development">
              TODO
            </Service>
            <Service icon={<RobotIcon />} name="Process automation">
              TODO
            </Service>
            <Service
              icon={<CodeIcon />}
              name="Developer tools &amp; open-source"
            >
              We build software on the shoulders of giants.
            </Service>
          </dl>
        </div>
      </div>
    </div>
  );
}

const BrowserIcon = () => (
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 512 512"
    aria-hidden="true"
    focusable="false"
    role="img"
  >
    <g>
      <path
        d="M76 160h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12H76a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12zM0 224v208a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V224z"
        opacity="0.4"
      />
      <path d="M464 32H48A48 48 0 0 0 0 80v144h512V80a48 48 0 0 0-48-48zM128 148a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12zm320 0a12 12 0 0 1-12 12H188a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h248a12 12 0 0 1 12 12z" />
    </g>
  </svg>
);

const MobileIcon = () => (
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 320 512"
    aria-hidden="true"
    focusable="false"
    role="img"
  >
    <g>
      <path
        d="M0 384v80a48 48 0 0 0 48 48h224a48 48 0 0 0 48-48v-80zm160 96a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
        opacity="0.4"
      />
      <path d="M0 384V48A48 48 0 0 1 48 0h224a48 48 0 0 1 48 48v336z" />
    </g>
  </svg>
);

const RobotIcon = () => (
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 448 512"
    aria-hidden="true"
    focusable="false"
    role="img"
  >
    <g>
      <path
        d="M176,240H144v32h32Zm0,208a15.99954,15.99954,0,0,0-16,16v48h32V464A15.99954,15.99954,0,0,0,176,448ZM0,146v92a17.97968,17.97968,0,0,0,18,18H48V128H18A17.97843,17.97843,0,0,0,0,146Zm430-18H400V256h30a17.97718,17.97718,0,0,0,18-18V146A17.97594,17.97594,0,0,0,430,128ZM208,272h32V240H208Zm64,0h32V240H272Zm0,176a16,16,0,1,0,16,16A15.99954,15.99954,0,0,0,272,448ZM224,0a15.99954,15.99954,0,0,0-16,16V64h32V16A15.99954,15.99954,0,0,0,224,0Z"
        opacity="0.4"
      />
      <path d="M116,320H332a36.0356,36.0356,0,0,0,36-36V109a44.98286,44.98286,0,0,0-45-45H125a44.98536,44.98536,0,0,0-45,45V284A36.03811,36.03811,0,0,0,116,320Zm188-48H272V240h32ZM288,128a32,32,0,1,1-32,32A31.99658,31.99658,0,0,1,288,128ZM208,240h32v32H208Zm-32,32H144V240h32ZM160,128a32,32,0,1,1-32,32A31.99658,31.99658,0,0,1,160,128ZM352,352H96A95.99975,95.99975,0,0,0,0,448v32a32.00158,32.00158,0,0,0,32,32h96V448a32.00033,32.00033,0,0,1,32-32H288a32.00033,32.00033,0,0,1,32,32v64h96a32.00158,32.00158,0,0,0,32-32V448A95.99975,95.99975,0,0,0,352,352Z" />
    </g>
  </svg>
);

const CodeIcon = () => (
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 640 512"
    aria-hidden="true"
    focusable="false"
    role="img"
  >
    <g>
      <path
        d="M422.12 18.16a12 12 0 0 1 8.2 14.9l-136.5 470.2a12 12 0 0 1-14.89 8.2l-61-17.7a12 12 0 0 1-8.2-14.9l136.5-470.2a12 12 0 0 1 14.89-8.2z"
        opacity="0.4"
      />
      <path d="M636.23 247.26l-144.11-135.2a12.11 12.11 0 0 0-17 .5L431.62 159a12 12 0 0 0 .81 17.2L523 256l-90.59 79.7a11.92 11.92 0 0 0-.81 17.2l43.5 46.4a12 12 0 0 0 17 .6l144.11-135.1a11.94 11.94 0 0 0 .02-17.54zm-427.8-88.2l-43.5-46.4a12 12 0 0 0-17-.5l-144.11 135a11.94 11.94 0 0 0 0 17.5l144.11 135.1a11.92 11.92 0 0 0 17-.5l43.5-46.4a12 12 0 0 0-.81-17.2L117 256l90.6-79.7a11.92 11.92 0 0 0 .83-17.24z" />
    </g>
  </svg>
);
