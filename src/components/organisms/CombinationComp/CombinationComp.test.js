import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CombinationComp from ".";
import ButtonContained from "../../molecules/ButtonContained";

describe("<CombinationComp />", () => {
  test("render text", () => {
    render(<CombinationComp />);

    const inputEl1 = screen.getByTestId("text-field-1");
    const inputEl2 = screen.getByTestId("text-field-2");
    const inputEl3 = screen.getByTestId("text-field-3");

    expect(inputEl1).toBeInTheDocument();
    expect(inputEl1).toHaveAttribute("type", "text");
    expect(inputEl2).toBeInTheDocument();
    expect(inputEl2).toHaveAttribute("type", "text");
    expect(inputEl3).toBeInTheDocument();
    expect(inputEl3).toHaveAttribute("type", "text");
  });

  test("pass string in input field", () => {
    render(<CombinationComp />);

    const inputEl1 = screen.getByTestId("text-field-1");
    userEvent.type(inputEl1, "Testing Text-Field 1");
    expect(inputEl1).toHaveValue("Testing Text-Field 1");

    const inputEl2 = screen.getByTestId("text-field-2");
    userEvent.type(inputEl2, "Testing Text-Field-2");
    expect(inputEl2).toHaveValue("Testing Text-Field-2");

    const inputEl3 = screen.getByTestId("text-field-3");
    userEvent.type(inputEl3, "Testing Text-Field-3");
    expect(inputEl3).toBeDisabled();
  });

  test("button click", () => {
    render(<CombinationComp />);
    const buttonCancel = screen.getByText("Cancel");
    const buttonOK = screen.getByText("OK");
    fireEvent.click(buttonCancel);
    fireEvent.click(buttonOK);
  });
});
