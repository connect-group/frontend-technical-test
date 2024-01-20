import React, { PropsWithChildren } from "react";

const Description: React.FC<PropsWithChildren> = ({ children }) => (
    <p
        className="vehicle__content-description"
        data-testid="vehicle-description"
    >
        {children}
    </p>
);
export default Description;
