import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RadioWithInput from ".";

describe("<RadioWithInput />", () => {
  test("Choose Radio Button", () => {
    const { getByLabelText } = render(<RadioWithInput />);
    const opt1 = getByLabelText("Representative");
    fireEvent.change(opt1, { target: { value: "opt1" } });
    expect(opt1.value).toBe("opt1");
  });

  test("render text input", () => {
    render(<RadioWithInput />);
    const inputEl = screen.getByTestId("text-field");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });

  test("pass string in input field", () => {
    render(<RadioWithInput />);
    const inputEl = screen.getByTestId("text-field");
    userEvent.type(inputEl, "Testing Text-Field");
    expect(screen.getByTestId("text-field")).toHaveValue("Testing Text-Field");
  });
});
