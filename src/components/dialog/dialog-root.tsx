/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { PropsWithChildren } from 'react';
import { useFocusTrap } from '../../hooks/use-focus-trap';

export interface IDialogProps {
  isOpen?: boolean;
  onClose?: () => void;
  closeOnEsc?: boolean;
}
const DialogRoot: React.FC<IDialogProps & PropsWithChildren> = ({
  children,
  isOpen = false,
  onClose = null,
  closeOnEsc = false,
}) => {
  const ref = useFocusTrap();

  return (
    <div
      className="dialog"
      role="dialog"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-panel"
      aria-modal="true"
      tabIndex={1}
      data-testid="dialog"
      ref={ref}
      onKeyDown={(e) => e.key === 'Escape'
                && closeOnEsc
                && typeof onClose === 'function'
                && onClose()}
    >
      <div className="dialog_root">
        {' '}
        {children}
      </div>
    </div>
  );
};
export default DialogRoot;
