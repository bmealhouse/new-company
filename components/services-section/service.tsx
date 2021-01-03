import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  name: string;
  children: string;
}

export default function Service({ icon, name, children }: Props) {
  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <dt className="text-lg leading-6 font-medium text-gray-900">{name}</dt>
        <dd className="mt-2 text-base text-gray-500">{children}</dd>
      </div>
    </div>
  );
}
