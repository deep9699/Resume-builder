import React, { useContext } from "react";
import Header from "./header";
import Summary from "./summary";
import Skills from "./skills";
import Experience from "./experience";
import Education from "./education";
import { BuilderContext } from "@/contexts/builderContext";

const ResumeDoc = () => {
  const { summaryDesc, skillsArr, experiencesArr, educationArr } =
    useContext(BuilderContext);

  return (
    <>
      <Header />
      {summaryDesc && (
        <>
          <hr className="space-top space-below" />
          <Summary />
        </>
      )}
      {(skillsArr || []).length > 0 && (
        <>
          <hr className="space-top space-below" />
          <Skills />
        </>
      )}
      {(experiencesArr || []).length > 0 && (
        <>
          <hr className="space-top space-below" />
          <Experience />
        </>
      )}
      {(educationArr || []).length > 0 && (
        <>
          <hr className="space-top space-below" />
          <Education />
        </>
      )}
    </>
  );
};

export default ResumeDoc;
