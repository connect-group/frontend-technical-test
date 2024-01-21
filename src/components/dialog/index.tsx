import React, { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import DialogRoot, { IDialogProps } from "./dialog-root";
import "./style.scss";

const Dialog: React.FC<IDialogProps & PropsWithChildren> = ({
    children,
    closeOnEsc = false,
    isOpen = false,
    onClose = () => {},
}) => {
    return isOpen
        ? createPortal(
              <DialogRoot
                  closeOnEsc={closeOnEsc}
                  isOpen={isOpen}
                  onClose={onClose}
              >
                  {children}
              </DialogRoot>,
              document.body
          )
        : null;
};
export default Dialog;
