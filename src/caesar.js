// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    try {
      //final message placeholder variable
      let message = "";
      //if the shift input is nonexsistent--or equal to zero--or is less than -25 or greater than 25 throw an error message
      if (!shift || shift < -25 || shift > 25)
        throw new RangeError("The shift value needs to be between 25 & -25");
      //should the user want the message decoded, reverse the direction of the shift
      if (encode == false) shift *= -1;
      //make the input lower case, to make it easier to encode/decode
      const lower = input.toLowerCase();
      //split the newly lower case input into an array of it's values
      const maintainSpace = lower.split("");
      //higher order function, so each element of the input message can be opperated on, individually
      const shiftIt = (element, shift) => {
        //an array of the alphabet
        const alphabet = [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
        ];
        //guard clause: if the element being operated on isn't a lowercase letter, return it
        if (!alphabet.includes(element)) return element;
        //find the index of the current element, from its position in the alphabet
        let preShiftIndex = alphabet.indexOf(element);
        /*add the alphabetically ordered index of the current element to the input shift value, & divide that by 26
        (for negative shifts, we need to add 26 to it again, & then divide by 26 once more)
        the remainder of this equation will be the index of the encoded/decoded element*/
        let postShiftIndex = (((preShiftIndex + shift) % 26) + 26) % 26;
        return alphabet[postShiftIndex];
      };
      //shift the elements of the 'maintainSpace' array, one by one, & map them all into a new array that contains the final message
      const preJoin = maintainSpace.map((element) => shiftIt(element, shift));
      //joins the array of the message into the final, conclusive message
      message = preJoin.join("");
      return message;
    } catch (error) {
      //if the above section has any errors in it; the function stops at the error & returns the error code as well as a 'false' value
      console.error(`${error}`);
      return false;
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
