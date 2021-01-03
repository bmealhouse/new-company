import { ReactNode } from "react";

interface Props {
  heading: string;
  subheading: string;
  children: ReactNode;
}

export default function SectionHeader({
  heading,
  subheading,
  children,
}: Props) {
  return (
    <div className="text-center">
      {/* <h2 className="text-base font-semibold text-green-800 tracking-wide uppercase">
        {heading}
      </h2> */}
      <h2 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
        {subheading}
      </h2>
      <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">{children}</p>
    </div>
  );
}
