// Write your tests here!
const { polybius } = require("../src/polybius");
const { assert } = require("chai");

describe("Polybius()", () => {
  describe("Common case error handling", () => {
    it("Should return 'false' when the function is called with no input", () => {
      const actual = polybius();
      assert.isFalse(actual);
    });
    it("should return false when the length of encoded numbers is odd", () => {
      const input = "2111412251 4233 4231133";
      const actual = polybius(input, false);
      assert.isFalse(actual);
    });
  });
  describe("When encoding", () => {
    it("should encode a message by translating each letter into a number pair", () => {
      const input = "strenuous";
      const expected = "344424513354435434";
      const actual = polybius(input);
      assert.equal(actual, expected);
    });
    it("should translate both 'i' and 'j' to 42", () => {
      const input = "supercalifragilisticexpialidocious";
      const expected =
        "34545351243111134212241122421342344442315135534211134241433142435434";
      const actual = polybius(input);
      assert.equal(actual, expected);
    });
    it("should preserve spaces", () => {
      const input = "this was strenuous";
      const expected = "44324234 251134 344424513354435434";
      const actual = polybius(input);
      assert.equal(actual, expected);
    });
  });
  describe("When decoding", () => {
    const input = "44324234 251134 344424513354435434 42";
    const expected = "th(i/j)s was strenuous (i/j)";
    const actual = polybius(input, false);
    it("should properly decode a coded message", () => {
      assert.equal(actual, expected);
    });
    it("should translate '42' to both 'i' & 'j'", () => {
      assert.include(actual, "i");
      assert.include(actual, "j");
    });
    it("should preserve spaces", () => {
        assert.equal(actual, expected);
    })
  });
});
