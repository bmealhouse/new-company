import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function FeatureList({ children }: Props) {
  return (
    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
      {children}
    </dl>
  );
}

interface FeatureListItemProps {
  heading: string;
  children: ReactNode;
}

function Item({ heading, children }: FeatureListItemProps) {
  return (
    <div className="flex">
      <svg
        className="flex-shrink-0 h-6 w-6 text-green-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <div className="ml-3">
        <dt className="text-lg leading-6 font-medium text-gray-800">
          {heading}
        </dt>
        <dd className="mt-2 text-base text-gray-500">{children}</dd>
      </div>
    </div>
  );
}

FeatureList.Item = Item;
export default FeatureList;
