/* eslint-disable react/prop-types */
import React, { PropsWithChildren } from 'react';

const DialogHeader: React.FC<PropsWithChildren> = ({ children }) => <div className="dialog__header">{children}</div>;
export default DialogHeader;
