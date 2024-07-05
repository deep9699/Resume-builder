import { BuilderContext } from "@/contexts/builderContext";
import { Collapse, Input, Space } from "antd";
import React, { useContext } from "react";
const { Panel } = Collapse || {};

function HeaderSection() {
  const {
    fullName,
    setFullName,
    phoneNumber,
    setPhoneNumber,
    emailAddress,
    setEmailAddress,
    linkedInLink,
    setLinkedInLink,
    portfolioLink,
    setPortfolioLink,
  } = useContext(BuilderContext) || {};

  const infoArr = [
    {
      title: "Full Name",
      value: fullName,
      setter: setFullName,
    },
    {
      title: "Phone Number",
      value: phoneNumber,
      setter: setPhoneNumber,
    },
    {
      title: "Email Address",
      value: emailAddress,
      setter: setEmailAddress,
    },
    {
      title: "LinkedIn Link",
      value: linkedInLink,
      setter: setLinkedInLink,
    },
    {
      title: "Portfolio Link",
      value: portfolioLink,
      setter: setPortfolioLink,
    },
  ];

  return (
    <div>
      <Collapse
        collapsible="header"
        className="space-top"
        expandIconPosition="right"
      >
        <Panel header="Header">
          <>
            {infoArr.map(({ title, value, setter }) => {
              return (
                <div className="space-below">
                  <p className={`space-top space-below short title`}>{title}</p>
                  <Input
                    value={value}
                    onChange={(e) => {
                      setter(e.target.value);
                    }}
                  />
                </div>
              );
            })}
          </>
        </Panel>
      </Collapse>
    </div>
  );
}

export default HeaderSection;
