// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  //regular english alphabet, split into an array
  const engAlpha = "abcdefghijklmnopqrstuvwxyz".split("");

  function substitution(input, alphabet, encode = true) {
    try {
      //guard clause: if no 'alphabet' argument was input, throw an error
      if (alphabet === undefined)
        throw new ReferenceError("Input must include a valid cipher alphabet.");
      //split the input alphabet into an array, after making all of it's letters lowercase
      const cipherAlpha = alphabet.toLowerCase().split("");
      //check the input cipher alphabet for errors
      legalCipher(cipherAlpha);
      //make the input message lowercase, & split it into an array
      const lowInput = input.toLowerCase().split("");
      //remap the input message array to a new array that has been opperated on by the de/encoding function
      const doSubstitution = lowInput.map((element) => {
        return encode
          ? subChar(element, engAlpha, cipherAlpha) //encode the message when true
          : subChar(element, cipherAlpha, engAlpha); //decode the message when false
      });
      //join the final message array into a complete string
      const result = doSubstitution.join("");
      return result;
    } catch (error) {
      console.error(`${error}`);
      return false;
    }
  }
  //throws an error if the cipher alphabet contains properties or elements that break the main function
  function legalCipher(cipherAlpha) {
    //if the length of the input cipher alphabet isn't 26 characters, throw an error
    if (cipherAlpha.length !== 26)
      throw new Error("Cipher alphabet must be 26 letters long.");
    //filter through the cipher alphabet array & find the characters that appear at more than one index
    const findDuplicates = (cipherAlpha) =>
      cipherAlpha.filter((letter, index) => {
        return cipherAlpha.indexOf(letter) !== index;
      });
    //reassign the findDuplicates function to a variable, for readability
    const returnedDuplicates = findDuplicates(cipherAlpha);
    //if the amount of duplicates returned from the above function is anything other than '0', throw an error
    if (returnedDuplicates.length !== 0)
      throw new Error("Cipher must not contain duplicate letters.");
  }

  //reassigns the input element from the origin alphabet, to it's identical index in the intended alphabet
  function subChar(element, originAlpha, intendedAlpha) {
    //guard clause: if the element being operated on is a whitespace character, return it
    if (!element.match("\\S")) return element;
    //find the index of the current element, from its position in the origin alphabet
    const subIndex = originAlpha.indexOf(element);
    //return the letter at the identical index of the letter in the origin alphabet
    return intendedAlpha[subIndex];
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
