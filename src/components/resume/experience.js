import React, { useContext } from "react";
import { BuilderContext } from "@/contexts/builderContext";

function Experience() {
  const { experienceTitle, experiencesArr } = useContext(BuilderContext);

  return (
    <div>
      <div className={"title"}>{experienceTitle}</div>

      {experiencesArr.map(
        ({ companyName, position, startDate, endDate, roles }) => {
          return (
            <>
              <div className="flex full-width">
                <p style={{ fontSize: "16px" }} className="bold half-width">
                  {position}, {companyName}
                </p>
                <p
                  style={{ fontSize: "16px" }}
                  className="bold half-width text-right"
                >
                  {startDate} - {endDate}
                </p>
              </div>

              <ul className={`experience space-top short`}>
                {roles.map((data) => {
                  return <li className="space-top short">{data}</li>;
                })}
              </ul>
            </>
          );
        }
      )}
    </div>
  );
}

export default Experience;
