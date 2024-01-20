import React, { PropsWithChildren } from "react";

const Price: React.FC<PropsWithChildren> = ({ children }) => (
    <p className="vehicle__content-price" data-testid="vehicle-price">
        From {children}
    </p>
);
export default Price;
