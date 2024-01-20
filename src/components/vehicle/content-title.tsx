import React, { PropsWithChildren } from "react";

const ContentTitle: React.FC<PropsWithChildren> = ({ children }) => {
    return <h4 className="vehicle__content-title" data-testid="vehicle-title">{children}</h4>
}
export default ContentTitle