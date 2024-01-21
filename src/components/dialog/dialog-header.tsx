import React, { PropsWithChildren } from "react";

const DialogHeader: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className="dialog__header">{children}</div>;
};
export default DialogHeader;
