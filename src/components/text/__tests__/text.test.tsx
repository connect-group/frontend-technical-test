import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "../";

describe("<Text />", () => {
    it("renders the component with default span tag", () => {
        render(<Text>Test content</Text>);
        const textElement = screen.getByText("Test content");
        expect(textElement).toBeDefined();
        expect(textElement.tagName).toBe("SPAN");
    });

    it('renders the component with a custom tag when "as" prop is provided', () => {
        render(<Text as="p">Test content</Text>);
        const textElement = screen.getByText("Test content");
        expect(textElement).toBeDefined();
        expect(textElement.tagName).toBe("P");
    });
});
