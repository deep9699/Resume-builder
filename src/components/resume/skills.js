import React, { useContext } from "react";
import { BuilderContext } from "@/contexts/builderContext";

function Skills() {
  const { skillTitle, skillsArr } = useContext(BuilderContext);
  return (
    <div>
      <div className={"title"}>{skillTitle}</div>

      <ul className={`skill space-top meduim`}>
        {skillsArr.map(({ label, skills = [] }) => {
          return (
            <li className="space-top short">
              {label != undefined && <b>{label} : </b>}
              <span> {skills.toString()}</span>
            </li>
          );
        })}
        {/* <li>
          <b>Frontend : </b>
          <span>Javascript, ReactJs, NextJs, Redux, Angular 2+</span>
        </li>
        <li className="space-top short">
          <b>Backend : </b>
          <span> NodeJs(Express), Java Spring Boot</span>
        </li>
        <li className="space-top short">
          <b>Database : </b>
          <span>mySql, PostgreSQL, MongoDB</span>
        </li> */}
      </ul>
    </div>
  );
}

export default Skills;
