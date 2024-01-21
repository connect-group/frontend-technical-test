import React from "react";
import Button from "../button";

export interface IDialogCloseProps {
    onClick?: () => void;
}
const DialogClose: React.FC<IDialogCloseProps> = ({ onClick = null }) => {
    return (
        <Button
            className="dialog__close"
            type="button"
            title="Close Dialog"
            tabIndex={0}
            onClick={(typeof onClick === "function" && onClick) || null}
            data-testid="dialog-close"
        >
            &times;
        </Button>
    );
};
export default DialogClose;
