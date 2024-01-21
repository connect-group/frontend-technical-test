/* eslint-disable react/prop-types */
import React, { PropsWithChildren } from 'react';

const DialogContainer: React.FC<PropsWithChildren> = ({ children }) => <div className="dialog__container">{children}</div>;
export default DialogContainer;
