import React from "react";

const ShowMore: React.FC = () => {
    return (
        <button
            className="vehicle__show_more"
            type="button"
            title="Show vehicle extra informations"
            tabIndex={-1}
        >
            More
        </button>
    );
};

export default ShowMore;
