import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DialogClose from "../dialog-close";

describe("<DialogClose />", () => {
    it("renders a close button", () => {
        const { getByTestId } = render(<DialogClose />);
        const closeButton = getByTestId("dialog-close");
        expect(closeButton).toBeDefined();
    });

    it("calls the onClick handler when clicked", () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<DialogClose onClick={handleClick} />);
        fireEvent.click(getByTestId("dialog-close"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
