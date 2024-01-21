import React, { PropsWithChildren } from "react";
import Heading from "../heading";

const ContentTitle: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Heading
            as="h4"
            className="vehicle__content-title"
            data-testid="vehicle-title"
        >
            {children}
        </Heading>
    );
};
export default ContentTitle;
