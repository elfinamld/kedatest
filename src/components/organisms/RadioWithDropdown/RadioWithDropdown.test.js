import { fireEvent, render, screen, within } from "@testing-library/react";
import RadioWithDropdown from ".";

describe("<RadioWithDropdown />", () => {
  test("Choose Radio Button", () => {
    const { getByDisplayValue } = render(<RadioWithDropdown />);
    const opt = getByDisplayValue("opt1");
    const opt2 = getByDisplayValue("opt2");
    fireEvent.change(opt, { target: { value: "opt2" } });
    fireEvent.change(opt2, { target: { value: "opt1" } });
    expect(opt.value).toBe("opt2");
    expect(opt2.value).toBe("opt1");
  });

  test("select value", () => {
    const { getByRole } = render(<RadioWithDropdown />);

    fireEvent.mouseDown(getByRole("button"));
    const listbox = within(getByRole("listbox"));
    fireEvent.click(listbox.getByText("JavaScript"));
    expect(screen.getByLabelText("JavaScript")).toHaveTextContent("JavaScript");
  });
});
