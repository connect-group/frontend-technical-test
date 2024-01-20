import React, { PropsWithChildren } from "react";
const DialogPanel: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="dialog-panel" id="dialog-panel">
            {children}
        </div>
    );
};
export default DialogPanel;
