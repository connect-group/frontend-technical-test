/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

export interface IDialogOverlayProps {
  closeOnClick?: boolean;
  onClick?: () => void;
}
const DialogOverlay: React.FC<IDialogOverlayProps> = ({
  closeOnClick = true,
  onClick = null,
}) => (
  <div
    className="dialog__overlay"
    onClick={
                (closeOnClick && typeof onClick === 'function' && onClick)
                || null
            }
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter'
                && closeOnClick
                && typeof onClick === 'function'
                && onClick()}
  />
);
export default DialogOverlay;
