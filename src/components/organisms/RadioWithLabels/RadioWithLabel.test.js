import { render, fireEvent } from "@testing-library/react";
import RadioWithLabels from ".";

test("Radio With Label", () => {
  const { getByLabelText } = render(<RadioWithLabels />);
  const radioA = getByLabelText("Radio A");
  const radioB = getByLabelText("Radio B");
  const radioC = getByLabelText("Radio C");
  fireEvent.change(radioA, { target: { value: "Radio B" } });
  expect(radioA.value).toBe("Radio B");
  fireEvent.change(radioB, { target: { value: "Radio C" } });
  expect(radioB.value).toBe("Radio C");
  fireEvent.change(radioC, { target: { value: "Radio A" } });
  expect(radioC.value).toBe("Radio A");
});
