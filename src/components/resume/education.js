import React, { useContext } from "react";
import { BuilderContext } from "@/contexts/builderContext";

function Education() {
  const { educationTitle, setEducationTitle, educationArr, setEducationArr } =
    useContext(BuilderContext);

  return (
    <div>
      <div className={"title"}>{educationTitle}</div>
      <div>
        {educationArr.map(({ degree, university, startYear, endYear }) => {
          return (
            <div className="space-top space-below short flex">
              <div style={{ width: "80%" }}>
                <p className="space-top space-below short bold">{degree}</p>
                <p className="space-top space-below short ">{university}</p>
              </div>
              <div style={{ width: "20%" }}>
                <p className="bold text-right">
                  {startYear} - {endYear}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
