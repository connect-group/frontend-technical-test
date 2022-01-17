import React from "react";
import { UiProvider } from "./contexts/UIContext";
import VehicleList from "./components/VehicleList";

function App() {
    return (
        <UiProvider>
            <VehicleList />
        </UiProvider>
    );
}

export default App;
