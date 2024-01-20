import React from "react";
import useVehiclesStore from "../../store/vehicles-store";
import Dialog from "../dialog";
import DialogClose from "../dialog/dialog-close";
import DialogContainer from "../dialog/dialog-container";
import DialogHeader from "../dialog/dialog-header";
import DialogOverlay from "../dialog/dialog-overlay";
import DialogPanel from "../dialog/dialog-panel";
import DialogTitle from "../dialog/dialog-title";
import Description from "./description";
import Details from "./details";
import "./style.scss";

const VehicleDetail: React.FC = () => {
    const { unselectVehicle, selectedVehicle } = useVehiclesStore();
    return (
        <Dialog
            closeOnEsc={true}
            isOpen={!!selectedVehicle}
            onClose={() => unselectVehicle()}
        >
            <DialogContainer>
                <DialogHeader>
                    <DialogTitle>{selectedVehicle}</DialogTitle>
                    <DialogClose onClick={unselectVehicle} />
                </DialogHeader>
                <DialogPanel>
                    <Description />
                    <Details />
                </DialogPanel>
            </DialogContainer>
            <DialogOverlay onClick={unselectVehicle} />
        </Dialog>
    );
};

export default VehicleDetail;
