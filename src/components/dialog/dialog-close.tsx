import React from "react";

export interface IDialogCloseProps {
    closeOnClik?: boolean;
    onClick?: () => void;
}
const DialogClose: React.FC<IDialogCloseProps> = ({ onClick = null }) => {
    return (
        <button
            className="dialog__close"
            type="button"
            title="Close Dialog"
            tabIndex={0}
            onClick={typeof onClick === "function" && onClick}
            data-testid="dialog-close"
        >
            &times;
        </button>
    );
};
export default DialogClose;
