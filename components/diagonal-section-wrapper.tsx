import { ReactNode } from "react";
import SectionWrapper from "./section-wrapper";

interface Props {
  type?: "alternate";
  children: ReactNode;
}

export default function DiagonalSectionWrapper({ type, children }: Props) {
  const wrapperClasses = ["diagonal-section-wrapper"];

  if (type === "alternate") {
    wrapperClasses.push("diagonal-section-wrapper--alternate");
  }

  return (
    <div className={wrapperClasses.join(" ")}>
      <div className="diagonal-section-wrapper__top" />
      <div className="diagonal-section-wrapper__content">
        <SectionWrapper>{children}</SectionWrapper>
      </div>
      <div className="diagonal-section-wrapper__bottom" />
    </div>
  );
}
