import React, { useContext, useState } from "react";
import { BuilderContext } from "@/contexts/builderContext";
import {
  Button,
  Checkbox,
  Collapse,
  DatePicker,
  Divider,
  Input,
  Space,
  Tag,
} from "antd";
import dayjs from "dayjs";
import RolesEditor from "./rolesEditor";
const { Panel } = Collapse || {};

function ExperienceSection() {
  const {
    experienceTitle,
    setExperienceTitle,
    experiencesArr,
    setExperiencesArr,
  } = useContext(BuilderContext) || {};

  const disabledDate = (current) => {
    return current && current > new Date();
  };

  const onClickAddExperience = () => {
    experiencesArr.push({
      companyName: "",
      position: "",
      startDate: "",
      endDate: "",
      roles: [],
    });
    setExperiencesArr([...experiencesArr]);
  };

  const onClickDeleteExperience = (index) => {
    experiencesArr.splice(index, 1);
    setExperiencesArr([...experiencesArr]);
  };

  return (
    <div>
      <Collapse
        collapsible="header"
        className="space-top"
        expandIconPosition="right"
      >
        <Panel header="Experience">
          <>
            <div className="space-below">
              <p className={`space-top space-below short title`}>
                {"Experience Title"}
              </p>
              <Input
                value={experienceTitle}
                onChange={(e) => {
                  setExperienceTitle(e.target.value);
                }}
              />
            </div>
            <Divider className="space-top space-below meduim" />
            {experiencesArr.map(
              ({ companyName, position, startDate, endDate, roles }, index) => {
                const isPresent = endDate == "Present";
                return (
                  <>
                    <div className="flex flex-center">
                      <div className="half-width">
                        <b>Company {index + 1}</b>
                      </div>
                      <div className="half-width text-right">
                        <Button
                          danger
                          size="small"
                          onClick={() => {
                            onClickDeleteExperience(index);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                    <div className="space-below">
                      <p className={`space-top space-below short title`}>
                        {"Position"}
                      </p>
                      <Input
                        value={position}
                        onChange={(e) => {
                          experiencesArr[index]["position"] = e.target.value;
                          setExperiencesArr([...experiencesArr]);
                        }}
                      />
                    </div>
                    <div className="space-below">
                      <p className={`space-top space-below short title`}>
                        {"Company Name"}
                      </p>
                      <Input
                        value={companyName}
                        onChange={(e) => {
                          experiencesArr[index]["companyName"] = e.target.value;
                          setExperiencesArr([...experiencesArr]);
                        }}
                      />
                    </div>

                    <div
                      className="space-below flex "
                      style={{
                        alignItems: "center",
                      }}
                    >
                      <div style={{ width: "40%" }}>
                        <p className={`space-top space-below short title`}>
                          {"Start Date"}
                        </p>
                        <DatePicker
                          onChange={(date, dateString) => {
                            experiencesArr[index]["startDate"] = dateString;
                            setExperiencesArr([...experiencesArr]);
                          }}
                          picker="month"
                          format={"MMM YYYY"}
                          disabledDate={disabledDate}
                          value={startDate ? dayjs(startDate, "MMM YYYY") : ""}
                          style={{ width: "120px" }}
                        />
                      </div>
                      <div style={{ width: "40%" }}>
                        <p className={`space-top space-below short title`}>
                          {"End Date"}
                        </p>
                        <DatePicker
                          onChange={(date, dateString) => {
                            experiencesArr[index]["endDate"] = dateString;
                            setExperiencesArr([...experiencesArr]);
                          }}
                          picker="month"
                          format={"MMM YYYY"}
                          disabledDate={disabledDate}
                          value={
                            !isPresent
                              ? endDate
                                ? dayjs(endDate, "MMM YYYY")
                                : ""
                              : ""
                          }
                          disabled={isPresent}
                          style={{ width: "120px" }}
                        />
                      </div>
                      <div className="space-top long" style={{ width: "10%" }}>
                        <Checkbox
                          checked={isPresent}
                          onChange={(e) => {
                            if (e.target.checked) {
                              experiencesArr[index]["endDate"] = "Present";
                              setExperiencesArr([...experiencesArr]);
                            } else {
                              experiencesArr[index]["endDate"] = null;
                              setExperiencesArr([...experiencesArr]);
                            }
                          }}
                        >
                          Present
                        </Checkbox>
                      </div>
                    </div>
                    <div className="space-below">
                      <p className={`space-top space-below short title`}>
                        {"Roles and Responsibilities"}
                      </p>
                      <RolesEditor index={index} />
                    </div>
                    <Divider className="space-top space-below meduim" />
                  </>
                );
              }
            )}
            <div className="full-width text-right">
              <Button type="link" onClick={onClickAddExperience}>
                + Add Experience
              </Button>
            </div>
          </>
        </Panel>
      </Collapse>
    </div>
  );
}

export default ExperienceSection;
