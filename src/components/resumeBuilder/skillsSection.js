import React, { useContext, useState } from "react";
import { BuilderContext } from "@/contexts/builderContext";
import { Button, Collapse, Divider, Dropdown, Input, Space, Tag } from "antd";
const { Panel } = Collapse || {};

function SkillsSection() {
  const [showInput, setShowInput] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  const { skillTitle, setSkillTitle, skillsArr, setSkillsArr } =
    useContext(BuilderContext) || {};

  const onNewSkillEnter = (index) => {
    skillsArr[index]["skills"].push(newSkill);
    setSkillsArr([...skillsArr]);
    setNewSkill("");
    setShowInput(false);
  };

  const onCloseTag = (index, skillIndex) => {
    skillsArr[index]["skills"].splice(skillIndex, 1);
    setSkillsArr([...skillsArr]);
  };

  const onClickDeleteSkill = (index) => {
    skillsArr.splice(index, 1);
    setSkillsArr([...skillsArr]);
  };

  const onClickAddSkill = (type) => {
    skillsArr.push({ label: type == "plain" ? undefined : "", skills: [] });
    setSkillsArr([...skillsArr]);
  };

  const addSkillItem = [
    {
      key: "category",
      label: (
        <>
          <span
            onClick={() => {
              onClickAddSkill("category");
            }}
          >
            Category
          </span>
        </>
      ),
    },
    {
      key: "non-category",
      label: (
        <>
          <span
            onClick={() => {
              onClickAddSkill("plain");
            }}
          >
            Non Category
          </span>
        </>
      ),
    },
  ];

  return (
    <div>
      <Collapse
        collapsible="header"
        className="space-top"
        expandIconPosition="right"
      >
        <Panel header="Skills">
          <>
            <div className="space-below">
              <p className={`space-top space-below short title`}>
                {"Skill Title"}
              </p>
              <Input
                value={skillTitle}
                onChange={(e) => {
                  setSkillTitle(e.target.value);
                }}
              />
            </div>
            <div className="space-below">
              <p className={`space-top space-below short title`}>{"Skills"}</p>
              <Divider className="space-top space-below meduim" />
              {skillsArr.map(({ label, skills }, index) => {
                return (
                  <>
                    <div className="flex flex-center">
                      {label != undefined && (
                        <Input
                          value={label}
                          onChange={(e) => {
                            skillsArr[index]["label"] = e.target.value;
                            setSkillsArr([...skillsArr]);
                          }}
                          style={{ width: "25%" }}
                          placeholder="Category Title"
                        />
                      )}
                      <div
                        style={{
                          width: label == undefined ? "100%" : "70%",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                      >
                        {skills.map((skill, skillIndex) => {
                          return (
                            <Tag
                              closable
                              onClose={() => {
                                onCloseTag(index, skillIndex);
                              }}
                            >
                              {skill}
                            </Tag>
                          );
                        })}
                        {showInput === index ? (
                          <Input
                            style={{ width: "50px", height: "20px" }}
                            value={newSkill}
                            onChange={(e) => {
                              setNewSkill(e.target.value);
                            }}
                            onPressEnter={() => {
                              onNewSkillEnter(index);
                            }}
                            onBlur={() => {
                              onNewSkillEnter(index);
                            }}
                          />
                        ) : (
                          <Tag
                            className={"addSkillArrBtn"}
                            onClick={() => {
                              setShowInput(index);
                            }}
                          >
                            + Add{" "}
                          </Tag>
                        )}
                      </div>
                      <Button
                        style={{ width: "5%" }}
                        size="small"
                        danger
                        type="primary"
                        onClick={() => {
                          onClickDeleteSkill(index);
                        }}
                      >
                        X
                      </Button>
                    </div>
                    <Divider className="space-top space-below meduim" />
                  </>
                );
              })}
              <div className="full-width text-right">
                <Dropdown menu={{ items: addSkillItem }}>
                  <Button type="link">+Add Skill</Button>
                </Dropdown>
              </div>
            </div>
          </>
        </Panel>
      </Collapse>
    </div>
  );
}

export default SkillsSection;
