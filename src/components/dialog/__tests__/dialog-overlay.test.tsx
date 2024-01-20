import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DialogOverlay from "../dialog-overlay";

describe("DialogOverlay", () => {
    it("should render without crashing", () => {
        const { getByRole } = render(<DialogOverlay />);
        expect(getByRole("button")).toBeDefined();
    });

    it("should call onClick when clicked if closeOnClick is true", () => {
        const handleClick = jest.fn();
        const { getByRole } = render(
            <DialogOverlay closeOnClick={true} onClick={handleClick} />
        );
        fireEvent.click(getByRole("button"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("should not call onClick when clicked if closeOnClick is false", () => {
        const handleClick = jest.fn();
        const { getByRole } = render(
            <DialogOverlay closeOnClick={false} onClick={handleClick} />
        );
        fireEvent.click(getByRole("button"));
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('should call onClick when "Enter" key is pressed if closeOnClick is true', () => {
        const handleClick = jest.fn();
        const { getByRole } = render(
            <DialogOverlay closeOnClick={true} onClick={handleClick} />
        );
        fireEvent.keyDown(getByRole("button"), { key: "Enter" });
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when "Enter" key is pressed if closeOnClick is false', () => {
        const handleClick = jest.fn();
        const { getByRole } = render(
            <DialogOverlay closeOnClick={false} onClick={handleClick} />
        );
        fireEvent.keyDown(getByRole("button"), { key: "Enter" });
        expect(handleClick).not.toHaveBeenCalled();
    });
});
