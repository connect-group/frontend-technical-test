import React from "react";

export interface IDialogOverlayProps {
    closeOnClick?: boolean;
    onClick?: () => void;
}
const DialogOverlay: React.FC<IDialogOverlayProps> = ({
    closeOnClick = true,
    onClick = null,
}) => {
    return (
        <div
            className="dialog__overlay"
            onClick={
                (closeOnClick && typeof onClick === "function" && onClick) ||
                null
            }
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
                e.key === "Enter" &&
                closeOnClick &&
                typeof onClick === "function" &&
                onClick()
            }
        />
    );
};
export default DialogOverlay;
