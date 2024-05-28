import { add } from "../add";

test("add should give sum of two numbers", () => {
    const result = add(8, 2);
    expect(result).toBe(10);
});