import React from "react";

export interface IDialogOverlayProps {
    closeOnClik?: boolean;
    onClick?: () => void;
}
const DialogOverlay: React.FC<IDialogOverlayProps> = ({
    closeOnClik = true,
    onClick = null,
}) => {
    return (
        <div
            className="dialog__overlay"
            onClick={closeOnClik && typeof onClick === "function" && onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
                e.key === "Enter" &&
                closeOnClik &&
                typeof onClick === "function" &&
                onClick()
            }
        />
    );
};
export default DialogOverlay;
