import React, { useContext } from "react";
import Header from "./header";
import Summary from "./summary";
import Skills from "./skills";
import Experience from "./experience";
import Education from "./education";
import { BuilderContext } from "@/contexts/builderContext";

const ResumeDoc = () => {
  const contextValue = useContext(BuilderContext);
  const { summaryDesc, skillsArr, experiencesArr, educationArr, sectionsArr } =
    contextValue || {};

  console.log("sectionsArr", sectionsArr);

  const filteredSection = (sectionsArr || []).filter(
    ({ conditionKey = "" }) =>
      conditionKey == "" || contextValue[conditionKey].length > 0
  );

  return (
    <>
      {filteredSection.map(({ Component }, index) => {
        return (
          <>
            <Component />
            {index != filteredSection.length - 1 && (
              <hr className="space-top space-below" />
            )}
          </>
        );
      })}
    </>
  );
};

export default ResumeDoc;
