import { fireEvent, render } from "@testing-library/react";
import RadioWithDate from ".";

describe("<RadioWithDate />", () => {
  test("choose radio button", () => {
    const { getByLabelText } = render(<RadioWithDate />);
    const opt1 = getByLabelText("Representative");
    const opt2 = getByLabelText("Representative");
    fireEvent.change(opt1, { target: { value: "opt1" } });
    expect(opt1.value).toBe("opt1");
    fireEvent.change(opt2, { target: { value: "opt1" } });
    expect(opt2.value).toBe("opt1");
  });

  test("input date", () => {
    const { getByLabelText } = render(<RadioWithDate />);
    const date = getByLabelText("date-picker");
    fireEvent.click(date);
    fireEvent.change(date, { target: { value: "2025-10-13" } });
    expect(date.value).toBe("2025-10-13");
  });
});
