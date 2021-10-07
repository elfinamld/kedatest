import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RadioWithOther from ".";

describe("<RadioWithOther />", () => {
  test("Choose Radio Button", () => {
    const { getByDisplayValue } = render(<RadioWithOther />);
    const opt = getByDisplayValue("opt1");
    const opt2 = getByDisplayValue("opt2");
    fireEvent.change(opt, { target: { value: "opt2" } });
    expect(opt.value).toBe("opt2");
    fireEvent.change(opt2, { target: { value: "opt1" } });
    expect(opt2.value).toBe("opt1");
  });

  test("render text", () => {
    render(<RadioWithOther />);
    const inputEl = screen.getByTestId("text-field");
    const inputEl1 = screen.getByTestId("text-field-1");
    const inputEl2 = screen.getByTestId("text-field-2");
    const inputEl3 = screen.getByTestId("text-field-3");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
    expect(inputEl1).toBeInTheDocument();
    expect(inputEl1).toHaveAttribute("type", "text");
    expect(inputEl2).toBeInTheDocument();
    expect(inputEl2).toHaveAttribute("type", "text");
    expect(inputEl3).toBeInTheDocument();
    expect(inputEl3).toHaveAttribute("type", "text");
  });

  test("pass string in input field", () => {
    render(<RadioWithOther />);
    const inputEl = screen.getByTestId("text-field");
    userEvent.type(inputEl, "Testing Text-Field");
    expect(inputEl).toHaveValue("Testing Text-Field");
  });
});
