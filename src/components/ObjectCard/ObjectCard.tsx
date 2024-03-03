import React from "react";

import { IconButton } from "@components";
import { CloseGrid } from "@components/icons/CloseGrid";

export interface ObjectCardProps {
  onClose?: () => void;
  children: React.ReactNode;
  renderHeader?: React.ReactNode;
}

export function ObjectCard(props: ObjectCardProps) {
  const { onClose, children, renderHeader } = props;
  return (
    <div className="bg-white absolute top-4 right-4 rounded-2xl w-[280px]">
      <div className="pt-2 px-4 pb-2 flex items-center border-b-[#EFF2F7] border-b">
        {renderHeader}
        <IconButton className="ml-auto text-[24px]" onClick={onClose}>
          <CloseGrid />
        </IconButton>
      </div>
      <div className="pt-4 pb-6">{children}</div>
    </div>
  );
}
