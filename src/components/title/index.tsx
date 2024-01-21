import React, { PropsWithChildren } from "react";
import "./styles.scss";

const Title: React.FC<PropsWithChildren> = ({ children }) => {
    return <h1 className="title">{children}</h1>;
};
export default Title;
