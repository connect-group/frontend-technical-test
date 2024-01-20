import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useFocusTrap } from "../use-focus-trap";

const TestComponent: React.FC<{ active?: boolean }> = ({ active = false }) => {
    const trapFocus = useFocusTrap(active);

    return (
        <div ref={trapFocus}>
            <button>Button 1</button>
            <button> Button 2</button>
        </div>
    );
};

describe("Test useFocusTrap", () => {
    // Test to verify focus is trapped within the component when active
    test("should trap focus when active", () => {
        // Render the component with the focus trap active
        render(<TestComponent active={true} />);
        // Simulate tab key press to move focus
        act(() => {
            fireEvent.keyDown(document, { key: "Tab" });
        });
        // Get a reference to the first button which should be focused
        const trappedButton = screen.getByText("Button 1");
        // Check if the first button is indeed focused
        expect(document.activeElement).toBe(trappedButton);
        // Simulate another tab key press to move focus away from the first button
        act(() => {
            fireEvent.keyDown(document, { key: "Tab" });
        });
        // Verify that the focus has moved away from the first button
        expect(document.activeElement).not.toBe(trappedButton);
        // Simulate tab key press with shift to move focus in reverse
        act(() => {
            fireEvent.keyDown(document, { key: "Tab", shiftKey: true });
        });
        // Check if focus has moved back to the first button
        expect(document.activeElement).toBe(trappedButton);
        // Simulate another shift+tab key press to move focus away again
        act(() => {
            fireEvent.keyDown(document, { key: "Tab", shiftKey: true });
        });
        // Verify that the focus is not on the first button anymore
        expect(document.activeElement).not.toBe(trappedButton);
    });

    // Test to verify that focus is not trapped when the component is inactive
    test("should not trap focus when inactive", () => {
        // Render the component without activating the focus trap
        render(<TestComponent />);
        // Get a reference to the first button which should not be focused
        const trappedButton = screen.getByText("Button 1");
        // Check if the first button is not focused
        expect(document.activeElement).not.toBe(trappedButton);
    });
});
