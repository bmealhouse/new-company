import { ReactNode } from "react";

interface Props {
  anchorId: string;
  children: ReactNode;
}

export default function PageAnchor({ anchorId, children }: Props) {
  return <div id={anchorId}>{children}</div>;
}
