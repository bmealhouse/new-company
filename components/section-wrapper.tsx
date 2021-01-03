import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SectionWrapper({ children }: Props) {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:py-24 lg:py-28 lg:px-8">
      {children}
    </div>
  );
}
