import React from "react";
import Button from "../button";

const ShowMore: React.FC = () => {
    return (
        <Button
            className="vehicle__show_more"
            type="button"
            title="Show vehicle extra informations"
            aria-label="Show vehicle extra informations"
            tabIndex={-1}
        >
            More
        </Button>
    );
};

export default ShowMore;
