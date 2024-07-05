import React, { useContext } from "react";
import { BuilderContext } from "@/contexts/builderContext";
import { Collapse, Input } from "antd";
const { Panel } = Collapse || {};

function SummarySection() {
  const { summaryTitle, setSummaryTitle, summaryDesc, setSummaryDesc } =
    useContext(BuilderContext) || {};

  return (
    <div>
      <Collapse
        collapsible="header"
        className="space-top"
        expandIconPosition="right"
      >
        <Panel header="Summary">
          <>
            <div className="space-below">
              <p className={`space-top space-below short title`}>
                {"Summary Title"}
              </p>
              <Input
                value={summaryTitle}
                onChange={(e) => {
                  setSummaryTitle(e.target.value);
                }}
              />
            </div>
            <div className="space-below">
              <p className={`space-top space-below short title`}>
                {"Summary Description"}
              </p>
              <Input.TextArea
                value={summaryDesc}
                rows={6}
                onChange={(e) => {
                  setSummaryDesc(e.target.value);
                }}
              />
            </div>
          </>
        </Panel>
      </Collapse>
    </div>
  );
}

export default SummarySection;
