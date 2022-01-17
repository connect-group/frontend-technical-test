import React from "react";
import Table from "../Table";
import useWindowSize from "../../hook/useWindowSize";
import { useUiContext } from "../../contexts/UIContext";
import "./style.scss";

const VehicleDetail = ({
    title,
    description,
    url,
    price,
    imageMobile,
    imageDesktop,
    modelYear,
    meta,
}) => {
    const { width } = useWindowSize();
    const { setShowVehicle, setShowModal } = useUiContext();
    const isMobile = width <= 768;

    const onClick = () => {
        setShowModal(true);
        setShowVehicle(title);
    };

    return (
        <li
            key={title}
            className="vehicle-detail fadeInUp"
            onClick={onClick}
            title={url ? `Click for more details of ${title}` : title}
        >
            {url ? (
                <a href={`#${title}`}>
                    <img
                        src={isMobile ? imageMobile : imageDesktop}
                        alt={title}
                    />
                </a>
            ) : (
                <img src={isMobile ? imageMobile : imageDesktop} alt={title} />
            )}
            <div className="body">
                <h5>{title}</h5>
                <p>From {price}</p>
                <p className="description">{description}</p>
            </div>
            {meta && (
                <div className="meta">
                    <Table
                        headers={["More Detail", ""]}
                        body={[
                            ["Model Year", modelYear],
                            ["Body Styles", meta.bodystyles],
                            ["Passengers", meta.passengers],
                            ["CO2 Emissions", meta.emissions.value + ` g/km`],
                            [
                                "Drivetrain",
                                meta.drivetrain.map((d, i) => {
                                    if (i < meta.drivetrain.length - 1) {
                                        return d + ` and `;
                                    }
                                    return d;
                                }),
                            ],
                        ]}
                    />
                </div>
            )}
        </li>
    );
};

export default VehicleDetail;
