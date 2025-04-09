import { expect } from "chai";
import { add } from "./calculator";

describe("String Calculator", () => {
  it("returns 0 for empty string", () => {
    expect(add("")).to.equal(0);
  });

  it("returns number for a single input", () => {
    expect(add("1")).to.equal(1);
  });

  it("returns sum of two numbers", () => {
    expect(add("1,5")).to.equal(6);
  });

  it("handles multiple numbers", () => {
    expect(add("1,2,3,4")).to.equal(10);
  });

  it("supports new lines as delimiters", () => {
    expect(add("1\n2,3")).to.equal(6);
  });

  it("supports custom delimiter", () => {
    expect(add("//;\n1;2")).to.equal(3);
  });

  it("throws on negative number", () => {
    expect(() => add("1,-2")).to.throw("negative numbers not allowed -2");
  });

  it("shows all negative numbers in exception", () => {
    expect(() => add("1,-2,3,-5")).to.throw("negative numbers not allowed -2,-5");
  });
});
