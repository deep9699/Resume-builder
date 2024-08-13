import { BuilderContext } from "@/contexts/builderContext";
import { Button, Modal } from "antd";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import React, { useContext, useState } from "react";

const DragHandle = sortableHandle(() => (
  <span style={{ cursor: "pointer" }}>::</span>
));

const SortableItem = sortableElement(({ value }) => (
  <div className="section-list-item space-top flex" style={{ zIndex: "1000" }}>
    <div className="full-width">
      <DragHandle />
      <span style={{ pointerEvents: "none" }} className="space-left short">
        {value}
      </span>
    </div>
  </div>
));

const SortableContainer = sortableContainer(({ children }) => {
  return <div>{children}</div>;
});

function ReArrangeSection() {
  const [openReArrangeModal, setOpenReArrangeModal] = useState(false);

  const { sectionsArr, setSectionsArr } = useContext(BuilderContext);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const startIndex = oldIndex < 0 ? sectionsArr.length + oldIndex : oldIndex;
    if (startIndex >= 0 && startIndex < sectionsArr.length) {
      const endIndex = newIndex < 0 ? sectionsArr.length + newIndex : newIndex;
      const [item] = sectionsArr.splice(oldIndex, 1);
      sectionsArr.splice(endIndex, 0, item);
      setSectionsArr([...sectionsArr]);
    }
  };

  return (
    <>
      <Button
        size="small"
        onClick={() => {
          setOpenReArrangeModal(true);
        }}
      >
        Rearrange Sections
      </Button>
      <Modal
        open={openReArrangeModal}
        onCancel={() => {
          setOpenReArrangeModal(false);
        }}
        onClose={() => {
          setOpenReArrangeModal(false);
        }}
        title={"Rearrange Section"}
        footer={null}
        width={700}
      >
        <>
          <SortableContainer onSortEnd={onSortEnd} useDragHandle>
            {sectionsArr.map((item, index) => (
              <SortableItem
                key={`item-${item.title}`}
                index={index}
                value={item.title}
              />
            ))}
          </SortableContainer>
        </>
      </Modal>
    </>
  );
}

export default ReArrangeSection;
