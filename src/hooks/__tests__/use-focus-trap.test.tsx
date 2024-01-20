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
    test("should trap focus when active", () => {
        render(<TestComponent active={true} />);

        act(() => {
            fireEvent.keyDown(document, { key: "Tab" });
        });

        const trappedButton = screen.getByText("Button 1");

        expect(document.activeElement).toBe(trappedButton);

        act(() => {
            fireEvent.keyDown(document, { key: "Tab" });
        });
        expect(document.activeElement).not.toBe(trappedButton);

        act(() => {
            fireEvent.keyDown(document, { key: "Tab", shiftKey: true });
        });
        expect(document.activeElement).toBe(trappedButton);

        act(() => {
            fireEvent.keyDown(document, { key: "Tab", shiftKey: true });
        });
        expect(document.activeElement).not.toBe(trappedButton);
    });

    test("should not trap focus when inactive", () => {
        render(<TestComponent />);

        const trappedButton = screen.getByText("Button 1");

        expect(document.activeElement).not.toBe(trappedButton);
    });
});
