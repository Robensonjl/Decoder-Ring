// Write your tests here!
const { substitution } = require("../src/substitution");
const { assert } = require("chai");

describe("Substitution()", () => {
  describe("Common case error handling", () => {
    const input = "message";

    it("should return 'false' if no substitution alphabet is input", () => {
      const actual = substitution(input);
      assert.isFalse(actual)
    });
    it("should return 'false' if the input substitution alphabet isn't exactly 26 characters", () => {
      const alphabet = "short"
      const actual = substitution(input, alphabet);
      assert.isFalse(actual)
    });
    it("should return 'false' if any character in the substitution alphabet appears more than once", () => {
      const alphabet = ".waeszr4xtfcygv;hbijn}km11";
      const actual = substitution(input, alphabet);
      assert.isFalse(actual)
    });
  });
  describe("When encoding a message", () => {
    const input = "The World may never know";
    const alphabet = ".waeszr4xtfcygv;hbijn}kmp1";
    const actual = substitution(input, alphabet);
    const expected = "j4s kvbce y.p gs}sb fgvk";

    it("should use the substitution alphabet to encode the message", () => {
      assert.equal(actual, expected);
    });
    it("should work with keys containing unique characters", () => {
      assert.equal(actual, expected);
    });
    it("should perserve spaces", () => {
      assert.equal(actual, expected);
    });
  });
  describe("when decoding a message", () => {
    const input = "j4s kvbce y.p gs}sb fgvk";
    const alphabet = ".waeszr4xtfcygv;hbijn}kmp1";
    const actual = substitution(input, alphabet, false);
    const expected = "the world may never know";

    it("should decode the message using the given substitution alphabet", () => {
        assert.equal(actual, expected);
    });
    it("should accomodate keys containing unique characters", () => {
        assert.equal(actual, expected);
    });
    it("should perserve spaces", () => {
        assert.equal(actual, expected);
    });
  });
});
