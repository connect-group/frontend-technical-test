import React from "react";

export interface IDialogCloseProps {
    onClick?: () => void;
}
const DialogClose: React.FC<IDialogCloseProps> = ({ onClick = null }) => {
    return (
        <button
            className="dialog__close"
            type="button"
            title="Close Dialog"
            tabIndex={0}
            onClick={(typeof onClick === "function" && onClick) || null}
            data-testid="dialog-close"
        >
            &times;
        </button>
    );
};
export default DialogClose;
