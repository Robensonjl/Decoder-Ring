// Write your tests here!
const assert = require("chai").assert;
const { caesar } = require("../src/caesar");

describe("Caesar()", () => {
  //error handling
  describe("Common case error handling", () => {
    it("returns 'false' if the shift value is equal to 0, or not present", () => {
      const input = "Why is pizza mostly bread";
      const shift = 0;
      const actual = caesar(input, shift);
      assert.isFalse(
        actual,
        "Add a guard clause to protect against nonexistent shift values"
      );
    });
    it("returns 'false' if the shift value is greater than 25", () => {
      const input = "Don't know why this was so hard";
      const shift = 84;
      const actual = caesar(input, shift);
      assert.isFalse(
        actual,
        "Add a guard clause to protect against shift values greater than the length of the alphabet"
      );
    });
    it("returns 'false' if the shift value is less than -25", () => {
      const input = "testing is easy";
      const shift = -34;
      const actual = caesar(input, shift);
      assert.isFalse(
        actual,
        "Add a guard clause to protect against shift values lower than -25"
      );
    });
  });
  //encoding messages
  describe("When encoding a message", () => {
    it("should encode the message by shifting it's letters", () => {
      const input = "Zebra Magazine";
      const shift = 3;
      const actual = caesar(input, shift);
      const expected = "cheud pdjdclqh";
      assert.equal(
        actual,
        expected,
        "Please write the function to shift the letters of the input message"
      );
    });
    it("should ignore capital letters", () => {
      const input = "tHiS iS tEdIoUs";
      const shift = 20;
      const expected = "nbcm cm nyxciom";
      const actual = caesar(input, shift);
      assert.equal(
        actual,
        expected,
        "Please write the function to ignore capital letters"
      );
    });
    it("should return spaces & symbols to their original location from the input string, in the encoded output", () => {
      const input = "a message.";
      const shift = 3;
      const actual = caesar(input, shift);
      const expected = "d phvvdjh.";
      assert.equal(actual, expected, "Hint: Use '.includes()'");
    });
    it("should handle instances where the message includes letters at the end of the alphabet", () => {
      const input = "buzz bozo czar";
      const shift = 20;
      const actual = caesar(input, shift);
      const expected = "vott viti wtul";
      assert.equal(actual, expected, "Hint: use the remainder operator (%)");
    });
    it("should accomidate negative shift values", () => {
      const input = "zebra magazine";
      const shift = -3;
      const actual = caesar(input, shift);
      const expected = "wbyox jxdxwfkb";
      assert.equal(actual, expected);
    });
  });
  //decoding messages
  describe("When decoding a message", () => {
    it("should decode the message by shifting the letters in the opposite direction", () => {
      const input = "cheud pdjdclqh";
      const shift = 3;
      const actual = caesar(input, shift, false);
      const expected = "zebra magazine";
      assert.equal(actual, expected);
    });
    it("should return spaces & symbols to their original location from the input string, in the encoded output", () => {
      const input = "d phvvdjh.";
      const shift = 3;
      const actual = caesar(input, shift, false);
      const expected = "a message.";
      assert.equal(actual, expected);
    });
    it("should ignore capital letters", () => {
      const input = "nBcM cM nYxCiOm";
      const shift = 20;
      const expected = "this is tedious";
      const actual = caesar(input, shift, false);
      assert.equal(actual, expected);
    });
    it("should handle instances where the message includes letters at the end of the alphabet", () => {
      const input = "vott viti wtul";
      const shift = 20;
      const actual = caesar(input, shift, false);
      const expected = "buzz bozo czar";
      assert.equal(actual, expected);
    });
    it("should accomidate negative shift values", () => {
      const input = "wbyox jxdxwfkb";
      const shift = -3;
      const actual = caesar(input, shift, false);
      const expected = "zebra magazine";
      assert.equal(actual, expected);
    });
  });
});
