import React, { useContext } from "react";
import { Button } from "antd";
import { BuilderContext } from "@/contexts/builderContext";
import HeaderSection from "./resumeBuilder/headerSection";
import SummarySection from "./resumeBuilder/summarySection";
import SkillsSection from "./resumeBuilder/skillsSection";
import ExperienceSection from "./resumeBuilder/experienceSection";
import EducationSection from "./resumeBuilder/educationSection";

function Builder() {
  const { setShowBuilder } = useContext(BuilderContext);
  return (
    <div className={"builder"}>
      <div className="full-width flex flex-center">
        <div className="half-width bold text-large">Edit Information</div>
        <div className="half-width text-right">
          <Button
            onClick={() => {
              setShowBuilder(false);
            }}
          >
            X
          </Button>
        </div>
      </div>
      <div
        style={{
          paddingRight: "10px",
          marginTop: "10px",
          height: "85vh",
          overflow: "auto",
        }}
      >
        <HeaderSection />
        <SummarySection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
      </div>
    </div>
  );
}

export default Builder;
