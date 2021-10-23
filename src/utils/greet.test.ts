import { greet } from "./greet";

test("greet returns a string, greeting the passed name", () => {
  expect(greet("World")).toBe("Welcome to World's favourite places!");
  expect(greet("Richard")).toBe("Welcome to Richard's favourite places!");
  expect(greet("Academy Scholars")).toBe(
    "Welcome to Academy Scholars's favourite places!"
  );
});
