import React, { createContext, useContext, useEffect, useState } from "react";

const UIContext = createContext();

export const UiProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [showVehicle, setShowVehicle] = useState("");

    useEffect(() => {
        const hasHash = window.location.hash;
        if (hasHash) {
            setShowModal(true);
            setShowVehicle(hasHash.slice(1));
        }
    }, []);

    return (
        <UIContext.Provider
            value={{ showModal, setShowModal, showVehicle, setShowVehicle }}
        >
            {children}
        </UIContext.Provider>
    );
};

// React hook for interfacing with context
export const useUiContext = () => {
    const context = useContext(UIContext);
    return context;
};
