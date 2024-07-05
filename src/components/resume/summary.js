import React, { useContext } from "react";
import { BuilderContext } from "@/contexts/builderContext";

function Summary() {
  const { summaryTitle, summaryDesc } = useContext(BuilderContext);

  return (
    <div>
      <div className={"title"}>{summaryTitle}</div>
      <p className={`space-top meduim summary`}>{summaryDesc}</p>
    </div>
  );
}

export default Summary;
