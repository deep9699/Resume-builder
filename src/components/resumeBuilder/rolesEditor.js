import { BuilderContext } from "@/contexts/builderContext";
import { Button, Input, Modal } from "antd";
import React, { useContext, useState } from "react";

function RolesEditor({ index }) {
  const { experiencesArr, setExperiencesArr } =
    useContext(BuilderContext) || {};

  const [showModal, setShowModal] = useState(false);
  const [roleInput, setRoleInput] = useState("");

  const onAddRole = () => {
    if (roleInput) {
      experiencesArr[index]["roles"].push(roleInput);
      setExperiencesArr([...experiencesArr]);
      setRoleInput("");
    }
  };

  const onClickRoleDelete = (roleIndex) => {
    experiencesArr[index]["roles"].splice(roleIndex, 1);
    setExperiencesArr([...experiencesArr]);
  };

  return (
    <div>
      <Button
        onClick={() => {
          setShowModal(true);
        }}
        type="primary"
      >
        {experiencesArr[index]["roles"].length > 0 ? "Edit" : "Add"} Roles and
        Responsibilities
      </Button>
      <Modal
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        onCancel={() => {
          setShowModal(false);
        }}
        footer={null}
        title="Edit Roles and Responsibilities"
        width={700}
      >
        <div className="space-top flex">
          <Input
            suffix={
              <Button type="link" onClick={onAddRole}>
                + Add
              </Button>
            }
            value={roleInput}
            onChange={(e) => {
              setRoleInput(e.target.value);
            }}
            onPressEnter={onAddRole}
            placeholder="Add Role and Responsibilitie"
          />
        </div>
        <div className="space-top">
          <ul style={{ paddingLeft: "20px" }}>
            {experiencesArr[index]["roles"].map((role, roleIndex) => {
              return (
                <li className="space-top short">
                  <div className="flex flex-center">
                    <div style={{ width: "95%" }}> {role}</div>
                    <div style={{ width: "5%" }}>
                      <Button
                        danger
                        size="small"
                        onClick={() => {
                          onClickRoleDelete(roleIndex);
                        }}
                      >
                        X
                      </Button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Modal>
    </div>
  );
}

export default RolesEditor;
