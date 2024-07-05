import React, { useContext } from "react";
import { BuilderContext } from "@/contexts/builderContext";
import { Button, Collapse, DatePicker, Divider, Input } from "antd";
import dayjs from "dayjs";
const { Panel } = Collapse || {};

function EducationSection() {
  const { educationTitle, setEducationTitle, educationArr, setEducationArr } =
    useContext(BuilderContext) || {};

  const onClickDeleteEducation = (index) => {
    educationArr.splice(index, 1);
    setEducationArr([...educationArr]);
  };

  const onClickAddEducation = () => {
    educationArr.push({
      degree: "",
      university: "",
      startYear: "",
      endYear: "",
    });
    setEducationArr([...educationArr]);
  };

  return (
    <div>
      <Collapse
        collapsible="header"
        className="space-top"
        expandIconPosition="right"
      >
        <Panel header="Education">
          <>
            <div className="space-below">
              <p className={`space-top space-below short title`}>
                {"Education Title"}
              </p>
              <Input
                value={educationTitle}
                onChange={(e) => {
                  setEducationTitle(e.target.value);
                }}
              />
              <Divider className="space-top space-below meduim" />
              {educationArr.map(
                ({ university, degree, startYear, endYear }, index) => {
                  return (
                    <>
                      <div className="flex flex-center">
                        <div className="half-width">
                          <b>Education {index + 1}</b>
                        </div>
                        <div className="half-width text-right">
                          <Button
                            danger
                            size="small"
                            onClick={() => {
                              onClickDeleteEducation(index);
                            }}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                      <div className="space-below">
                        <p className={`space-top space-below short title`}>
                          {"Degree"}
                        </p>
                        <Input
                          value={degree}
                          onChange={(e) => {
                            educationArr[index]["degree"] = e.target.value;
                            setEducationArr([...educationArr]);
                          }}
                        />
                      </div>
                      <div className="space-below">
                        <p className={`space-top space-below short title`}>
                          {"University"}
                        </p>
                        <Input
                          value={university}
                          onChange={(e) => {
                            educationArr[index]["university"] = e.target.value;
                            setEducationArr([...educationArr]);
                          }}
                        />
                      </div>
                      <div className="space-below">
                        <div
                          className="flex "
                          style={{ justifyContent: "space-between" }}
                        >
                          <div>
                            <p className={`space-top space-below short title`}>
                              {"Start Year"}
                            </p>
                            <DatePicker
                              picker="year"
                              style={{ width: "180px" }}
                              value={startYear ? dayjs(startYear, "YYYY") : ""}
                              format={"YYYY"}
                              onChange={(date, dateString) => {
                                educationArr[index]["startYear"] = dateString;
                                setEducationArr([...educationArr]);
                              }}
                            />
                          </div>
                          <div>
                            <p className={`space-top space-below short title`}>
                              {"End Year"}
                            </p>
                            <DatePicker
                              picker="year"
                              style={{ width: "180px" }}
                              value={endYear ? dayjs(endYear, "YYYY") : ""}
                              format={"YYYY"}
                              onChange={(date, dateString) => {
                                educationArr[index]["endYear"] = dateString;
                                setEducationArr([...educationArr]);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <Divider className="space-top space-below meduim" />
                    </>
                  );
                }
              )}
              <div className="full-width text-right">
                <Button type="link" onClick={onClickAddEducation}>
                  + Add Education
                </Button>
              </div>
            </div>
          </>
        </Panel>
      </Collapse>
    </div>
  );
}

export default EducationSection;
