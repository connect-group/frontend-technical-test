/* eslint-disable react/prop-types */
import React, { PropsWithChildren } from 'react';

const DialogPanel: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="dialog-panel" id="dialog-panel">
    {children}
  </div>
);
export default DialogPanel;
