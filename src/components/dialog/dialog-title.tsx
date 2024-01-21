/* eslint-disable react/prop-types */
import React, { PropsWithChildren } from 'react';

const DialogTitle: React.FC<PropsWithChildren> = ({ children }) => <div className="dialog__title">{children}</div>;
export default DialogTitle;
