// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  //a character map object, containing each letter & it's location on the grid
  const charMap = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    "(i/j)": "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };

  //the main function, where the en/decoded message is returned
  function polybius(input, encode = true) {
    try {
      //if there is no input message, throw an error to the user
      if (!input)
        throw new ReferenceError(
          "Coded or otherwise, you must input a message for the program to work."
        );

      //if the value of the encode parameter is true, run the following
      if (encode) {
        const encodeInput = input
          .toLowerCase() //convert the input into a lowercase string
          .split(" ") //split the input message into individual words, if need be; preserving the spaces in the message
          .map((word) => encodeMessage(word, charMap)) //map each word in the array to its encoded state, through the 'encodeMessage' function
          .join(" "); //join the newly encoded message, preserving the spaces
        return encodeInput; //return the final encoded message
      }

      //if the value of the encode parameter is false, run the following
      if (!encode) {
        const decodeInput = input
          .split(" ") //split the input message into individually encoded "words", if need be; preserving the spaces in the message
          .map((numbers) => decodeMessage(numbers, charMap)) //map each "word" in the array to its decoded state, through the 'decodeMessage' function
          .join(" "); //join the newly decoded message, preserving the spaces
        return decodeInput; //return the final decoded message
      }
    } catch (error) {
      //if any of the above statements throws an error, this will catch it
      console.error(`${error}`); //show the error message to the user
      return false; //stop the function
    }
  }

  //encode the message using the charMap object as the key
  function encodeMessage(input, charMap) {
    const encodeInput = input
      .split("") //split the input word into an array of its individual letters
      //using the 'charMap' object, map each letter to its cooresponding value
      .map((input) => {
        if (input === "i" || input === "j") input = "(i/j)"; //any instance of "i" or "j" will be treated as "(i/j)"
        return charMap[input]; //return the value of the input letter, in the 'charMap' object
      })
      .join(""); //join the array of values to a single string
    return encodeInput; //return this portion of the encoded message
  }

  //decode the message from a string of numbers, using the charMap object as the key
  function decodeMessage(input, charMap) {
    //if the total length of the encoded input string isn't an even number, it cannot be worked with, throw an error
    if (input.length % 2 !== 0)
      throw new ReferenceError(
        "The input message contains an odd number of characters.\nPlease restart with the correct message."
      );

    const decode = input.match(/[\S]{1,2}/g); //separate the input into an array of 2 digit elements
    //map the newly separated input to thier complete entries, using the 'targetNumber' variable to represent each index of 'decode'
    const keyValuePairs = decode.map((targetNumber) => {
      //if the value of the number in the 'charMap' entries array is equal to the input 'targetNumber', return the whole entry
      return Object.entries(charMap).find(([letter, num]) => {
        return (num == targetNumber)
      });
    });
    
    const alphabetize = keyValuePairs
      .join("") //join the array of matching entries into a string
      .match(/[a-z\(/)]/g) //remove all characters & symbols in the string unless they are phonetic letters or "(/)"
      .join(""); //join the newly cleaned array of the decoded message into a string
    return alphabetize; //return this portioin of the decoded message
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
