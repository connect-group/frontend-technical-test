import React, { PropsWithChildren } from "react";

const DialogContainer: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className="dialog__container">{children}</div>;
};
export default DialogContainer;
