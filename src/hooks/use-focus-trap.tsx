import { useCallback, useEffect, useRef } from "react";

/**
 * The `useFocusTrap` function is a custom React hook that traps focus within a specified element when
 * it is active.
 * @param {boolean} [active=true] - The `active` parameter is a boolean value that determines whether
 * the focus trap is active or not. If `active` is `true`, the focus trap will be active and handle
 * keyboard events to trap focus within the specified element. If `active` is `false`, the focus trap
 * will be inactive
 * @returns The `useFocusTrap` function returns a callback function that takes an `HTMLElement` as an
 * argument and sets the focus on that element. It also returns a `ref` object that holds a reference
 * to the element.
 */
export function useFocusTrap(
    active: boolean = true
): (element: HTMLElement | null) => void {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!active) return undefined;

        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === "Tab" && ref.current) {
                e.preventDefault();
                const focusableElements: HTMLElement[] =
                    (ref.current &&
                        Array.from(
                            ref.current.querySelectorAll(
                                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                            )
                        )) ||
                    [];

                if (!focusableElements.length) {
                    return;
                }

                const activeElementIndex = focusableElements.indexOf(
                    document.activeElement as HTMLElement
                );

                const getNextFocusableElement = (
                    currentIndex: number,
                    shiftKey: boolean
                ) => {
                    const nextIndex = shiftKey
                        ? currentIndex - 1
                        : currentIndex + 1;
                    if (
                        nextIndex < 0 ||
                        nextIndex >= focusableElements.length
                    ) {
                        return shiftKey
                            ? focusableElements[focusableElements.length - 1]
                            : focusableElements[0];
                    }
                    return focusableElements[nextIndex];
                };

                getNextFocusableElement(activeElementIndex, e.shiftKey).focus();
            }
        };
        document.addEventListener("keydown", handleKeyPress);
        return () => document.removeEventListener("keydown", handleKeyPress);
    }, [active]);

    return useCallback(
        (element: HTMLElement | null) => {
            if (!active) return undefined;
            if (!ref.current) ref.current = element;
            if (ref.current) ref.current.focus();
            return ref;
        },
        [active]
    );
}
