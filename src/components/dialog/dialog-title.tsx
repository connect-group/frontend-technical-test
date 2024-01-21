import React, { PropsWithChildren } from "react";

const DialogTitle: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className="dialog__title">{children}</div>;
};
export default DialogTitle;
