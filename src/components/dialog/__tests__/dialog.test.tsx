import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dialog from "..";

describe("<Dialog />", () => {
    it('should render the dialog when "isOpen" is true', () => {
        // Render the Dialog component with the "isOpen" prop set to true
        const { getByText } = render(
            <Dialog isOpen>
                <p>Dialog Content</p>
            </Dialog>
        );
        // Expect the dialog content to  be in the document since "isOpen" is true
        expect(getByText("Dialog Content")).toBeDefined();
    });

    it('should not render the dialog when "isOpen" is false', () => {
        // Render the Dialog component with the "isOpen" prop set to false
        const { queryByText } = render(
            <Dialog isOpen={false}>
                <p>Dialog Content</p>
            </Dialog>
        );

        // Expect the dialog content to not be in the document since "isOpen" is false
        expect(queryByText("Dialog Content")).toBeNull();
    });

    it('should call "onClose" when "closeOnEsc" is true and ESC is pressed', () => {
        // Create a mock function for the onClose callback
        const onCloseMock = jest.fn();
        // Render the Dialog component with "isOpen" and "closeOnEsc" props set to true
        const { getByText } = render(
            <Dialog isOpen closeOnEsc onClose={onCloseMock}>
                <p>Dialog Content</p>
            </Dialog>
        );
        // Simulate a keyDown event with the 'Escape' key on the dialog's content
        fireEvent.keyDown(getByText("Dialog Content"), {
            key: "Escape",
            code: "Escape",
        });
        // Verify that the onClose mock function was called exactly once
        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
});
