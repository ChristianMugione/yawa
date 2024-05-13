import { expect, test } from "vitest";
import { oneDecimal } from "./oneDecimal";

test("10.123 to be 10.1", () => {
  expect(oneDecimal(10.123)).toBe(10.1);
});

test("10 to be 10.0", () => {
  expect(oneDecimal(10)).toBe(10.0);
});
